"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRouter = void 0;
var setupRouter = function (app) {
    var indexRouter = require('../routes/index');
    var usersRouter = require('../routes/users');
    app.use('/api', indexRouter);
    app.use('/api/users', usersRouter);
};
exports.setupRouter = setupRouter;
