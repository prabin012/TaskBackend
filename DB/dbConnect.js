import mongoose from "mongoose";

const database =()=>{
    const db_url = process.env.MONGODB_URL;
    mongoose.connect(db_url,{
        dbName:'TaskManagement'
    }
        ).then(()=>{
            console.log("db Connected");
        }).catch((e)=>{
            console.log(e)
        })
}
export default database