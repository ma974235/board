// app/router.js

'use strict';
module.exports = app => {
    const { router, controller } = app;
    router.get('/',controller.board.read);
    router.post('/insert',controller.board.create);
    router.get('/delete/:id',controller.board.destroy);

};

