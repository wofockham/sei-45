'use strict';

var state = {
  nextPage: 1,
  lastPage: false
};

var searchFlickr = function searchFlickr(keywords) {
  if (state.lastPage) return; // Don't request more

  console.info('Searching for', keywords);

  var flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; // JSONP
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to be confused with HTTP methods like POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: state.nextPage++ // post-increment
  }).done(showImages).done(function (info) {
    console.log(info);
    if (info.photos.page >= info.photos.pages) {
      state.lastPage = true;
    }
  });
};

var showImages = function showImages(results) {
  results.photos.photo.forEach(function (photo) {
    var thumbnailURL = generateURL(photo);
    var $img = $('<img>', { src: thumbnailURL });
    $img.appendTo('#images');
  });
};

var generateURL = function generateURL(p) {
  return ['http://farm', p.farm, '.static.flickr.com/', p.server, '/', p.id, '_', p.secret, '_q.jpg' // Change 'q' to something else for different sizes (see docs)
  ].join('');
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // disable the form being submitted to a server.

    state.nextPage = 1;
    state.lastPage = false;
    $('#images').empty();

    var searchTerms = $('#query').val();
    searchFlickr(searchTerms);
  });

  // Higher Order Functions
  var chillSearchFlickr = _.debounce(searchFlickr, 4000, true);

  $(window).on('scroll', function () {
    var scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height();
    if (scrollBottom < 500) {
      var searchTerms = $('#query').val();
      chillSearchFlickr(searchTerms);
    }
  });
});