const db = require('../db');
const { v4: uuidv4 } = require('uuid');

 function getTodoFromDb(email){
    return new Promise(function(resolve,reject){
        db.connection.query(
            'select * from todos where email = ?',[email],
            function(err, results, fields) {
                if(err)
                reject(err);
                
                resolve(results);
            }
        );
    });
}

function saveTodoDb(todoObject, email){
    const id = uuidv4();
    return new Promise(function(resolve,reject){
        db.connection.query('INSERT INTO todos (id, title, date, email, isImportant) VALUES (?,?,?,?,?)', 
        [id, todoObject.todo.title,todoObject.todo.date, email,false],function(err, results){
            if(err)
            reject(err);

            resolve(results);
        });
        
    });
}


function deleteTodoFromDb(id, email){
    return new Promise(function(resolve,reject){
        db.connection.query('delete from todos where id = ?', 
        [id],function(err, results){
            if(err)
            reject(err);

            resolve(results);
        });
    });
}

function updateTodoImportantStateFromDb(id, newImportantState){
    return new Promise(function(resolve,reject){
        db.connection.query('update todos set isImportant = ? where id = ? ', 
        [newImportantState,id],function(err, results){
            if(err)
            reject(err);

            resolve(results);
        });
    });
}


module.exports =  {
    getTodoFromDb,
    saveTodoDb,
    deleteTodoFromDb,
    updateTodoImportantStateFromDb
} 

