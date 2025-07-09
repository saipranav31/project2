const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

// Setup
const app = express();
const server = http.createServer(app);
const io = new Server(server);
const PORT = process.env.PORT || 3000;

// Serve HTML UI
app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Real-Time Chat App</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background: #f4f4f4;
        margin: 0;
        padding: 20px;
      }
      .chat-container {
        max-width: 600px;
        margin: auto;
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
      }
      h2 {
        text-align: center;
      }
      ul {
        list-style: none;
        padding: 0;
        max-height: 300px;
        overflow-y: auto;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 15px;
      }
      li {
        padding: 10px;
        border-bottom: 1px solid #eee;
      }
      form {
        display: flex;
      }
      input {
        flex: 1;
        padding: 10px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px 0 0 5px;
      }
      button {
        padding: 10px;
        font-size: 16px;
        background: #007bff;
        color: white;
        border: none;
        border-radius: 0 5px 5px 0;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="chat-container">
      <h2>💬 Real-Time Chat</h2>
      <ul id="messages"></ul>
      <form id="form">
        <input id="input" autocomplete="off" placeholder="Type your message..." />
        <button>Send</button>
      </form>
    </div>

    <script src="/socket.io/socket.io.js"></script>
    <script>
      const socket = io();
      const form = document.getElementById('form');
      const input = document.getElementById('input');
      const messages = document.getElementById('messages');

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        if (input.value) {
          socket.emit('chat message', input.value);
          input.value = '';
        }
      });

      socket.on('chat message', function (msg) {
        const item = document.createElement('li');
        item.textContent = msg;
        messages.appendChild(item);
        messages.scrollTop = messages.scrollHeight;
      });
    </script>
  </body>
  </html>
  `);
});

// Socket.IO logic
io.on('connection', (socket) => {
  console.log(`🟢 User connected: ${socket.id}`);

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); // broadcast to all clients
  });

  socket.on('disconnect', () => {
    console.log(`🔴 User disconnected: ${socket.id}`);
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`🚀 Chat server running on http://localhost:${PORT}`);
});
