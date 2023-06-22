/*
fetch("./movies.json")
.then(response => {
   return response.json();
})
.then(jsondata => console.log(jsondata));
*/

/* === === === */

  // Movie Slider
  $.ajax({
    url: "assets/database/movies_nested.json", //API URL
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
      let ind = "";

      for (let i = 0; i < movies.length; i++) {
      //for (let i = 0; i < response.length; i++) {
      //console.log(movies.title)

      const { id, title, movie_banner, description, seourl, actor, rating, trailer, running_time, type, year, banner } = movies[i];

      if(banner === 1)  { 
          ind += `<li data-target="#demo" data-slide-to="${i}" class="${ i == 0 ? 'active' : ''}"><img src="${movie_banner}" class="w-100" /></li>`;
          html += `<div class="carousel-item ${ i == 0 ? 'active' : ''}">
              <div class="banner_bg" style="background:#000 url(${movie_banner}) center center no-repeat; background-size:cover;"></div>
                <h1 class="big_name"> ${title}  </h1>
                <div class="carousel-caption">
                  <h6 class="white tagline mb-0"> NEW RELEASES</h6>
                  <h2 class="white"> ${title} <span> ${title} </span> </h2>
                  <p class="white star_name"> <span class="card__rate">${rating}</span> <strong> Running Time : </strong> ${running_time}Min </p>
                  <p class="white text-limit">  ${description} </p>
                  <!-- <a href="details?view=${seourl}" class="btn btn-light"> Watch Nowww </a>
                  <h3 class="white"> Trailers </h3>
                  <div class="youtube-videos">
                    <div class="youtube-link" youtubeid="${trailer}"> <div class="youtube" data-id="${trailer}"> </div> </div> 
                  </div>
                   -->
                  <a href="#" youtubeid="b9EkMc79ZSU" class="video-open playbtn white">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="80px" height="80px" viewBox="0 0 213.7 213.7" enable-background="new 0 0 213.7 213.7" xml:space="preserve">
                      <polygon class="triangle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="73.5,62.5 148.5,105.8 73.5,149.1 "></polygon>
                      <circle class="circle" fill="none" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" cx="106.8" cy="106.8" r="103.3"></circle>
                    </svg>
                    <span class="w-trailor white"> <a href="details?view=${seourl}" class="w-trailor white" > Watch Now </a></span>
                  </a>
                </div>
               </div>`;
        }
      }   
      $("#movie_slider").append(html);
      $("#movie_indicators").append(ind);

      //Helper
      $('.carousel').carousel({
        interval: 8000, //changes the speed
        pause: "false"
      });
      
	  /*
      $(".youtube-link").grtyoutube({ 
        autoPlay:true,
        theme: "dark"
      });
	  */
      
      $(".text-limit").text(function(){
          return $(this).text().length > 130 ? $(this).text().substr(0, 130)+'...' : $(this).text();
      }); 
    },
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

// Movie Owl Slider
// NEW ITEMS OF THIS SEASON
  $.ajax({
    url: "assets/database/movies_nested.json", //API URL
    type: "GET", // GET OR POST
    beforeSend: function(){
      // This function calls before ajax API Hits
      // Here we have to show our loader
      $(".owlloadr").removeClass("d-none");
    },
    success: function(response, status)  {
      // Once our API call send success
      // this function gets called.
      // console.log(response.webseries)
      // console.log(response.movies.newitem)
     // console.log(response)

      $(".owlloadr").addClass("d-none");
      let html = "";
      let recenthtml = "";

      var newmovie = response.movies;
      var newwebs = response.webseries;
      const both = newmovie.concat(newwebs);

      // Sort By Name/Date
      both.sort(function (a, b) {
        if (a.release_date > b.release_date) { return -1; }
        if (a.release_date < b.release_date) { return 1;  }
        return 0;
      }); 
      //console.log(both);

		for (let i = 0; i < both.length; i++) {
          const {id, title, image, newitem, year, seourl, rating, type } = both[i];
          //console.log(response)
          if(newitem === 1 && type === 'Movie')  {
            //console.log(response)
            html += `
              <div class="item"> <div class="card__cover"> <a href="details?view=${seourl}" class="card__pict"> <span class="card__rate">${rating}</span>  <div class="card__play"> <i class="fa fa-play"></i> </div> <img src="${image}" class="img-fluid" /> </a>  <h4>  ${title}  (${year}) </h4>
              </div> </div>
            `;
          }
          if(newitem === 1 && type === 'Web_Series')  {
            //console.log(response)
            html += `
              <div class="item"> <div class="card__cover"> <a href="details?view=${seourl}" class="card__pict"> <span class="card__rate">${rating}</span>  <div class="card__play"> <i class="fa fa-play"></i> </div> <img src="${image}" class="img-fluid" /> </a>  <h4>  ${title}  (${year}) </h4> 
              </div> </div>
            `;
			}
        }
		
		
		let mm = 0; let ww = 0;
		for (let j = 0; j < both.length; j++) {
        const {id, title, image, newitem, year, seourl, rating, genre, type } = both[j];
			if(newitem === 1)  {
				//console.log(newitem);
				const {id, title, image, newitem, year, seourl, rating, genre, type } = both[j];
				//console.log(response)
				if(type === 'Movie')  {
					//console.log(response)
					if( mm < 3 ){
					recenthtml += `
					  <div class="item"> <div class="card__cover"> <a href="details?view=${seourl}" class="card__pict"> <span class="card__rate">${rating}</span>  <div class="card__play"> <i class="fa fa-play"></i> </div> <img src="${image}" class="img-fluid" /> </a>  <h4>  ${title}  (${year}) </h4>
					  </div> </div>
					`;
					}
					mm++;
				}
				if( type === 'Web_Series')  {
					//console.log(response)
					if( ww < 2 ){
					recenthtml += `
					  <div class="item"> <div class="card__cover"> <a href="details?view=${seourl}" class="card__pict"> <span class="card__rate">${rating}</span>  <div class="card__play"> <i class="fa fa-play"></i> </div> <img src="${image}" class="img-fluid" /> </a>  <h4>  ${title}  (${year}) </h4> 
					  </div> </div>
					`;
					}
					ww++;
				} 
			} 
		} 

      
	  /* Helper Javascript */
	  
      $("#owlroot").append(html)
      $("#recent_item").append(recenthtml)

      $('#owlroot').owlCarousel({
       // loop:true,
        items:6,
        margin:10,
        nav: false,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        responsive:{
          0:{ items: 3 },
          600:{ items: 3 },
          1000:{ items: 5 },
          1300:{ items: 6 }
        }
      })
    },
  
    error: function(error, status){// IF our API get any error
      // this function gets called.
      $(".owlloadr-row").addClass("d-none");
      let html = `<div class="alert alert-danger"> Error while fetching data </div> `;
      $("#owlroot").append(html);
    },
});


// Movie Owl Slider
// TOP 10 WEBSERIES
  $.ajax({
    url: "assets/database/movies_nested.json", //API URL
    type: "GET", // GET OR POST
    beforeSend: function(){
      // This function calls before ajax API Hits
      // Here we have to show our loader
      $(".owlloadr").removeClass("d-none");
    },
    success: function(response, status)  {
      // Once our API call send success
      // this function gets called.
      //console.log(response.webseries)

      $(".websrsloadr").addClass("d-none");
      let html = "";
      var webseries = response.webseries;

      // Sort By Name/Date
      webseries.sort(function (a, b) {
        if (a.release_date > b.release_date) { return -1; }
        if (a.release_date < b.release_date) { return 1;  }
        return 0;
      }); 
      //console.log(webseries);

      for (let i = 0; i < webseries.length; i++) {
          const { id, title, image, top10, year, seourl, rating, genre, type } = webseries[i];
          if(top10 === 1)  {
            if( i < 11 ){
            html += `
              <div class="item"> <div class="card__cover"> <a href="details?view=${seourl}" class="card__pict"> <span class="card__rate">${rating}</span>  <div class="card__play"> <i class="fa fa-play"></i> </div> <img src="${image}" class="img-fluid" /> </a>  <h4>  ${title}  (${year}) </h4>
              </div> </div>
            `;
          }
        }
      }

      $("#topwebseries").append(html)
      $('#topwebseries').owlCarousel({
        //loop:true,
        items: 6,
        margin:10,
        nav: false,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        responsive:{
          0:{ items: 3 },
          600:{ items: 3 },
          1000:{ items: 5 },
          1300:{ items: 6 }
        }
      })

    },
  
    error: function(error, status){// IF our API get any error
      // this function gets called.
      $(".websrsloadr-row").addClass("d-none");
      let html = `<div class="alert alert-danger">Error while fetching data</div>`;
      $("#topwebseries").append(html);
    },
});

// Movie Owl Slider
// Top 10 Movies
  $.ajax({
    url: "assets/database/movies_nested.json", //API URL
    type: "GET", // GET OR POST
    beforeSend: function(){
      // This function calls before ajax API Hits
      // Here we have to show our loader
      $(".moviesloadr").removeClass("d-none");
    },
    success: function(response, status)  {
      // Once our API call send success
      // this function gets called.
      //console.log(response.topmovies)

      $(".moviesloadr").addClass("d-none");
	  let html = "";
	  let hollyhtml = "";
      var topmovies = response.movies;
      //var topbollymovies = response.topmovies;
      //var tophollymovies = response.topmovies;

      // Sort By Name/Date
      topmovies.sort(function (a, b) {
        if (a.release_date > b.release_date) { return -1; }
        if (a.release_date < b.release_date) { return 1;  }
        return 0;
      }); 
      //console.log(topmovies);

		for (let i = 0; i < topmovies.length; i++) {
          const {id, title, image, top10, year, seourl, rating, genre, movie_industry, type } = topmovies[i];
			if(top10 === 1 && movie_industry === 2)  { 
				//console.log(movie_industry);
				//if( i < 11 ){
					html += ` <div class="item"> <div class="card__cover"> <a href="details?view=${seourl}" class="card__pict"> <span class="card__rate">${rating}</span>  <div class="card__play"> <i class="fa fa-play"></i> </div> <img src="${image}" class="img-fluid" /> </a>  <h4>  ${title}  (${year}) </h4> </div> </div> `;
				//} 
			}
			if(top10 === 1 && movie_industry === 1)  { 
				//if( i < 11 ){
					hollyhtml += ` <div class="item"> <div class="card__cover"> <a href="details?view=${seourl}" class="card__pict"> <span class="card__rate">${rating}</span>  <div class="card__play"> <i class="fa fa-play"></i> </div> <img src="${image}" class="img-fluid" /> </a>  <h4>  ${title}  (${year}) </h4> </div> </div> `;
				//} 
			} 
		}   
      $("#topmovies").append(html)
      $("#tophollymovies").append(hollyhtml)
      $('#topmovies').owlCarousel({
        //loop:true,
        items: 6,
        margin:10,
        nav: false,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        responsive:{
          0:{ items: 3 },
          600:{ items: 3 },
          1000:{ items: 5 },
          1300:{ items: 6 }
        }
      })
      $('#tophollymovies').owlCarousel({
        //loop:true,
        items: 6,
        margin:10,
        nav: false,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        responsive:{
          0:{ items: 3 },
          600:{ items: 3 },
          1000:{ items: 5 },
          1300:{ items: 6 }
        }
      })
    },
  
    error: function(error, status){// IF our API get any error
      // this function gets called.
      $(".moviesloadr-row").addClass("d-none");
      let html = `<div class="alert alert-danger">Error while fetching data</div>`;
      $("#topmovies").append(html);
    },
});


// Movies Page DATA

// Movie Top Banner
$.ajax({
  url: "assets/database/movies_nested.json", //API URL
  type: "GET", // GET OR POST
  beforeSend: function(){
    // This function calls before ajax API Hits Here we have to show our loader
    $(".owlloadr").removeClass("d-none");
  },
  success: function(response, status)  {
    // Once our API call send success this function gets called.
   // console.log(response)

    $(".owlloadr").addClass("d-none");
    let html = "";
    var newmovie = response.movies;
    for (let i = 0; i < newmovie.length; i++) {
        const {id, title, poster, newitem, year, seourl, rating, description, running_time, genre, type } = newmovie[i];
        //console.log(response)
        if(newitem === 1 && type === 'Movie')  {
          //console.log(response)
          html += `<div class="item"> <div class="masthead-card d-flex"> <div class="col-md-5 content-holder"> <div class="text-left"> <h6 class="white tagline mb-0">  </h6> <h2 class="white"> ${title} (${year})</h2> <p class="white star_name"><span class="card__rate">${rating}</span><strong> Genre: </strong> ${genre} <br /> <strong>Running Time : </strong> ${running_time} </p> <p class="white text-limit"> ${description}</p> <a href="details?view=${seourl}" class="w-trailor white"> <img src="assets/img/play.png" alt="Play" class="img-fluid" /> Watch Now </a> </div> </div> <div class="col-md-7 image-holder"> <div class="image-gradient"></div> <div class="imageloader"> <img src="${poster}" alt="${title}" class="img-fluid" /> </div> </div> </div> </div> `;
        }
    } 
    
    $("#moviebanner").append(html)
    /* JavaScript Helper */
	if ($(window).width() > 800){
		// do stuff
		$(document).ready(function () {		
		  $('#moviebanner').owlCarousel({
			stagePadding: 100,
			loop:true,
			items:1,
			margin:0,
			nav: true,
			dots: false,
			lazyLoad: true,
			autoplay: true,
			autoplaySpeed: 2000,
			autoplayTimeout: 8000,
			autoplayHoverPause: true,
			responsive:{
			  600:{ items:1 }
			}
		  })
		});
	}

    $(document).ready(function () {		
      $('#moviebanner').owlCarousel({
        stagePadding: 40,
        loop:true,
        items:1,
        margin:0,
        nav: true,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        responsive:{
          600:{ items:1 }
        }
      })
    });
    /* Helper END */
  },

  error: function(error, status){// IF our API get any error
    // this function gets called.
    $(".owlloadr-row").addClass("d-none");
    let html = `<div class="alert alert-danger"> Error while fetching data </div> `;
    $("#owlroot").append(html);
  },
});

// Movies List
$.ajax({
    url: "assets/database/movies_nested.json", //API URL
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
      let hollhtml = "";
      let southhtml = "";

      var movies = response.movies;

      // Sort By Name/Date
      movies.sort(function (a, b) {
        if (a.release_date > b.release_date) { return -1; }
        if (a.release_date < b.release_date) { return 1;  }
        return 0;
      }); 
      //console.log(movies);



      for (let i = 0; i < movies.length; i++) {
      //for (let i = 0; i < response.length; i++) {
          const { id, title, image, movie_industry, seourl, year, rating, type } = movies[i];
          if(movie_industry === 2)  { 
            html += `<div class="col-lg-2 col-md-3 col-sm-3 col-xs-6 movies_list_banner">
            <div class="card__cover"> <a href="details?view=${seourl}" class="card__pict"> <span class="card__rate">${rating}</span>  <div class="card__play"> <i class="fa fa-play"></i> </div> <img src="${image}" class="img-fluid" /> </a> <h4 class="white shadow_text"> ${title}  (${year}) </h4>  </div> </div>`;
          }
          if(movie_industry === 1)  { 
            hollhtml += `<div class="col-lg-2 col-md-3 col-sm-3 col-xs-6 movies_list_banner">
            <div class="card__cover"> <a href="details?view=${seourl}" class="card__pict"> <span class="card__rate">${rating}</span>  <div class="card__play"> <i class="fa fa-play"></i> </div> <img src="${image}" class="img-fluid" /> </a> <h4 class="white shadow_text"> ${title}  (${year}) </h4> </div> </div>`;
          }
          if(movie_industry === 3)  { 
            southhtml += `<div class="col-lg-2 col-md-3 col-sm-3 col-xs-6 movies_list_banner">
            <div class="card__cover"> <a href="details?view=${seourl}" class="card__pict"> <span class="card__rate">${rating}</span>  <div class="card__play"> <i class="fa fa-play"></i> </div> <img src="${image}" class="img-fluid" /> </a> <h4 class="white shadow_text"> ${title}  (${year}) </h4> </div> </div>`;
          }
      }   
      $("#bollywood-movielist").append(html);
      $("#hollywood-movielist").append(hollhtml);
      $("#south-movielist").append(southhtml);

      //Helper
      $(".text-limit").text(function(){
          return $(this).text().length > 130 ? $(this).text().substr(0, 130)+'...' : $(this).text();
      }); 
    },
    error: function(error, status){// IF our API get any error
      // this function gets called.
      $(".loadr-row").addClass("d-none");
      let html = ` <div class="alert alert-danger"> Error while fetching data </div> `;
    },
});


