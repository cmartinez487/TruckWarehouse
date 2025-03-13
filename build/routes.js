"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/ping', (_req, res) => {
    console.log('ping');
    res.send('pong');
});
exports.default = router;
