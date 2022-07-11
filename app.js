const express = require("express");
const bodyParser = require("body-parser");

const dotenv = require("dotenv")
dotenv.config();

const cors = require("cors");// for passing data between the different servers;

const app = express();
//app.use(bodyParser.urlencoded({extended :true}));
app.use(express.json()); // allow all post req to be in json format
app.use(cors());
const router = require("./routes/book-routes.js")

const mongoose = require("mongoose");

// middle wares 
app.use("/books", router);


mongoose.connect(process.env.URI)
.then(()=>console.log("Connected to Database, !!yayy"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=>console.log(err));









//MowgzGqW1cmINXU5