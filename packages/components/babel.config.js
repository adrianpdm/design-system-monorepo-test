module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  env: {
    build_esm: {
      presets: [
        ['@babel/preset-env', {
          targets: {
            esmodules: true,
          },
          modules: false,
        }],
      ],
    }
  }
}
