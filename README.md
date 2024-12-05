# vue-cli-plugin-tsconfig

A vue-cli plugin to configure the path of typescript configuration file.

## Translations

This README is also available in other languages:

- [简体中文](https://github.com/yuewuzhijian/vue-cli-plugin-tsconfig/blob/main/README.zh-CN.md) (Chinese)

## Install

```
npm install vue-cli-plugin-tsconfig -D
```

## Motivation
When you use multiple build tools in a project, such as both `vue-cli` and `vite`, you may use different typescript configuration file for different build tools.

This plugin is made for that!

## Usage

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

## Options

| name       | value                                     | description                               |
|------------|-------------------------------------------|-------------------------------------------|
| configFile | String (default: "tsconfig.webpack.json") | The path of typescript configuration file |

## Related

- [vue-cli-plugin-import-meta](https://github.com/yuewuzhijian/vue-cli-plugin-import-meta)
- [vue-cli-plugin-env-enhance](https://github.com/yuewuzhijian/vue-cli-plugin-env-enhance)
