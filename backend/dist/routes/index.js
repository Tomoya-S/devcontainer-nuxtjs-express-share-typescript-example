"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = (0, express_1.Router)();
/* GET home page. */
router.get('/me', function (req, res, next) {
    req.session.user = {
        id: 1,
        login_id: 'example',
        last_name: 'john',
        first_name: 'smith',
    };
    res.json(req.session.user);
});
module.exports = router;
