/**
 * Summatweets
 *
 * Christophe Hamerling - chamerling.github.io
 */
var fs = require('fs')

  var env = process.env.NODE_ENV || 'development'
  , config = require('./app/config')[env]
  , mongoose = require('mongoose')

mongoose.set('debug', config.mongo.debug)
mongoose.connect(config.mongo.uri);

var models_path = __dirname + '/app/models'
fs.readdirSync(models_path).forEach(function (file) {
  require(models_path + '/' + file)
})

require('./app/listener')(config)
require('./app/job')(config)