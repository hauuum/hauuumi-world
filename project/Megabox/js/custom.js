(function($){
	
        //banner slider
        var mySwiper = new Swiper('.swiper-container', {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
            autoplay: {
                delay: 3000,
            },
        });
        


		
		//event slider
        var mySwiper = new Swiper('.swiper-container3', {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            },
        });
        
        

		
		
        //movieChart slider
        var mySwiper = new Swiper('.swiper-container2', {
            slidesPerView: 4,
            spaceBetween: 24,
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
            breakpoints: {
                600: {
                    slidesPerView: 1.4,
                    spaceBetween: 24
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 24
                },
                960: {
                    slidesPerView: 3,
                    spaceBetween: 24
                }
            }
        });
        
		
		
        //moviechart tapMenu
        var movBtn = $(".movie_title > ul > li");
        var movCont = $(".movie_chart > div");
        
        movCont.hide().eq(0).show();
        
        movBtn.click(function(e){
            e.preventDefault();
            var target = $(this);
            var index = target.index();
            movBtn.removeClass("active");
            target.addClass("active");
            movCont.css("display","none");
            movCont.eq(index).css("display","block");
        });
		
		
		
		
		//notice tapMenu
		var tabMenu = $('.notice');
		
		tabMenu.find('ul > li > ul').hide();
		tabMenu.find('li.active > ul').show();
		
		function tabList(e){
			e.preventDefault();
			var target = $(this);
			target.next().show().parent('li').addClass('active').siblings('li').removeClass('active').find('ul').hide();
        }

		tabMenu.find('ul > li > a').click(tabList).focus(tabList);
		
})(jQuery);     