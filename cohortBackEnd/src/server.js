import http from 'http';
import { Server } from 'socket.io';
import app from './app.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const PORT = process.env.PORT || 5000;

// Create HTTP server from express app
const server = http.createServer(app);

// Initialize Socket.IO
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Socket.IO logic
io.on('connection', (socket) => {
  console.log('Socket connected:', socket.id);

  socket.on('join-chat', (chatId) => {
    socket.join(chatId);
    console.log(`Socket ${socket.id} joined chat ${chatId}`);
  });

  socket.on('send-message', ({ chatId, message }) => {
    socket.to(chatId).emit('receive-message', message);
  });

  socket.on('disconnect', () => {
    console.log('Socket disconnected:', socket.id);
  });
});

// OPTIONAL: better error visibility
mongoose.set("bufferCommands", false);

// MongoDB connection + server start
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Atlas connected");

    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

startServer();
