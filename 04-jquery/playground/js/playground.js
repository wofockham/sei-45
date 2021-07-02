$(document).ready(function () {
  $('#name').on('keyup', function () {
    const name = $('#name').val();
    $('header h1').text('Welcome ' + name);
  }).on('focus', function () {
    $('header').addClass('active');
  }).on('blur', function () {
    $('header').removeClass('active');
  });

  // Not a selector!
  $(window).on('mousemove', function (event) {
    $('img').css('opacity', (window.innerHeight - event.clientY) / window.innerHeight); // Values in range 0..1
  });
});
