(function($){
    console.log("검색하기 화면");
//이미지 오버 애니메이션
    var genreItemAni = function(){
        genreItems = $('.search_area .genre_list').find('li');
        genreItems.mouseover(function(){
            $(this).find('.img_wrap').addClass('on')
        });
        genreItems.mouseout(function(){
            $(this).find('.img_wrap').removeClass('on')
        });
    }
////////
    $.getJSON('asset/js/date/search.json',function(date,status){
        if(status == "success"){
            var result = date.filter(function (a) {return a.searchCate == 'genre'});

            var html = '';
            $.each(result,function(index,genre){

                html += '<li class="genre_item" style="background-color:'+genre.thumbColor+';">';
                html += '<a href="'+genre.thumbLink+'" class="item_wrap">';
                html += '<div class="txt_wrap">'+genre.title+'</div>';
                html += '<div class="img_wrap"><img src="'+genre.thumbSrc+'" alt=""></div></a></li>';     
            });
            $('.group_genre .genre_list').append(html);
        }else if(status == 'error' || status == "parsererror"){
            alert("불러오지못했습니다.");
        }
        genreItemAni();
    });
    ////////
    res.setHeader('Access-Control-Allow-origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true'); // 쿠키 주고받기 허용

})(jQuery);