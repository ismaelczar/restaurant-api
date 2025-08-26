import express from 'express';
import mongoose from 'mongoose';
import { route } from './routes';
import path from 'path';

const app = express();

const PORT = process.env.PORT || 3001;

mongoose
  .connect('mongodb://localhost:27017/restaurante')
  .then(() => {
    app.use(express.json());
    app.use(route);
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); // Serve static files from the uploads directory

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(error => {
    console.log('Error conecting to MongoDB:', error);
  });

export { app };
