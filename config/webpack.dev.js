const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
   mode: 'development',
   devServer: {
      hot: true,
      open: true,
      historyApiFallback: true,
   },
   devtool: 'eval-source-map',
   plugins: [new ReactRefreshWebpackPlugin()],
}
