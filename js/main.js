$(document).ready(function(){

	(function($) {
		$(function() {

			$('input, select').styler();

		});
	})(jQuery);

	$('.flexslider').flexslider({
		animation: "slide"
	});

	$(".two").fancybox();
	$(".fancybox").fancybox();

	$(".menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
	$('.more1').click(function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	}); 

	new WOW().init();

	$('.tabs a').click(function() {

		var tabId = $(this).attr('href');
		$('.tabs a').removeClass('active');
		$(this).addClass('active');
		$('.tabs-content > ul').hide();
		$(tabId).show();
		return false;
	});
	$('.tabs a').eq(0).click();

	$('.tabs a').click(function() {
		if ( $('.details ul.foto:visible li:hidden').length > 0 ) $('.details a.more').show();
		else $('.details a.more').hide();
		var tabId = $(this).attr('href');
		$('.tabs a').removeClass('active');
		$(this).addClass('active');
		$('.tabs-content > ul').stop().hide();
		$(tabId).fadeIn(5000);
		return false;
	}, function(){
		var tabId = $(this).attr('href');

	  // $('.tabs-content > div').fadeOut(1000);
	  return false;
	});

	$('.call').click(function(){
		$('.b-popap').fadeIn(700); return false;
	});
	$('.close').click(function(){
		$('.b-popap').fadeOut(700); return false;
	});
	$('.close').click(function(){
		$('.b-popap3').fadeOut(700); return false;
	});
		$('.close').click(function(){
		$('.b-popap4').fadeOut(700); return false;
	});
			$('.close').click(function(){
		$('.b-popap5').fadeOut(700); return false;
	});
	$('.b-popap').click(function(e){
		if (e.target != this)
			return;
		$(".b-popap").fadeOut(700); return false;
	});

	$('.recall').click(function(){
		$('.b-popap2').fadeIn(700); return false;
	});
	$('.close2').click(function(){
		$('.b-popap2').fadeOut(700); return false;
	});
	$('.b-popap2').click(function(e){
		if (e.target != this)
			return;
		$(".b-popap2").fadeOut(700); return false;
	});
	$('.b-popap3').click(function(e){
		if (e.target != this)
			return;
		$(".b-popap3").fadeOut(700); return false;
	});
		$('.b-popap4').click(function(e){
		if (e.target != this)
			return;
		$(".b-popap4").fadeOut(700); return false;
	});
			$('.b-popap5').click(function(e){
		if (e.target != this)
			return;
		$(".b-popap5").fadeOut(700); return false;
	});

	$('.thanks').click(function(e){
		if (e.target != this)
			return;
		$(".thanks").fadeOut(700); return false;
	});

	function thanks(){
		$('.b-popap').fadeOut(700);
		$('.b-popap2').fadeOut(700);
		$('.b-popap3').fadeOut(700);
		$('.b-popap4').fadeOut(700);
		$('.b-popap5').fadeOut(700);
		$(".thanks").fadeIn(700); 
	} 

	$.validator.addMethod("defaultInvalid", function(value, element) {
		return !(element.value == element.defaultValue);
	});

	$('.form').validate({
		rules: {
			name: {
				required:true,
				defaultInvalid: true,
				minlength:1
			},
			phone: {
				required:true,
				defaultInvalid: true,
				minlength:1
			}
		},
		submitHandler: function(form) {
			$.ajax({
				type: "POST",
				url: $(form).attr('action'),
               data: $(form).serialize(), // serializes the form's elements.
               success: function(data) {

               	console.log(data);

               	if(data == 'Спасибо за заявку!') {

               		form.reset();
               		thanks();
               	}
               }
            });
			return false;
		}
	});
	$('.form2').validate({
		rules: {
			name:{
				required: true,
				defaultInvalid: true,
				minlength:1
			}, 
			email: {
				required:true,
				defaultInvalid: true,
				minlength:1
			},
			subject: {
				required:true,
				defaultInvalid: true,
				minlength:1
			},
		},
		submitHandler: function(form) {
			$.ajax({
				type: "POST",
				url: $(form).attr('action'),
               data: $(form).serialize(), // serializes the form's elements.
               success: function(data) {

               	if(data == 'Спасибо за заявку!') {

               		form.reset();
               		thanks();
               	}
               }
            });
			return false;
		}
	});

    $('.button').on('click', function(){     
        if($("#agree").attr("checked") == 'checked') {  
            $('#target').submit(function(){});
        } else {
            window.alert('Дайте свое согласие на обработку данных!');
            $("#agree").css('border', '1px solid red');
        }
    });

	$('.form3').validate({
		rules: { 
			name: {
				required:true,
				defaultInvalid: true,
				minlength:1
			},
			phone: {
				required:true,
				defaultInvalid: true,
				minlength:1
			}
		},
		submitHandler: function(form) {

// alert($(form).serialize());

			$.ajax({
				type: "POST",
				url: $(form).attr('action'),
               data: $(form).serialize(), // serializes the form's elements.
               success: function(data) {

               	if(data == 'Спасибо за заявку!') {

               		form.reset();
               		thanks();
               	}
               }
            });
			return false;
		}
	});

	$('.more22').click(function(){
		if ( $('.datepicker3').val() == 0 ){
			alert('Не выбрана дата заезда');
			return false;	
		}
		if ( $('.datepicker4').val() == 0 ){
			alert('Не выбрана дата выезда');				
			return false;
		}
		if ( $('.quantity2 option:selected').val() == 0 ){
			alert('Не выбрано количество гостей');
			return false;
		}
		$('.b-popap4').fadeIn(700); 
		return false;
	});
	$('.form4').validate({
		rules: { 
			name: {
				required:true,
				defaultInvalid: true,
				minlength:1
			},
			phone: {
				required:true,
				defaultInvalid: true,
				minlength:1
			}
		},
		submitHandler: function(form) {

			$.ajax({
				type: "POST",
				url: $(form).attr('action'),
               data: $(form).serialize(), // serializes the form's elements.
               success: function(data) {

               	if(data == 'Спасибо за заявку!') {

               		form.reset();
               		thanks();
               	}
               }
            });
			return false;
		}
	});

	$('.more33').click(function(){
		if ( $('.datepicker5').val() == 0 ){
			alert('Не выбрана дата заезда');
			return false;	
		}
		if ( $('.datepicker6').val() == 0 ){
			alert('Не выбрана дата выезда');				
			return false;
		}
		if ( $('.quantity3 option:selected').val() == 0 ){
			alert('Не выбрано количество гостей');
			return false;
		}
		$('.b-popap5').fadeIn(700); 
		return false;
	});	
	$('.form5').validate({
		rules: { 
			name: {
				required:true,
				defaultInvalid: true,
				minlength:1
			},
			phone: {
				required:true,
				defaultInvalid: true,
				minlength:1
			}
		},
		submitHandler: function(form) {

			$.ajax({
				type: "POST",
				url: $(form).attr('action'),
               data: $(form).serialize(), // serializes the form's elements.
               success: function(data) {

               	if(data == 'Спасибо за заявку!') {

               		form.reset();
               		thanks();
               	}
               }
            });
			return false;
		}
	}); 

	$(".phone").mask("+7(999) 999-99-99");

	$('.details a.more').click(function(){
		//alert( $('.details ul.foto li:hidden').length );
		$('.details ul.foto:visible li').slice(0, $('.details ul.foto li:visible').length+3).css('display', 'inline-block');
		if ( $('.details ul.foto:visible li:hidden').length == 0 ) $(this).hide();
		return false;
	});

	var one = false;
	var top = $('.top').offset();
	$(window).scroll(function(){
		var scroll = $(this).scrollTop();

		if(scroll > (top.top-$(window).height()/2) && !one){ one = true;
			$('.count1 b').animateNumber({ number: 9000 }, 3000);
			$('.count2 b').animateNumber({ number: 300 }, 3000);
			$('.count3 b').animateNumber({ number: 68 }, 3000);
			$('.count4 b').animateNumber({ number: 5 }, 3000);
			$('.count5 b').animateNumber({ number: 97 }, 3000);
		}

	});

	var two = false;
	var bottom = $('.bottom').offset();
	$(window).scroll(function(){
		var scroll2 = $(this).scrollTop();

		if(scroll2 > (bottom.top+$(window).height()/2) && !two){ two = true;

			$('.number').each(function(){
				$(this).html( parseInt( $(this).text() )-2 );

			});

		}

	});

	$('.selimg').change(function(){
		$('.change').attr('src', $('.selimg option:selected').attr('src'));
	});

	$(function(){
		$("#datepicker").datepicker();
	});
	$(function(){
		$("#datepicker2").datepicker();
	});
	$(function(){
		$("#datepicker3").datepicker();
	});
	$(function(){
		$("#datepicker4").datepicker();
	});
	$(function(){
		$("#datepicker5").datepicker();
	});
	$(function(){
		$("#datepicker6").datepicker();
	});

});