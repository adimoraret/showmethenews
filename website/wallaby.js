module.exports = function (wallaby) {
  return {
    files: [
      'src/ui/**/*.js',
      'src/helper/**/*.js',
    ],

    tests: [
      'test/**/*.spec.js'
    ],

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        presets: ['@babel/preset-env']
      }),
    },

    env: {
      type: 'node',
      runner: 'node'
    }
  }
}