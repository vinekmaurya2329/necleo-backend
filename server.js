const express = require('express');
const app = express();
const projectModel = require('./Model/Project')
const upload = require('./helper/Multer')
const cors  = require('cors')
require('dotenv').config()
const DB = require('./db')

app.use(cors())
app.use(express.json())
app.use(express.static('public')) 

app.get('/',(req,res)=>{
    res.send('hello guys')
})
   

app.post('/createpost',upload.single('image'),async (req,res)=>{
    const {image,title,discription} = req.body;
     const  project = await projectModel.create({title:title,discription:discription,image:req.file.filename})

    res.send({ 
        message:'project created Successfully',
        ft:'congrats',
        lt:'success',
        project: project
    })
})

app.get('/allproject',async(req,res)=>{
    const projects = await projectModel.find()
    res.send({
        message:'find all project successfully',
        projects:projects
    })
})

app.put('/update/:updateid',upload.single('image'),async (req,res)=>{
  const {updateid} = req.params;
  const {title,discription} = req.body;
  console.log(updateid);
      const updatedProject = await projectModel.findByIdAndUpdate(updateid,{title:title,discription:discription,image:req.file.filename})
      res.send({
        message:'updated successfully',
        project:updatedProject
      })
})

app.delete('/delete/:deleteId',async(req,res)=>{ 
    const {deleteId} = req.params;
    const deleted = await projectModel.findByIdAndDelete(deleteId)
    res.send({
        message:'deleted succesfully'
    })
})





app.listen(4000,()=>{
console.log('server is started on port 4000');
})