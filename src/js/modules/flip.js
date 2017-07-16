class Flip  {
    constructor() {
        this.flip_container = $('.flip-container');
        this.flipper = $('.flipper');
        this.events();
    }
    events() {
     $( ".flip-container" ).on( "click", function() {
        $( this ).hover(()=> {
            
        });
    });
        // $('.flipper').click(function() {
        //     // this.css(':hover','transform: rotateY(180deg);');
        // })
    }  
}
export default Flip;