import express from 'express';
import dotenv from 'dotenv';
import diariesRoutes from './routes/diariesRoutes';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/api/diaries', diariesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});