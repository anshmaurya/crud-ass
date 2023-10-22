const mongoose = require('mongoose');

const connectDB=async()=>{mongoose.connect(process.env.DB_URL,{ useUnifiedTopology: true,useNewUrlParser: true,})
.then((con)=>{
    console.log("Connected established")
}).catch((err)=>{
    console.log("Error While Connecting to DB",err.message)
})}

module.exports = connectDB;
