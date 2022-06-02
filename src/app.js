import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import morgan from 'morgan';
import 'dotenv/config';
import { route } from './routes.js';

const port = 3000;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

route(app);

app.get('/main', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.use(morgan('combined'));

app.listen(port, () => {
    console.log(`server running at http://localhost:${port}/products`);
});