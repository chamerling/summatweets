var nodemailer = require('nodemailer')
  , jade = require('jade');

/**
 * Send email using nodemailer
 *
 * @param config
 * @param body
 */
var mail = function(config, body) {

  var mailer = nodemailer.createTransport("SMTP", config.mail.options.nodemailer);
  var message = {
    from: config.mail.from,
    to: config.mail.to,
    subject: config.mail.subject,
    html: body
  }

  mailer.sendMail(message, function(error, response) {
    if(error) {
      console.log(error);
    } else {
      console.log("Message sent: " + response.message);
    }
  });
}

/**
 * Email tweets summary
 *
 * @param config app configuration
 * @param tweets tweets array
 */
module.exports = function(config, tweets) {
  var path = __dirname + '/template.jade'
    , str = require('fs').readFileSync(path, 'utf8')
    , fn = jade.compile(str, { filename: path, pretty: true })
    , html = fn({ tweets : tweets, title : config.mail.subject});

  if (config.mail.active) {
    mail(config, html);
  } else {
    console.log('Mail content to send : ', html);
  }
}