(function($){

    /* YouTube iframe API: https://developers.google.com/youtube/player_parameters */
    
    (function handleTrailer(){
        
        var $selector = {
            body: $( "body" ),
            overlay: $( "#blackout" ),
            modal: $( "#trailerModal" ),
            showButton: $( "#showTrailer" ),
            hideButton: $( "#hideTrailer" ),
        };
		
		

        // 플레이어 초기 설정
        var player = {
            obj: null,
            query : {
                theme: "dark",
                color: "white",
                controls: 1, 
                autoplay: 1,
                enablejsapi: 1,
                modestbranding: 0, // YouTube 로고 감춤
                rel: 0,  //관련 동영상 표시
                showinfo: 0, // 제목, 업로더 감춤
                iv_load_policy: 3 // 특수효과 감춤
            },
            visible: false
        };


        $selector.showButton.on( "click", showPlayer );
        $selector.hideButton.on( "click", hidePlayer );


        function setPlayer( id ) {
            player.obj = new YT.Player( "trailer", {
                width: 480,
                height: 282,
                videoId: id,    
                playerVars: player.query
            });

            resizePlayer();

            $( window ).on( "resize orientationchange", function() {
                resizePlayer();
            });
        }





        function resizePlayer() {
            var viewport = {}, frame = {}, modal = {};

            viewport.width = $( window ).width();
            viewport.height = $( window ).height();

            frame.width = viewport.width;
            frame.height = frame.width / 1.6; // 16 : 10

            modal.top = ( ( viewport.height - frame.height ) / 2 ) + "px";
            modal.left = "0px";

            $selector.modal.css( modal );

            player.obj.setSize( frame.width, frame.height );
        }



		
		function showPlayer() {
            // 처음 클릭시 iframe을 생성 
            if ( !player.obj ) {
                setPlayer( $selector.showButton.data("youtube") );
            }

            $selector.body.addClass("modal_on");
            $selector.overlay.show();
            player.visible = true;
        }

        function hidePlayer() {
            player.obj.stopVideo();
            $selector.overlay.hide();
            $selector.body.removeClass("modal_on");
            player.visible = false;
        }
    })();

})(jQuery);     