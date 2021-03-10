import express, { urlencoded } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import TaskRoutes from './routes/tasks.routes';

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(urlencoded({ extended: false }));

//Routes
app.get('/', (req, res) => {
  res.json({ message: 'welcome to my app' });
});

app.use('/api/tasks', TaskRoutes);

export default app;
