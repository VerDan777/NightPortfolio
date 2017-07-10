import $ from 'jquery';

class Sidebar {
    constructor() {
        this.buttonSidebar = $('#sidebar-toogle');
        this.sidebar = $('.about__menu');
        this.events();
        // this.toggleTheMenu();
    }
    events() {
  
  $(this.buttonSidebar).click(function() {

    $('.about__menu').animate({
      left:'0px'
    },200);
    $('body').animate({
      left:'285px'
    },200);

    // var toggle_el = $(this).data("toggle");
    // $(toggle_el).toggleClass("about__menu--open");
  });
    }
 
    
}
export default Sidebar;