const uglify = require('rollup-plugin-uglify').uglify
const pkg = require('./package.json')
const flow = require('rollup-plugin-flow')

const banner = '//  JS-Utils v' + pkg.version + '\n'
  + '//  https://github.com/gusbueno/js-utils\n'
  + '//  (c) 2018-' + new Date().getFullYear() + ' Gustavo Bueno\n'
  + '//  JS-Utils may be freely distributed under the MIT license.\n'

  const config = {
    input: 'source/index.js',
    output: {
      format: 'umd',
      name: 'JSUtils',
      exports: 'named',
      banner: banner
    },
    plugins: [
      flow()
    ]
  }
  
  if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
      uglify({
        compress: {
          pure_getters: true,
          unsafe: true,
          unsafe_comps: true,
        },
        warnings: false
      })
    )
  }
  
  module.exports = config
