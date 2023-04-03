const type= require('../models/users.models')


const AddUser = async (req,res) => {   
    try{  
            await type.create(req.body) 
            res.status(201).json({message: 'User added with sucess'})

        }
          
          

    catch(error) { 
        console.log(error.message)
    }

} 

const FindAllUsers = async (req,res) => { 
    try{  
        
        const data= await type.find()
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 
 
const FindSinglUser = async (req,res) => { 
    try{ 
        const data= await type.findOne({_id: req.params.id})
        res.status(201).json(data)
  } catch(error) { 
      console.log(error.message)
  }

} 

const UpdateUser = async (req,res) => {  
    try{   
       
       
       
       
        const data= await type.findOneAndUpdate( 
            {_id: req.params.id} , 
            req.body , 
            {new : true}
            ) ;
        res.status(201).json(data); 
               
  } catch(error) { 
      console.log(error.message)
  }
  
    

} 

const DeleteUser = async (req,res) => { 
    try{ 
        const data= await type.deleteOne({_id: req.params.id})
        res.status(201).json({message:"User deleted with success"})
  } catch(error) { 
      console.log(error.message)
  }
  

} 
module.exports = {
    AddUser,
    FindAllUsers,
    FindSinglUser,
    UpdateUser,
    DeleteUser,
  };