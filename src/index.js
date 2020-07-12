const express = require("express")
const path = require("path")
const hbs = require("hbs")
const router = require("./routers/router")

const app = express()
const port = process.env.PORT || 3000;

const publicDirectory = path.join(__dirname,"..","public")
const templateDirectory = path.join(__dirname,"..","templates")
const partialsDirectory = path.join(__dirname,"..","templates","partials")

app.use(express.static(publicDirectory))
app.set("view engine","hbs")
app.set("views",templateDirectory)
hbs.registerPartials(partialsDirectory)

app.use(router)

app.listen(port,()=>{
    console.log("Server is running on PORT:-",port)
})