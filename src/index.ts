import express from "express";
import mongoose from "mongoose";
import { Note } from "./models/note";
import dotenv from 'dotenv'


const app = express();
dotenv.config();
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("connected to mongodb"))
  .catch((err) => console.log(err));

app.use(express.json());

app.get("/", async (req, res) => {
  const allNotes = await Note.find();
  res.json(allNotes);
});

app.delete("/:id", async (req, res) => {
  const id = req.params.id
  await Note.findByIdAndDelete(id)
  res.json({ message: "Note delete" });
});

app.post("/", async (req, res) => {
  const { title, content } = req.body;
  const newNote = new Note({
    title,
    content,
  });
  await newNote.save();
  res.json({ message: "Note added" });
});

app.listen(8000);
