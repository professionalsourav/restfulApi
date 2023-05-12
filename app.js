const express = require("express");
require("./db/conn.js");
const Student = require("./models/students");
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());

app.get("/", (req,res) =>{
    res.send("hello from the other side by sourav.")
});

// app.post("/students", (req,res)=> {
//     console.log(req.body);
//     const user = new Student(req.body);
// user.save().then(()=>{
//     res.status(201).send(user);
// }).catch((err)=>{
//     res.status(400).send(err);
// })
// });

//create new router
const router = new express.Router();
router.get("/sourav", (req,res) => {
    res.send("hello whatsup");
});

app.use(router)

//async await
app.post("/students",async (req,res)=>{

    try{
        const user = new Student(req.body);

        const createUser = await user.save();
        res.status(201).send(createUser);

    }catch(err){
        res.status(400).send(err);
    }
  
})



app.get("/students",async(req,res)=>{
try{
const studentData =await Student.find();
res.send(studentData);
}catch(err){
res.send(err);
}
})

//get individual data of api
app.get("/students/:id", async(req,res)=>{
  try{
const _id = req.params.id;


  const studentsData = await Student.findById(_id);
 
  res.send(studentsData);
  
  }catch(err){
 res.send(err);
  }
})
//update the student by its id
app.patch("/students/:id",async(req,res)=> {
try{
const _id = req.params.id;
const updateStudents= await Student.findByIdAndUpdate(_id, req.body,{
    new:true
});
res.send(updateStudents);
}catch(err){
    res.send(err);
}
})






//delete the students data
app.delete("/students/:id", async(req,res)=>{
try{
   
  const deleteStudent =await Student.findByIdAndDelete(req.params.id);
  if(!req.params.id){
    return res.status(400).send();
  }
  res.send(deleteStudent);

}catch(err){
    res.send(err);
}
})

app.listen(port, ()=> {
    console.log(`listening to ${port}`);
});
