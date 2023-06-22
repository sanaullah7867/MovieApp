
/* === === === */

  // Movie Slider
  $.ajax({
    url: "./assets/database/movies_nested.json", //API URL
    type: "GET", // GET OR POST
    beforeSend: function(){
      // This function calls before ajax API Hits
      // Here we have to show our loader
      $(".loadr").removeClass("d-none");
    },
    success: function(response, status)  {
      // Once our API call send success
      // this function gets called.
      // console.log(response.movies)

      $(".loadr").addClass("d-none");
      let html = "";
      var movies = response.movies;

      for (let i = 0; i < movies.length; i++) {
      //for (let i = 0; i < response.length; i++) {
      //console.log(movies.title)

      const { id, title, movie_banner, description, seourl, actor, rating, trailer, running_time, type, year, banner } = movies[i];

      if(banner === 1)  { 
          html += `<li data-index="rs-${id}" data-transition="slotzoom-horizontal" data-slotamount="5" data-masterspeed="1000" data-fsmasterspeed="1000">
				<img src="${movie_banner}" alt="" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" class="rev-slidebg" data-bgparallax="10" data-no-retina>
				<div class="slider_text_box">
					<div class="tp-caption tp-resizeme text_1" data-x="['left']" data-hoffset="['0','0','15','15','15']" data-y="['center']" data-voffset="['-80','-80','-80','-80','-80']" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:[155%];x:0;z:0;rX:0deg;rY:0deg;rZ:0deg;sX:1;sY:1;skX:0;skY:0;s:1000;e:Power2.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start="1500" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-elementdelay="0.05" style="">
						<h1 class="big_name"> ${title}  </h1>
						<div class="banner_cont">
						  <h6 class="white tagline mb-0"> NEW RELEASES</h6>
						  <h2 class="white"> ${title} <span> ${title} </span> </h2>
						</div> 
					</div>
					<div class="tp-caption tp-resizeme text_1" data-x="['left']" data-hoffset="['-5','0','15','15','15']" data-y="['center']" data-voffset="['120','120','120','120','120']" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:[155%];x:0;z:0;rX:0deg;rY:0deg;rZ:0deg;sX:1;sY:1;skX:0;skY:0;s:1000;e:Power2.easeInOut;" data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;" data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;" data-start="1500" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-elementdelay="0.05" style="">
						<div class="banner_cont">
						  <p class="white star_name"> <span class="card__rate">${rating}</span> <strong> Running Time : </strong> ${running_time}Min </p>
						  <p class="white text-limit">  ${description} </p>
						  <a href="#" youtubeid="b9EkMc79ZSU" class="video-open playbtn white">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7" xml:space="preserve">
							  <polygon class="triangle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
							  <circle class="circle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
							</svg>
							<span class="w-trailor white"> <a href="details?view=${seourl}" class="w-trailor white" > Watch Now </a></span>
						</div> 
					</div>
					<div class="tp-caption tp-shape tp-shapewrapper tp-resizeme text_2" data-x="['left']" data-hoffset="['0','0','15','15','15']" data-y="['top','top','top','-60']" data-voffset="['300','300','160','160','80']" data-width="86" data-height="6" data-whitespace="nowrap" data-type="shape" data-responsive_offset="on" data-frames='[{"from":"x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;","speed":1000,"to":"o:1;","delay":500,"ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"to":"opacity:0;","ease":"nothing"}]' data-textAlign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style="background-color:#f9ab00;"></div> 
				</div>
			</li> `;
        }
      }   
      $("#RevSlider").append(html);

      $(".text-limit").text(function(){
          return $(this).text().length > 130 ? $(this).text().substr(0, 130)+'...' : $(this).text();
      }); 
	  
		(function($) {
			"use strict";
			function photography_slider() {
				if ($('#home_full_slider').length) {
					$("#home_full_slider").revolution({
						sliderType: "standard",
						sliderLayout: "fullscreen",
						dottedOverlay: "none",
						delay: 7000,
						autoHeight: 'on',
						minHeight: 480,
						navigation: {
							keyboardNavigation: "off",
							keyboard_direction: "horizontal",
							onHoverStop: "off",
							mouseScrollNavigation: "off",
							mouseScrollReverse: "default",
							touch: {
								touchenabled: "on",
								swipe_threshold: 75,
								swipe_min_touches: 1,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							},
							bullets: {
								enable: true,
								hide_onmobile: true,
								direction: "vertical",
								h_align: "right",
								v_align: "center",
								h_offset: 80,
								v_offset: 0,
								space: 27
							}
						},
						responsiveLevels: [1920, 1199, 991, 768, 480],
						visibilityLevels: [1920, 960, 991, 768, 480],
						gridwidth: [1170, 1024, 991, 768, 480],
						gridheight: [950, 768, 600, 600, 480],
						lazyType: "none",
						shadow: 0,
						spinner: "off",
						stopLoop: "off",
						stopAfterLoops: -1,
						stopAtSlide: -1,
						shuffle: "off",
						autoHeight: "off",
						fullScreenAutoWidth: "off",
						fullScreenAlignForce: "off",
						fullScreenOffsetContainer: "",
						fullScreenOffset: "",
						disableProgressBar: "on",
						hideThumbsOnMobile: "off",
						hideSliderAtLimit: 0,
						hideCaptionAtLimit: 0,
						hideAllCaptionAtLilmit: 0,
						debugMode: false,
						fallbacks: {
							simplifyAll: "off",
							nextSlideOnWindowFocus: "off",
							disableFocusListener: false,
						},
						parallax: {
							type: "mouse",
							origo: "slidercenter",
							speed: 2000,
							levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
						},
					})
				}
			}
			photography_slider();
		})(jQuery)
		  
	  
	  
	  
	  
	  
    }, // END 
    error: function(error, status){// IF our API get any error
      // this function gets called.
      $(".loadr-row").addClass("d-none");
      let html = `
              <div class="alert alert-danger">
                  Error while fetching data 
              </div>
          `;
    },
});



