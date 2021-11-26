$(document).ready(function () {
  $(".hamburder-wrapper").click(function () {
    if ($(".hamburger").hasClass("is-active")) {
      setTimeout(function () {
        $(".hamburger").toggleClass("is-active");
        $(".header__mobile").toggleClass("active");
        $(".main__screen").toggleClass("open__header");
        $("html").toggleClass("overflowed");
      }, 1500);
    } else {
      $(".hamburger").toggleClass("is-active");
      $(".header__mobile").toggleClass("active");
      $(".main__screen").toggleClass("open__header");
      $("html").toggleClass("overflowed");
    }
  });

  var video = $("video");

  video.each(function (i, e) {
    let video = $(e);
    let btn = $(e).parent().find(".video-btn");
    console.log(btn);

    btn.click(function () {
      if (video[0].paused) {
        video[0].play();
        video[0].controls = true;
        btn.hide();
      }
    });
    video.click(function (e) {
      e.preventDefault();
      if (!video[0].paused) {
        video[0].controls = false;
        video[0].pause();
        btn.show();
      }
    });

    video.on("ended", function () {
      btn.show();
    });
  });

  // media actions
  mediaActions();
  window.onresize = function () {
    mediaActions();
  };
  function mediaActions() {
    let margin = parseInt($(".container").css("margin-left")) + 20 + "px";

    if (mediaChecker("min", 992)) {
      $(".home__frame-content").css("margin-right", `${margin}`);
      $(".whyus__frame-content").css("margin-left", `${margin}`);
    } else {
      $(".home__frame-content").css("margin-right", `0`);
      $(".whyus__frame-content").css("margin-left", `0`);
      // $(".overflowed").removeClass("overflowed");
      // $(".main__screen").removeClass("open__header");
      // $(".hamburger").removeClass("is-active");
    }

    if (mediaChecker("max", 550)) {
      $(".whatwedo-image").css({
        "padding-top": `${$(".whatwedo-image img").height() - 100}px`,
      });
    } else {
      $(".whatwedo-image").css({
        "padding-top": `${$(".whatwedo-image img").height() - 200}px`,
      });
    }
    $(".n-found").css("height", `calc(100% - ${$(".header").height()}px)`);

    $(".header__mobile--inner").css({
      top: `${$(".header").height()}px`,
      height: `calc(100% - ${$(".header").height()}px)`,
    });
    if (mediaChecker('min', 992)) {
      $('.search-input').width(`${$('.select__wrapper').width()}`)
    }
    

    $('.fcfqm_describe-inner').css('margin-left', `${parseInt($('.container').css('margin-left')) - parseInt($('.h-container').css('margin-left'))}px`)
  }

  function mediaChecker(max_min, resolution, width = "width") {
    return window.matchMedia(`(${max_min}-${width}: ${resolution}px)`).matches;
  }

  // document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  //   anchor.addEventListener("click", function (e) {
  //     e.preventDefault();

  //     document.querySelector(this.getAttribute("href")).scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   });
  // });


  $(".btn-contacts, .cross, .layer-out").click(function (e) {
    e.preventDefault();
    $(".layer").fadeToggle();
  });

  let select = $(".select-item select");
  select.each(function (i, e) {
    new SlimSelect({
      select: e,
      showSearch: false,
    });
  });


  var blockAlignContL = document.querySelectorAll(".align_animation-containerL");
  var blockAlignContR = document.querySelectorAll(".align_animation-containerR");
  var blockAlignL = document.querySelectorAll(".align_animationL");
  var blockAlignR = document.querySelectorAll(".align_animationR");



if (mediaChecker('min', 768)) {


  if (blockAlignL) {
    for (var i = 0; i < blockAlignL.length; i++) {
          gsap.to(blockAlignL[i], {
            x: 0,
            ease: Power0.easeNone,
            scrollTrigger: {
              trigger: blockAlignContL[i],
              start: "-50%",
              end: "80%",
              scrub: true,
            },
          });  
    }
  }

  if (blockAlignR) {
    for (var i = 0; i < blockAlignR.length; i++) {
        gsap.to(blockAlignR[i], {
          x: 0,
          ease: Power0.easeNone,
          scrollTrigger: {
            trigger: blockAlignContR[i],
            start: "-50%",
            end: "80%",
            scrub: true,
          },
        }); 
    }

  }  
}


  var opac = document.querySelectorAll(".opac");
  var opacMain = document.querySelectorAll(".opacMain");
  for (var i = 0; i < opac.length; i++) {
    let _opac = opac[i];
    let targ = $(_opac).parent();
    gsap.fromTo(
      _opac,
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.1,
        duration: 0.7,
        delay: 0.25,
        scrollTrigger: {
          trigger: targ,
          start: "top 90%",
        },
      }
    );
  }


  if (opacMain) {
    for (var i = 0; i < opacMain.length; i++) {
      let _opac = opacMain[i];
      let _delay = $(opacMain[i]).data("delay");
      gsap.fromTo(
        _opac,
        { opacity: 0 },
        {
          opacity: 1,
          stagger: 0.1,
          duration: 1,
          delay: _delay,
          scrollTrigger: {
            trigger: _opac,
            start: "top 90%",
          },
        }
      );
    }
  }

  const tl = gsap.timeline({ paused: true, reversed: true });
  tl.to(".opacMenu", {
    x: 0,
    opacity: 1,
    duration: 0.35,
    stagger: 0.20,
    delay: 0.2,
  });
  $(".hamburder-wrapper").on("click", function () {
    if (tl.reversed()) {
      tl.play();
    } else {
      tl.reverse();
    }
  });
});
