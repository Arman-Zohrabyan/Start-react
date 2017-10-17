module.exports = {
  entry: './src/index.js',
  output: {
    filename: './server/public/js/app.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  },
  watch: true
};
