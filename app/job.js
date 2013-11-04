var cronJob = require('cron').CronJob
  , mongoose = require('mongoose')
  , Tweet = mongoose.model('Tweet')
  , Report = mongoose.model('Report')

/**
 * Create and start a job
 *
 * @param config
 */
module.exports = function(config) {
  console.log('Starting cronjob', config.cron)
  var job = new cronJob(config.cron, function() {
    report(config)
  }, null, true, null);
  job.start();
}

/**
 * Generate and send report from tweets
 *
 * @param config
 */
var report = function(config) {
  Report.last(function(err, report) {
    if (err) {
      console.log(err);
    } else {
      var date = null;
      if (!report) {
        // get all the tweets since yesterday. This is probably the first time a job is launched!
        date = new Date();
        date.setDate(date.getDate() - 1);
      } else {
        date = report.created_at;
      }

      console.log('Getting tweets since ', date);
      Tweet.since(date, function(err, tweets) {
        if (err) {
          console.log('Error while getting tweets', err)
        } else {
          if (tweets.length > 0) {
            console.log("Sending report...")
            require('./mailer')(config, tweets)
          } else {
            console.log('No tweets for report generation, see you next time...')
          }

          Report.create({size : tweets.length}, function(err, saved) {
            // TODO : Really store a report to avoid later processing...
          });
        }
      });
    }
  });
}