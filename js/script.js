$("#slider-main").slick({
  autoplay:true,
  autoplaySpeed:4000,
  dots:true,
  fade:true,//フェードする
  speed:500,//フェードするスピード 0.5秒
  arrows: false,
});
// $("#slider-recommend").slick({
    // autoplay: true,
    // autoplaySpeed: 5000,
    // slickのnext/preview非表示
    // arrows: false,
  // });

  // FAQ accordion menu
$('.faq-title').on('click', function(){
  $(this).toggleClass('active');
  $(this).next().slideToggle();
});