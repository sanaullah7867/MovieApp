
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
       
     // console.log(response.webseries);

      // Get value from URL
      const queryString = window.location.search;
	
      var urlparam = queryString.split('?'); 
      var urlvalue = urlparam[1].split('&');
      
      var did= urlvalue[0].split('=');
      var did= did[1];
      var dtype= urlvalue[1].split('=');
      var dtype= dtype[1];
      console.log(dtype);


      var moviesdata = "";
      var moviesscenedata = "";
      var movie_gallerydata = "";
 

      $(".loadr").addClass("d-none");let html = "";
      if(dtype === 'Web%20Series'){
        var movies = response.webseries;
        var acount = response.webseries.length
      }
      if(dtype === 'Movie'){
        var movies = response.movies;
        var acount = response.movies.length
      }
     // console.log(movies);
     
     //  var countm = Object.keys(movies). length;
     // alert(acount);
      for (let i = 0; i < acount; i++) {
        
      //for (let i = 0; i < response.length; i++) {
        const { id, title, description, year, video, image, rating, running_time, countries, actor, genre, director, movie_banner, trailer, type, scenes, gallery, sctitle } = movies[i];
        if(did === id){
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
      
          // console.log(movies);
          if(scenes)
          {
              for (let j = 0; j < scenes.length; j++) 
              {
                  //const { scenesdata } = scenes[j]; 
                  moviesscenedata += `<div class="item"> <a class="glightbox3" href="https://www.youtube.com/watch?v=${trailer}"> <div class="card__pict"> <span class="card__play"> <i class="fa fa-play"></i> </span>  <img src="https://img.youtube.com/vi/${trailer}/mqdefault.jpg" class="img-fluid" />  </div> </a> <p> ${sctitle} </p> </div>`;
              } 
          }
          if(gallery)
          {
              for (let g = 0; g < gallery.length; g++) 
              {
                  movie_gallerydata += `<div class="col-lg-3 col-md-4 col-sm-4 col-xs-6"> <div class="thumb"> <a href="${gallery[g]}" class="glightbox d-block"> <img src="${gallery[g]}" class="img-fluid" /> </a> </div></div>`;
              } 
          }

       }  // IF End
    
    }  // For END
      
      $("#video_trailer").append(html);
      $("#movie_details").append(moviesdata);   
      $("#movie_gallery").append(movie_gallerydata);
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
      // LightBox
      var lightbox = GLightbox();
      lightbox.on('open', (target) => {
        console.log('lightbox opened');
      });
      var lightboxDescription = GLightbox({
        selector: '.glightbox2'
      });
      var lightboxVideo = GLightbox({
        selector: '.glightbox3'
      });
      lightboxVideo.on('slide_changed', ({ prev, current }) => {
        console.log('Prev slide', prev);
        console.log('Current slide', current);

        const { slideIndex, slideNode, slideConfig, player } = current;

        if (player) {
          if (!player.ready) {
            // If player is not ready
            player.on('ready', (event) => {
              // Do something when video is ready
            });
          }

          player.on('play', (event) => {
            console.log('Started play');
          });

          player.on('volumechange', (event) => {
            console.log('Volume change');
          });

          player.on('ended', (event) => {
            console.log('Video ended');
          });
        }
      });
    },

    // IF our API get any error
    error: function(error, status){
      // this function gets called.
      $(".loadr-row").addClass("d-none");
      let html = ` <div class="alert alert-danger"> Error while fetching data </div> `;
    },
});




