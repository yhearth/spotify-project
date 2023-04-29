(function($){
    //메뉴 버튼
    $('#btnMeun').click(function(e){
        e.preventDefault();
       $('.meun_page').addClass('active');
       $('.info_page').removeClass('active');

    })
    //메뉴 닫기 버튼
    $('.btn_close').click(function(e){
        e.preventDefault();
        $('.meun_page').removeClass('active');
        $('.info_page').removeClass('active');
    })
    //개인 정보 버튼
    $('.link_info').click(function(e){
        e.preventDefault();
       $('.info_page').addClass('active');
       $('.meun_page').removeClass('active');

    })
//header 배경
    gsap.to('.header_area',0.1,{
        scrollTrigger:{
            trigger:".header_area",
            start:"top top",
            scrub:1,
        },
        backgroundColor:"#000",
    })
//이미지 오버시 애니메이션
    introItem = $('.sc_intro .music_list').find('li');
    introItem.mouseover(function(){
      $(this).find('.ic_play').addClass('on');
      $(this).addClass('on');
    })
    introItem.mouseout(function(){
        $(this).find('.ic_play').removeClass('on');
        $(this).removeClass('on');
     })

//이미지 오버시 아이콘 애니메이션
    var listItemAni = function(){
        recommendItems = $('.sc_recommend .music_list').find('li');
        recommendItems.mouseover(function(){   
           $(this).find('.ic_play').addClass('on');
           $(this).addClass('on');
         })
         recommendItems.mouseout(function(){
           $(this).find('.ic_play').removeClass('on');
           $(this).removeClass('on');
         })
    }
///////
    $.getJSON('asset/js/date/music.json',function(date,status){
        if(status == "success"){
            var result = date.filter(function (parm) {return (parm).recommendCate == '다시 들어보세요'});
            var html = '';
            $.each(result,function(index,replay){
                html += '<li class="list_item">';     
                html += '<a href="'+replay.musicSrc+'" class="img_wrap">';     
                html += '<img src="'+replay.thumbSrc+'" alt="'+replay.albumLink+'">';  
                html +='<div class="ic_play"><buttom class="play_btn">'   
                html +='<span><svg><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg></span>'  
                html +='</buttom></div></a>' 
                html += '<a href="'+replay.musicSrc+'" class="txt_wrap">';     
                html += '<strong class="tit">'+replay.title+'</strong>';     
                html += '<span class="info">'+replay.artist+'</span></a></li>';            
            });
            $('.group_replay .music_list').append(html);

        }else if(status == 'error' || status == "parsererror"){
            alert("불러오지못했습니다.");
        }
        listItemAni();
    });
    ////////
    $.getJSON('asset/js/date/music.json',function(date,status){
        if(status == "success"){
            var result = date.filter(function (a) {return a.recommendCate == 'mixed'});
            var html = '';
            $.each(result,function(index,mixed){
                html += '<li class="list_item">';     
                html += '<a href="'+mixed.musicSrc+'" class="img_wrap">';     
                html += '<img src="'+mixed.thumbSrc+'" alt="'+mixed.albumLink+'">';  
                html +='<div class="ic_play"><buttom class="play_btn">'   
                html +='<span><svg><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg></span>'  
                html +='</buttom></div></a>'
                html += '<div href="" class="txt_wrap">';     
                html += '<a href="'+mixed.musicSic+'" class="tit">'+mixed.title+'</a>';     
                html += '<div class="info">';
                html += '<a href="https://yhearth.github.io/spotify-project/" class="crush">'+mixed.artistA+'</a>,';
                html += '<a href="https://yhearth.github.io/spotify-project/" class="twice">'+mixed.artistB+'</a>,';
                html += '<a href="https://yhearth.github.io/spotify-project/" class="kep1er">'+mixed.artistC+'</a>등';
                html += '</div></div></li>'    
            });
            $('.group_mixed .music_list').append(html);
        }else if(status == 'error' || status == "parsererror"){
            alert("불러오지못했습니다.");
        }
        listItemAni();
    });
    ////////
    $.getJSON('asset/js/date/music.json',function(date,status){
        if(status == "success"){
            var result = date.filter(function (a) {return a.recommendCate == 'played'});
            var html = '';
            $.each(result,function(index,played){
                html += '<li class="list_item">';     
                html += '<a href="'+played.musicSrc+'" class="img_wrap">';     
                html += '<img src="'+played.thumbSrc+'" alt="'+played.albumLink+'">';  
                html +='<div class="ic_play"><buttom class="play_btn">'   
                html +='<span><svg><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg></span>'  
                html +='</buttom></div></a>'   
                html += '<div href="" class="txt_wrap">';     
                html += '<a href="'+played.musicSic+'" class="tit">'+played.title+'</a>';     
                html += '<div class="info">';
                html += '<span>'+played.musicInfo+'</span>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+played.artistA+'</a>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+played.artistB+'</a>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+played.artistC+'</a>';
                html += '</div></li>'    
            });
            $('.group_played .music_list').append(html);
        }else if(status == 'error' || status == "parsererror"){
            alert("불러오지못했습니다.");
        }
        listItemAni();
    });
    ////////
    $.getJSON('asset/js/date/music.json',function(date,status){
        if(status == "success"){
            var result = date.filter(function (a) {return a.recommendCate == 'recomMix'});
            var html = '';
            $.each(result,function(index,recomMix){
                html += '<li class="list_item">';     
                html += '<a href="'+recomMix.musicSrc+'" class="img_wrap">';     
                html += '<img src="'+recomMix.thumbSrc+'" alt="'+recomMix.albumLink+'">';
                html +='<div class="ic_play"><buttom class="play_btn">'   
                html +='<span><svg><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg></span>'  
                html +='</buttom></div></a>' 
                html += '<div href="" class="txt_wrap">';     
                html += '<a href="'+recomMix.musicSic+'" class="tit">'+recomMix.title+'</a>';     
                html += '<div class="info">';
                html += '<span>'+recomMix.musicInfo+'</span>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+recomMix.artistA+'</a>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+recomMix.artistB+'</a>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+recomMix.artistC+'</a>';
                html += '</div></li>'    
            });
            $('.group_recomMix .music_list').append(html);
            }else if(status == 'error' || status == "parsererror"){
                alert("불러오지못했습니다.");
            }

        listItemAni();
    });
    ////////
    $.getJSON('asset/js/date/music.json',function(date,status){
        if(status == "success"){
            var result = date.filter(function (a) {return a.recommendCate == 'recomRadio'});
            var html = '';
            $.each(result,function(index,recomRadio){
                html += '<li class="list_item">';     
                html += '<a href="'+recomRadio.musicSrc+'" class="img_wrap">';     
                html += '<img src="'+recomRadio.thumbSrc+'" alt="'+recomRadio.albumLink+'">'; 
                html +='<div class="ic_play"><buttom class="play_btn">'   
                html +='<span><svg><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg></span>'  
                html +='</buttom></div></a>'     
                html += '<div href="" class="txt_wrap">';     
                html += '<a href="'+recomRadio.musicSic+'" class="tit">'+recomRadio.title+'</a>';     
                html += '<div class="info">';
                html += '<span>'+recomRadio.musicInfo+'</span>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+recomRadio.artistA+'</a>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+recomRadio.artistB+'</a>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+recomRadio.artistC+'</a>';
                html += '</div></li>'    
            });
            $('.group_recomRadio .music_list').append(html);
        }else if(status == 'error' || status == "parsererror"){
            alert("불러오지못했습니다.");
        }
        listItemAni();
    });
    ////////
    $.getJSON('asset/js/date/music.json',function(date,status){
        if(status == "success"){
            var result = date.filter(function (a) {return a.recommendCate == 'recomArtist'});

            var html = '';
            $.each(result,function(index,recomArtist){
  
                html += '<li class="list_item">';     
                html += '<a href="'+recomArtist.musicSrc+'" class="img_wrap">';     
                html += '<img src="'+recomArtist.thumbSrc+'" alt="'+recomArtist.albumLink+'">';     
                html +='<div class="ic_play"><buttom class="play_btn">'   
                html +='<span><svg><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg></span>'  
                html +='</buttom></div></a>'
                html += '<div href="" class="txt_wrap">';     
                html += '<a href="'+recomArtist.musicSic+'" class="tit">'+recomArtist.title+'</a>';     
                html += '<div class="info">';
                html += '<span>'+recomArtist.musicInfo+'</span>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+recomArtist.artistA+'</a>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+recomArtist.artistB+'</a>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+recomArtist.artistC+'</a>';
                html += '</div></li>'    
            });
            $('.group_recomArtist .music_list').append(html);
        }else if(status == 'error' || status == "parsererror"){
            alert("불러오지못했습니다.");
        }
        listItemAni();
    });
    ////////
      $.getJSON('asset/js/date/music.json',function(date,status){
        if(status == "success"){
            var result = date.filter(function (a) {return a.recommendCate == 'kpopRadio'});

            var html = '';
            $.each(result,function(index,kpopRadio){
  
                html += '<li class="list_item">';     
                html += '<a href="'+kpopRadio.musicSrc+'" class="img_wrap">';     
                html += '<img src="'+kpopRadio.thumbSrc+'" alt="'+kpopRadio.albumLink+'">';  
                html +='<div class="ic_play"><buttom class="play_btn">'   
                html +='<span><svg><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg></span>'  
                html +='</buttom></div></a>'   
                html += '<div href="" class="txt_wrap">';     
                html += '<a href="'+kpopRadio.musicSic+'" class="tit">'+kpopRadio.title+'</a>';     
                html += '<div class="info">';
                html += '<span>'+kpopRadio.musicInfo+'</span>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+kpopRadio.artistA+'</a>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+kpopRadio.artistB+'</a>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+kpopRadio.artistC+'</a>';
                html += '</div></li>'    
            });
            $('.group_kpopRadio .music_list').append(html);
        }else if(status == 'error' || status == "parsererror"){
            alert("불러오지못했습니다.");
        }
        listItemAni();
    });
    ////////
    $.getJSON('asset/js/date/music.json',function(date,status){
        if(status == "success"){
            var result = date.filter(function (a) {return a.recommendCate == 'popRadio'});

            var html = '';
            $.each(result,function(index,popRadio){
  
                html += '<li class="list_item">';     
                html += '<a href="'+popRadio.musicSrc+'" class="img_wrap">';     
                html += '<img src="'+popRadio.thumbSrc+'" alt="'+popRadio.albumLink+'">';  
                html +='<div class="ic_play"><buttom class="play_btn">'   
                html +='<span><svg><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg></span>'  
                html +='</buttom></div></a>'    
                html += '<div href="" class="txt_wrap">';     
                html += '<a href="'+popRadio.musicSic+'" class="tit">'+popRadio.title+'</a>';     
                html += '<div class="info">';
                html += '<span>'+popRadio.musicInfo+'</span>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+popRadio.artistA+'</a>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+popRadio.artistB+'</a>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+popRadio.artistC+'</a>';
                html += '</div></li>'    
            });
            $('.group_popRadio .music_list').append(html);
        }else if(status == 'error' || status == "parsererror"){
            alert("불러오지못했습니다.");
        }
        listItemAni();
    });
    ////////
    $.getJSON('asset/js/date/music.json',function(date,status){
        if(status == "success"){
            var result = date.filter(function (a) {return a.recommendCate == 'danceMix'});

            var html = '';
            $.each(result,function(index,danceMix){
  
                html += '<li class="list_item">';     
                html += '<a href="'+danceMix.musicSrc+'" class="img_wrap">';     
                html += '<img src="'+danceMix.thumbSrc+'" alt="'+danceMix.albumLink+'">';
                html +='<div class="ic_play"><buttom class="play_btn">'   
                html +='<span><svg><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg></span>'  
                html +='</buttom></div></a>'      
                html += '<div href="" class="txt_wrap">';     
                html += '<a href="'+danceMix.musicSic+'" class="tit">'+danceMix.title+'</a>';     
                html += '<div class="info">';
                html += '<span>'+danceMix.musicInfo+'</span>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+danceMix.artistA+'</a>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+danceMix.artistB+'</a>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+danceMix.artistC+'</a>';
                html += '</div></li>'    
            });
            $('.group_danceMix .music_list').append(html);
        }else if(status == 'error' || status == "parsererror"){
            alert("불러오지못했습니다.");
        }
        listItemAni();
    });
    ////////
    $.getJSON('asset/js/date/music.json',function(date,status){
        if(status == "success"){
            var result = date.filter(function (a) {return a.recommendCate == 'moodMix'});

            var html = '';
            $.each(result,function(index,moodMix){
  
                html += '<li class="list_item">';     
                html += '<a href="'+moodMix.musicSrc+'" class="img_wrap">';     
                html += '<img src="'+moodMix.thumbSrc+'" alt="'+moodMix.albumLink+'">'; 
                html +='<div class="ic_play"><buttom class="play_btn">'   
                html +='<span><svg><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg></span>'  
                html +='</buttom></div></a>'     
                html += '<div href="" class="txt_wrap">';     
                html += '<a href="'+moodMix.musicSic+'" class="tit">'+moodMix.title+'</a>';     
                html += '<div class="info">';
                html += '<span>'+moodMix.musicInfo+'</span>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+moodMix.artistA+'</a>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+moodMix.artistB+'</a>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+moodMix.artistC+'</a>';
                html += '</div></li>'    
            });
            $('.group_moodMix .music_list').append(html);
        }else if(status == 'error' || status == "parsererror"){
            alert("불러오지못했습니다.");
        }
        listItemAni();
    });
     ////////
     $.getJSON('asset/js/date/music.json',function(date,status){
        if(status == "success"){
            var result = date.filter(function (a) {return a.recommendCate == 'workMix'});

            var html = '';
            $.each(result,function(index,workMix){
  
                html += '<li class="list_item">';     
                html += '<a href="'+workMix.musicSrc+'" class="img_wrap">';     
                html += '<img src="'+workMix.thumbSrc+'" alt="'+workMix.albumLink+'">'; 
                html +='<div class="ic_play"><buttom class="play_btn">'   
                html +='<span><svg><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg></span>'  
                html +='</buttom></div></a>'    
                html += '<div href="" class="txt_wrap">';     
                html += '<a href="'+workMix.musicSic+'" class="tit">'+workMix.title+'</a>';     
                html += '<div class="info">';
                html += '<span>'+workMix.musicInfo+'</span>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+workMix.artistA+'</a>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+workMix.artistB+'</a>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+workMix.artistC+'</a>';
                html += '</div></li>'    
            });
            $('.group_workMix .music_list').append(html);
        }else if(status == 'error' || status == "parsererror"){
            alert("불러오지못했습니다.");
        }
        listItemAni();
    });
     ////////
     $.getJSON('asset/js/date/music.json',function(date,status){
        if(status == "success"){
            var result = date.filter(function (a) {return a.recommendCate == 'stateMix'});

            var html = '';
            $.each(result,function(index,stateMix){
  
                html += '<li class="list_item">';     
                html += '<a href="'+stateMix.musicSrc+'" class="img_wrap">';     
                html += '<img src="'+stateMix.thumbSrc+'" alt="'+stateMix.albumLink+'">'; 
                html +='<div class="ic_play"><buttom class="play_btn">'   
                html +='<span><svg><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg></span>'  
                html +='</buttom></div></a>'    
                html += '<div href="" class="txt_wrap">';     
                html += '<a href="'+stateMix.musicSic+'" class="tit">'+stateMix.title+'</a>';     
                html += '<div class="info">';
                html += '<span>'+stateMix.musicInfo+'</span>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+stateMix.artistA+'</a>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+stateMix.artistB+'</a>';
                html += '<a href="https://yhearth.github.io/spotify-project/">'+stateMix.artistC+'</a>';
                html += '</div></li>'    
            });
            $('.group_stateMix .music_list').append(html);
        }else if(status == 'error' || status == "parsererror"){
            alert("불러오지못했습니다.");
        }
        listItemAni();
    });



    


 
    // res.setHeader('Access-Control-Allow-origin', '*');
    // res.setHeader('Access-Control-Allow-Credentials', 'true'); // 쿠키 주고받기 허용

})(jQuery);