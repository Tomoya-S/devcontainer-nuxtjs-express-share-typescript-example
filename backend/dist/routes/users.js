"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
router.get('/users', function (req, res, next) {
    var mockUsers = [
        {
            id: 1,
            login_id: 'example1',
            last_name: 'example_last1',
            first_name: 'example_first1',
        },
        {
            id: 2,
            login_id: 'example2',
            last_name: 'example_last2',
            first_name: 'example_first2',
        },
        {
            id: 3,
            login_id: 'example3',
            last_name: 'example_last3',
            first_name: 'example_first3',
        },
    ];
    res.json('get all users');
});
router.get('/users/:id', function (req, res, next) {
    res.json('get user:' + req.params.id);
});
router.post('/users', function (req, res, next) {
    res.json('created user');
});
router.delete('/users/:id', function (req, res, next) {
    res.json('deleted user:' + req.params.id);
});
module.exports = router;
