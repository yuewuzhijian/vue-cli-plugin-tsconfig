# vue-cli-plugin-tsconfig

一个配置typescript配置文件路径的vue-cli插件。

## 安装

```
npm install vue-cli-plugin-tsconfig -D
```

## 动机

当你在一个项目中使用多种构建工具时，比如同时使用`vue-cli`和`vite`时，可能会对不同的构建工具使用不同的typescript配置文件。

这个插件就是为此而生的！

## 用法

```js
// vue.config.js
module.exports = {
  /* ... */
  pluginOptions: [
    tsconfig: {
      /* ...options... */
    }
  ],
}
```

## 选项

| 属性名        | 值                                         | 描述                |
|------------|-------------------------------------------|-------------------|
| configFile | String (default: "tsconfig.webpack.json") | typescript配置文件的路径 |

## 相关

- [vue-cli-plugin-import-meta](https://github.com/yuewuzhijian/vue-cli-plugin-import-meta)
- [vue-cli-plugin-env-enhance](https://github.com/yuewuzhijian/vue-cli-plugin-env-enhance)
