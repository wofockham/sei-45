const makeMadLib = function () {
  const noun = $('#noun').val(); // string
  const adjective = $('#adjective').val();
  const name = $('#person').val();

  const story = `${ name } really likes ${ adjective } ${ noun }.`;
  $('#story').append(`<p>${ story }</p>`);
};

$(document).ready(function () {
  $('#lib-button').on('click', makeMadLib);
  $('h1').funText(100, ['#ff7400', '#cd0074', '#0c0']);
});
