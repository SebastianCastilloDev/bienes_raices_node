import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js';

const app = express();
const port = 3000;

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})

// Routing
app.use('/', usuarioRoutes);