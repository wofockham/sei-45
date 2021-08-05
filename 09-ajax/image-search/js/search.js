const state = {
  nextPage: 1,
  lastPage: false,
  requestInProgress: false
};

const searchFlickr = function (keywords) {
  if (state.lastPage || state.requestInProgress) return; // Don't request more

  console.info('Searching for', keywords);

  state.requestInProgress = true;

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?'; // JSONP
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search', // not to be confused with HTTP methods like POST
    api_key: '2f5ac274ecfac5a455f38745704ad084',
    text: keywords,
    format: 'json',
    page: state.nextPage++ // post-increment
  }).done(showImages).done(function (info) {
    console.log(info);
    state.requestInProgress = false;
    if (info.photos.page >= info.photos.pages) {
      state.lastPage = true;
    }
  });

};

const showImages = function (results) {
  results.photos.photo.forEach(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img>', {src: thumbnailURL});
    $img.appendTo('#images');
  });
};

const generateURL = function (p) {
  return [
    'http://farm',
    p.farm,
    '.static.flickr.com/',
    p.server,
    '/',
    p.id,
    '_',
    p.secret,
    '_q.jpg' // Change 'q' to something else for different sizes (see docs)
  ].join('');
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // disable the form being submitted to a server.

    state.nextPage = 1;
    state.lastPage = false;
    $('#images').empty();

    const searchTerms = $('#query').val();
    searchFlickr( searchTerms );
  });

  $(window).on('scroll', function () {
    const scrollBottom = $(document).height() - $(window).scrollTop() - $(window).height();
    if (scrollBottom < 500) {
      const searchTerms = $('#query').val();
      searchFlickr( searchTerms );
    }
  });
});
