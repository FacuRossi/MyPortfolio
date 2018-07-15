 jQuery(document).ready(function($) {

/*----------------------------------------------------*/
/* FitText Settings
------------------------------------------------------ */

    setTimeout(function() {
	   $('h1.responsive-headline').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
	 }, 100);


/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

   $('.smoothscroll').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);
        console.log(target)
        if($target === "resume") {
            jQuery('.skillbar').each(function(){
           		jQuery(this).find('.skillbar-bar').animate({
           			width:jQuery(this).attr('data-percent')
           		},6000);
           	});
        }

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
	});

/*----------------------------------------------------*/
/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

   $('header').css({ 'height': $(window).height() });
   $(window).on('resize', function() {

        $('header').css({ 'height': $(window).height() });
        $('body').css({ 'width': $(window).width() })
   });

/*----------------------------------------------------*/
/*	Skill-Bar Animation
------------------------------------------------------*/
   // jQuery(document).ready(function(){
   //
   // });

/*----------------------------------------------------*/
/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

   $(window).on('scroll', function() {
        var h = $('header').height();
	    var y = $(window).scrollTop();
        var nav = $('#nav-wrap');
        if ( (y > h*.20) && (y < h) && ($(window).outerWidth() > 768 ) ) {
	        nav.fadeOut('fast');
	    }
        else {
            if (y < h*.20) {
                nav.removeClass('opaque').fadeIn('fast');
            }
            else {
                nav.addClass('opaque').fadeIn('fast');
            }
        }
	});
 });
