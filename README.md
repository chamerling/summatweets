# Summatweets

## Why?

I am usually bored about configuring 'Read it later' stuff for Twitter. So here is my Twitter workflow:

1. When I read a tweet which contains useful link(s) and do not have the time to read linked page, I favorite it for later read
2. When I come back in front of my laptop, I go to twitter.com/favorites and start to read all my favorited tweets

So now, let's do it a better way using some @node and @mongodb stuff:

1. Create a Twitter connection to the streaming API
2. When I favorite a tweet on any Twitter client, get it from the streaming API and save it
3. Get a mail at a defined moment of the day/week with all my favorited tweets since the last report

## Howto

### Install

    git clone http://github.com/chamerling/summatweets.git ; cd summatweets
    npm install
    # or
    npm install summatweets

### Configure

- Check app/config.js to define your settings (cron, smtp, etc...).
- Note that tweets and reports are stored in a mongodb database (RTFM for install or use a Cloud provider).
- For twitter, just create a new application in the twitter developer portal and get your OAuth keys

### Run

    # Start
    npm start

## License

(The MIT License)

Copyright (c) 2013 Christophe Hamerling &lt;christophe.hamerling@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.