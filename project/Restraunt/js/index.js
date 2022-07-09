// JavaScript Document
window.onload = function(){ 
	var wW			=	$(window).width(),
		wH			=	$(window).height(),
		section		=	$('.section'),
		thisTop		=	$(this).scrollTop();

	mouseEvent();
	scrollAnimation();
	reset();
	current_btnInx();
	



	//이미지 슬라이드
	$('.sec5_img').slick({
		dots: true,
		speed:600,
		autoplay: true,
		autoplaySpeed:2000,
		arrows: false,
		responsive: [
			{
				breakpoint: 768,
				setting: {
					autoplay: false,
					dots: true
				}
			}
		]
	});



	//모바일버튼 이벤트
	$('#nav .btn').click(function(e){
		e.preventDefault();
		$('#nav ul').toggleClass('active');
		
		var activeUl = $('#nav ul').hasClass('active');
		
			if(activeUl == true){
				$('body').css({overflowY:'hidden'});
				$('.btn').addClass('close')
			}if(activeUl == false){
				$('body').css({overflowY:'auto'});
				$('.btn').removeClass('close')
			}
	})



	//버튼 누르면 이동하기
	$('#nav li').click(function(e){
		e.preventDefault();

		var $this		=	$(this),
			$thisInx	=	$this.index(),
			sectionInx	=	section.eq($thisInx);

			$('html,body').stop().animate({scrollTop:sectionInx.offset().top},600,scrollAnimation(),function(){
				$('body').css({overflowY:'auto'}),reset();
			});
			$('#nav ul').removeClass('active');
			$('.btn').removeClass('close');
			
			$this.addClass('active_inx').siblings('#nav li').removeClass('active_inx');
	})
	

	

	//리사이징 이벤트
	$(window).resize(function(){
		reset();
		mouseEvent();
		scrollAnimation();
		current_btnInx();
	})



	
//////////////////////////////////	       Function			///////////////////////////////////////////////

	function mouseEvent(){
		if(wW > 1024){
			$('#section1').on('mousemove', function(e){
				m_x	=		e.pageX;
				m_y	=		e.pageY;
				$('.section1 img').offset({left:(-m_x*0.04), top:(-m_y*0.04)-100});
			});//sec1 mouse end	
		}else{
			$('#section1').off('mousemove');
		}
	}
	


	function scrollAnimation(){
		var move	= $('html,body').is(':animated');
	
		$(window).scroll(function(){
			var thisTop	=	$(this).scrollTop();
			var once = false;
			
			//SECTION1
			if(thisTop >= section.eq(0).offset().top && thisTop < section.eq(1).offset().top && !move){
				$('#nav li').eq(0).addClass('active_inx').siblings('#nav li').removeClass('active_inx');

				if(thisTop >= $('.sec1_box1').offset().top - wH/2 && thisTop < $('.sec1_box2').offset().top - wH/2 && !move){
				}
				if(thisTop >= $('.sec1_box2').offset().top - wH/2 && thisTop < section.eq(1).offset().top && !move){
					if(once == false){
						$('.sec1_box2 .txt span').addClass('fade');
						once = true;
					}
				}
			}
			//SECTION2
			if(thisTop >= section.eq(1).offset().top - wH/2 && thisTop < section.eq(2).offset().top && !move){
				$('#nav li').eq(1).addClass('active_inx').siblings('#nav li').removeClass('active_inx');
				if(thisTop >= $('.bg1').offset().top - wH/2 && thisTop < $('.bg2').offset().top - wH/2 && !move){
					if(once == false){
						
						$('.sec2_box1 div').addClass('move');
						once = true;
					}
				}if(thisTop >= $('.bg2').offset().top - wH/2 && thisTop < $('.bg3').offset().top - wH/2 && !move){
					if(once == false){
						
						$('.sec2_box2 div').addClass('move');
						once = true;
					}
				}if(thisTop >= $('.bg3').offset().top - wH/2 && thisTop < section.eq(2).offset().top - wH/2 && !move){
					if(once == false){
						$('.sec2_box3 div').addClass('move');
						once = true;
					}
				}
			}
			//SECTION3
			if(thisTop >= section.eq(2).offset().top - wH/2 && thisTop < section.eq(3).offset().top && !move){
				$('#nav li').eq(2).addClass('active_inx').siblings('#nav li').removeClass('active_inx');
				if(thisTop >= $('.sec3_bg1').offset().top-wH/2  && thisTop < $('.sec3_bg2').offset().top-wH/2  && !move){
					if(once == false){
						$('.sec3_bg1 img').addClass('margin');
						$('.sec3_cont1 h3').addClass('h3_margin');
						once = true;
					}
				}if(thisTop >= $('.sec3_bg2').offset().top-wH/2 && thisTop < $('.sec3_bg3').offset().top-wH/2  && !move){
					if(once == false){
						$('.sec3_cont2 h3').addClass('h3_margin');
						once = true;
					}
				}if(thisTop >= $('.sec3_bg3').offset().top-wH/2 && thisTop < section.eq(3).offset().top-wH/2  && !move){
					if(once == false){
						$('.sec3_cont3 h3').addClass('h3_margin');
						$('.umbrella1').addClass('umbrella_move1');
						$('.umbrella2').addClass('umbrella_move2');
						once = true;
					}
				}
			}
			//SECTION4
			if(thisTop >= section.eq(3).offset().top - wH/2 && thisTop < section.eq(4).offset().top && !move){
				$('#nav li').eq(3).addClass('active_inx').siblings('#nav li').removeClass('active_inx');
				if(wW >= 768){
					$('.menu').each(function(inx){
						$(this).stop().animate({opacity:'1'},inx*600);
					});
				}if(wW < 768){
					$('.menu').stop().animate({opacity:'1'},800);
				}
			}
			//SECTION5
			if(thisTop >= section.eq(4).offset().top - wH/2 && thisTop < section.eq(5).offset().top && !move){
				$('#nav li').eq(4).addClass('active_inx').siblings('#nav li').removeClass('active_inx');
				
			}
			//SECTION6
			if(thisTop >= section.eq(5).offset().top - wH/2 && thisTop < section.eq(6).offset().top && !move){
				$('#nav li').eq(5).addClass('active_inx').siblings('#nav li').removeClass('active_inx');
				
				
			}//SECTION7
			if(thisTop >= section.eq(6).offset().top - wH/2 && !move){
				$('#nav li').eq(6).addClass('active_inx').siblings('#nav li').removeClass('active_inx');
				
				if(once == false){
					$('.sec7_img img').addClass('img_move');
					once = true;
				}
			}
		});
	}



	function current_btnInx(){
		if(thisTop >= section.eq(0).offset().top && thisTop < section.eq(1).offset().top){
			$('#nav li').eq(0).addClass('active_inx').siblings('#nav li').removeClass('active_inx');
		}if(thisTop >= section.eq(1).offset().top && thisTop < section.eq(2).offset().top){
			$('#nav li').eq(1).addClass('active_inx').siblings('#nav li').removeClass('active_inx');
		}if(thisTop >= section.eq(2).offset().top && thisTop < section.eq(3).offset().top){
			$('#nav li').eq(2).addClass('active_inx').siblings('#nav li').removeClass('active_inx');
		}if(thisTop >= section.eq(3).offset().top && thisTop < section.eq(4).offset().top){
			$('#nav li').eq(3).addClass('active_inx').siblings('#nav li').removeClass('active_inx');
		}if(thisTop >= section.eq(4).offset().top && thisTop < section.eq(5).offset().top){
			$('#nav li').eq(4).addClass('active_inx').siblings('#nav li').removeClass('active_inx');
		}if(thisTop >= section.eq(5).offset().top && thisTop < section.eq(6).offset().top){
			$('#nav li').eq(5).addClass('active_inx').siblings('#nav li').removeClass('active_inx');
		}if(thisTop >= section.eq(6).offset().top){
			$('#nav li').eq(6).addClass('active_inx').siblings('#nav li').removeClass('active_inx');
		}
	}



	//초기값
	function reset(){
		$('.sec1_box2 .txt span').removeClass('fade');
		$('.sec2_box1 div').removeClass('move');	
		$('.sec2_box2 div').removeClass('move');		
		$('.sec2_box3 div').removeClass('move');
		$('.sec3_bg1 img').removeClass('margin');
		$('.umbrella1').removeClass('umbrella_move1');
		$('.umbrella2').removeClass('umbrella_move2');
		$('.left_box').removeClass('team_margin');
		$('.sec7_img img').removeClass('img_move');
	}
};//doc end 