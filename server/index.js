const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv')
const mongoose = require('mongoose');

const app = express();

dotenv.config();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
 .then(()=> app.listen(PORT, ()=>
  console.log("Connected succesfully at port no", {PORT})))
 .catch((err)=> console.log(err.message));
