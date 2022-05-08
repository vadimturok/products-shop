const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
   entry: path.resolve(__dirname, '../src/index.tsx'),
   resolve: {
      extensions: ['.tsx', '.ts', '.js'],
   },
   module: {
      rules: [
         /* for .ts, .tsx file types */
         {
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            use: [
               {
                  loader: 'babel-loader',
               },
            ],
         },
         /* for styles: css, scss */
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
         /* for images */
         {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
         },
         /* for fonts */
         {
            test: /\.(woof(2)?|eot|ttf|otf|svg|)$/,
            type: 'asset/inline',
         },
      ],
   },
   output: {
      path: path.resolve(__dirname, '../build'),
      filename: 'bundle.js',
      clean: true,
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, '../src/index.html'),
      }),
   ],
}
