$(document).ready(function () {
  // Parallax //////////////////////////////////////////////////////////////////
  // Cacheing:
  const $kitty = $('.kitty-js');
  const $body = $('body');
  $(window).on('scroll', function () {
    const scrollTop = $(window).scrollTop();
    $kitty.css('background-position-y', -scrollTop / 2);
    $body.css('background-position-y', -scrollTop / 2.5);
  });

  // Bubbles ///////////////////////////////////////////////////////////////////
  $(window).on('mousemove', (e) => {
    const { pageX:x, pageY:y } = e; // Destructuring with renaming.

    const size = Math.random() * 10;

    const $bubble = $('<div class="bubble"></div>').css({
      left: x,
      top: y,
      width: size + 'em',
      height: size + 'em'
    });

    $bubble.appendTo('body');

    $bubble.animate({top: -200}, 2500, () => {
      $bubble.remove();
    });
  });
});
