'use strict';

module.exports = function(app){
  var controller = require('./../app/controller');
  app.route('/').get(controller.index);
  app.route('/list').get(controller.list);
  app.route('/list/:id').get(controller.getSingle);
  app.route('/create').post(controller.create);
  app.route('/edit/:id').put(controller.edit);
  app.route('/delete').delete(controller.delete);
}
