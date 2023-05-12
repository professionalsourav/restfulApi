const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/students-api",{
    // useCreateIndex:true,
    // useNewUrlParser:true,
    // useUnifiedTopology:true
}).then(() =>{
    console.log("connection is successful");
}).catch((err)=>{
     console.log("no connection");
});