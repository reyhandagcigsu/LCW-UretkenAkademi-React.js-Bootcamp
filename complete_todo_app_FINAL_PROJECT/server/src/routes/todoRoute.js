const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();




router.get('/',todoController.getAllTodos);
router.post('/',todoController.addNewTodo);
router.delete('/:id',todoController.deleteTodo);


module.exports = router;