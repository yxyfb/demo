const $video = $('video')[0];

$('.play-box').click(function () {
  play();
});

$('.btn-play').click(function () {
  play();
})

$('.mask').click(function () {
  stop();
});

$('.btn').click(function () {
  $('.navbar-left').toggleClass('active');
})






function play() {
  $('.video-box').css({
    "opacity": 1,
    "z-index": 9999999
  });
  $video.play();
}

function stop() {
  $('.video-box').css({
    "opacity": 0,
    "z-index": -1
  });
  $video.pause();
}