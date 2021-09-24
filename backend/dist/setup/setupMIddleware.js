"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupMiddleware = void 0;
var express_1 = require("express");
var express_session_1 = __importDefault(require("express-session"));
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var setupMiddleware = function (app) {
    app.use(logger('dev'));
    app.use((0, express_1.json)());
    app.use((0, express_1.urlencoded)({ extended: false }));
    app.use(cookieParser());
    app.use((0, express_session_1.default)({
        secret: 'secret dog',
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
        },
    }));
};
exports.setupMiddleware = setupMiddleware;
