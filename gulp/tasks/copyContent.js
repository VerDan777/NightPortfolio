'use strict'

module.exports = function() {

    $.gulp.task('copyContent',function() {
      return  $.gulp.src($.config.src + '/content/*.json')
      .pipe($.gulp.dest('content/'))
    })
}