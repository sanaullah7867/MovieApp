
// Movies Page DATA

  // Movie Slider
  $.ajax({
    url: "assets/database/movies_nested.json", //API URL
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
      //console.log(dtype);

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
      const { id, title, description, year, video, image, movie_banner, poster, rating, running_time, countries, cast, genre, director, trailer, type, scenes, gallery, sctitle } = movies[i];
      if(did === id){
        html += `<div class="col-lg-9">
          <video controls crossorigin playsinline poster="${poster}" id="player">
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
       
        // Cast Data Fetch        
        var castdata = "";
         for (let e = 0; e < cast.length; e++) 
            {
              var actor = cast[e].actor;
              var actor_pic = cast[e].actor_pic;
              console.log(cast);
              castdata += `<div class="col-lg-2 col-md-3 col-sm-3 col-xs-6"> <a href="#" class="white"> <img src="${actor_pic}" class="img-fluid" /> <span cl
              ="d-block">${actor}</span></a></div>`;
            }
       
        moviesdata += `<div class="col-lg-12">       
          <h2 class="white semi_bold"> ${title} (${year}) </h2>
          <p class="card__desc"> ${description} </p>
          <ul class="card__meta">
            <li><span>Genre:</span> <a href="#">${genre}</a>   </li>
            <li><span>Director:</span> <a href="#"> ${director} </a></li>  
            <li><span>Running time:</span> <a href="#"> ${running_time} min</a></li>
            <li><span>Country:</span> <a href="#"> ${countries} </a></li> 
            <!-- <li><span>Cast:</span> <span class="row" id="cast_data"></span> </li> -->
          </ul>  
          <h4>Cast:</h4> <div class="row" id="cast_data"></div>            
        </div>`;
      

          //console.log(scenes); 
          if(scenes)
          {
              for (let j = 0; j < scenes.length; j++) 
              {
                  //const { scenesdata } = scenes[j]; 
                  var scenesTitle = scenes[j].sctitle;
                  var url = scenes[j].url;
                  moviesscenedata += `<div class="item">  <a class="card__pict d-block" data-fancybox href="https://www.youtube.com/watch?v=${url}"> <!-- <div class="youtube-link card__pict" youtubeid="${url}">--> <span class="card__play"> <i class="fa fa-play"></i> </span>  <img src="https://img.youtube.com/vi/${url}/mqdefault.jpg" class="img-fluid w-100" /> </a> <p class="mt-8"> ${scenesTitle} </p> </div>`;
              } 
          }
          if(gallery)
          {
              for (let g = 0; g < gallery.length; g++) 
              {
                  movie_gallerydata += `<div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-6"> <div class="thumb">
                  <a class="icon-box d-block" href="${gallery[g]}" data-fancybox="gallery" data-caption="${title} (${year})">
                  <img src="${gallery[g]}" class="img-fluid" /> </a> </div></div>`;
              } 
          }

       }  // IF End
    
    }  // For END
      
      $("#video_trailer").append(html);
      $("#movie_details").append(moviesdata);   
      $("#movie_gallery").append(movie_gallerydata);
      $("#movie_scenes").append(moviesscenedata); 
      $("#cast_data").append(castdata); 
     
      $('#movie_scenes').owlCarousel({
          // loop:true,
           items:5,
           margin:20,
           nav: true,
           dots: true,
           lazyLoad: true,
           autoplay: true,
           responsive:{
             0:{ items: 2 },
             600:{ items: 3 },
             1000:{ items: 4 },
             1300:{ items: 5 }
           }
      });

      // Fancybox Config
      $('[data-fancybox="gallery"]').fancybox({
        buttons: [
          "slideShow",
          "thumbs",
          "zoom",
          "fullScreen",
          "share",
          "close"
        ],
          loop: false,
          protect: true
        });

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




