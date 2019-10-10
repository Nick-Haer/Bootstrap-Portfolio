const express = require("express");

const app = express()

let PORT = process.env.PORT || 3000;

const htmlRoutes = require("./controller/htmlRoutes")








app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`)
})
