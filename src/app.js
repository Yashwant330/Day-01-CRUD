import express from 'express';
import NoteModel from '../models/notes.model.js';


let app = express()
app.use(express.json())


/**
 * @route POST/api/notes
 * @description Create a new note need title and description in request body
 * @access Public
 */

app.post("/api/notes", async (req,res)=>{
    const{title,description} = req.body;


    if(!title)
    {
        return res.status(400).json({error:"Title is required"})

    }

    if(!description)
    {
        return res.status(400).json({
         error:"Description is required"
        })
    }

    if(title.trim().length<3)
    {
        return res.status(400).json({
            error:"Title must be atleast 4 characters long"
        })
    }

      if(description.trim().length<4)
    {
        return res.status(400).json({
            error:"description must be atleast 4 characters long"
        })
    }

// ----- If validation passes,createthe note----

const newNote = await NoteModel.create({title,description})


return res.status(201).json({
    Message:"Note created successfully", 
    newNote});

})


export default app;