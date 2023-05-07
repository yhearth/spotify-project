
// fetch();
(function($){
    console.log('스포티파이 스크립트');

    console.log(location.origin);

    $('#btnMeun').click(function(e){
        e.preventDefault();
       $('.meun_page').addClass('active');
       $('.info_page').removeClass('active');

    })
    $('.link_info').click(function(e){
        e.preventDefault();
       $('.info_page').addClass('active');
       $('.meun_page').removeClass('active');

    })
    $('.btn_close').click(function(e){
        e.preventDefault();
       $('.meun_page').removeClass('active');
       $('.info_page').removeClass('active');

    })

    gsap.to('.header_area',0.1,{
        scrollTrigger:{
            trigger:".header_area",
            start:"top top",
            scrub:1,
            // markers:true
        },
        backgroundColor:"#000",
    })
    introItem = $('.sc_intro .music_list').find('li');

    introItem.mouseover(function(){
        $(this).find('.ic_play').addClass('on');
      $(this).addClass('on');
    })
    introItem.mouseout(function(){
        $(this).find('.ic_play').removeClass('on');
        $(this).removeClass('on');
      })

    /////


    var listItemAni = function(){
      musicBox = $('.music_list').find('li');
      musicBox.mouseover(function(){   
        $(this).find('.ic_play').addClass('on');
        $(this).addClass('on');
      })
      musicBox.mouseout(function(){
        $(this).find('.ic_play').removeClass('on');
        $(this).removeClass('on');
      })

 }

    //const musicListWrap = document.querySelectorAll('.sc_recommend .music_list')//console.log(musicListWrap.length);
  
    function listUpdate(){
        for(let i = 1; i < 12 ;i++){  
            let musicUl = document.getElementById(`music_list_${i}`)// console.log(musicUl,i)
            musicList(musicUl,i);
         }
    }
    function musicList(frame,themeNum,musicNum){
      fetch("./asset/js/date/music.json")
      .then((response) => response.json())
      .then((json) => {
        data = json.music;

       var result = data.filter(function (elem) {return elem.musicList == themeNum}) 

       let html = '';
       result.forEach(elem => {
        isArtist = `<small>${elem.element.artist}</small>`;
        isArtistA = `<span>${elem.element.artistA}</span>`;
        isArtistB = `<span>${elem.element.artistB}</span>`;
        isArtistC = `<span>${elem.element.artistC}</span>`;
        isDesc = `<p>${elem.element.musicInfo}</p>`;

        artist = (elem.element.artist) ? isArtist : "";
        artistA = (elem.element.artistA) ? isArtistA : "";artistB = (elem.element.artistB) ? isArtistB : "";artistC = (elem.element.artistC) ? isArtistC : "";
        desc = (elem.element.musicInfo) ? isDesc : "";

          html +=`
              <li class="swiper-slide list_item">
                  <a href="https://yhearth.github.io/spotify-project/" class="img_wrap">
                      <img src="${elem.element.thumbSrc}" alt="노래 커버 이미지">
                        <div class="ic_play">
                          <buttom class="play_btn">
                              <span><svg><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"></path></svg></span>
                          </buttom>
                      </div>
                  </a>
                  <a href="https://yhearth.github.io/spotify-project/" class="txt_wrap">
                      <strong class="tit">${elem.element.title}</strong>
                      <div class="info"> 
                            ${artist}
                            ${artistA}${artistB}${artistC}
                            ${desc}
                      </div>
                  </a>
              </li>
          `;
       });

      $(frame).html(html)
      listItemAni();
      musicSlide();
      })

    }
    function musicSlide(){
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 24,
        breakpoints: {
          767: { 
              slidesPerView: 3,
              spaceBetween: 18,
            },
          1024: { 
              slidesPerView: 4,
          },
          1440: { 
              slidesPerView: 5,
            },
          },
      });
    }

    window.addEventListener('load',listUpdate)


    
    


 
    // res.setHeader('Access-Control-Allow-origin', '*');
    // res.setHeader('Access-Control-Allow-Credentials', 'true'); // 쿠키 주고받기 허용

})(jQuery);