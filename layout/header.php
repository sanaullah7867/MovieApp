<?php
$page = basename($_SERVER['SCRIPT_NAME']);
$page = str_replace('','',$page);
$page = str_replace('.php','',$page);

$page_head = $page;
$page_head = str_replace('_',' ',$page_head);
$page_head =str_replace('.php','',$page_head);
$page_head = ucwords($page_head);
?>
<!DOCTYPE html>
<!--[if lt IE 7 ]> <html class="ie ie6 no-js" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 no-js" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 no-js" lang="en"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 no-js" lang="en"> <![endif]-->
<!--[if gt IE 9]><!-->
<html class="no-js" lang="en"><!--<![endif]-->
<head>

	<title> Movies App </title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta http-equiv='cache-control' content='no-cache'> 
	<meta http-equiv='expires' content='0'> 
	<meta http-equiv='pragma' content='no-cache'> 
	
	<link rel="icon" type="image/png" href="assets/favicon.ico"/>
    <link rel="apple-touch-icon" href="assets/favicon.ico" />
	
	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"> 
	<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:wght@100;200;300;400;500;700&display=swap" rel="stylesheet">

	<!-- Css Styles -->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" type="text/css">
    <link rel="stylesheet" href="assets/css/style.css?v=1.3" type="text/css">
 
	
	<!--
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="assets/js/jquery-2.2.4.min.js"></script>
	-->
	<script src="assets/js/jquery-3.3.1.min.js"></script>
	
	<!-- Web Application Manifest -->
	<link rel="manifest" href="manifest.webmanifest">
	<script src="pwa.js" type="module"></script>
	
	<!-- Chrome for Android theme color -->
	<meta name="theme-color" content="#000000">

	<!-- Add to homescreen for Chrome on Android -->
	<meta name="mobile-web-app-capable" content="yes">
	<meta name="application-name" content="PWA">
	<link rel="icon" sizes="512x512" href="assets/img/android-icon-512x512.png">

	<!-- Add to homescreen for Safari on iOS -->
	<meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="apple-mobile-web-app-status-bar-style" content="black">
	<meta name="apple-mobile-web-app-title" content="PWA">
	<link rel="apple-touch-icon" href="assets/img/pwa/android-icon-512x512.png">
 	
</head>
<body id="page-top">
	
	<nav class="navbar navbar-expand-lg d-block fixed-top" id="mainNav">  
		<div class="container-fluid relative">
			<a class="navbar-brand logo" href="index"> MOVIE APP  <img src="assets/img/play.png" class="img-fluid" />  </a>
			<ul class="res_login">  </ul>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav ml-auto">
					<?php include('layout/nav.php'); ?>
				</ul>
			</div>
		</div> 
	</nav>
	<div class="clear"></div>
	<nav class="" id="sidebar">
		<div class="container-fluid">
			<div id="dismiss">  <img src="assets/img/icon/close_w.svg" alt="" class="img-fluid d-block mx-auto" /></div>
			<a class="navbar-brand js-scroll-trigger logo" href="/"> MOVIE APP  <img src="assets/img/play.png" class="img-fluid" /> </a>
			<div class="list-unstyled components">
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
		</div>
	</nav>
	<div id="content">
		<div class="nav_height"></div>
		<div class="res_btn">
			<div class="row">
				<div class="col-sm-6 col-xs-6">
					<a class="navbar-brand logo" href="index"> MOVIE APP  <img src="assets/img/play.png" class="img-fluid" />  </a>
				</div>
				<div class="col-sm-6 col-xs-6 text-right">
					<a href="#" data-toggle="modal" data-target="#searchModal"> <i class="fa fa-search" aria-hidden="true"></i> </a>
					<button type="button" id="sidebarCollapse" class="btn">
						<span> <img src="assets/img/icon/menu.svg" alt="Menu" class="img-fluid center-block" /></span>
					</button>
				</div>
			</div>
		</div>
		<!-- <ul class="mobile_search"> <?php //include('layout/search.php'); ?> </ul> -->
	 