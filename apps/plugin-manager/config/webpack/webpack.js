const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies } = require('../../../../package.json');
const nrwlConfig = require('@nrwl/react/plugins/webpack.js');

module.exports = (config, context) => {
  nrwlConfig(config);
  return {
    ...config,
    output: {
      ...config.output,
      uniqueName: 'plugin-manager',
      publicPath: 'auto',
    },
    optimization: {
      ...config.optimization,
      runtimeChunk: false,
    },
    plugins: [
      ...config.plugins,
      new ModuleFederationPlugin({
        name: 'plugin-manager',
        filename: 'plugin-manager.js',
        remotes: {
          header: 'header@http://localhost:5001/remoteEntry.js',
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
  };
};
