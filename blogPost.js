const express = require('express') 
const app = express()
//for handling http requests
const http = require('http')

// Temporary posts to show at our index page
blogs = [{id: 1, title: "Hello"}, {id: 2, title: "Hiii"},{id: 3, title: "Hyy"}]
app.get('/', (req, res) => {
    res.send(blogs)
})

const server = http.createServer(app);
server.listen(3000);