// WebSeries Page DATA
// Movie Top Banner
$.ajax({
  url: "assets/database/movies_nested.json", //API URL
  type: "GET", // GET OR POST
  beforeSend: function(){
    // This function calls before ajax API Hits Here we have to show our loader
    $(".owlloadr").removeClass("d-none");
  },
  success: function(response, status)  {
    // Once our API call send success this function gets called.
   // console.log(response)

    $(".owlloadr").addClass("d-none");
    let html = "";
    var newmovie = response.webseries;
    // Sort By Name/Date
    newmovie.sort(function (a, b) {
      if (a.release_date > b.release_date) { return -1; }
      if (a.release_date < b.release_date) { return 1;  }
      return 0;
    }); 
    //console.log(newmovie);

    for (let i = 0; i < newmovie.length; i++) {
        const {id, title, poster, newitem, year, seourl, rating, description, running_time, genre, type } = newmovie[i];
        //console.log(newmovie)
        if(newitem === 1 && type === 'Web_Series')  {
          //console.log(response)
          html += `<div class="item"> <div class="masthead-card d-flex"> <div class="col-md-5 content-holder"> <div class="text-left"> <h6 class="white tagline mb-0">  </h6> <h2 class="white"> ${title} (${year})</h2> <p class="white star_name"><span class="card__rate">${rating}</span><strong> Genre: </strong> ${genre} <br /> <strong>Running Time : </strong> ${running_time} </p> <p class="white text-limit"> ${description}</p> <a href="details?view=${seourl}" class="w-trailor white"> <img src="assets/img/play.png" alt="Play" class="img-fluid" /> Watch Now </a> </div> </div> <div class="col-md-7 image-holder"> <div class="image-gradient"></div> <div class="imageloader"> <img src="${poster}" alt="${title}" class="img-fluid" /> </div> </div> </div> </div> `;
        }
    } 
    
    $("#webseriesbanner").append(html) 
	/* JavaScript Helper */
	if ($(window).width() > 800){
		// do stuff
		$(document).ready(function () {		
		  $('#webseriesbanner').owlCarousel({
			stagePadding: 100,
			loop:true,
			items:1,
			margin:0,
			nav: true,
			dots: false,
			lazyLoad: true,
			autoplay: true,
			autoplaySpeed: 2000,
			autoplayTimeout: 8000,
			autoplayHoverPause: true,
			responsive:{
			  600:{ items:1 }
			}
		  })
		});
	}

    $(document).ready(function () {		
      $('#webseriesbanner').owlCarousel({
        stagePadding: 40,
        loop:true,
        items:1,
        margin:0,
        nav: true,
        dots: false,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        responsive:{
          600:{ items:1 }
        }
      })
    });
    /* Helper END */
  },

  error: function(error, status){// IF our API get any error
    // this function gets called.
    $(".owlloadr-row").addClass("d-none");
    let html = `<div class="alert alert-danger"> Error while fetching data </div> `;
    $("#owlroot").append(html);
  },
});

