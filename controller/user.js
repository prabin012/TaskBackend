
import { Admin } from '../schema/admin.js';
import { User } from '../schema/user.js'
import bcrypt from 'bcrypt';

export const newUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const isEmail = await User.findOne({ email });
        if(isEmail) {
            return res.status(409).json({
                success: false,
                messsage: "USer is already Exits !"
            })
        }
        else{
            const salt= await bcrypt.genSalt(10);
            const userPassword = await bcrypt.hash(password, salt)
            await User.create({
                name,
                email,
                password: userPassword,
              });
            res.status(201).json({
                success: true,
                messsage: "User created Successfully...",
            })
        }
    } catch (error) {
        console.log(error)
    }
}


export const addAdmin = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const isEmail = await Admin.findOne({ email });
        if(isEmail) {
            return res.status(409).json({
                success: false,
                messsage: "Admin is already Exits !"
            })
        }
        else{
            const salt= await bcrypt.genSalt(10);
            const userPassword = await bcrypt.hash(password, salt)
            await Admin.create({
                name,
                email,
                password: userPassword,
              });
            res.status(201).json({
                success: true,
                messsage: "Admin created Successfully...",
            })
        }
    } catch (error) {
        console.log(error)
    }
}


export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const users = await User.findOne({email:email});  
        if(!users.email){
            return res.status(404).json({
                success: false,
                messsage: "User doesnot exit"
            });
        }
        const isPassword =await bcrypt.compare(password, users.password);
        if (!isPassword) { 
            return res.status(404).json({
                success: false, 
                messsage: "incorrect password"
            })                                        
        }
        res.json({
            success: true,
            users
            })
    }catch (error) {
        res.status(404).json({
            success: false,
            messsage: "indalid User !"
        });
    }
}

export const userDelet =async(req, res)=>{
    try {
        const { id } = req.params;
        const isUser = await User.findByIdAndDelete(id);
        if (isUser) {
            res.status(200).send('Task deleted successfully.');
          } else {
            res.status(404).send('Task not found.');
          }
    } catch (error) {
        res.status(500).send('Error deleting the task.');
    }
}