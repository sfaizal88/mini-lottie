/**
 * Main start of the nodejs
 * @author - Faizal
 * @date - 12th June 2024
 */
// IMPORT FILE
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const connection = require('./db'); 
const cors = require('cors');

// PORT
const port = 4000;
const app = express();

// CROS ACCEPT
app.use(cors());
const server = http.createServer(app);

// SOCKET SETUP
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});
app.use(express.urlencoded());
app.use(express.json());

// CONNECT TRIGGER FOR SOCKET
io.on('connection', (socket) => {
    console.log('a user connected');
    const userId = Math.floor(Math.random() * 10000000000);
    console.log(userId);

    socket.emit('assignId', userId);
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    socket.on('sendJson', (data) => {
        console.log('Received JSON:', data);
        // Broadcast the received JSON to all connected clients
        io.emit('receiveJson', data);
    });
});

// SAVE FILE API
app.post('/saveFile', (req, res) => {
    console.log(req.body)
    const { animationData } = req.body;
    console.log('Received animateData:', animationData);

    // Insert animateData into MySQL database
    const query = 'INSERT INTO animate_data (data) VALUES (?)';
    // REMOVE WHEN DATABASE CONNECTED
    /**connection.query(query, [JSON.stringify(animationData)], (err, results) => {
        if (err) {
            console.error('Error inserting data into MySQL:', err.stack);
            return res.status(500).json({ message: 'Database insertion failed' });
        }

        // Respond back with a success message
        res.json({ message: 'Data received and inserted successfully' });
    }); */
    res.json({ message: 'Data received and inserted successfully' });
    // Respond back with a success message
    res.json({ message: 'Data received successfully' });
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
