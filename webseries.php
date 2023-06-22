<?php include('layout/header.php'); ?> 
 
	<section class="movies_page pd-top">		
		<main class="pt-0 w-100">
			<div class="">
				<div class="col-lg-12">
					<div class="owl-carousel movies_bannr" id="webseriesbanner"> </div> 
				</div> 
			</div> 
		</main>	
		
		<main class="container-fluid">
			<div class="row">
				<div class="col-lg-7">
					<h2> TOP <span style="font-weight:400"> BOLLYWOOD </span> </h2>
				</div>
			</div> <br />
			<div class="d-none loadr text-center"> <img src="assets/img/loading_1.gif" width="60px" class="img-fluid" /> </div> 
			<div class="row" id="bollywood-weblist"> </div>
		</main>
		
		<br /> <br />
		
		<main class="container-fluid">
			<div class="row">
				<div class="col-lg-7">
					<h2> TOP <span style="font-weight:400"> HOLLYWOOD </span> </h2>
				</div>
			</div> <br />
			<div class="d-none loadr text-center"> <img src="assets/img/loading_1.gif" width="60px" class="img-fluid" /> </div> 
			<div class="row" id="hollywood-weblist"> </div>
		</main> 
	</section>
	

<?php include('layout/footer.php'); ?>

