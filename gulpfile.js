'use strict'

global.$ = {
    package:require('./package.json'),
    config: require('./gulp/config'),

    path: {
        task:require('./gulp/path/tasks.js'),
        app: require('./gulp/path/app.js')
    },
    gulp:require('gulp'),
    del:require('del'),
    fs:require('fs'),
    browserSync:require('browser-sync').create(),
    gp:require('gulp-load-plugins')()
};


  $.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default',$.gulp.series(
    'clean',
    $.gulp.parallel(
        'sass',
        'pug',
        'js',
        'copyImg',
        'sprite:svg',
        'copyFonts',
        'copyContent'
        
    ),
    $.gulp.parallel(
        'watch',
        'serve'
    )  
))