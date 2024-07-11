const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'large_files'),
          to: path.resolve(__dirname, 'dist/large_files'),
        },
      ],
    }),
  ],
  performance: {
    hints: false,
    maxEntrypointSize: 8000000000,
    maxAssetSize: 8000000000
  }
};

