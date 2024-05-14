"use strict";(self.webpackChunkapache_streampark_website=self.webpackChunkapache_streampark_website||[]).push([[21],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},19365:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:n},t)}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(58168),r=n(96540),o=n(20053),i=n(23104),s=n(56347),c=n(57485),l=n(31682),u=n(89466);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,l.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[c,l]=m({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=c??d;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{y&&s(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),l(e),f(e)}),[l,f,o]),tabValues:o}}var y=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:c,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.a_)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=l[n].value;a!==s&&(d(t),c(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:h,onClick:p},i,{className:(0,o.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,o.A)("tabs-container",g.tabList)},r.createElement(b,(0,a.A)({},e,t)),r.createElement(k,(0,a.A)({},e,t)))}function w(e){const t=(0,y.A)();return r.createElement(v,(0,a.A)({key:String(t)},e))}},3988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var a=n(58168),r=(n(96540),n(15680)),o=n(11470),i=n(19365);const s={id:"Clickhouse-Connector",title:"ClickHouse Connector",original:!0,sidebar_position:3},c=void 0,l={unversionedId:"connector/Clickhouse-Connector",id:"connector/Clickhouse-Connector",title:"ClickHouse Connector",description:"ClickHouse is a columnar database management system (DBMS) for online analytics (OLAP).",source:"@site/docs/connector/3-clickhouse.md",sourceDirName:"connector",slug:"/connector/Clickhouse-Connector",permalink:"/docs/connector/Clickhouse-Connector",draft:!1,editUrl:"https://github.com/apache/incubator-streampark-website/edit/dev/docs/connector/3-clickhouse.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"Clickhouse-Connector",title:"ClickHouse Connector",original:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"JDBC Connector",permalink:"/docs/connector/Jdbc-Connector"},next:{title:"Apache Doris Connector",permalink:"/docs/connector/Doris-Connector"}},u={},d=[{value:"JDBC synchronous write",id:"jdbc-synchronous-write",level:2},{value:"Write in the normal way",id:"write-in-the-normal-way",level:3},{value:"Write with Apache StreamPark\u2122",id:"write-with-apache-streampark",level:3},{value:"configuration list",id:"configuration-list",level:4},{value:"Write to ClickHouse",id:"write-to-clickhouse",level:4},{value:"HTTP async write",id:"http-async-write",level:2},{value:"Write in the normal way",id:"write-in-the-normal-way-1",level:3},{value:"Write to ClickHouse",id:"write-to-clickhouse-1",level:3},{value:"Asynchronous write configuration and failure recovery component configuration",id:"asynchronous-write-configuration-and-failure-recovery-component-configuration",level:4},{value:"Write to clickhouse",id:"write-to-clickhouse-2",level:4},{value:"Other configuration",id:"other-configuration",level:2}],p={toc:d},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(h,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://clickhouse.com/"},"ClickHouse")," is a columnar database management system (DBMS) for online analytics (OLAP).\nCurrently, Apache Flink does not officially provide a connector for writing to ClickHouse and reading from ClickHouse.\nBased on the access form supported by ",(0,r.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/interfaces/http/"},"ClickHouse - HTTP client"),"\nand ",(0,r.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/interfaces/jdbc"},"JDBC driver"),", StreamPark encapsulates ClickHouseSink for writing data to ClickHouse in real-time."),(0,r.yg)("p",null,"ClickHouse writes do not support transactions, using JDBC write data to it could provide (AT_LEAST_ONCE) semanteme. Using the HTTP client to write asynchronously, it will retry the asynchronous write multiple times. The failed data will be written to external components (Apache Kafka, MySQL, Apache Hadoop HDFS, Apache HBase), the data will be restored manually to achieve final data consistency."),(0,r.yg)("h2",{id:"jdbc-synchronous-write"},"JDBC synchronous write"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://clickhouse.com/"},"ClickHouse"),"provides a ",(0,r.yg)("a",{parentName:"p",href:"https://clickhouse.com/docs/zh/interfaces/jdbc/"},"JDBC driver"),",JDBC driver package of ClickHouse need to be import first"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>ru.yandex.clickhouse</groupId>\n    <artifactId>clickhouse-jdbc</artifactId>\n    <version>0.3.1</version>\n</dependency>\n")),(0,r.yg)("h3",{id:"write-in-the-normal-way"},"Write in the normal way"),(0,r.yg)("p",null,"The conventional way to create a clickhouse jdbc connection:"),(0,r.yg)(i.A,{value:"Java",label:"Java",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},'import java.sql.Connection;\nimport java.sql.DriverManager;\nimport java.sql.SQLException;\n\npublic class ClickHouseUtil {\n    private static Connection connection;\n\n    public static Connection getConn(String host, int port, String database) throws SQLException, ClassNotFoundException {\n        Class.forName("ru.yandex.clickhouse.ClickHouseDriver");\n        String  address = "jdbc:clickhouse://" + host + ":" + port + "/" + database;\n        connection = DriverManager.getConnection(address);\n        return connection;\n    }\n\n    public static Connection getConn(String host, int port) throws SQLException, ClassNotFoundException {\n        return getConn(host,port,"default");\n    }\n    public static Connection getConn() throws SQLException, ClassNotFoundException {\n        return getConn("node-01",8123);\n    }\n    public void close() throws SQLException {\n        connection.close();\n    }\n}\n'))),(0,r.yg)("p",null,"The method of splicing various parameters into the request url is cumbersome and hard-coded, which is very inflexible."),(0,r.yg)("h3",{id:"write-with-apache-streampark"},"Write with Apache StreamPark\u2122"),(0,r.yg)("p",null,"To access ",(0,r.yg)("inlineCode",{parentName:"p"},"ClickHouse")," data with ",(0,r.yg)("inlineCode",{parentName:"p"},"StreamPark"),", you only need to define the configuration file in the specified format and then write code.\nThe configuration and code are as follows. The configuration of ",(0,r.yg)("inlineCode",{parentName:"p"},"ClickHose JDBC")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"StreamPark")," is in the configuration list, and the sample running program is scala"),(0,r.yg)("h4",{id:"configuration-list"},"configuration list"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"clickhouse:\n  sink:\n    jdbcUrl: jdbc:clickhouse://127.0.0.1:8123,192.168.1.2:8123\n    socketTimeout: 3000000\n    database: test\n    user: $user\n    password: $password\n    targetTable: orders(userId,siteId)\n    batch:\n      size: 1000\n      delaytime: 6000000\n")),(0,r.yg)("h4",{id:"write-to-clickhouse"},"Write to ClickHouse"),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Scala",label:"Scala",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import org.apache.streampark.flink.core.scala.FlinkStreaming\nimport org.apache.streampark.flink.core.scala.sink.ClickHouseSink\nimport org.apache.flink.api.scala._\n\nobject ClickHouseSinkApp extends FlinkStreaming {\n\n  override def handle(): Unit = {\n    val createTable =\n      """\n        |create TABLE test.orders(\n        |userId UInt16,\n        |orderId UInt16,\n        |siteId UInt8,\n        |cityId UInt8,\n        |orderStatus UInt8,\n        |price Float64,\n        |quantity UInt8,\n        |timestamp UInt16\n        |)ENGINE = TinyLog;\n        |""".stripMargin\n\n    val source = context.addSource(new TestSource)\n\n\n     ClickHouseSink().syncSink[TestEntity](source)(x => {\n         s"(${x.userId},${x.siteId})"\n     }).setParallelism(1)\n  }\n\n}\n\nclass Order(val marketId: String, val timestamp: String) extends Serializable\n')))),(0,r.yg)("admonition",{title:"hint",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"ClickHouse can support balanced writing of multiple nodes, you only need to configure writable nodes in JDBC URL\nSince ClickHouse has a relatively high delay for single insertion, it is recommended to set the batch.\nsize to insert data in batches to improve performance. At the same time, to improve real-time performance,\nit supports batch writing according to data volume or interval time.\nIn the implementation of ClickHouseSink, if the number of the last batch of data is less than BatchSize, the remaining data will be inserted when the connection is closed.")),(0,r.yg)("h2",{id:"http-async-write"},"HTTP async write"),(0,r.yg)("p",null,"In the case of a small amount of data, you can use JDBC to connect and write data. In actual production\uff0cis more using async HTTP to write data more efficiently and quickly."),(0,r.yg)("h3",{id:"write-in-the-normal-way-1"},"Write in the normal way"),(0,r.yg)("p",null,"Clickhouse INSERT must insert data through the POST method. The general operation is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ echo 'INSERT INTO t VALUES (1),(2),(3)' | curl 'http://localhost:8123/' --data-binary @-\n")),(0,r.yg)("p",null,"The operation of the above method is relatively simple. Sure java could also be used for writing. StreamPark adds many functions to the http post writing method,\nincluding encapsulation enhancement, adding cache, asynchronous writing, failure retry, and data backup after reaching the retry threshold\uff0c\nTo external components (Apache Kafka, MySQL, HDFS, Apache HBase), etc., the above functions only need to define the configuration file in the prescribed format,\nand write the code."),(0,r.yg)("h3",{id:"write-to-clickhouse-1"},"Write to ClickHouse"),(0,r.yg)("p",null,"The configuration of ",(0,r.yg)("inlineCode",{parentName:"p"},"ClickHose JDBC")," in ",(0,r.yg)("inlineCode",{parentName:"p"},"StreamPark")," is in the configuration list, and the sample running program is scala, as follows:\nasynchttpclient is used as an HTTP asynchronous client for writing. first, import the jar of asynchttpclient"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"\x3c!--clickhouse async need asynchttpclient --\x3e\n<dependency>\n    <groupId>org.asynchttpclient</groupId>\n    <artifactId>async-http-client</artifactId>\n    <optional>true</optional>\n</dependency>\n")),(0,r.yg)("h4",{id:"asynchronous-write-configuration-and-failure-recovery-component-configuration"},"Asynchronous write configuration and failure recovery component configuration"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"\nclickhouse:\n  sink:\n    hosts: 127.0.0.1:8123,192.168.1.2:8123\n    socketTimeout: 3000000\n    database: test\n    user: $user\n    password: $password\n    targetTable: test.orders(userId,siteId)\n    batch:\n      size: 1\n      delaytime: 60000\n    threshold:\n      bufferSize: 10\n      #      Concurrent number of asynchronous writes\n      numWriters: 4\n      #      cache queue size\n      queueCapacity: 100\n      delayTime: 10\n      requestTimeout: 600\n      retries: 1\n      #      success response code\n      successCode: 200\n    failover:\n      table: chfailover\n      #     After reaching the maximum number of failed writes, the components of the data backup\n      storage: kafka #kafka|mysql|hbase|hdfs\n      mysql:\n        driverClassName: com.mysql.cj.jdbc.Driver\n        jdbcUrl: jdbc:mysql://localhost:3306/test?useSSL=false&allowPublicKeyRetrieval=true\n        username: $user\n        password: $pass\n      kafka:\n        bootstrap.servers: localhost:9092\n        topic: test1\n        group.id: user_01\n        auto.offset.reset: latest\n      hbase:\n        zookeeper.quorum: localhost\n        zookeeper.property.clientPort: 2181\n      hdfs:\n        path: /data/chfailover\n        namenode: hdfs://localhost:8020\n        user: hdfs\n")),(0,r.yg)("h4",{id:"write-to-clickhouse-2"},"Write to clickhouse"),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(i.A,{value:"Scala",label:"Scala",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'\nimport org.apache.streampark.flink.core.scala.FlinkStreaming\nimport org.apache.streampark.flink.core.scala.sink.ClickHouseSink\nimport org.apache.flink.api.scala._\n\nobject ClickHouseSinkApp extends FlinkStreaming {\n\n  override def handle(): Unit = {\n    val createTable =\n      """\n        |create TABLE test.orders(\n        |userId UInt16,\n        |orderId UInt16,\n        |siteId UInt8,\n        |cityId UInt8,\n        |orderStatus UInt8,\n        |price Float64,\n        |quantity UInt8,\n        |timestamp UInt16\n        |)ENGINE = TinyLog;\n        |""".stripMargin\n\n    println(createTable)\n\n    val source = context.addSource(new TestSource)\n\n\n    // asynchronous write\n    ClickHouseSink().sink[TestEntity](source)(x => {\n      s"(${x.userId},${x.siteId})"\n    }).setParallelism(1)\n\n  }\n\n}\n\nclass Order(val marketId: String, val timestamp: String) extends Serializable\n')))),(0,r.yg)("admonition",{title:"warn",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Due to the high latency of single insertion of ClickHouse, partitions will be merged too frequently by the ClickHouse server,\nbecause of frequent writing of small data.It is recommended to use the asynchronous submission method and set a reasonable threshold to improve performance."),(0,r.yg)("p",{parentName:"admonition"},"Since ClickHouse will re-add data to the cache queue when asynchronous writing fails, it may cause the same window of data to be written in two batches.\nIt is recommended to fully test the stability of ClickHouse in scenarios with high real-time requirements."),(0,r.yg)("p",{parentName:"admonition"},"After the asynchronous write data reaches the maximum retry value, the data will be backed up to the external component,\nand the component connection will be initialized at this time. It is recommended to ensure the availability of the failover component.")),(0,r.yg)("h2",{id:"other-configuration"},"Other configuration"),(0,r.yg)("p",null,"All other configurations must comply with the ",(0,r.yg)("strong",{parentName:"p"},"ClickHouseDataSource")," connection pool configuration.\nFor specific configurable items and the role of each parameter, please refer to the ",(0,r.yg)("inlineCode",{parentName:"p"},"ClickHouse-JDBC")," ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/ClickHouse/clickhouse-jdbc"},"official website documentation"),"."))}m.isMDXComponent=!0}}]);