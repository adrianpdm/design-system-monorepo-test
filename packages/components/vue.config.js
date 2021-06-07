const path = require('path')

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'playground-vue/public')
  },
  pages: {
    index: {
      entry: 'playground-vue/main.js',
      template: 'playground-vue/public/app.html',
      filename: 'index.html',
      title: 'Design System Vue Playground',
    }
  },
  outputDir: 'app-bundle',
}
