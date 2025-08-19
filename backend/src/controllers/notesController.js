import Note from "../models/Note.js";

export async function getAllNotes(_, res) {  // if variable is not used, make sure it will be replaced by "_"
    try {
        const notes = await Note.find().sort({createdAt: -1}); // -1 will sort in desc. order (newest first)
        res.status(200).json(notes);

    } catch (error) {
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function getNoteById(req, res) {
    try {
        const noteById = await Note.findById(req.params.id);  // the note's ID from the URL (e.g., /notes/123 gives id = 123)
        if(!noteById) return res.status(404).json({message: "Note not found"});

        res.status(200).json({message: "You just fetched the note", note: noteById});
    } catch(error) {
        console.error("Error in getNoteById controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function createNote(req, res) {
    try {
        const {title, content} = req.body;
        const note = new Note({title, content});

        const savedNote = await note.save();
        res.status(201).json({note: savedNote});
    } catch (error) {
        console.error("Error in createNote controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}

export async function updateNote(req, res) {
       try {
           const {title, content} = req.body;

           // {new: true} makes sure it returns the updated version
           const updateNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true});

           if(!updateNote) return res.status(404).json({message: "Note not found"});

           res.status(200).json({message: "Note updated successfully", note : updateNote});
       } catch (error) {
           console.error("Error in updateNote controller", error);
           res.status(500).json({message: "Internal server error"});
       }
}

export async function deleteNote(req, res) {
        try {
            const deletedNote = await Note.findByIdAndDelete(req.params.id);
            if(!deletedNote) return res.status(404).json({message: "Note not found"});

            res.status(200).json({message: "Note deleted successfully", deletedNote : deletedNote});
        } catch (error) {
            console.error("Error in deleteNote controller", error);
            res.status(500).json({message: "Internal server error"});
        }
}