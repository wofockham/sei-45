const Crawler = require('crawler');

// Predicate function to decide if we want to add a URL to the queue.
const isCrawlable = (url) => {
  if (! url) return false;

  const terribleSites = ['archive.md', 'twitter.com', 'github.com', 'reddit', 'gitlab.com']; // TODO: add more sites.

  // heavy magic: you are not expected to understand this
  return ! terribleSites.some( awfulSite => url.includes(awfulSite) );

  // magic
  // const terribleSiteDetected = terribleSites.some((awfulSite) => {
  //   if (url.includes(awfulSite)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  //
  // if (terribleSiteDetected) return false;
  //
  // return true;
};

const c = new Crawler({
  rateLimit: 1000, // Enhance your calm
  callback: (err, res, done) => { // error first pattern
    if (typeof res.$ === 'function') { // Only use Cheerio (jQuery) when it is available (not PDFs for example)
      const title = res.$('title').text(); // <title> ... </title>
      console.log(title);
      console.log(res.request.uri.href); // the URL for the page we are crawling.
      console.log();

      const $links = res.$('a[href^="http"]'); // via the source code
      $links.each(function () {
        const href = res.$(this).attr('href');
        if (isCrawlable(href)) {
          c.queue(href); // recursion
        }
      });
    }

    done(); // we must call this everytime the callback runs.
  }
});

c.queue(process.argv[2] || 'https://lobste.rs/');
