import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const TaskModel = mongoose.model("Assignment_indrayani", NoteSchema);
