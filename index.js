const express = require("express");

const app = express();

app.get('/', (req, res)=> {
    res.send("Welcome docker app 1")
});

app.listen(5000, () => {
    console.log("Server listening on port 5000")
});