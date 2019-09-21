const express = require('express')
const app = express()
const port = 9000

app.get("/", function(req, res) {
    res.send("this is  get")
})

app.post("/post-route", function(req, res) {
    res.send("this is a post")
})

app.delete("delete-route", function(req, res) {
    res.send("this is a delete")
})

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
})