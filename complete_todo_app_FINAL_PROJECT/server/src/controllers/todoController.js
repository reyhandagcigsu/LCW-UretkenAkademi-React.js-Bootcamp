const todoService = require('../services/todoService');

async function getAllTodos(req,res){
    /*const items = [
        {id:"1", title:"study react ", date: new Date(2020, 7, 14)}
    ]*/

    try{
        let items = await todoService.getTodoFromDb();
        let responeObject = {
            "items":items
        }
        res.json(responeObject);
    }catch(e){
        res.send(e);
    }
    
}

async function addNewTodo(req,res){
    try{
        let items = await todoService.saveTodoDb(req.body);
        res.json(items);
    }catch(err){
        res.send(err.toString());
    }
}

async function deleteTodo(req,res){
    try{
        let deleteResponse = await todoService.deleteTodoFromDb(req.params.id);
        res.json(deleteResponse);
    }catch(err){
        res.send(err.toString());
    }
}

module.exports = {
    getAllTodos,
    addNewTodo,
    deleteTodo
}