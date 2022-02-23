'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.board.read);
  router.post('/insert',controller.board.create);
  router.get('/delete/:id',controller.board.destroy);
  router.post('/update',controller.board.update);

};
