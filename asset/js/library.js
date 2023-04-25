(function($){
    console.log("라이브러리 페이지");
    
    var librarySlider = new Swiper(".library_area",{
        spaceBetween:30,

        autiHeight:true,

    });

    $('.header_area .group_nav .nav_item').click(function(e){
        e.preventDefault();

        idx = $(this).index();//누른 네비의 인덱스 번호
        console.log(idx);

        $(this).addClass('active').siblings().removeClass('active');
        librarySlider.slideTo(idx);
    })
    
    librarySlider.on('slideChange',function(){
        idx = this.realIndex;
        $('.header_area .group_nav .nav_item').eq(idx).addClass('active').siblings().removeClass('active');
    })

    $('.library_area .liked_box').mouseover(function(){
        $(this).find('.ic_play').addClass('on');
    })
    $('.library_area .liked_box').mouseout(function(){
        $(this).find('.ic_play').removeClass('on');
    })
    $('.library_area .epi_box').mouseover(function(){
        $(this).find('.ic_play').addClass('on');
    })
    $('.library_area .epi_box').mouseout(function(){
        $(this).find('.ic_play').removeClass('on');
    })

    var libraryItemAni = function(){
        libraryItem = $('.library_area').find('.list_item');
        libraryItem.mouseover(function(){
           $(this).addClass('on');
           $(this).find('.ic_play').addClass('on')
        })
        libraryItem.mouseout(function(){
            $(this).removeClass('on');
           $(this).find('.ic_play').removeClass('on')
        })

    }





    ////////
    $.getJSON('asset/js/date/library.json',function(date,status){
        if(status == "success"){
            var result = date.filter(function (a) {return a.libraryCate == 'playlist'});

            var html = '';
            $.each(result,function(index,playlist){
                html += '<div class="list_item">';     
                html += '<a href="'+playlist.musicSrc+'" class="img_wrap">';     
                html += '<img src="'+playlist.thumbSrc+'" alt="'+playlist.albumLink+'"></a>';  
                html += '<a href="'+playlist.musicSrc+'" class="txt_wrap">';     
                html += '<strong class="tit">'+playlist.title+'</strong>';     
                html += '<span class="info">'+playlist.info+'</span></a></div>';       
            });
            $('.sc_playlist .group_playlist').append(html);
        }else if(status == 'error' || status == "parsererror"){
            alert("불러오지못했습니다.");
        }
    });
    ////////
    $.getJSON('asset/js/date/library.json',function(date,status){
        if(status == "success"){
            var result = date.filter(function (a) {return a.libraryCate == 'potcast'});

            var html = '';
            $.each(result,function(index,potcast){
                html += '<div class="list_item">';
                html += '<a href="'+potcast.thumbLink+'" class="img_wrap">';
                html += '<img src="'+potcast.thumbSrc+'" alt=""></a>'
                html += '<div class="txt_wrap"><a href="" class="tit">'+potcast.title+'</a>';
                html += '<span class="info">'+potcast.info+'</span></div></div>';     
            });
            $('.sc_potcast .group_potcast').append(html);
        }else if(status == 'error' || status == "parsererror"){
            alert("불러오지못했습니다.");
        }
    });
    ////////
    $.getJSON('asset/js/date/library.json',function(date,status){
        if(status == "success"){
            var result = date.filter(function (a) {return a.libraryCate == 'artist'});

            var html = '';
            $.each(result,function(index,artist){
                html += '<li class="list_item">';
                html += '<a href="'+artist.thumbLink+'" class="img_wrap">';
                html += '<img src="'+artist.thumbSrc+'" alt="">';
                html +='<div class="ic_play"><buttom class="play_btn">'   ;
                html +='<span><svg><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg></span>' ; 
                html +='</buttom></div></a>' ;
                html += '<div class="txt_wrap"><a href="" class="tit">'+artist.title+'</a>';
                html += '<span class="info">'+artist.info+'</span></div></li>';     
            });
            $('.sc_artist .artist_list .list_wrap').append(html);
        }else if(status == 'error' || status == "parsererror"){
            alert("불러오지못했습니다.");
        }
        libraryItemAni();
    });
     ////////
     $.getJSON('asset/js/date/library.json',function(date,status){
        if(status == "success"){
            var result = date.filter(function (a) {return a.libraryCate == 'album'});

            var html = '';
            $.each(result,function(index,album){
                html += '<li class="list_item">';
                html += '<a href="'+album.thumbLink+'" class="img_wrap">';
                html += '<img src="'+album.thumbSrc+'" alt="">';
                html +='<div class="ic_play"><buttom class="play_btn">'   ;
                html +='<span><svg><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg></span>' ; 
                html +='</buttom></div></a>' ;
                html += '<div class="txt_wrap"><a href="" class="tit">'+album.title+'</a>';
                html += '<span class="info">'+album.info+'</span></div></li>';     
            });
            $('.sc_album .album_list .list_wrap').append(html);
        }else if(status == 'error' || status == "parsererror"){
            alert("불러오지못했습니다.");
        }
        libraryItemAni();
    });


    res.setHeader('Access-Control-Allow-origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // 쿠키 주고받기 허용


})(jQuery);