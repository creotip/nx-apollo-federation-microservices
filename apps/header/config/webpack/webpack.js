const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const { dependencies } = require('../../../../package.json')
const nrwlConfig = require('@nrwl/react/plugins/webpack.js')

module.exports = (config, context) => {
  nrwlConfig(config)
  config.context = process.cwd()
  return {
    ...config,
    output: {
      ...config.output,
      uniqueName: 'header',
      publicPath: 'auto',
    },
    optimization: {
      ...config.optimization,
      runtimeChunk: false,
    },
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'header',
        filename: 'remoteEntry.js',
        exposes: {
          './Header': 'apps/header/src/app/Header.tsx',
        },
        shared: {
          ...dependencies,
          react: { singleton: true, requiredVersion: dependencies.react },
          'react-dom': {
            singleton: true,
            requiredVersion: dependencies['react-dom'],
          },
        },
      }),
    ],
  }
}
