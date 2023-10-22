const app = require('./app.js');
const connectDB = require('./config/db_connection');


app.listen(process.env.PORT,async()=>{
    await connectDB()
    console.log("Server Started on PORT NO:",process.env.PORT)
})


 
