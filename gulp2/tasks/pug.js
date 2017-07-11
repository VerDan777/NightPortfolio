'use strict';

const fs = require('fs');

module.exports = function() {
  $.gulp.task('pug', function() {
    return $.gulp.src('./src/*.pug')
      .pipe($.gp.pug ({ 
        
        pretty: true,
        // locals: {
        //   content:JSON.parse(fs.readFileSync('../../content/content.json','utf8'))
        // }
       }))
      .on('error', $.gp.notify.onError(function(error) {
    return {
        title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest('./dist/'));
  });
};