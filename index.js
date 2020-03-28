//similar to: import express from 'express';
const express = require('express'); //npm i express
const shortid = require('shortid'); //<<<<< npm i shortid

const server = express();

// let hubs = [];
let lessons = [];

server.use(express.json()); //<<<<<<< add this line

server.get('/', (req, res) => {
    res.status(200).json({api: 'running...'});
});

server.get('/hello', (req, res) => {
    res.status(200).json({hello: 'web 28'});
});

server.post('/api/hubs', (req, res) => {
    //axios.post(/api/hubs, data) <-- the data shows up as the req.body on the server
    const hubInfo = req.body;

    //validate that the hubInfo is correct before saving

    hubInfo.id = shortid.generate();

    hubs.push(hubInfo);

    res.status(201).json(hubInfo);
})


//write a GET/hello endpoint that returns an object like so: { hello:'web 28' }

//write an end point to creat Lessons
server.post('/api/lessons', (req, res) =>{
    const lessonInfo = req.body;
    lessonInfo.id = shortid.generate();
    lessons.push(lessonInfo);
    res.status(201).json(lessonInfo);
})



const PORT = 5000;
server.listen(PORT,() =>
console.log(`\n ** API on http://localhost:${PORT} **\n`)
);
// to run the server use: node index.js