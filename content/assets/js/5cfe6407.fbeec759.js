"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[7581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var c=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,c,o=function(e,t){if(null==e)return{};var n,c,o={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=c.createContext({}),l=function(e){var t=c.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return c.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return c.createElement(c.Fragment,{},t)}},d=c.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),d=o,m=u["".concat(s,".").concat(d)]||u[d]||k[d]||r;return n?c.createElement(m,a(a({ref:t},p),{},{components:n})):c.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<r;l++)a[l]=n[l];return c.createElement.apply(null,a)}return c.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var c=n(87462),o=(n(67294),n(3905));const r={},a="RocketMQ Connect in Action 5",i={unversionedId:"connect/08RocketMQ  Connect In Action5-ES",id:"connect/08RocketMQ  Connect In Action5-ES",title:"RocketMQ Connect in Action 5",description:"Elsticsearch Source  -  >RocketMQ Connect  ->  Elasticsearch Sink",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/10-connect/08RocketMQ  Connect In Action5-ES.md",sourceDirName:"10-connect",slug:"/connect/08RocketMQ  Connect In Action5-ES",permalink:"/docs/4.x/connect/08RocketMQ  Connect In Action5-ES",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/10-connect/08RocketMQ  Connect In Action5-ES.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"RocketMQ Connect in Action 4",permalink:"/docs/4.x/connect/07RocketMQ Connect In Action4"},next:{title:"How to Contribute",permalink:"/docs/4.x/contributionGuide/01how-to-contribute"}},s={},l=[{value:"preparatory work",id:"preparatory-work",level:2},{value:"Start RocketMQ",id:"start-rocketmq",level:3},{value:"Start Connect",id:"start-connect",level:3},{value:"Connector plugin compilation",id:"connector-plugin-compilation",level:4},{value:"Start Connect Runtime",id:"start-connect-runtime",level:4},{value:"Elasticsearch Image",id:"elasticsearch-image",level:3},{value:"Kibana Image",id:"kibana-image",level:3},{value:"test data",id:"test-data",level:3},{value:"Start Connector",id:"start-connector",level:2},{value:"Start Elasticsearch source connector",id:"start-elasticsearch-source-connector",level:3},{value:"Start Elasticsearch sink connector",id:"start-elasticsearch-sink-connector",level:3}],p={toc:l},u="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,c.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rocketmq-connect-in-action-5"},"RocketMQ Connect in Action 5"),(0,o.kt)("p",null,"Elsticsearch Source  -  >RocketMQ Connect  ->  Elasticsearch Sink"),(0,o.kt)("h2",{id:"preparatory-work"},"preparatory work"),(0,o.kt)("h3",{id:"start-rocketmq"},"Start RocketMQ"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Linux/Unix/Mac"),(0,o.kt)("li",{parentName:"ol"},"64bit JDK 1.8+;"),(0,o.kt)("li",{parentName:"ol"},"Maven 3.2.x or later;"),(0,o.kt)("li",{parentName:"ol"},"Start ",(0,o.kt)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/quick-start/"},"RocketMQ"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"tips")," : ${ROCKETMQ_HOME} Position Description"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"bin-release.zip version\uff1a/rocketmq-all-4.9.4-bin-release"),(0,o.kt)("p",{parentName:"blockquote"},"source-release.zip versioon\uff1a/rocketmq-all-4.9.4-source-release/distribution")),(0,o.kt)("h3",{id:"start-connect"},"Start Connect"),(0,o.kt)("h4",{id:"connector-plugin-compilation"},"Connector plugin compilation"),(0,o.kt)("p",null,"Elasticsearch RocketMQ Connector"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cd rocketmq-connect/connectors/rocketmq-connect-elasticsearch/\n$ mvn clean package -Dmaven.test.skip=true\n")),(0,o.kt)("p",null,"Move the compiled Elasticsearch RocketMQ Connector package into the Runtime load directory. The command is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir -p /usr/local/connector-plugins\ncp rocketmq-connect-elasticsearch/target/rocketmq-connect-elasticsearch-1.0.0-jar-with-dependencies.jar /usr/local/connector-plugins\n")),(0,o.kt)("h4",{id:"start-connect-runtime"},"Start Connect Runtime"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd  rocketmq-connect\n\nmvn -Prelease-connect -DskipTests clean install -U\n\n")),(0,o.kt)("p",null,"Update ",(0,o.kt)("inlineCode",{parentName:"p"},"connect-standalone.conf")," \uff0cKey configurations are as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cd distribution/target/rocketmq-connect-0.0.1-SNAPSHOT/rocketmq-connect-0.0.1-SNAPSHOT\n$ vim conf/connect-standalone.conf\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'workerId=standalone-worker\nstorePathRootDir=/tmp/storeRoot\n\n## Http port for user to access REST API\nhttpPort=8082\n\n# Rocketmq namesrvAddr\nnamesrvAddr=localhost:9876\n\n# RocketMQ acl\naclEnable=false\naccessKey=rocketmq\nsecretKey=12345678\n\nautoCreateGroupEnable=false\nclusterName="DefaultCluster"\n\n# Core configuration where the plugin directory where you compiled the elasticsearch package is located\n# Source or sink connector jar file dir,The default value is rocketmq-connect-sample\npluginPaths=/usr/local/connector-plugins\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd distribution/target/rocketmq-connect-0.0.1-SNAPSHOT/rocketmq-connect-0.0.1-SNAPSHOT\n\nsh bin/connect-standalone.sh -c conf/connect-standalone.conf &\n\n")),(0,o.kt)("h3",{id:"elasticsearch-image"},"Elasticsearch Image"),(0,o.kt)("p",null,"Use docker to build the Elasticsearch database"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# starting a elasticsearch instance\ndocker run --name my-elasticsearch -p 9200:9200 -p 9300:9300 -e  "ES_JAVA_OPTS=-Xms1g -Xmx1g"  -d 74c2e0ec249c\n')),(0,o.kt)("h3",{id:"kibana-image"},"Kibana Image"),(0,o.kt)("p",null,"Use docker to build the Kibana environment"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run --name my-kibana -e ELASTICSEARCH_URL=http://192.168.0.101:9200 -p 5601:5601 -d 5dca66b41943\n")),(0,o.kt)("h3",{id:"test-data"},"test data"),(0,o.kt)("p",null,"Create test data with kibana Dev Tools: reference ",(0,o.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/kibana/8.5/console-kibana.html#console-kibana"},"console-ibana"),";"),(0,o.kt)("p",null,"Source Index\uff1aconnect_es"),(0,o.kt)("h2",{id:"start-connector"},"Start Connector"),(0,o.kt)("h3",{id:"start-elasticsearch-source-connector"},"Start Elasticsearch source connector"),(0,o.kt)("p",null,"Synchronizing source index data: connect_es\neffect\uff1aSend a RocketMQ Topic by parsing Elasticsearch document data and wrapping it into a generic ConnectRecord object"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -X POST -H "Content-Type: application/json" http://127.0.0.1:8082/connectors/elasticsearchSourceConnector -d  \'{\n  "connector.class":"org.apache.rocketmq.connect.elasticsearch.connector.ElasticsearchSourceConnector",\n    "elasticsearchHost":"localhost",\n    "elasticsearchPort":9200,\n    "index":{\n        "connect_es": {\n            "primaryShards":1,\n            "id":1\n        }\n    },\n    "max.tasks":2,\n    "connect.topicname":"ConnectEsTopic",\n    "value.converter":"org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter",\n    "key.converter":"org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter"\n}\'\n')),(0,o.kt)("h3",{id:"start-elasticsearch-sink-connector"},"Start Elasticsearch sink connector"),(0,o.kt)("p",null,"effect\uff1aData is written to the target index by consuming the Topic"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -X POST -H "Content-Type: application/json" http://127.0.0.1:8082/connectors/ElasticsearchSinkConnector -d \'{\n  "connector.class":"org.apache.rocketmq.connect.elasticsearch.connector.ElasticsearchSinkConnector",\n    "elasticsearchHost":"localhost",\n    "elasticsearchPort":9202,\n    "max.tasks":2,\n    "connect.topicnames":"ConnectEsTopic",\n    "value.converter":"org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter",\n    "key.converter":"org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter"\n}\'\n\n')),(0,o.kt)("p",null,"note\uff1aLocal testing requires you to start the Elasticsearch process on two different ports"),(0,o.kt)("p",null,"After the two Connector tasks are successfully created Whether the Elasticsearch specified by accessing sink contains data"),(0,o.kt)("p",null,"New data added to the source index can be synchronized to the target index"))}k.isMDXComponent=!0}}]);