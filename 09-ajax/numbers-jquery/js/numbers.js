const fetchFact = function () {
  $.ajax('http://numbersapi.com/random/trivia?json').done(function (info) {
    $(`<p>${ info.text }</p>`).appendTo('body');
  });
};

$('#fetch').on('click', fetchFact);
fetchFact(); // First fact is free.
