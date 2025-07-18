"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.list = exports.create = void 0;
const prima_1 = __importDefault(require("../config/prima"));
const create = async (req, res) => {
    try {
        const { title, status } = req.body;
        const newTodo = await prima_1.default.todo.create({
            data: {
                title: title,
                status: status
            }
        });
        res.json({ newTodo });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
};
exports.create = create;
const list = async (req, res) => {
    try {
        const todos = await prima_1.default.todo.findMany();
        res.json({ todos });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
};
exports.list = list;
const update = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, status } = req.body;
        const updated = await prima_1.default.todo.update({
            where: {
                id: Number(id)
            },
            data: {
                title: title,
                status: status
            }
        });
        res.json({ updated });
    }
    catch (err) {
        console.log(err);
    }
};
exports.update = update;
const remove = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await prima_1.default.todo.delete({
            where: {
                id: Number(id)
            }
        });
        res.json({ deleted });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
};
exports.remove = remove;
