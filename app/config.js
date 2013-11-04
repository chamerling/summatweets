module.exports = {
  development: {
    mongo: {
      uri: 'mongodb://localhost:27017/summatweets_dev',
      debug: true
    },
    twitter : {
      consumer_key: 'xxx',
      consumer_secret: 'xxx',
      access_token_key: 'xxx',
      access_token_secret: 'xxx'
    },
    cron : '0 0 * * * *',
    mail : {
      active : true,
      from : 'summatweets@xxx.com',
      to: 'you@gmail.com',
      subject: '[summatweets] Your Twitter Links',
      options: {
        nodemailer: {
          service: "Gmail",
          auth: {
            user: process.env.SMTP_USER || 'xxx@gmail.com',
            pass: process.env.SMTP_PASS || "userpass"
          }
        }
      }
    }
  },
  production: {
  }
}