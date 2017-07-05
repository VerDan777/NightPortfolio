'use stricts'

module.exports = function() {
    $.gulp.task('copyFonts',function() {

        return $.gulp.src($.config.src + '/font/*.*')
        .pipe($.gulp.dest($.config.root + '/fonts/'))
   
    });
};