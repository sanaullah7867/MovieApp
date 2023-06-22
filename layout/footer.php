	<footer class="text-center">
		<p class="white">  &#169; MOVIE APP 2022 All Rights Reserved.  </p>
	</footer>
	
	<div class="app_menu">
		<ul>
			<li <?php if($page == "index"){?> class="active" <?php }?> class="nav-item"> 
				<a href="index"> 
					<svg id="Layer_1" style="enable-background:new 0 0 24 24;" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M21.146,8.576l-7.55-6.135c-0.925-0.751-2.267-0.751-3.192,0c0,0,0,0,0,0L2.855,8.575C2.59,8.79,2.439,9.108,2.439,9.448  v11.543c0,0.62,0.505,1.13,1.125,1.13h5.062c0.62,0,1.125-0.51,1.125-1.13v-7.306h4.499v7.306c0,0.62,0.505,1.13,1.125,1.13h5.062  c0.62,0,1.125-0.51,1.125-1.13V9.448C21.561,9.108,21.41,8.79,21.146,8.576z M20.436,20.997h-5.062V13.68  c0-0.62-0.505-1.119-1.125-1.119H9.75c-0.62,0-1.125,0.499-1.125,1.119v7.317H3.564V9.448l7.55-6.134  c0.513-0.418,1.26-0.417,1.773,0l7.55,6.134V20.997z"/></svg>
					Home
				</a>
			</li>
			<li <?php if($page == "movies"){?> class="active" <?php }?> class="nav-item">
				<a href="movies"> 
					<svg enable-background="new 0 0 48 48" height="48px" id="Layer_1" version="1.1" viewBox="0 0 48 48" width="48px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path clip-rule="evenodd" d="M43,42H5c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h38c2.209,0,4,1.791,4,4v28  C47,40.209,45.209,42,43,42z M12,8H5c-1.104,0-2,0.896-2,2v2h9V8z M23,8h-9v4h9V8z M34,8h-9v4h9V8z M45,10c0-1.104-0.896-2-2-2h-7v4  h9l0,0V10z M45,14L45,14H3v20h42l0,0V14z M45,36L45,36h-9v4h-2v-4h-9v4h-2v-4h-9v4h-2v-4H3v2c0,1.104,0.896,2,2,2h38  c1.104,0,2-0.896,2-2V36z M21.621,29.765C21.449,29.904,21.238,30,21,30c-0.553,0-1-0.447-1-1V19c0-0.552,0.447-1,1-1  c0.213,0,0.4,0.082,0.563,0.196l7.771,4.872C29.72,23.205,30,23.566,30,24c0,0.325-0.165,0.601-0.405,0.783L21.621,29.765z" fill-rule="evenodd"/></svg>
					Movies
				</a>
			</li>
			<li <?php if($page == "webseries"){?> class="active" <?php }?> class="nav-item"> 
				<a href="webseries"> 
					<svg id="Icons" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">.st0{fill:none;stroke:#dadada;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style> <path class="st0" d="M30,24L30,24c-9.3-1.3-18.7-1.3-28,0l0,0V6l0,0c9.3,1.3,18.7,1.3,28,0l0,0V24z"/><path class="st0" d="M24.7,28c-0.9-2.9-4.5-5-8.7-5c-4.3,0-7.8,2.1-8.7,5"/><path class="st0" d="M13,12V18c0,0.7,0.9,1.2,1.5,0.8l5-3c0.6-0.4,0.6-1.2,0-1.6l-5-3C13.9,10.7,13,11.2,13,12z"/></svg>
					Webseries
				</a>
			</li> 
			<li> 
				<a href="#" data-toggle="modal" data-target="#searchModal">
					<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27.007" viewBox="0 0 27 27.007"><path d="M31.184,29.545l-7.509-7.58a10.7,10.7,0,1,0-1.624,1.645l7.46,7.53a1.156,1.156,0,0,0,1.631.042A1.163,1.163,0,0,0,31.184,29.545ZM15.265,23.7a8.45,8.45,0,1,1,5.977-2.475A8.4,8.4,0,0,1,15.265,23.7Z" transform="translate(-4.5 -4.493)"/></svg>
					Search
				</a>
			</li>
		</ul>	
	</div>
</div>

<div class="menuoverlay"></div>
<div class="overlay"></div>
</body>
</html>

<div class="modal search_modal" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">  
			<div class="modal-body">
				<div class="search-body">
					<button type="button" class="close" data-dismiss="modal" aria-label="Close"> 
						<img src="assets/img/icon/arrow-left-short.svg" alt="" class="img-fluid d-block mx-auto" />
					</button> 
					<div class="search_data">
						<form role="form" class="relative">
							<div class="form-group searchform">
								<input type="text" name="search2" id="search2" class="menu_search form-control" placeholder="Let's find what your looking for..." spellcheck="false" autocomplete="off" autocorrect="off" onkeyup="search_new(this.value)" />
								<i class="fa fa-search" aria-hidden="true"></i>
							</div>
							<ul class="list-group search_result" id="result_mob"></ul>
						</form>
					</div> 
					<div class="recent_data">					
						<p> Recent </p>
						<div class="d-none owlloadr text-center"> <img src="assets/img/loading_1.gif" width="60px" class="img-fluid" /> </div>					
						<div class="" id="recent_item"> </div>
					</div>
				</div> 
			</div> 
		</div>
	</div>
</div>

<script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
<script type="text/javascript" src="assets/js/theme.js"></script>

<script>
	$(document).ready(function () {
		$('.nav-item a').on('click', function () {
			$('#sidebar').removeClass('active');
			$('.overlay').removeClass('active');
		});
		$('#dismiss, .overlay').on('click', function () {
			$('#sidebar').removeClass('active');
			$('.overlay').removeClass('active');
		});

		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').addClass('active');
			$('.overlay').addClass('active');
			$('.collapse.in').toggleClass('in');
			$('a[aria-expanded=true]').attr('aria-expanded', 'false');
		});
		/*
		if ($(window).width() < 550) {
		   const element = document.getElementById('right_menu');
		   element.remove(); // Removes the div with the 'div-02' id
		   alert('Less than 550');
		}
		*/
	});
</script>

 