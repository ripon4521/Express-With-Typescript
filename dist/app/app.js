"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const userRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
userRouter.post('/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.send({
        success: true,
        message: 'User Created',
        user: user
    });
});
app.get('/', (req, res, next) => {
    res.send("Hello!");
    next();
});
app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Get Developer ');
});
app.all('*', (req, res) => {
    res.status(404).send({
        success: false,
        message: "Route is not Found"
    });
});
app.use((error, req, res, next) => {
    if (error) {
        res.status(500).send({
            success: false,
            message: "Somethings error"
        });
    }
});
exports.default = app;
