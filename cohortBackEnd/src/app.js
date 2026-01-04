import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.js';
import authRoutes from './routes/auth.js';
import chatRoutes from './routes/chat.route.js';
import messageRoutes from './routes/message.route.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/users', userRoutes);

export default app;
