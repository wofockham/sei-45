const Crawler = require('crawler');

const c = new Crawler({
  rateLimit: 1000, // Enhance your calm
  callback: (err, res, done) => { // error first pattern
    const title = res.$('title').text(); // <title> ... </title>
    console.log(title);
    console.log(res.request.uri.href); // the URL for the page we are crawling.
    console.log();

    const $links = res.$('a[href^="http"]'); // via the source code
    $links.each(function () {
      const href = res.$(this).attr('href');
      c.queue(href); // recursion
    });
    done();
  }
});

c.queue('https://lobste.rs/'); // TODO: make this a command line argument
