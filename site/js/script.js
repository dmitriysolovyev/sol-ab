$(function () { // Same as document.addEventListener("DOMContentLoaded"...

	var images_back = [];

	function resize_images() {
		if(window.matchMedia('(max-width: 767px)').matches) {
			console.log('(max-width: 767px)');
			images_back = [ './images/01_768.png',
			                './images/02_768.png',
			                './images/03_768.png',
			                './images/04_768.png'];

		} else if(window.matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
			console.log('(min-width: 768px) and (max-width: 991px)');
			images_back = [ './images/01_768.png',
			                './images/02_768.png',
			                './images/03_768.png',
			                './images/04_768.png'];

		} else if(window.matchMedia('(min-width: 992px) and (max-width: 1199px)').matches) {
			console.log('(min-width: 992px) and (max-width: 1199px)');
			images_back = [ './images/01_992.png',
			                './images/02_992.png',
			                './images/03_992.png',
			                './images/04_992.png'];

		} else if(window.matchMedia('(min-width: 1200px)').matches) {
			console.log('(min-width: 1200px)');
			images_back = [ './images/01_1200.png',
		                    './images/02_1200.png',
		                    './images/03_1200.png',
		                    './images/04_1200.png'];
		}
	}

	var first_load = true;
	var indx = 0;
	function background_next() {
	           
		$('.background-img').css({'background':'url(' + images_back[indx] +
	            	                              ') no-repeat center center',
	        					  'background-size':'cover',
	        					  'opacity':'0'});
	}

	function change_image(){
		if (first_load) {
			background_next();
			first_load = false;
		} else {
			$('.background-img').animate({'opacity':'0'},
	            					     2500,
	        					         background_next);
		}
	    $('.background-img').animate({'opacity':'1'},
	        						 1200,
	        						 function() {
	        						 	indx = ++indx % images_back.length;
	        						 });
	}

	$(window).resize(resize_images);
	resize_images();

	change_image();
	var interval = setInterval(change_image,8000);
});
