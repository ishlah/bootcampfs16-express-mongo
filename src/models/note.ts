import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
});

export const Note = mongoose.model("Note", noteSchema);
