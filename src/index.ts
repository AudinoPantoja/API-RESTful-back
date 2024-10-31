import express, { Request, Response } from 'express';

const app = express();
// Define el puerto
const port = 3000;

// Define una ruta con un parámetro en la URL y consulta opcional
app.get('/number/:name', (req: Request, res: Response) => {
    const { name } = req.params; // Obtiene el parámetro de la URL
    const lastname = req.query.lastname ? req.query.lastname : 'Apellido no especificado'; // Obtiene el parámetro de consulta

    res.send(`Hola, ${name}! ${lastname ? `apellido: ${lastname}.` : ''}`);
});

// Ruta que maneja parámetros de consulta (query) solamente
app.get('/info', (req: Request, res: Response) => {
    const name = req.query.name ? req.query.name : 'Desconocido';
    const age = req.query.age ? req.query.age : 'Edad no especificada';

    res.send(`Hola ${name}, tienes ${age} años`);
});

// Otra ruta de ejemplo sin parámetros
app.get('/hello', (_req: Request, res: Response) => {
    res.send('¡Hola, Mundo!');
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
