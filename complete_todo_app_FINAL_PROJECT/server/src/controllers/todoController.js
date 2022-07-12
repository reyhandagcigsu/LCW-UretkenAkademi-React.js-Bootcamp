const todoService = require('../services/todoService');

async function getAllTodos(req,res){
    /*const items = [
        {id:"1", title:"study react ", date: new Date(2020, 7, 14)}
    ]*/

    try{
        let email = parseJwtAndGetEmail(req.query.token)
        let items = await todoService.getTodoFromDb(email);
        let responeObject = {
            "items":items
        }
        console.log(responeObject)
        res.json(responeObject);
    }catch(e){
        res.send(e);
    }
    
}


function parseJwtAndGetEmail(token){
    let bodyPayloadFromToken = parseJwt(token)
    let email = bodyPayloadFromToken.firebase.identities.email[0]
    return email
}

function parseJwt (token) {
    return JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString());
}

async function addNewTodo(req,res){
    try{
        let email = parseJwtAndGetEmail(req.body.token)
        let items = await todoService.saveTodoDb(req.body, email);
        res.json(items);
    }catch(err){
        res.send(err.toString());
    }
}

async function deleteTodo(req,res){
    try{
        let email = parseJwtAndGetEmail(req.query.token)
        let deleteResponse = await todoService.deleteTodoFromDb(req.params.id, email);
        res.json(deleteResponse);
    }catch(err){
        res.send(err.toString());
    }
}

async function updateImportantTodo(req,res){
    try{
        //let email = parseJwtAndGetEmail(req.body.token)
        let newImportantState = req.body.newImportantState
        let id = req.body.id
        let deleteResponse = await todoService.updateTodoImportantStateFromDb(id, newImportantState);
        res.json(deleteResponse);
    }catch(err){
        res.send(err.toString());
    }
}

module.exports = {
    getAllTodos,
    addNewTodo,
    deleteTodo,
    updateImportantTodo
}