$(document).ready(function(){

	// $(this).on('click','.accordion .btn' ,function(){
	// 	if($(this).text('Read More...')){
	// 		$(this).text('Show Less...')
	// 	}
	// })
	// $(this).on('click','.accordion .btn' ,function(){
	// 	if($(this).text('Show Less...')){
	// 		$(this).text('Read More...')
	// 	}
	// })
	$('.accordion .btn').click(function(){
		if($(this).text() == 'Show Less...'){
			$(this).text('Read More...')
		}else{
			$(this).text('Show Less...')
		}
	})

	$('#project-slider1').owlCarousel({
		items:1,
		itemsDesktop:[1000,1],
		itemsDesktopSmall:[979,1],
		itemsTablet:[768,1],
		itemsMobile:[650,1],
		pagination: true,
		autoPlay: true,
		mouseDrag: false
	})
	$('#project-slider2').owlCarousel({
		items:1,
		itemsDesktop:[1000,1],
		itemsDesktopSmall:[979,1],
		itemsTablet:[768,1],
		itemsMobile:[650,1],
		pagination: true,
		autoPlay: true,
		mouseDrag: false
	})
	$('#project-slider3').owlCarousel({
		items:1,
		itemsDesktop:[1000,1],
		itemsDesktopSmall:[979,1],
		itemsTablet:[768,1],
		itemsMobile:[650,1],
		pagination: true,
		autoPlay: true,
		mouseDrag: false
	})
		
})