$(document).ready(function () {
  const fetchInfo = function () {
    $.getJSON('/api/info').done(function (result) {
      $('#brother').text(result.brother);
      $('#time').text(result.time);
      $('#uptime').text(result.uptime);
    })
  };

  setInterval(fetchInfo, 2000);

  // const fetchBrother = function () {
  //   $.get('/api/brother').done(function (b) {
  //     $('#brother').text(b);
  //   });
  // };
  //
  // setInterval(fetchBrother, 4000);
});
