
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

    // Once our API call send success
    success: function(response, status)  {      
      // this function gets called.
      // console.log(response.movies)

      $(".loadr").addClass("d-none");let html = "";
      var movies = response.movies;
      for (let i = 0; i < 1; i++) {
      //for (let i = 0; i < response.length; i++) {
          const { id, title, description, year, video, image, rating, running_time, countries, actor, genre, director, movie_banner, trailer } = movies[i];
          html += ` <div class="col-lg-9">
          <video controls crossorigin playsinline poster="${movie_banner}" id="player">
            <source src="${video}" type="video/mp4" size="480">
            <source src="${video}" type="video/mp4" size="720">
            <source src="${video}" type="video/mp4" size="1080">
            <!-- Fallback for browsers that don't support the <video> element -->
            <a href="${trailer}" download>Download</a>
          </video>
        </div>
        <div class="col-lg-3 watch_trailer">
          <span class="card__rate">${rating}</span>
          <img src="${image}" class="img-fluid">
           <div class="youtube-link btn border d-block" youtubeid="${trailer}"> <i class="fa fa-play-circle" aria-hidden="true"></i> Watch trailer </div> 
        </div>`;
      } 
      $("#video_trailer").append(html);

      var moviesdata = "";
      for (let i = 0; i < 1; i++) {
      //for (let i = 0; i < response.length; i++) {
          const { id, title, description, year, video, image, rating, running_time, countries, actor, genre, director, movie_banner, trailer } = movies[i];
        moviesdata += `<div class="col-lg-12">       
          <h2 class="white semi_bold"> ${title} (${year}) </h2>
          <p class="card__desc"> ${description} </p>
          <ul class="card__meta">
            <li><span>Cast:</span> <a href="#">${actor}</a> </li>
            <li><span>Genre:</span> <a href="#">${genre}</a>   </li>
            <li><span>Director:</span> <a href="#"> ${director} </a></li>  
            <li><span>Running time:</span> <a href="#"> ${running_time}</a></li>
            <li><span>Country:</span> <a href="#"> ${countries} </a></li> 
          </ul>             
        </div>`;
      } 
      $("#movie_details").append(moviesdata);  

      //console.log(response.movies[1])
      //console.log(response.movies[1].scenes[1])

      var moviesscenedata = "";
      for (let i = 0; i < 1; i++) {
            const { scenes } = movies[i];
        for (let j = 0; j < scenes.length; j++) {
            //const { scenesdata } = scenes[j];
            moviesscenedata += `<div class="item"> <div class="card__cover"> <div class="card__pict"> <a href="#" class="card__play"> <i class="fa fa-play"></i> </a> <img src="${scenes[j]}" class="img-fluid" /></div></div></div>`;
        }   
      }   
      $("#movie_scenes").append(moviesscenedata);
        var owl = $("#movie_scenes");
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

      //Helper
      function initializePlayer() {
        if ($('#player').length) {
          const player = new Plyr('#player');
        } else {
          return false;
        }
        return false;
      }
      $(window).on('load', initializePlayer());
    },

    // IF our API get any error
    error: function(error, status){
      // this function gets called.
      $(".loadr-row").addClass("d-none");
      let html = ` <div class="alert alert-danger"> Error while fetching data </div> `;
    },
});

