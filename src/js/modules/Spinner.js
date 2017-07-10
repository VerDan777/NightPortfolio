import  $ from 'jquery';

class Spinner  {
    constructor() {

        this.spinner = $('.spinner');
        this.events();
    }
    events() {
   $(window).on('load',function() {
    var preloader = $('.spinner');
    var spinner = preloader.find('.spinner__img');
    spinner.fadeOut();
    preloader.delay(650).fadeOut('slow');   
   });

};
};
export default Spinner;
