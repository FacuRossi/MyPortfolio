jQuery(document).ready(function($) {
	var barRendered = false
	/*----------------------------------------------------*/
	/* FitText Settings
------------------------------------------------------ */

	setTimeout(function() {
		$('h1.responsive-headline').fitText(1, {
			minFontSize: '40px',
			maxFontSize: '90px',
		})
	}, 100)

	/*----------------------------------------------------*/
	/* Smooth Scrolling
------------------------------------------------------ */

	$('.smoothscroll').on('click', function(e) {
		e.preventDefault()

		var target = this.hash,
			$target = $(target)

		$('html, body')
			.stop()
			.animate(
				{
					scrollTop: $target.offset().top,
				},
				800,
				'swing',
				function() {
					window.location.hash = target
				}
			)
	})

	/*----------------------------------------------------*/
	/*	Make sure that #header-background-image height is
/* equal to the browser height.
------------------------------------------------------ */

	$('header').css({ height: $(window).height() })
	$(window).on('resize', function() {
		$('header').css({ height: $(window).height() })
		$('body').css({ width: $(window).width() })
	})

	$('#about').css({ height: $(window).height() })
	$(window).on('resize', function() {
		$('#about').css({ height: $(window).height() })
		$('body').css({ width: $(window).width() })
	})

	$('#portfolio').css({ height: $(window).height() })
	$(window).on('resize', function() {
		$('#portfolio').css({ height: $(window).height() })
		$('body').css({ width: $(window).width() })
	})

	/*----------------------------------------------------*/
	/*	Repeat Text Animation
------------------------------------------------------*/
	// $(function(){
	// $('.repeatAnimation').click(function(){
	//     var classes =  $(this).parent().attr('class');
	//     $(this).parent().attr('class', 'animate');
	//     var indicator = $(this);
	//     setTimeout(function(){
	//         $(indicator).parent().addClass(classes);
	//     }, 20);
	// });
	// });

	/*----------------------------------------------------*/
	/*	Fade In/Out Primary Navigation
------------------------------------------------------*/

	$(window).on('scroll', function() {
		var portOffset = $('#portfolio').offset()
		var h = $('header').height()
		var y = $(window).scrollTop()
		if (y > portOffset.top / 2 && !barRendered) {
			jQuery('.skillbar').each(function() {
				jQuery(this)
					.find('.skillbar-bar')
					.animate(
						{
							width: jQuery(this).attr('data-percent'),
						},
						5000
					)
			})
			barRendered = true
		}
		var nav = $('#nav-wrap')
		if (y > h * 0.2 && y < h && $(window).outerWidth() > 768) {
			nav.fadeOut('fast')
		} else {
			if (y < h * 0.2) {
				nav.removeClass('opaque').fadeIn('fast')
			} else {
				nav.addClass('opaque').fadeIn('fast')
			}
		}
	})
})
