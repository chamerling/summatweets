//
// Listen to tweets on the streaming API and store favorites
//

var twitter = require('ntwitter')
  , mongoose = require('mongoose')
  , Tweet = mongoose.model('Tweet')

/**
 * Creates the cron job and listen to tweets from the twitter stream API
 *
 * @param config
 */
module.exports = function(config) {

  var twit = new twitter(config.twitter);
  twit.stream("user", { with : 'user' }, function(stream) {
    stream.on('data', function(data) {

      // get the twitter favorite from the event_type.
      console.log('Got a new twitter message');

      if (data.event === 'favorite') {
        Tweet.create({content : data}, function(err, saved) {
          if (err) console.log('Error while saving tweet', err)
          else console.log('Tweet saved!')
        });
      } else {
        console.log('Not a favorite tweet, skipping...')
      }
    });

    stream.on('end', function (response) {
      console.log('Stream end', response)
      // Handle a disconnection
    });

    stream.on('destroy', function (response) {
      // Handle a 'silent' disconnection from Twitter, no end/error event fired
      console.log('Stream destroy', response)
    });
  })
}