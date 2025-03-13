import express from 'express';
import dotenv from 'dotenv';
import dairiesRoutes from './routes/diaries';

const app = express();
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use('/routes', dairiesRoutes);

app.get('/testing', (_req, res) => {
  console.log('test api working in ' + new Date().toLocaleDateString());
  res.send('pong');
});

// Manejo de errores
app.use((err: any, _req: express.Request, res: express.Response) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
