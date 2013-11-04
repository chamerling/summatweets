var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

/**
 * User Schema
 */

var TweetSchema = new Schema({
  // date we received the tweet
  created_at : { type : Date, default: Date.now },
  // the tweet content; schema is mixed to handle heterogeneous messages coming from the stream API
  content : Schema.Types.Mixed
})

TweetSchema.pre('save', function(next) {
  console.log('Saving tweet', this)
  next();
})

TweetSchema.statics = {

  /**
   * Get tweets since date. This is used to get stored tweets since last cron job.
   *
   * @param date
   * @param cb
   */
  since : function(date, cb) {
    this.find({'created_at': {'$gte': date, '$lt': new Date()}})
      .sort({'created_at': -1})
      .exec(cb)
  }
}

mongoose.model('Tweet', TweetSchema)
