import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim: true,

    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        trim: true,
    
    },
    password:{
        type:String,
        required:true,
    }
},
{
    timestamps:true
}
)


export const Admin = mongoose.model('Admin', adminSchema);