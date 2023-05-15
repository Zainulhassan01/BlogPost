const express = require('express') 
const app = express()
//for handling http requests
const http = require('http')

// Temporary posts to show at our index page
blogs = [{id: 1, title: "Hello"}, {id: 2, title: "Hiii"},{id: 3, title: "Hyy"}]

app.get('/', (req, res) => {
    res.send(blogs)
})

app.get('/:id', (req, res) => {
    const id = req.params.id
    const blog = blogs.find(x => x.id === parseInt(id))
    res.send(blog)
})

app.post('/createblog', (req, res) => {
    const newBlogTitle = req.query.title
    const newBlodId = blogs.length + 1
    const newBlog = {id: newBlodId, title: newBlogTitle}
    blogs.push(newBlog)

    res.send(blogs)
})

app.post('/updateblog/:id', (req, res) =>{
    const id = req.params.id
    const blog = blogs.find(x => x.id === parseInt(id))

    const getNewTitle = req.query.title
    let prevBlog = blogs.find(x => x.id === parseInt(id))
    prevBlog.title = getNewTitle
    res.send(prevBlog)
})

app.post('/removeBlog/:id', (req, res) =>{
    const id = req.params.id
    const filteredBlogs = blogs.filter(item => item.id !== parseInt(id))

    res.send(filteredBlogs)    
})


const server = http.createServer(app);
server.listen(3000);
