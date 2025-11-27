import express from 'express';
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  getTodoById,
  updateTodo,
} from '../controllers/todo.controller.js';

const router = express.Router();

router.route('/').get(getAllTodos);
router.route('/add').post(addTodo);
router.route('/:id').get(getTodoById);
router.route('/update/:id').patch(updateTodo);
router.route('/delete/:id').delete(deleteTodo);

export default router;
