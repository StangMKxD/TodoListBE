"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = require("../controllers/todo");
const router = express_1.default.Router();
router.get('/todo', todo_1.list);
router.post('/todo', todo_1.create);
router.put('/todo/:id', todo_1.update);
router.delete('/todo/:id', todo_1.remove);
exports.default = router;
