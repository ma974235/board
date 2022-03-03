// app/router.js

'use strict';
module.exports = app => {
    const { router, controller } = app;
    router.get('/',controller.board.read);
    router.get('/delete/:id',controller.board.destroy);  
    router.post('/insert',controller.board.create);
    router.post('/update',controller.board.update);

};

