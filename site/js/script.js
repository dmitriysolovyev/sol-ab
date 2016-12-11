
var imgHead = [];

function change_image() {
	if(window.matchMedia('(max-width: 767px)').matches) {
		console.log('(max-width: 767px)');
		imgHead = [ './images/01_768.png',
		            './images/02_768.png',
		            './images/03_768.png',
		            './images/04_768.png'];

	} else if(window.matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
		console.log('(min-width: 768px) and (max-width: 991px)');
		imgHead = [ './images/01_768.png',
		            './images/02_768.png',
		            './images/03_768.png',
		            './images/04_768.png'];

	} else if(window.matchMedia('(min-width: 992px) and (max-width: 1199px)').matches) {
		console.log('(min-width: 992px) and (max-width: 1199px)');
		imgHead = [ './images/01_992.png',
		            './images/02_992.png',
		            './images/03_992.png',
		            './images/04_992.png'];

	} else if(window.matchMedia('(min-width: 1200px)').matches) {
		console.log('(min-width: 1200px)');
		imgHead = [ './images/01_1200.png',
	                './images/02_1200.png',
	                './images/03_1200.png',
	                './images/04_1200.png'];
	}
}

change_image();
$(window).resize(change_image);

var i=1;
function csaHead(){

    if(i > (imgHead.length-1)){
        $('.background-img').animate({'opacity':'0'},
        							 3000,
        							 function(){
            i=1;
            $('.background-img').css({'background':'url('+imgHead[0]+') no-repeat center center',
        						'background-size': 'cover'});
        });
        $('.background-img').animate({'opacity':'1'},
        							 1000);
    }else{
        $('.background-img').animate({'opacity':'0'},
        							 3000,
        							 function(){
            $('.background-img').css({'background':'url('+imgHead[i]+') no-repeat center center',
        						'background-size': 'cover'});
            i++;
        });
        $('.background-img').animate({'opacity':'1'},1000);
    }
}
// csaHead();
var intervalCsaHead = setInterval(csaHead,10000);