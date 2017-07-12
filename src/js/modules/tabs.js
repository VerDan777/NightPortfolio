// import $ from 'jquery';

class Tabs {
    constructor() {
    
       $('.tabs__list:first-child').addClass('active');
        this.tabitem  = $('.tabs__item'); 
        this.tabs = $('.tabs__content').hide();
        $('.tabs__content:first').show();
        this.events();
    }
    events() {
    $('.tabs__list li').click(function(){
    $('.tabs__list li').removeClass('active');
    $(this).addClass('active');
    $('.tabs-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });
   
    }
}
export default Tabs;
