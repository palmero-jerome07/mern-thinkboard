import mongoose from "mongoose";

// 1- create a schema
// 2- create a model based on the schema

const replySchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const notesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    replies: [replySchema],
  },
  { timestamps: true }, // createdAt and updatedAt fields
);

const Note = mongoose.model("Note", notesSchema);

export default Note;
