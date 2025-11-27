import Todo from '../models/todo.models.js';

async function getAllTodos(req, res) {
  try {
    const todos = await Todo.find({});
    if (!todos || todos.length == 0) {
      return res.status(404).json({ message: 'No todos found' });
    }
    return res.status(200).json(todos);
  } catch (error) {
    console.log('Error in getAllTodos controller:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function addTodo(req, res) {
  try {
    const { title, description, isActive } = req.body;
    if (!title || !description || !isActive === undefined) {
      return res.status(404).json({ message: 'all fields are required' });
    }
    const existingTodo = await Todo.findOne({ title });
    if (existingTodo) {
      return res.status(400).json({ message: 'Use other Title' });
    }
    const newTodo = await Todo.create({
      title,
      description,
      isActive,
    });

    return res.status(201).json({
      success: true,
      message: 'Todo added successfully',
      newTodo,
    });
  } catch (error) {
    console.log('Error in addTodo controller:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function getTodoById(req, res) {
  try {
    const todoId = await Todo.findById(req.params.id);
    if (!todoId) {
      return res.status(404).json({ message: 'todo not found' });
    }
    return res
      .status(200)
      .json({ message: 'Todo By Id Recieved', todo: todoId });
  } catch (error) {
    console.log('Error in getTodoById controller:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function updateTodo(req, res) {
  try {
    const { title, description, isActive } = req.body;

    const newUpdatedTodo = await Todo.findByIdAndUpdate(
      { _id: req.params.id },
      { title, description, isActive },
      { new: true }
    );
    if (!newUpdatedTodo) {
      return res.status(404).json({
        success: false,
        message: 'Todo not updated',
      });
    }
    return res.status(200).json({
      success: true,
      message: 'Todo updated successfully',
      todo: newUpdatedTodo,
    });
  } catch (error) {
    console.log('Error in updateTodo controller:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function deleteTodo(req, res) {
  try {
    const deleted = await Todo.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    return res.status(200).json({
      success: true,
      message: 'Todo deleted successfully',
    });
  } catch (error) {
    console.log('Error in deleteTodo controller:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

export { getAllTodos, addTodo, getTodoById, updateTodo, deleteTodo };
