(function ($) {
  'use strict'
  const $window = $(window);
  const $lis = $('.navbar-left li');
  const $page = $('.page');

  //页面刷新就执行一次
  navbarClass($lis.eq(curpageNum()));

  $window.on('scroll resize', function () {
    let num = curpageNum();
    navbarClass($lis.eq(num));
  })

  $lis.click(function () {
    const $this = $(this);
    const index = $this.index();
    if (index >= 5) { //从第5个按钮开始就不再需要滚动，而是跳转页面
      return;
    }
    //navbarClass($this);
    $('html,body').animate({
      'scrollTop': $page.eq(index).offset().top - ($window.height() - $page.eq(index).height()) / 2 + 10
    })
  })

  //滚动时获取下标，方便导航条active的改变
  function curpageNum() {
    let num = 0;
    $page.each(function (index, el) {
      const $el = $(el);
      if ($el.offset().top < ($window.height() - $el.height()) / 2 + $window.scrollTop()) {
        num = index;
      }
    })
    return num;
  }

  function navbarClass($el) {
    $el.siblings().removeClass('active');
    $el.addClass('active');
  }
})(jQuery)