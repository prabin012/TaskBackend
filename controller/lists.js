import { Lists } from "../schema/Lists.js";

export const addList = async (req, res) => {
    try {
        const { id } = req.params;
        const { tittle } = req.body;
        await Lists.create({
            userID: id, tittle
        })
        res.status(200).json({
            success: true,
            message: "List Created Successfully..."
        })
    } catch (error) {
        return res.status(404).json({
            success: false,
            error
        })
    }
}

export const getItems =async(req, res)=>{
    const {id}=req.params;

    const isList = await Lists.find({userID:id})

    if(!isList){
        return res.json({
            message:"empty list!"
        })
    }

    res.status(200).json({isList})
}

export const deleteList =async(req, res)=>{
    try {
        const { id } = req.params;
        const isList = await Lists.findByIdAndDelete(id);
        if (isList) {
            res.status(200).send('List deleted successfully.');
          } else {
            res.status(404).send('List not found.');
          }
    } catch (error) {
        res.status(500).send('error deleting the List.');
    }
}