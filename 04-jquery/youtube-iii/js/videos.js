
const thumbnailify = function ($link) {
  const href = $link.attr('href'); // getter: returns a string, not a jQuery object.
  const thumbnailURL = youtube.generateThumbnailUrl(href);
  const $image = $('<img>'); // detached jQuery object
  $image.attr('src', thumbnailURL); // setter
  $link.prepend($image); // attaching the DOM node to the link.

  $link.on('click', function (event) {
    event.preventDefault(); // Don't follow the link.
    const embedURL = youtube.generateEmbedUrl(href);
    const embedHTML = `<iframe width="560" height="315" src="${ embedURL }" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    $('#player').hide().html(embedHTML).fadeIn(5000); // chaining: fluent interface
  });
};

const $links = $('a'); // DOM nodes wrapped in jQuery: the convention is to use $name.

for (let i = 0; i < $links.length; i++) {
  const $link = $links.eq(i); // equivalent to $links[i] BUT the data will still be jQuery powered.
  thumbnailify($link);
}
