
import express from "express";
import { Login, addAdmin, newUser, userDelet } from "../controller/user.js";
import { addList, deleteList, getItems } from "../controller/lists.js";
import { addTask, deleteTask, getTasks, updateTask } from "../controller/tasks.js";
import { allUser } from "../controller/allUser.js";

const router = express.Router();


router.post('/addadmin', addAdmin);
router.post('/createUser', newUser);
router.post('/login', Login);
router.post('/addlist/:id', addList)
router.delete('/deletelist/:id', deleteList)
router.delete('/userdelet/:id', userDelet)
router.get('/getlist/:id', getItems)
router.get('/gettasks/:id', getTasks)
router.post('/addTask/list/:id', addTask)
router.delete('/delettask/list/:id', deleteTask)
router.post('/updatetask/list/:id', updateTask)
router.get('/adminuser/:id', allUser)

export default router;