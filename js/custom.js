$(function(){

    var mNav            =   $('.mobile_nav'),
        nav             =   $('.nav li'),
        section         =   $('.section'),
        project         =   $('.project_txt'),
        wWidth          =   $(window).width(),
        wHeight         =   $(window).height(),
        wScroll         =   $(window).scrollTop(),
        executed        =   false,
        executed2       =   false,
        color           = 	['#d8a390','#f4e3cd','#d0c3b3','#aa9991','#8b837e'],
		animated		= 	$('html,body').is(':animated');


	
	
	
    //파티클 애니메이션
    var particles= document.getElementById("particles");

    function main(){
        var np = document.documentElement.clientWidth / 80;
        var dotColor = ["#3d3e52", "#a16857"];

        particles.innerHTML = "";
        for (var i = 0; i < np; i++){
            var w = document.documentElement.clientWidth;
            var h = document.documentElement.clientHeight;
            var rndw = Math.floor(Math.random() * w ) + 1;
            var rndh = Math.floor(Math.random() * h ) + 1;
            var widthpt = Math.floor(Math.random() * 10) + 4;
            var opty = Math.floor(Math.random() * 5) + 2;
            var anima = Math.floor(Math.random() * 16) + 8;
    
            var div = document.createElement("div");
            div.classList.add("particle");
            div.style.marginLeft = rndw+"px";
            div.style.marginTop = rndh+"px";
            div.style.width = widthpt+"px";
            div.style.height = widthpt+"px";
            div.style.background = dotColor[Math.floor(Math.random() * dotColor.length)];
            div.style.opacity = opty;
            div.style.animation = "move "+anima+"s ease-in-out infinite";
            particles.appendChild(div);
        }
    }
    window.addEventListener("resize", main);
    window.addEventListener("load", main);

    main();
    setInterval(animationBox,100);


	
	


    //모바일 메뉴버튼 클릭
    mNav.find('.ham').click(function(e){
        e.preventDefault();
        mNav_remove();
    });


	
	
	

    //버튼 클릭시 페이지 이동
    mNav.find('li').click(function(e){
        e.preventDefault();
        var target      =   $(this),
            inx         =   target.index(),
            section_inx =   section.eq(inx),
            offset      =   section_inx.offset().top;

        $('html,body').stop().animate({scrollTop:offset},800,function(){  
            },mNav_remove()
        );
    });



    //네브 클릭시 페이지 이동
    nav.click(function(e){
        e.preventDefault();
        var target      =   $(this),
            inx         =   target.index(),
            section_inx =   section.eq(inx),
            offset      =   section_inx.offset().top;

        $('html,body').stop().delay(100).animate({scrollTop:offset},800);
    });


	
	
	

    //로고 버튼 클릭시 이동
    $('h1').click(function(e){
        e.preventDefault();
        $('html,body').stop().animate({scrollTop:0},400,function(){
            
            mNav.find('ul').removeClass('active_ul');
            mNav.find('span').removeClass('active_ham');
            $('body').css({overflowY:'auto'});
        });
    })
    

	


    //초기값, 해당페이지 nav에 표시하기
    if(wScroll >=  section.eq(0).offset().top){
        var color1  = color[0];
        $('.side_txt, .main_txt').addClass('sec1');
        $('.nav ul li').eq(0).addClass('active1').siblings().removeClass('active1');
        $('.mobile_nav li').eq(0).addClass('active2').siblings().removeClass('active2');
        $('#header').css({background:color1});
    }if(wScroll >= section.eq(1).offset().top - 110){
        var color2  = color[1];
        $('.nav ul li').eq(1).addClass('active1').siblings().removeClass('active1');
        $('.mobile_nav li').eq(1).addClass('active2').siblings().removeClass('active2');
        $('#header').css({background:color2});
    }if(wScroll >= section.eq(2).offset().top - 110){
        var color3  = color[2];
        $('.nav ul li').eq(2).addClass('active1').siblings().removeClass('active1');
        $('.mobile_nav li').eq(2).addClass('active2').siblings().removeClass('active2');
        $('#header').css({background:color3});
    }if(wScroll >= section.eq(3).offset().top - 110){
        var color4  = color[3];
        $('.nav ul li').eq(3).addClass('active1').siblings().removeClass('active1');
        $('.mobile_nav li').eq(3).addClass('active2').siblings().removeClass('active2');
        $('#header').css({background:color4});
    }if(wScroll >= section.eq(4).offset().top - 110){
        var color5  = color[4];
        $('.nav ul li').eq(4).addClass('active1').siblings().removeClass('active1');
        $('.mobile_nav li').eq(4).addClass('active2').siblings().removeClass('active2');
        $('#header').css({background:color5});
    }
    


    //스크롤 이벤트
    $(window).on('scroll mousewheel DOMMouseScroll',function(){
            var wScroll         = $(this).scrollTop(),
            	color           = ['#d8a390','#f4e3cd','#d0c3b3','#aa9991','#8b837e'];
				

        //헤더 색상과 네브에 현재 위치 표기
        if(wScroll >=  section.eq(0).offset().top){
            var color1  = color[0];
            $('.side_txt, .main_txt').addClass('sec1');
            $('.nav ul li').eq(0).addClass('active1').siblings().removeClass('active1');
            $('.mobile_nav li').eq(0).addClass('active2').siblings().removeClass('active2');
            $('#header').css({background:color1});
        }if(wScroll >= section.eq(1).offset().top - 110){
            var color2  = color[1];
            $('.nav ul li').eq(1).addClass('active1').siblings().removeClass('active1');
            $('.mobile_nav li').eq(1).addClass('active2').siblings().removeClass('active2');
            $('#header').css({background:color2});
        }if(wScroll >= section.eq(2).offset().top - 110){
            var color3  = color[2];
            $('.nav ul li').eq(2).addClass('active1').siblings().removeClass('active1');
            $('.mobile_nav li').eq(2).addClass('active2').siblings().removeClass('active2');
            $('#header').css({background:color3});
        }if(wScroll >= section.eq(3).offset().top - 110){
            var color4  = color[3];
            $('.nav ul li').eq(3).addClass('active1').siblings().removeClass('active1');
            $('.mobile_nav li').eq(3).addClass('active2').siblings().removeClass('active2');
            $('#header').css({background:color4});
        }if(wScroll >= section.eq(4).offset().top - 110){
            var color5  = color[4];
            $('.nav ul li').eq(4).addClass('active1').siblings().removeClass('active1');
            $('.mobile_nav li').eq(4).addClass('active2').siblings().removeClass('active2');
            $('#header').css({background:color5});
        }




        if(wWidth > 768){
            //공통 애니메이션 효과

            if(wScroll >=  section.eq(0).offset().top && wScroll < section.eq(1).offset().top && !animated){
                $('.side_txt, .main_txt').addClass('sec1');
                $('.career h3, .licence h3, .licence li, .career li').removeClass('sec2');
                $('.section4 h3').removeClass('sec4');
                $('.last_txt h3, .last_txt blockquote, .last_txt p').removeClass('sec5');
            }if(wScroll >=  section.eq(1).offset().top - wHeight/2 - 200 && wScroll < section.eq(2).offset().top && !animated){
                if(executed == false){
                    grid();
                    setTimeout(abilityProgress,800);
                    executed = true;
                }
                $('.side_txt, .main_txt').removeClass('sec1');
                $('.career h3, .licence h3, .licence li, .career li').addClass('sec2');
                $('.section4 h3').removeClass('sec4');
                $('.last_txt h3, .last_txt blockquote, .last_txt p').removeClass('sec5');
            }if(wScroll >=  section.eq(2).offset().top - wHeight/2 - 200 && wScroll < section.eq(3).offset().top && !animated){
                $('.side_txt, .main_txt').removeClass('sec1');
                $('.career h3, .licence h3, .licence li, .career li').removeClass('sec2');
                $('.section4 h3').removeClass('sec4');
                $('.last_txt h3, .last_txt blockquote, .last_txt p').removeClass('sec5');

                if(wScroll > project.eq(0).offset().top - wHeight/2 - 200){
                    project.eq(0).stop().animate({opacity:'1'},100);
                }if(wScroll > project.eq(1).offset().top - wHeight/2 - 200){
                    project.eq(1).stop().animate({opacity:'1'},100);
                }if(wScroll > project.eq(2).offset().top - wHeight/2 - 200){
                    project.eq(2).stop().animate({opacity:'1'},100);
                }if(wScroll > project.eq(3).offset().top - wHeight/2 - 200){
                    project.eq(3).stop().animate({opacity:'1'},100);
                }
            }if(wScroll >=  section.eq(3).offset().top - wHeight/2 - 200 && wScroll < section.eq(4).offset().top && !animated){
                $('.side_txt, .main_txt').removeClass('sec1');
                $('.career h3, .licence h3, .licence li, .career li').removeClass('sec2');
                $('.section4 h3').addClass('sec4');
                $('.last_txt h3, .last_txt blockquote, .last_txt p').removeClass('sec5');
            }if(wScroll >=  section.eq(4).offset().top - wHeight/2 - 200){
                if(executed2 == false){
                    grid2();
                    executed2 = true;
                }
                $('.side_txt, .main_txt').removeClass('sec1');
                $('.career h3, .licence h3, .licence li, .career li').removeClass('sec2');
                $('.section4 h3').removeClass('sec4');
                $('.last_txt h3, .last_txt blockquote, .last_txt p').addClass('sec5');
            }
        }
		
		
		
		
		if(wWidth <= 768){
            //공통 애니메이션 효과
            if(wScroll >=  section.eq(0).offset().top && wScroll < section.eq(1).offset().top - wHeight/3 && !animated){
                $('.side_txt, .main_txt').addClass('sec1');
                $('.career h3, .licence h3, .licence li, .career li').removeClass('sec2');
                $('.section4 h3').removeClass('sec4');
                $('.last_txt h3, .last_txt blockquote, .last_txt p').removeClass('sec5');
            }if(wScroll >=  section.eq(1).offset().top - 300 && wScroll < section.eq(2).offset().top - wHeight/3 && !animated){
                if(executed == false){
                    setTimeout(abilityProgress,800);
                    grid();
                    executed = true;
                }
                $('.side_txt, .main_txt').removeClass('sec1');
                $('.career h3, .licence h3, .licence li, .career li').addClass('sec2');
                $('.section4 h3').removeClass('sec4');
                $('.last_txt h3, .last_txt blockquote, .last_txt p').removeClass('sec5');
            }if(wScroll >=  section.eq(2).offset().top - 300 && wScroll < section.eq(3).offset().top - wHeight/3 && !animated){
                $('.side_txt, .main_txt').removeClass('sec1');
                $('.career h3, .licence h3, .licence li, .career li').removeClass('sec2');
                $('.section4 h3').removeClass('sec4');
                $('.last_txt h3, .last_txt blockquote, .last_txt p').removeClass('sec5');

                if(wScroll > project.eq(0).offset().top - (wHeight - wHeight/3)){
                    project.eq(0).stop().animate({opacity:'1'},100);
                }if(wScroll > project.eq(1).offset().top - (wHeight - wHeight/3)){
                    project.eq(1).stop().animate({opacity:'1'},100);
                }if(wScroll > project.eq(2).offset().top - (wHeight - wHeight/3)){
                    project.eq(2).stop().animate({opacity:'1'},100);
                }if(wScroll > project.eq(3).offset().top - (wHeight - wHeight/3)){
                    project.eq(3).stop().animate({opacity:'1'},100);
                }
            }if(wScroll >=  section.eq(3).offset().top - 300 && wScroll < section.eq(4).offset().top - wHeight/3 && !animated){
                $('.side_txt, .main_txt').removeClass('sec1');
                $('.career h3, .licence h3, .licence li, .career li').removeClass('sec2');
                $('.section4 h3').addClass('sec4');
                $('.last_txt h3, .last_txt blockquote, .last_txt p').removeClass('sec5');
            }if(wScroll >=  section.eq(4).offset().top && !animated){
                if(executed2 == false){
                    grid2();
                    executed2 = true;
                }
                $('.side_txt, .main_txt').removeClass('sec1');
                $('.career h3, .licence h3, .licence li, .career li').removeClass('sec2');
                $('.section4 h3').removeClass('sec4');
                $('.last_txt h3, .last_txt blockquote, .last_txt p').addClass('sec5');
            }
        }
    });//scroll



    
    // 리사이징 이벤트
    $(window).resize(function(){
        var wScroll         = $(this).scrollTop();

        $('body').css({overflowY:'auto'});
        mNav.find('span').removeClass('active_ham');
        mNav.find('ul').removeClass('active_ul');
        setInterval(animationBox,100);


        //헤더 색상과 네브에 현재 위치 표기
        if(wScroll >=  section.eq(0).offset().top){
            var color1  = color[0];
            $('.side_txt, .main_txt').addClass('sec1');
            $('.nav ul li').eq(0).addClass('active1').siblings().removeClass('active1');
            $('.mobile_nav li').eq(0).addClass('active2').siblings().removeClass('active2');
            $('#header').css({background:color1});
        }if(wScroll >= section.eq(1).offset().top - 110){
            var color2  = color[1];
            $('.nav ul li').eq(1).addClass('active1').siblings().removeClass('active1');
            $('.mobile_nav li').eq(1).addClass('active2').siblings().removeClass('active2');
            $('#header').css({background:color2});
        }if(wScroll >= section.eq(2).offset().top - 110){
            var color3  = color[2];
            $('.nav ul li').eq(2).addClass('active1').siblings().removeClass('active1');
            $('.mobile_nav li').eq(2).addClass('active2').siblings().removeClass('active2');
            $('#header').css({background:color3});
        }if(wScroll >= section.eq(3).offset().top - 110){
            var color4  = color[3];
            $('.nav ul li').eq(3).addClass('active1').siblings().removeClass('active1');
            $('.mobile_nav li').eq(3).addClass('active2').siblings().removeClass('active2');
            $('#header').css({background:color4});
        }if(wScroll >= section.eq(4).offset().top - 110){
            var color5  = color[4];
            $('.nav ul li').eq(4).addClass('active1').siblings().removeClass('active1');
            $('.mobile_nav li').eq(4).addClass('active2').siblings().removeClass('active2');
            $('#header').css({background:color5});
        }

		
		
		
		
        if(wWidth > 768){
            //공통 애니메이션 효과
            if(wScroll >=  section.eq(0).offset().top && wScroll < section.eq(1).offset().top && !animated){
                $('.side_txt, .main_txt').addClass('sec1');
                $('.career h3, .licence h3, .licence li, .career li').removeClass('sec2');
                $('.section4 h3').removeClass('sec4');
                $('.last_txt h3, .last_txt blockquote, .last_txt p').removeClass('sec5');
            }if(wScroll >=  section.eq(1).offset().top - wHeight/2 - 200 && wScroll < section.eq(2).offset().top && !animated){
                if(executed == false){
                    setTimeout(abilityProgress,800);
                    grid();
                    executed = true;
                }
                $('.side_txt, .main_txt').removeClass('sec1');
                $('.career h3, .licence h3, .licence li, .career li').addClass('sec2');
                $('.section4 h3').removeClass('sec4');
                $('.last_txt h3, .last_txt blockquote, .last_txt p').removeClass('sec5');
            }if(wScroll >=  section.eq(2).offset().top - wHeight/2 - 200 && wScroll < section.eq(3).offset().top && !animated){
                $('.side_txt, .main_txt').removeClass('sec1');
                $('.career h3, .licence h3, .licence li, .career li').removeClass('sec2');
                $('.section4 h3').removeClass('sec4');
                $('.last_txt h3, .last_txt blockquote, .last_txt p').removeClass('sec5');

                if(wScroll > project.eq(0).offset().top - wHeight/2 - 200){
                    project.eq(0).stop().animate({opacity:'1'},100);
                }if(wScroll > project.eq(1).offset().top - wHeight/2 - 200){
                    project.eq(1).stop().animate({opacity:'1'},100);
                }if(wScroll > project.eq(2).offset().top - wHeight/2 - 200){
                    project.eq(2).stop().animate({opacity:'1'},100);
                }if(wScroll > project.eq(3).offset().top - wHeight/2 - 200){
                    project.eq(3).stop().animate({opacity:'1'},100);
                }
            }if(wScroll >=  section.eq(3).offset().top - wHeight/2 - 200 && wScroll < section.eq(4).offset().top && !animated){
                $('.side_txt, .main_txt').removeClass('sec1');
                $('.career h3, .licence h3, .licence li, .career li').removeClass('sec2');
                $('.section4 h3').addClass('sec4');
                $('.last_txt h3, .last_txt blockquote, .last_txt p').removeClass('sec5');
            }if(wScroll >=  section.eq(4).offset().top - wHeight/2 - 200){
                if(executed2 == false){
                    grid2();
                    executed2 = true;
                }
                $('.side_txt, .main_txt').removeClass('sec1');
                $('.career h3, .licence h3, .licence li, .career li').removeClass('sec2');
                $('.section4 h3').removeClass('sec4');
                $('.last_txt h3, .last_txt blockquote, .last_txt p').addClass('sec5');
            }
        }
		
		
		
		
		
		
		if(wWidth <= 768){
            //공통 애니메이션 효과
            if(wScroll >=  section.eq(0).offset().top && wScroll < section.eq(1).offset().top - wHeight/3 && !animated){
                $('.side_txt, .main_txt').addClass('sec1');
                $('.career h3, .licence h3, .licence li, .career li').removeClass('sec2');
                $('.section4 h3').removeClass('sec4');
                $('.last_txt h3, .last_txt blockquote, .last_txt p').removeClass('sec5');
            }if(wScroll >=  section.eq(1).offset().top - 300 && wScroll < section.eq(2).offset().top - wHeight/3 && !animated){
                if(executed == false){
                    setTimeout(abilityProgress,800);
                    grid();
                    executed = true;
                }
                $('.side_txt, .main_txt').removeClass('sec1');
                $('.career h3, .licence h3, .licence li, .career li').addClass('sec2');
                $('.section4 h3').removeClass('sec4');
                $('.last_txt h3, .last_txt blockquote, .last_txt p').removeClass('sec5');
            }if(wScroll >=  section.eq(2).offset().top - 300 && wScroll < section.eq(3).offset().top - wHeight/3 && !animated){
                $('.side_txt, .main_txt').removeClass('sec1');
                $('.career h3, .licence h3, .licence li, .career li').removeClass('sec2');
                $('.section4 h3').removeClass('sec4');
                $('.last_txt h3, .last_txt blockquote, .last_txt p').removeClass('sec5');

                if(wScroll > project.eq(0).offset().top - (wHeight - wHeight/3)){
                    project.eq(0).stop().animate({opacity:'1'},100);
                }if(wScroll > project.eq(1).offset().top - (wHeight - wHeight/3)){
                    project.eq(1).stop().animate({opacity:'1'},100);
                }if(wScroll > project.eq(2).offset().top - (wHeight - wHeight/3)){
                    project.eq(2).stop().animate({opacity:'1'},100);
                }if(wScroll > project.eq(3).offset().top - (wHeight - wHeight/3)){
                    project.eq(3).stop().animate({opacity:'1'},100);
                }
            }if(wScroll >=  section.eq(3).offset().top - 300 && wScroll < section.eq(4).offset().top - wHeight/3 && !animated){
                $('.side_txt, .main_txt').removeClass('sec1');
                $('.career h3, .licence h3, .licence li, .career li').removeClass('sec2');
                $('.section4 h3').addClass('sec4');
                $('.last_txt h3, .last_txt blockquote, .last_txt p').removeClass('sec5');
            }if(wScroll >=  section.eq(4).offset().top && !animated){
                if(executed2 == false){
                    grid2();
                    executed2 = true;
                }
                $('.side_txt, .main_txt').removeClass('sec1');
                $('.career h3, .licence h3, .licence li, .career li').removeClass('sec2');
                $('.section4 h3').removeClass('sec4');
                $('.last_txt h3, .last_txt blockquote, .last_txt p').addClass('sec5');
            }
        }
    });//resize





    ////////////////////////////////    function    ////////////////////////////////////////
    //grid 순서대로 내려오게하기
    function grid(){
        $('.grid1').each(function(i){
            $(this).stop().animate({height : '100%'},i*800);
        });//each
    }
    function grid2(){
        $('.grid2').each(function(inx){
            $(this).stop().animate({height : '100%'},inx*800);
        });//each
    }



    //모바일 버튼 이벤트
    function mNav_remove(){
        mNav.find('span').toggleClass('active_ham');
        mNav.find('ul').toggleClass('active_ul');

        var check   =   mNav.find('ul').hasClass('active_ul');
            if(check == true){ 
                $('body').css({overflowY:'hidden'});
            }if(check == false){
                $('body').css({overflowY:'auto'});
            }
    }
  


    //프로그레스바 만들기
    function abilityProgress(){
        html();
        css();
        java();
        jquery();
        photoshop();
        illustrate();
    }

    function html(){
        var progress        =   $('.progressbar1'),
            progressbar     =   progress.find('.bar span'),
            progressText    =   progress.find('.rate'),
            progressRate    =   progressText.attr('data-rate');

        //초기값
        progressbar.css({'width':'1px'});
        progressbar.stop().animate({width : progressRate + '%'},2000);

        $({html:0}).stop().animate({html:progressRate},{
            duration: 2100,
            progress:function(){
                now  =  this.html;
                progressText.text(Math.ceil(now)+'%');
            }
        });
    };

    function css(){
        var progress    =   $('.progressbar2'),
            progressbar     =   progress.find('.bar span'),
            progressText    =   progress.find('.rate'),
            progressRate    =   progressText.attr('data-rate');

        //초기값
        progressbar.css({'width':'1px'});
        progressbar.stop().animate({width : progressRate + '%'},2100);

        $({css:0}).stop().animate({css:progressRate},{
            duration: 2300,
            progress:function(){
                now  =  this.css;
                progressText.text(Math.ceil(now)+'%');
            }
        });
    };

    function java(){
        var progress    =   $('.progressbar3'),
            progressbar     =   progress.find('.bar span'),
            progressText    =   progress.find('.rate'),
            progressRate    =   progressText.attr('data-rate');

        //초기값
        progressbar.css({'width':'1px'});
        progressbar.stop().animate({width : progressRate + '%'},2200);

        $({java:0}).stop().animate({java:progressRate},{
            duration: 2500,
            progress:function(){
                now  =  this.java;
                progressText.text(Math.ceil(now)+'%');
            }
        });
    };

    function jquery(){
        var progress    =   $('.progressbar4'),
            progressbar     =   progress.find('.bar span'),
            progressText    =   progress.find('.rate'),
            progressRate    =   progressText.attr('data-rate');

        //초기값
        progressbar.css({'width':'1px'});
        progressbar.stop().animate({width : progressRate + '%'},2300);

        $({jquery:0}).stop().animate({jquery:progressRate},{
            duration: 2700,
            progress:function(){
                now  =  this.jquery;
                progressText.text(Math.ceil(now)+'%');
            }
        });
    };

    function photoshop(){
        var progress    =   $('.progressbar5'),
            progressbar     =   progress.find('.bar span'),
            progressText    =   progress.find('.rate'),
            progressRate    =   progressText.attr('data-rate');

        //초기값
        progressbar.css({'width':'1px'});
        progressbar.stop().animate({width : progressRate + '%'},2400);

        $({photoshop:0}).stop().animate({photoshop:progressRate},{
            duration: 2900,
            progress:function(){
                now  =  this.photoshop;
                progressText.text(Math.ceil(now)+'%');
            }
        });
    };

    function illustrate(){
        var progress    =   $('.progressbar6'),
            progressbar     =   progress.find('.bar span'),
            progressText    =   progress.find('.rate'),
            progressRate    =   progressText.attr('data-rate');

        //초기값
        progressbar.css({'width':'1px'});
        progressbar.stop().animate({width : progressRate + '%'},2500);

        $({illustrate:0}).stop().animate({illustrate:progressRate},{
            duration: 2500,
            progress:function(){
                now  =  this.illustrate;
                progressText.text(Math.ceil(now)+'%');
            }
        });
    };



    //애니메이션 박스 사이즈설정
    function animationBox(){
        animationW      = $('.animation').width();
        animationH      = $('.animation').css({'height' : animationW*0.8});
    }

    
});//doc end