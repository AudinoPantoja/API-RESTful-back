"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/number/:name', (req, res) => {
    const { name } = req.params;
    const lastname = req.query.lastname ? req.query.lastname : 'Apellido no especificado';
    res.send(`Hola, ${name}! ${lastname ? `apellido: ${lastname}.` : ''}`);
});
app.get('/info', (req, res) => {
    const name = req.query.name ? req.query.name : 'Desconocido';
    const age = req.query.age ? req.query.age : 'Edad no especificada';
    res.send(`Hola ${name}, tienes ${age}. años`);
});
app.get('/hello', (_req, res) => {
    res.send('¡Hola, Mundo!');
});
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map