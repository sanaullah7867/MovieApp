document.writeln("<script type='text/javascript' src='assets/js/custom.js'></script>");
document.writeln("<script type='text/javascript' src='assets/js/jquery.fancybox.min.js'></script>");
document.writeln("<script type='text/javascript' src='assets/js/search.js'></script>");
document.writeln("<script type='text/javascript' src='assets/js/api.js'></script>");
  

$('#toggle').click(function() {
	$(this).toggleClass('active');
	$('#overlay').toggleClass('open');
});

$(document).ready(function(){
	// Add minus icon for collapse element which is open by default
	$(".collapse.show").each(function(){
		$(this).prev(".card-header").find(".fa").addClass("fa-angle-up").removeClass("fa-angle-down");
	});
	
	// Toggle plus minus icon on show hide of collapse element
	$(".collapse").on('show.bs.collapse', function(){
		$(this).prev(".card-header").find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
	}).on('hide.bs.collapse', function(){
		$(this).prev(".card-header").find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
	});
});

$(document).ready(function () {
	$('.menuoverlay').on('click', function () {
		$('#SlideMenu').removeClass('show');
	});

	$('#explore, .menuoverlay').on('click', function () {
		//$('#sidebar').addClass('active');
		//$('.menuoverlay').addClass('active');
		$('.menuoverlay').toggleClass('d-block');
		$('a[aria-expanded=true]').attr('aria-expanded', 'false');
	});
});

$(document).ready(function () {
	$('#pricingapp').owlCarousel({
		//loop:true,
		items: 3,
		margin: 40,
		nav: false,
		dots: false,
		lazyLoad: true,
		autoplay: true,
		responsive:{
		  0:{ items: 1 },
		  600:{ items: 3 },
		  1000:{ items: 3 },
		  1300:{ items: 3 }
		}
	})
});  