
	<li <?php if($page == "index"){?> class="active" <?php }?> class="nav-item"><a href="index" class="active">Home</a></li>
	<li <?php if($page == "movies"){?> class="active" <?php }?> class="nav-item"><a href="movies"> Movies </a></li>
	<li <?php if($page == "webseries"){?> class="active" <?php }?> class="nav-item"><a href="webseries"> Web Series </a></li>						
	<li <?php if($page == "tvshows"){?> class="active" <?php }?> class="nav-item"><a href="#"> TV Shows </a></li>				
	<li <?php if($page == "sports"){?> class="active" <?php }?> class="nav-item"><a href="#"> Sports </a></li>	
	<li class="nav-item right_menu" id="right_menu">
		<ul>
			<?php include('layout/search.php'); ?>
			<li> <a href="#"> <img src="assets/img/subscribe.png" class="img-fluid" /> Subscribe </a> </li> 
			<li> <a href="#"> <i class="fa fa-user-circle-o" aria-hidden="true"></i> Sign In </a> </li> 
			<li class="nav-item dropdown">
				<a href="#" id="explore" data-toggle="collapse" data-target="#SlideMenu"> <img src="assets/img/icon/menu.svg" class="img-fluid">  </a>
				<div id="SlideMenu" class="collapse dropdown_menu">
					<div id="main">
						<div class="accordion" id="accordionExample"> 
							<div>
								<div class="card-header collapsed" id="id01">
									<button class="btn btn-link" data-toggle="collapse" data-target="#collapse01"> <span> Explore</span> <i class="fa fa-angle-up" aria-hidden="true"></i> </button>
								</div>
								<div id="collapse01" class="collapse show" aria-labelledby="id01" data-parent="#accordionExample">
									<div class="card-body">
										<ul>
											<li> <a href="index"> Home </a> </li>
											<li> <a href="movies"> Movies </a> </li>
											<li> <a href="webseries"> Web Series </a> </li>
											<li> <a href="#"> TV Shows </a> </li>
											<li> <a href="#"> Sports </a> </li>
											<li> <a href="#"> News </a> </li>
											<li> <a href="#"> Kids </a> </li>
											<li> <a href="#"> Premium </a> </li>
										</ul>
									</div>
								</div>
							</div> <!-- -->
							<div>
								<div class="card-header collapsed" id="id02">
									<button class="btn btn-link" data-toggle="collapse" data-target="#collapse02"> <span> Plans</span> <i class="fa fa-angle-down" aria-hidden="true"></i> </button>
								</div>
								<div id="collapse02" class="collapse" aria-labelledby="id02" data-parent="#accordionExample">
									<div class="card-body">
										<ul>
											<li> <a href="#"> Buy Plan  </a> </li>
											<li> <a href="#"> Have a coupen code ? </a> </li> 
										</ul>
									</div>
								</div>
							</div> <!-- -->
							<div>
								<div class="card-header collapsed" id="id03">
									<button class="btn btn-link" data-toggle="collapse" data-target="#collapse03"> <span> Settings</span> <i class="fa fa-angle-down" aria-hidden="true"></i> </button>
								</div>
								<div id="collapse03" class="collapse" aria-labelledby="id03" data-parent="#accordionExample">
									<div class="card-body">
										<ul>
											<li> <a href="#"> Reset settings to default </a> </li>
										</ul>
									</div>
								</div>
							</div> <!-- --> 
							<div>
								<div class="card-header collapsed" id="id04">
									<button class="btn btn-link" data-toggle="collapse" data-target="#collapse04"> <span> Info </span> <i class="fa fa-angle-down" aria-hidden="true"></i> </button>
								</div>
								<div id="collapse04" class="collapse" aria-labelledby="id04" data-parent="#accordionExample">
									<div class="card-body">
										<ul>
											<li> <a href="#"> About Us </a> </li>
											<li> <a href="#"> My Account </a> </li>
											<li> <a href="#"> Help Center </a> </li>
											<li> <a href="#"> Terms of Use </a> </li>
											<li> <a href="#"> Privacy Policy </a> </li>
										</ul>
									</div>
								</div>
							</div> <!-- -->  
						</div>
					</div>
				</div>
			</li>