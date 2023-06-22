<?php include('layout/header.php'); ?> 
<?php
	//$id = $_GET['id'];
?> 
	<section class="details_page pd-top" id="moviedetails">
		<div class="container-fluid firstbg"> 
			<div class="d-none loadr text-center"> <img src="assets/img/loading_1.gif" width="40px" class="img-fluid" /> </div>
			<div class="row justify-content-md-center" id="video_trailer"> </div> 
		</div>
			<br />			
		<div class="container-fluid"> 
			<div class="row justify-content-md-center" id="movie_details"> </div>	
			<br />
			<div class="row">
				<div class="col-lg-10">
					<h2 class="white semi_bold"> Scenes </h2>
				</div>
				<div class="col-lg-2 text-right">
					<div class="customNavigation">
						<a class="btn prev"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></a>
						<a class="btn next"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
					</div> 
				</div>
				<div class="col-lg-12">
					<div class="owl-carousel" id="movie_scenes"> </div>
				</div>
			</div>
			<br />
			<div class="row">
				<div class="col-lg-10">
					<h2 class="white semi_bold"> Gallery </h2>
				</div> 
				<div class="col-lg-12">
					<div class="row" id="movie_gallery"> </div>
				</div>
			</div>
		</div>
	</section>
	<section class="new_items slide_items">
		<div class="container-fluid">			
			<div class="row justify-content-md-center">
				<div class="col-lg-12">
					<div class="row">
						<div class="col-lg-10">
							<h3> Movies <span style="font-weight:400"> You May Like </span> </h3>
						</div>
						<div class="col-lg-2 text-right">
							<div class="customNavigation">
								<a class="btn prev"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></a>
								<a class="btn next"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
							</div>
						</div>
					</div>
					<div class="d-none topmoviesloadr text-center"> <img src="assets/img/loading_1.gif" width="60px" class="img-fluid" /> </div>					
					<div class="owl-carousel" id="topmovies"> </div>
				</div>	<!-- -->	
			</div>	
		</div>
	</section>

<?php include('layout/footer.php'); ?>

<!-- Player -->
<link rel="stylesheet" href="assets/css/plyr.css?v=1.3" type="text/css">
<script src="assets/js/plyr.min.js"></script>
<script src="assets/js/details_api.js"></script>

