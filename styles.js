    'use strict'

    module.exports = function() {
        
        $.gulp.task('sass',function() {
            return $.gulp.src($.config.src + '/sass/**/*.scss')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.sass()).on('error',$.gp.notify.onError({title:'Styles'}))
            .pipe($.gp.autoprefixer({browsers: $.config.autoprefixerConfig }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest($.config.root +'/css/'))
            .pipe($.browserSync.stream())
            
            }) 
    }