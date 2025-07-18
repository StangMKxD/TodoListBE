"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = exports.update = exports.list = exports.create = void 0;
const prima_1 = __importDefault(require("../config/prima"));
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, status } = req.body;
        const newTodo = yield prima_1.default.todo.create({
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
});
exports.create = create;
const list = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield prima_1.default.todo.findMany();
        res.json({ todos });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
});
exports.list = list;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { title, status } = req.body;
        const updated = yield prima_1.default.todo.update({
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
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleted = yield prima_1.default.todo.delete({
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
});
exports.remove = remove;
