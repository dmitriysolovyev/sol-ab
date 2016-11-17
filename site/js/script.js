var imgHead = [
	            './images/1.png',
	            './images/2.png',
	            './images/3.png',
	            './images/4.png'
	        ], i=1;
	    function csaHead(){

	        if(i > (imgHead.length-1)){
	            $('.csa-head').animate({'opacity':'0'},300,function(){
	                i=1;
	                $('.csa-head').css({'background':'url('+imgHead[0]+') no-repeat center center',
	            						'background-size': 'cover'});
	            });
	            $('.csa-head').animate({'opacity':'1'},300);
	        }else{
	            $('.csa-head').animate({'opacity':'0'},300,function(){
	                $('.csa-head').css({'background':'url('+imgHead[i]+') no-repeat center center',
	            						'background-size': 'cover'});
	                i++;
	            });
	            $('.csa-head').animate({'opacity':'1'},300);
	        }
	    }
	    csaHead();
	    var intervalCsaHead = setInterval(csaHead,4000);