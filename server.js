const express = require("express");

const app = express()

let PORT = process.env.PORT || 3000;



// app.use("/", htmlRoutes);

app.use(express.static('public'))


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./controller/htmlRoutes")(app)

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`)
})
