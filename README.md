This is an uncomfortably-minimalist RSS/Atom feed reader. Its UX is
mediocre at best and it doesn't do several things that you might
consider important in a feed reader, such as automatically checking for
updates, or following more than one feed at a time.

However, it _does_ demonstrate some principles that I want developers of
feed readers to consider:

1. Almost all screen real estate is dedicated to the feed's content,
   with a bare minimum reserved for navigating through the feed. This is
   particularly important for webcomics, which often need as much space
   and as few distractions as possible to really enjoy the work.

1. If a post doesn't have content in the feed itself, then the original
   page is loaded automatically. Some publishers rely on readers
   visiting the original site, whether for advertising revenue or other
   reasons. In some cases they signal this by providing only a link in
   the feed, but many feed readers require user interaction before
   loading the link in that case, often without any indication to the
   user that there's something they should do.

1. Most importantly, this app has very basic support for RFC5005, the
   "Feed Paging and Archiving" standard. I'm not aware of any other feed
   reader that supports this.

The above combination of features makes this a very rough prototype of
the tool I want for reading webcomics and serial fiction.

# Installation

Since this is only a very rough prototype, I have not packaged it for
easy installation. If you want to try it out, you'll need to be
comfortable using `npm` at a command line.

You need to [install Electron][] and [Node.js/npm][install npm]. Then,
in your local copy of this repository, run:

[install Electron]: https://electronjs.org/docs/tutorial/installation
[install npm]: https://www.npmjs.com/get-npm

```sh
npm install
```

Once the dependencies are installed, you should be able to run this app
using:

```sh
npm start
```

# Sample feeds

Here are some feeds I have tested this app with. Please do not take this
list as an endorsement of any of these feeds.

- <https://jamey.thesharps.us/feed.xml>: My blog, with full history.
- <https://fh.minilop.net/f/America+Denver/1c69a1229e/http://www.schlockmercenary.com/%25Y-%25m-%25d>:
  A full-history feed for the webcomic Schlock Mercenary, generated
  using my [full-history feed generator](https://fh.minilop.net/). This
  is a links-only feed, so the feed reader has to load the original
  page.
- <https://beesbuzz.biz/comics/lewi/feed>: The only webcomic I'm aware
  of that publishes its own full-history feed.

# Adding history to your own feeds

If you are comfortable working with experimental software and you
publish a web site using one of the following tools, you can add
full-history feeds to your own web site.

- WordPress: <https://github.com/jameysharp/wp-fullhistory>
- Jekyll: <https://github.com/jameysharp/jekyll-feed/tree/rfc5005>
