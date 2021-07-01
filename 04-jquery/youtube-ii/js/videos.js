

const $links = $('a'); // DOM nodes wrapped in jQuery: the convention is to use $name.

for (let i = 0; i < $links.length; i++) {
  const $link = $links.eq(i); // equivalent to $links[i] BUT the data will still be jQuery powered.
  const href = $link.attr('href'); // getter: returns a string, not a jQuery object.
  const thumbnailURL = youtube.generateThumbnailUrl(href);
  const $image = $('<img>'); // detached jQuery object
  $image.attr('src', thumbnailURL); // setter
  $link.prepend($image); // attaching the DOM node to the link.
}

// Goals:
// $('a').each(function () {
//   const href = $(this).attr('href');
//   const thumbnail = youtube.generateThumbnailUrl(href);
//   $('<img>').attr('src', thumbnail).prependTo(this); // chaining
// });

// Too clever:
// $('a').each(function () {
//   $(this).prepend(
//     $('<img>').attr('src', youtube.generateThumbnailUrl($(this).attr('href')))
//   );
// });
