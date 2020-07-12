const express = require("express")
const app = express.Router()

app.get("/",(req,res)=>{
    res.render("index",{
        memebox : function(){
            return "partial"
        }
    })
})




module.exports = app;