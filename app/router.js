// app/router.js

'use strict';
module.exports = app => {
    const { router, controller } = app;
    router.get('/',controller.board.read);
};

