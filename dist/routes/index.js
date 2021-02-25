"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = __importDefault(require("../index"));
var router = express_1.Router();
router.get('/productos', function (req, res) {
    try {
        res.status(200).json(index_1.default.getAll());
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
router.get('/productos/:id', function (req, res) {
    try {
        res.status(200).json(index_1.default.getOne(+req.params.id));
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
});
router.post('/productos', function (req, res) {
    try {
        console.log(req.body);
        if (!req.body.title && req.body.title == '') {
            throw Error('Falta el titulo del producto');
        }
        res.status(200).json(index_1.default.add(req.body));
    }
    catch (err) {
        return res.status(500).json({ error: err.message || 'Error' });
    }
});
router.put('/productos/:id', function (req, res) {
    try {
        res.status(200).json(index_1.default.update(req.body));
    }
    catch (err) {
        return res.status(500).json({ error: err.message || 'Error' });
    }
});
router.delete('/productos/:id', function (req, res) {
    try {
        res.status(200).json(index_1.default.delete(+req.params.id));
    }
    catch (err) {
        return res.status(500).json({ error: err.message || 'Error' });
    }
});
exports.default = router;
