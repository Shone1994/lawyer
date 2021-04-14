

$(document).ready(function(){
    
    //ANIMATION
    function animation() {
        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        $('.animation').each(function () {
            let position = $(this).offset().top;
            let animationName = $(this).attr('data-animation');
            let delay = $(this).attr('data-delay');

            if (position < windowHeight + scroll - 100) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
            }
        });
    }


    $(window).scroll(function () {
        animation();
    });
    animation();

    
    //team-slider
    if($('.team-members-slider').length > 0){
        $(".team-members-slider").owlCarousel({
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            responsive:{
                0:{
                    items: 1,
                    margin: 0
                },
                992:{
                    items:2,
                    margin: 30
                }
            }
            
        });
    }
    
    
    //form validator
  
 if($('.contact-form').length > 0){
    
    $('.contact-form').validate({
        
        highlight: function(element){ //sluzi za validiranje polja, da li korisnik dobro uneo ZELENO ili pogresno CRVENO
            $(element).addClass('is-invalid').removeClass('is-valid');
        },
        unhighlight:function(element){
            $(element).addClass('is-valid').removeClass('is-invalid');
        },
        //parameteri za svako polje 
        rules:{  //je objekat gde definisemo za svako polje ono sta treba od uslova da ispuni 
            name:{
                required:true, //polje je obavezno
                minlength: 3 //mora da ima minimum 3 karaktera
            },
            email:{
                required:true, //polje je obavezno
                email:true //da ga validiramo
            },
            message:{
                required:true
            }
        },
        messages:{ //trebalo bi da se ispise poruka za svako polje, ali ovde smo definisali samo za prvo
            name:{
                required:'The Name* field is required' //poruka za prvo polje
               // minlength: 'The Name* field shold be min 3 characters long'  //poruka za prvo polje
            },
            email:{
                required:'The Email* field is required',
                email:'Please provide a valid email address'
            },
            message:{
                required:'The Message* field is required'
            }
        },
        
        //sledece trebamo da odredimo element u kome zelimo da ispisujemo nase greske
        errorElement: 'p', //po difoltu je label tag, ali smo stavili da bude paragraph
          errorPlacement: function(error, element) { //sledece definisemo gde ce poruke da se ispisuju po difoltu poruke se ispisuju ispod svakog input polja
        error.appendTo( element.closest(".form-group").find(".error-msg") );
  }
});
    
}

});

