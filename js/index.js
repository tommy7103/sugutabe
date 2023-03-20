function slideAnimeLeft() {
  $('.leftAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("slideAnimeLeftRight");
      $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");
    } else {
      $(this).removeClass("slideAnimeLeftRight");
      $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");
    }
  });
}

$(window).on('load', function () {
  slideAnimeLeft($('.leftAnime'))
});
$(window).scroll(function () {
  slideAnimeLeft();
});

function fadeAnime() {

  $('.fadeUpTrigger').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass('fadeUp');
    } else {
      $(this).removeClass('fadeUp');
    }
  });
}

$(window).scroll(function () {
  fadeAnime();
});

$(function () {
  $('.accordion_open').click(function () {
    if ($(this).hasClass('active')) {
      $(this).toggleClass('active');
      $(this).next().fadeOut();
    } else {
      $(this).toggleClass('active');
      $(this).next().fadeIn();
    }
  });
});

function slideAnimeUp() {
  $('.upAnime').each(function () {
    var elemPos = $(this).offset().top - 100;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("slideAnimeUpDown");
      $(this).children(".upAnimeInner").addClass("slideAnimeDownUp");
      $('.upAnime-delay').addClass("delay");
      $('.upAnime-delay').children(".upAnimeInner").addClass("delay");
    } else {
      $(this).removeClass("slideAnimeUpDown");
      $(this).children(".upAnimeInner").removeClass("slideAnimeDownUp");
      $('.upAnime-delay').removeClass("delay");
    }
  });
}
$(window).scroll(function () {
  slideAnimeUp();
});

function fadeIn() {
  $('.main__quality_content_speech').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
        $(this).addClass("main__quality_fade-in");
    }else{
        $(this).removeClass("main__quality_fade-in");
    }
  })
}
$(window).scroll(function () {
  fadeIn();
});
