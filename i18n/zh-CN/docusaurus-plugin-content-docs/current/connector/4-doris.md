---
id: 'Doris-Connector'
title: 'Apache Doris Connector'
original: true
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

[Apache Doris](https://doris.apache.org/) 是一款基于大规模并行处理技术的分布式 SQL 数据库，主要面向 OLAP 场景。
Apache StreamPark 基于 Doris 的 [stream load](https://doris.apache.org/administrator-guide/load-data/stream-load-manual.html) 封装了 DoirsSink 用于向 Doris 实时写入数据。

### Apache StreamPark™ 方式写入

目前 DorisSink 只支持 JSON 格式（单层）写入，如 `{"id":1,"name":"streampark"}`。

示例程序是 Java 程序，具体如下。

#### 配置信息

```yaml
doris.sink:
  fenodes:  127.0.0.1:8030    # doris fe http 请求地址
  database: test              # doris database
  table: test_tbl             # doris table
  user: root
  password: 123456
  batchSize: 100         # doris sink 每次 streamload 的批次大小
  intervalMs: 3000       # doris sink 每次 streamload 的时间间隔
  maxRetries: 1          # stream load 的重试次数
  streamLoad:            # doris streamload 自身的参数
    format: json
    strip_outer_array: true
    max_filter_ratio: 1
```

#### 写入 Doris

<Tabs>
<TabItem value="Java" label="Java">

```java
package org.apache.streampark.test.flink.java.datastream;

import org.apache.streampark.flink.core.StreamEnvConfig;
import org.apache.streampark.flink.core.java.sink.doris.DorisSink;
import org.apache.streampark.flink.core.java.source.KafkaSource;
import org.apache.streampark.flink.core.scala.StreamingContext;
import org.apache.streampark.flink.core.scala.source.KafkaRecord;
import org.apache.flink.api.common.functions.MapFunction;
import org.apache.flink.streaming.api.datastream.DataStream;

public class DorisJavaApp {

    public static void main(String[] args) {
        StreamEnvConfig envConfig = new StreamEnvConfig(args, null);
        StreamingContext context = new StreamingContext(envConfig);
        DataStream<String> source = new KafkaSource<String>(context)
            .getDataStream()
            .map((MapFunction<KafkaRecord<String>, String>) KafkaRecord::value)
            .returns(String.class);

        new DorisSink<String>(context).sink(source);

        context.start();
    }
}

```
</TabItem>
</Tabs>

:::tip 提示

建议设置 batchSize 来批量插入数据提高性能,同时为了提高实时性，支持间隔时间 intervalMs 来批次写入<br></br>
可以通过设置 maxRetries 来增加streamload的重试次数。

:::
