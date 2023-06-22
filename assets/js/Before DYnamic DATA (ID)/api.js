/*
fetch("./movies.json")
.then(response => {
   return response.json();
})
.then(jsondata => console.log(jsondata));
*/

  // Movie Slider
  $.ajax({
    url: "movies_nested.json", //API URL
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

      $(".loadr").addClass("d-none");let html = "";
      var movies = response.movies;
      let ind = "";
      for (let i = 0; i < movies.length; i++) {
      //for (let i = 0; i < response.length; i++) {
          const { id, title, image, movie_banner, description, actor, rating, trailer, running_time } = movies[i];
          ind += `<li data-target="#demo" data-slide-to="${i}" class="${ i == 0 ? 'active' : ''}"><img src="${movie_banner}" class="w-100" /></li>`;
          html += `<div class="carousel-item ${ i == 0 ? 'active' : ''}">
              <div class="banner_bg" style="background:#000 url(${movie_banner}) center center no-repeat; background-size:cover;"></div>
                <h1 class="big_name"> ${title}  </h1>
                <div class="carousel-caption">
                  <h6 class="white tagline mb-0"> NEW RELEASES</h6>
                  <h2 class="white"> ${title} <span> ${title} </span> </h2>
                  <p class="white star_name"> <span class="card__rate">${rating}</span> <strong> Running Time : </strong> ${running_time}Min </p>
                  <p class="white text-limit">  ${description} </p>
                  <!-- <a href="details.php" class="btn btn-light"> Watch Now </a>
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
                    <span class="w-trailor white">Watch Now</span>
                  </a>
                </div>
               </div>`;
      }   
      $("#movie_slider").append(html);
      $("#movie_indicators").append(ind);

      //Helper
      $('.carousel').carousel({
        interval: 8000, //changes the speed
        pause: "false"
      });
      $(".youtube-link").grtyoutube({ 
        autoPlay:true,
        theme: "dark"
      });
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
    url: "movies.json", //API URL
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

      $(".owlloadr").addClass("d-none");let html = "";
      for (let i = 0; i < response.length; i++) {
          const { title, image, year, rating, genre  } = response[i];
          html += `
            <div class="item"> <div class="card__cover"> <div class="card__pict"> <span class="card__rate">${rating}</span>
              <a href="details.php" class="card__play"> <i class="fa fa-play"></i> </a> <img src="${image}" class="img-fluid" /> </div>
              <h4>  ${title}  (${year}) </h4> <p>  ${genre} </p>
            </div> </div>
          `;
      }   
      $("#owlroot").append(html)
        var owl = $("#owlroot");
          owl.owlCarousel({
            autoPlay: 3000,
            items: 4,
            pagination: true,
            stopOnHover: true,
            navigation: false,
            itemsDesktop: [1280, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [600, 1], //3 items between 600 and 0
            itemsMobile: [480, 1], // itemsMobile disabled - inherit from itemsTablet option      
        });          
        // Custom Navigation Events
        $(".next").click(function() {
            owl.trigger('owl.next');
        })
        $(".prev").click(function() {
            owl.trigger('owl.prev');
        })
    },
  
    error: function(error, status){// IF our API get any error
      // this function gets called.
      $(".owlloadr-row").addClass("d-none");
      let html = `
              <div class="alert alert-danger">  Error while fetching data  </div>
          `;
      $("#owlroot").append(html);
    },
});


// Movie Owl Slider
// TOP 10 WEBSERIES
  $.ajax({
    url: "movies_nested.json", //API URL
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

      $(".websrsloadr").addClass("d-none");let html = "";
      var webseries = response.webseries;
      for (let i = 0; i < webseries.length; i++) {
          const { id, title, image, year, rating, genre  } = webseries[i];
          html += `
            <div class="item"> <div class="card__cover"> <div class="card__pict"> <span class="card__rate">${rating}</span>
              <a href="details.php?id=${id}" class="card__play"> <i class="fa fa-play"></i> </a> <img src="${image}" class="img-fluid" /> </div>
              <h4>  ${title}  (${year}) </h4> <p>  ${genre} </p>
            </div> </div>
          `;
      }   
      $("#topwebseries").append(html)
        var owl = $("#topwebseries");
          owl.owlCarousel({
            autoPlay: 3000,
            items: 4,
            pagination: true,
            stopOnHover: true,
            navigation: false,
            itemsDesktop: [1280, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [600, 1], //3 items between 600 and 0
            itemsMobile: [480, 1], // itemsMobile disabled - inherit from itemsTablet option      
        });          
        // Custom Navigation Events
        $(".next").click(function() {
            owl.trigger('owl.next');
        })
        $(".prev").click(function() {
            owl.trigger('owl.prev');
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
// Top Movies
  $.ajax({
    url: "movies_nested.json", //API URL
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

      $(".moviesloadr").addClass("d-none");let html = "";
      var topmovies = response.movies;
      for (let i = 0; i < topmovies.length; i++) {
          const { title, image,  year, rating, genre  } = topmovies[i];
          html += `
            <div class="item"> <div class="card__cover"> <div class="card__pict"> <span class="card__rate">${rating}</span>
              <a href="details.php" class="card__play"> <i class="fa fa-play"></i> </a> <img src="${image}" class="img-fluid" /> </div>
              <h4>  ${title} (${year})   </h4> <p>  ${genre} </p>
            </div> </div>
          `;
      }   
      $("#topmovies").append(html)
        var owl = $("#topmovies");
          owl.owlCarousel({
            autoPlay: 3000,
            items: 4,
            pagination: true,
            stopOnHover: true,
            navigation: false,
            itemsDesktop: [1280, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [600, 1], //3 items between 600 and 0
            itemsMobile: [480, 1], // itemsMobile disabled - inherit from itemsTablet option      
        });          
        // Custom Navigation Events
        $(".next").click(function() {
            owl.trigger('owl.next');
        })
        $(".prev").click(function() {
            owl.trigger('owl.prev');
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

  // Movie Slider
  $.ajax({
    url: "movies_nested.json", //API URL
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

      $(".loadr").addClass("d-none");let html = "";
      var movies = response.movies;
      for (let i = 0; i < movies.length; i++) {
      //for (let i = 0; i < response.length; i++) {
          const { id, title, image, movie_banner, description, year, rating, running_time } = movies[i];
          html += ` 
              <div class="col-lg-4">
                <a href="details.php" class="d-block movies_list_banner" style="background:#000 url(${movie_banner}) center center no-repeat; background-size:cover;"> <div class="card__play"> <i class="fa fa-play"></i> </div>   </a> 
                 <h2 class="white shadow_text"> ${title} (${year}) <span> ${title} (${year}) </span> </h2>
                <p class="white star_name mb-0"> <span class="card__rate">${rating}</span> <strong> Running Time : </strong> ${running_time}Min </p>
                <p class="white text-limit">  ${description} </p>
              </div>`;
      }   
      $("#movie_list").append(html);

      //Helper
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





















/*==============================
  DEtail Page Video Player
==============================*/
  function initializePlayer() {
    if ($('#player').length) {
      const player = new Plyr('#player');
    } else {
      return false;
    }
    return false;
  }
  $(window).on('load', initializePlayer());