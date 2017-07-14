
class Validation {
    constructor() {
        this.form = $('.form-application');
        this.name = $('#name');
        this.email = $('#email');
        this.message = $('#message');
        this.okButton = $('#order-popup .order-popup__button');
        this.clearButton = $('button .button--transparent');
        this.SubmitButton = $('button.button--form');
        this.setupPopup();
        this.Validation();
        this.clearText();
    }
        setupPopup() {

        this.okButton.on('click', function(event) {
            this.hidePopup();
            event.preventDefault();
        });
        this.SubmitButton.on('click','form-application button[type=submit]',function(event) {
            var isValid = $(event.target).parents('.form-application').isValid();
            if(!isValid) {
                event.preventDefault();
            }
            
        })
    }

    showPopup() {
        let $orderPopup = $('#order-popup');
        let $orderPopupContent = $('#order-popup .order-popup__content');
        $orderPopup.addClass('order-popup--shown');
        $orderPopupContent.addClass('order-popup__content--shown');
    }

    hidePopup() {
        let $orderPopup = $('#order-popup');
        let $orderPopupContent = $('#order-popup .order-popup__content');
        $orderPopup.removeClass('order-popup--shown');
        $orderPopupContent.removeClass('order-popup__content--shown');
    }
    Validation() {
        this.form.validate({
            errorPlacement:function(error,element) {
                error.appendTo(element.parent('.form-application__input'))
                error.appendTo(element.parent('.form-application__textarea'))
            },
            rules: {
                name:'required',
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
                name: 'Please enter your name',
                email: 'Please enter your email',
                messages: {
                    required: 'Please enter your message',
                    minlenght: 'Please write your message'
                },  
               
            },
            submitHandler: function(form){
                this.parseForm();
            }
        })
    }
    parseForm() {
        this.showPopup();
        let info = {
            name:this.form.find('input[type="name"]').val(),
            email: this.form.find('input[type="name"]').val(),
            message: this.form.find('#message').val()
        }
            let $fullOrder = $(`
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:0; padding:0; background-color: #e0ddd9; padding: 20px; font-family: Arial, sans-serif;">
      <tr>
        <td height="100%">
          <table border="0" cellpadding="0" cellspacing="0" style="margin:0 auto; padding:0;">
            <tr>
              <td id="table-container" style="background-color: #f1f1f1; max-width:600px; margin: 0 auto; padding: 20px; border-radius: 5px;">
                <h1>Заявка на сотрудничество</h1>
                <table border="0" cellpadding="0" cellspacing="0" style="margin:0; padding:0; width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">Имя</td>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">${info.name}</td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #999999; padding: 5px 10px;">Электронная почта</td>
                    <td style="border: 1px solid #999999; padding: 5px 10px;"><a href="mailto:${info.email}">${info.email}</a></td>
                  </tr>
                  <tr>
                  <td style="border: 1px solid #999999; padding: 5px 10px;">Message</td>
                  <td style="border: 1px solid #999999; padding 5px 10px;">${info.message}</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    `);
      let dataToSend = {
            'subject': "Заявка на разработку",
            'content': $fullOrder.html()
        };
        $.ajax({
            type: 'POST',
            url: 'vereshhagin98@mail.ru',
            data: dataToSend,
            success: onSuccess,
            error: onError
        });

        function onSuccess() {
            $('#order-popup .order-popup__title').html('Спасибо за заявку');
            $('#order-popup .order-popup__button').show();
            this.orderForm[0].reset();
        }

        function onError() {
            $('#order-popup .order-popup__title').text('Ошибка отправки. Проверьте соединение или попробуйте позже.');
            $('#order-popup .order-popup__button').show();
            setTimeout(this.hidePopup, 2000);
        }

    }
    clearText() {
        this.clearButton.on('click',function(){
            this.name.value= '';
            this.email.value= '';
            this.message.value= '';
        })
    }
     
}
export default Validation;