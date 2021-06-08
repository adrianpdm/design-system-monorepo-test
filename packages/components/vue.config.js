const path = require('path')

module.exports = {
  devServer: {
    contentBase: [
      path.join(__dirname, 'playground-vue/public'),
    ]
  },
  pages: {
    index: {
      entry: 'playground-vue/main.js',
      template: 'playground-vue/public/app.html',
      filename: 'index.html',
      title: 'Design System Vue Playground',
    }
  },
  css: {
    extract: true,
  },
  outputDir: 'app-bundle',
  configureWebpack: {
    resolve: {
      alias: {
        '@jabardigitalservice/jds-design-system': path.resolve(__dirname, 'dist')
      }
    },
    module: {
      rules: [
        {
          test: /\.sass$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
            // {
              // loader: '',
              // options: {
              //   indentedSyntax: false,
              //   // sass-loader version >= 8
              //   sassOptions: {
              //     indentedSyntax: false
              //   }
              // }
            // }
          ]
        }
      ]
    }
  }
}
