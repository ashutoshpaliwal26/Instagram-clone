const mongoose = require('mongoose');

const connectToDB = async(connectionString)=>{
    try{
        await mongoose.connect(connectionString,{
            dbName : 'Social'
        });
        console.log("Connected Succesfull");
    }catch(err){
        console.log(err);
    }
}


module.exports = connectToDB;