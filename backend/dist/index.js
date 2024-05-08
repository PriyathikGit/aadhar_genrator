"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = require('./routes/MyUid');
const app = express();
const cors = require('cors');
const path_1 = __importDefault(require("path"));
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.static(path_1.default.join(__dirname, "../../frontend/dist/")));
const bodyParser = require('body-parser');
router.use(bodyParser.json());
app.get('/api', (req, res) => {
    res.json({ users: ['users', 'users2'] });
});
app.use('/api', router);
app.listen(3000, () => {
    console.log('server started on port 3000');
});
