
import { Admin } from "../schema/admin.js";
import { User } from "../schema/user.js";

export const allUser =async(req,res)=>{
    const {id}= req.params;
    const isAdmin = await Admin.findById(id);
    const users = await User.find()
    if(!isAdmin){
        return res.status(404).json({
            success:false,
            message:"not Admin !"
        })
    }
    res.json({users,success:true,})
}