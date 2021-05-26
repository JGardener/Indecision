// webpack.js.org

const path = require('path');

module.exports = {
  // Entry to the app. 
  entry: './src/app.js',
  // Output the final bundled file
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
}

