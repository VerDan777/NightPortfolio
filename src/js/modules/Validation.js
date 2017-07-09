import $ from 'jquery';
import Validator from 'jquery-validation';

class Validation {
    constructor() {
        this.form = $('.form-application');
        this.name = $('#name');
        this.email = $('#email');
        this.message = $('#message');
       
        this.Validation();
    }
    Validation() {
        this.form.validate({
            errorPlacement:function(error,element) {
                error.appendTo(element.parent('.form-application__input'))
            },
            rules: {
                name:"required",
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlenght: 1
                },
               
            },
            messages: {
                name: "Please enter your name",
                email: "Please enter your email",
                messages: {
                    required: "Please enter your message",
                    minlenght: "Please write your message"
                },
               
            },
            submitHandler: function(form){
                form.submit();
            }
        })
    }
}
export default Validation;