// Webseries List
$.ajax({
  url: "assets/database/movies_nested.json", //API URL
  type: "GET", // GET OR POST
  beforeSend: function(){
    // This function calls before ajax API Hits Here we have to show our loader
    $(".loadr").removeClass("d-none");
  },
  success: function(response, status)  {
    // Once our API call send success
    // this function gets called.
    //console.log(response.webseries)

    $(".loadr").addClass("d-none");
    let html = "";
    let hollhtml = "";

    var webseries = response.webseries;
    // Sort By Name/Date
    webseries.sort(function (a, b) {
      if (a.release_date > b.release_date) { return -1; }
      if (a.release_date < b.release_date) { return 1;  }
      return 0;
    }); 
    //console.log(webseries);

    for (let i = 0; i < webseries.length; i++) {
    //for (let i = 0; i < response.length; i++) {
        const { id, title, image, web_industry, year, seourl, rating, type } = webseries[i];
        if(web_industry === 2)  { 
          html += `<div class="col-lg-2 col-md-3 col-sm-3 col-xs-6 movies_list_banner">
          <div class="card__cover"> <a href="details?view=${seourl}" class="card__pict"> <span class="card__rate">${rating}</span>  <div class="card__play"> <i class="fa fa-play"></i> </div> <img src="${image}" class="img-fluid" /> </a> <h4 class="white shadow_text"> ${title}  (${year}) </h4>  </div> </div>`;
        }
        if(web_industry === 1)  { 
          hollhtml += `<div class="col-lg-2 col-md-3 col-sm-3 col-xs-6 movies_list_banner">
          <div class="card__cover"> <a href="details?view=${seourl}" class="card__pict"> <span class="card__rate">${rating}</span>  <div class="card__play"> <i class="fa fa-play"></i> </div> <img src="${image}" class="img-fluid" /> </a> <h4 class="white shadow_text"> ${title}  (${year}) </h4>  </div> </div>`;
        }
    }   
    $("#bollywood-weblist").append(html);
    $("#hollywood-weblist").append(hollhtml);
 
  },
  error: function(error, status){// IF our API get any error
    // this function gets called.
    $(".loadr-row").addClass("d-none");
    let html = ` <div class="alert alert-danger"> Error while fetching data </div> `;
  },
});

