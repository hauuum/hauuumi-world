		

$(document).ready(function(){


		//라이트박스
        $(".lightbox").lightGallery({
            thumbnail: true, //썸네일
            autoplay: true,
            pause: 3000,
            progressBar: true
        }); 
        




		//이미지 슬라이드
		$(".slider").slick({
	                dots: true,
	                autoplay: true,
	                autoplaySpeed: 2000,
	                arrows: true,
	                responsive: [
				        {
				            breakpoint: 768,
				            settings: {
				                autoplay: false
				            }
				        }
				    ]
	    });

	    $(window).resize(function(){
	    	var wWidth = $(window).width();
	    	if(wWidth > 600) {
	    		$(".nav").removeAttr("style");
	    	}
	    });






		//메뉴 접기 펼치기
		$('.btn').on('click touch',function(e){
			e.preventDefault();
			$('.nav').slideToggle();

			$('.btn').toggleClass("open");

				if( $('.btn').hasClass("open")){
					$('.btn').find('i').attr("class" , "fa fa-angle-up").css({});
				}else{
					$('.btn').find('i').attr("class" , "fa fa-angle-down");
				}
		});



}); //doc end