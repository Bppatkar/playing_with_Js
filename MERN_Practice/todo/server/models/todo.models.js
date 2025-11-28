import mongoose from 'mongoose';

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  { timeStamps: true }
);

todoSchema.index({ title: 1 });

const Todo = mongoose.model('Todo', todoSchema);
export default Todo;
