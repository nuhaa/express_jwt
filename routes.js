'use strict';

module.exports = function(app){
  var controller = require('./controller');
  app.route('/').get(controller.index);
  app.route('/list').get(controller.list);
  app.route('/list/:id').get(controller.getSingle);
}