const terser = require('rollup-plugin-terser').terser

const pkg = require('./package.json')

const banner = '//  JS-Utils v' + pkg.version + '\n'
  + '//  https://github.com/gusbueno/js-utils\n'
  + '//  (c) 2018-' + new Date().getFullYear() + ' Gustavo Bueno\n'
  + '//  JS-Utils may be freely distributed under the MIT license.\n'

  const config = {
    input: 'es/index.js',
    output: {
      format: 'umd',
      name: 'JSUtils',
      exports: 'named',
      banner: banner
    },
    plugins: []
  }
  
  if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
      terser()
    )
  }
  
  module.exports = config
