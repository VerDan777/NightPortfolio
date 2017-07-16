 class Validation {
     constructor(){
        this.events();
        // this.ValidateContact();
    }
    events() {
        $('#button').click(()=> {
             var valid = true;	
        $(".form-application__input").css('background-color','');
        $(".info").html('');
        if(!$("#name").val()) {
            $("#name-info").html("(required)").css('color','red');
            $("#name").css('background-color','#FFFFDF');
            valid = false;
        }
        if(!$("#email").val()) {
            $("#email-info").html("(required)").css('color','red');
            $("#email").css('background-color','#FFFFDF');
            valid = false;
        }
        if(!$("#email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
            $("#email-info").html("(invalid)").css('color','red');
            $("#email").css('background-color','#FFFFDF');
            valid = false;
        }
        if(!$("#message").val()) {
            $("#message-info").html("(required)").css('color','red');
            $("#message").css('background-color','#FFFFDF');
            valid = false;
        }
    return valid;
            if(valid) {
            $.ajax()({
                url: 'http://localhost:3000/mail.php',
                data:'name='+$('#name').val()+'&email='+$('#email').val()+'&message='+$('#message').val(),
                type: "POST",
                success: (data)=> {
                    $("#mail-status").html(data);
                },
                error: ()=> {}
            });
        }
        })
    }
}
export default Validation;