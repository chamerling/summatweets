var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var ReportSchema = new Schema({
  // date we received the tweet
  size : { type : Number, default: 0 },
  created_at : { type : Date, default: Date.now }
})

ReportSchema.pre('save', function(next) {
  console.log('Saving report', this)
  next();
})

ReportSchema.statics = {

  /**
   * Get last
   * @param cb
   */
  last : function(cb) {
    this.findOne().sort({'created_at' : -1}).limit(1).exec(cb);
  },

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

mongoose.model('Report', ReportSchema)
