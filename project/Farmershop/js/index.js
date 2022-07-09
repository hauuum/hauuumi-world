window.onload = function(){

    var bannerimg   =   $('.banner img'),
        current     =   0,
        section         =   $('section'),
        $thisTop    =   $(this).scrollTop();



    //초기값
    $('.all').addClass('filtering');
    bannerimg.eq(current).fadeIn();
    headerScroll();
    scrollOffset();
    scrollMenu();
    setInterval(imgFadeInOut,3000);
    filtering();



    // 리사이즈할때
    $(window).resize(function(e){
        e.preventDefault();
        var winWidth    =   $(window).width();

        headerScroll();

        if(winWidth > 768){
            $('.mobile_ul').removeClass('mobileHas')
            $('body').css({'overflow':'auto'});
        }
    });




    //모바일 ham 버튼 클릭시
    $('.mobile_btn').click(function(e){
        e.preventDefault();

        var mobile_ul   =   $('.mobile_ul'),
            checking    =   $('.header>ul').hasClass('mobileHas');

        mobile_ul.toggleClass('mobileHas');
        
        if(checking == true){
            $('body').css({'overflow':'auto'});
            headerScroll();
        }else{
            $('body').css({'overflow':'hidden'});
            $(window).on("mousewheel DOMMouseScroll", function(event, delta){
                if(delta > 0){
                    $('#header').stop().animate({top:'0'},200);
                }if(delta < 0){
                    $('#header').stop().animate({top:'0'},200);
                }  
            });
        }
    });




    //메뉴 클릭시 이동
    $('nav ul li').click(function(e){
        e.preventDefault();

        var $this           =   $(this).index(),
            section         =   $('section'),
            sectionInx      =   section.eq($this).offset().top;
           
            $('html,body').stop().animate({scrollTop: sectionInx},600);

            if($this == 0){
                $('#header').stop().animate({top:'0'},600);
            }if($this > 0){
                $('#header').stop().animate({top:'-80'},600);
            }

           $(this).addClass('click').siblings('li').removeClass('click');
    });




    //모바일 메뉴 클릭시 이동
    $('.mobile_ul > li').click(function(e){
        e.preventDefault();

        var $this           =   $(this).index(),
            section         =   $('section'),
            sectionInx      =   section.eq($this).offset().top;
           
            $('.mobile_ul').delay(200).removeClass('mobileHas');
            $('html,body').stop().animate({scrollTop: sectionInx - 60},600,function(){
                $('body').css({'overflow':'auto'});
            },headerScroll());

            $(this).addClass('mClick').siblings('li').removeClass('mClick');
    });





    //회원가입, 로그인 버튼 클릭시
    $('.sign, .login').click(function(e){
        e.preventDefault();

        $('.mobile_ul').delay(200).removeClass('mobileHas');
        $('html,body').animate({scrollTop:0},600,function(){
            $('body').css({'overflow':'auto'});
        },headerScroll());
    });





    ///////////////////////////////     function     ///////////////////////////////
    function headerScroll(){

        $(window).on("scroll mousewheel DOMMouseScroll", function(e, delta){
            if(delta > 0){
                $('#header').stop().animate({top:'0'},200);
            }if(delta < 0){
                $('#header').stop().animate({top:'-80'},200);
            }  
        });
    }



    function imgFadeInOut(){

        var imgNum      =   bannerimg.length,
            nextinx     =   (current+1)%imgNum;
         
        bannerimg.eq(current).fadeOut();
        bannerimg.eq(nextinx).fadeIn();
        current = nextinx;
    }




    function scrollMenu(){
        $(window).on("scroll mousewheel DOMMouseScroll", function(){

            var $thisTop    =   $(this).scrollTop(),
                move        =   $('html,body').is(':animated');

            if($thisTop >= section.eq(0).offset().top && $thisTop < section.eq(1).offset().top && !move){
                $('nav li').eq(0).addClass('click').siblings('li').removeClass('click');
                $('.mobile_ul li').eq(0).addClass('mClick').siblings('li').removeClass('mClick');
                
            }if($thisTop >= section.eq(1).offset().top - 80 && $thisTop < section.eq(2).offset().top && !move){
                $('nav li').eq(1).addClass('click').siblings('li').removeClass('click');
                $('.mobile_ul li').eq(1).addClass('mClick').siblings('li').removeClass('mClick');
                
            }if($thisTop >= section.eq(2).offset().top - 80 && $thisTop < section.eq(3).offset().top && !move){
                $('nav li').eq(2).addClass('click').siblings('li').removeClass('click');
                $('.mobile_ul li').eq(2).addClass('mClick').siblings('li').removeClass('mClick');
                
            }if($thisTop >= section.eq(3).offset().top - 80 && $thisTop < section.eq(4).offset().top && !move){
                $('nav li').eq(3).addClass('click').siblings('li').removeClass('click');
                $('.mobile_ul li').eq(3).addClass('mClick').siblings('li').removeClass('mClick');
				$('.service .star').delay(800).addClass('hoverStar');

            }if($thisTop >= section.eq(4).offset().top - 80 && $thisTop < section.eq(5).offset().top && !move){
                $('nav li').eq(4).addClass('click').siblings('li').removeClass('click');
                $('.mobile_ul li').eq(4).addClass('mClick').siblings('li').removeClass('mClick');
                
            }if($thisTop >= section.eq(5).offset().top - 80 && !move){
                $('nav li').eq(5).addClass('click').siblings('li').removeClass('click');
                $('.mobile_ul li').eq(5).addClass('mClick').siblings('li').removeClass('mClick');
            }
        });
    }




    function scrollOffset(){
        var $thisTop    =   $(this).scrollTop();

        if($thisTop >= section.eq(0).offset().top && $thisTop < section.eq(1).offset().top){
            $('nav li').eq(0).addClass('click').siblings('li').removeClass('click');
            $('.mobile_ul li').eq(0).addClass('mClick').siblings('li').removeClass('mClick');
            

        }if($thisTop >= section.eq(1).offset().top - 80 && $thisTop < section.eq(2).offset().top){
            $('nav li').eq(1).addClass('click').siblings('li').removeClass('click');
            $('.mobile_ul li').eq(1).addClass('mClick').siblings('li').removeClass('mClick');
            
        }if($thisTop >= section.eq(2).offset().top - 80 && $thisTop < section.eq(3).offset().top){
            $('nav li').eq(2).addClass('click').siblings('li').removeClass('click');
            $('.mobile_ul li').eq(2).addClass('mClick').siblings('li').removeClass('mClick');
            
        }if($thisTop >= section.eq(3).offset().top - 80 && $thisTop < section.eq(4).offset().top){
            $('nav li').eq(3).addClass('click').siblings('li').removeClass('click');
            $('.mobile_ul li').eq(3).addClass('mClick').siblings('li').removeClass('mClick');

        }if($thisTop >= section.eq(4).offset().top - 80 && $thisTop < section.eq(5).offset().top){
            $('nav li').eq(4).addClass('click').siblings('li').removeClass('click');
            $('.mobile_ul li').eq(4).addClass('mClick').siblings('li').removeClass('mClick');
            
        }if($thisTop >= section.eq(5).offset().top - 80){
            $('nav li').eq(5).addClass('click').siblings('li').removeClass('click');
            $('.mobile_ul li').eq(5).addClass('mClick').siblings('li').removeClass('mClick');
            
        }
    }
    

    

    function filtering(){
        var tab         =   $('.tab_menu'),
            itemList    =   $('.item_list');

        tab.find('.btn.all').click(function(event){
            event.preventDefault();
            $(this).addClass('color').siblings().removeClass('color');
            itemList.find('.all').css({display:'block'});
		});
		
        tab.find('.fruit').click(function(event){
            event.preventDefault();
            $(this).addClass('color').siblings().removeClass('color');
            itemList.find('.product.fruit').css({display:'block'});
            itemList.find('.product.food').add('.product.vegetable').css({display:'none'});
		});
		
        tab.find('.vegetable').click(function(event){
            event.preventDefault();
            $(this).addClass('color').siblings().removeClass('color');
            itemList.find('.product.vegetable').css({display:'block'});
            itemList.find('.product.food').add('.product.fruit').css({display:'none'});
        });

        tab.find('.food').click(function(event){
            event.preventDefault();
            $(this).addClass('color').siblings().removeClass('color');
            itemList.find('.product.food').css({display:'block'});
            itemList.find('.product.fruit').add('.product.vegetable').css({display:'none'});
        });
	}

};//doc end

