"use strict";module.exports=function(e,t){const s=(t.pluginOptions??{}).tsconfig,o=s?.configFile||"tsconfig.webpack.json";e.chainWebpack((e=>{const t=e.module.rules.get("ts"),s=e.module.rules.get("tsx"),i=e.plugins.get("fork-ts-checker");t&&t.use("ts-loader").tap((e=>(e.configFile=o,e))),s&&s.use("ts-loader").tap((e=>(e.configFile=o,e))),i&&i.tap((e=>(e[0].typescript.configFile=o,e)))}))};