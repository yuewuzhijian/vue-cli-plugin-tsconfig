import type { ServicePlugin } from '@vue/cli-service'

const pluginName = 'tsconfig'

const tsconfigPlugin: ServicePlugin = function (api, options) {
  const pluginOptions = (options.pluginOptions ?? {}) as any
  const config = pluginOptions[pluginName]
  const configFile = config?.configFile || 'tsconfig.webpack.json'

  api.chainWebpack(config => {
    const ts = config.module.rules.get('ts')
    const tsx = config.module.rules.get('tsx')
    const forkTsChecker = config.plugins.get('fork-ts-checker')

    if (ts) {
      ts.use('ts-loader').tap(options => {
        options.configFile = configFile
        return options
      })
    }

    if (tsx) {
      tsx.use('ts-loader').tap(options => {
        options.configFile = configFile
        return options
      })
    }

    if (forkTsChecker) {
      forkTsChecker.tap(args => {
        args[0].typescript.configFile = configFile
        return args
      })
    }
  })
}

export default tsconfigPlugin
