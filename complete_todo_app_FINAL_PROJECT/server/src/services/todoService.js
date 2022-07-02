const db = require('../db');
const { v4: uuidv4 } = require('uuid');

 function getTodoFromDb(){
    return new Promise(function(resolve,reject){
        db.connection.query(
            'select * from todos',
            function(err, results, fields) {
                if(err)
                reject(err);
                
                resolve(results);
            }
        );
    });
}

function saveTodoDb(todoObject){
    const id = uuidv4();
    return new Promise(function(resolve,reject){
        db.connection.query('INSERT INTO todos (id, title, date) VALUES (?,?,?)', 
        [id, todoObject.title,todoObject.date],function(err, results){
            if(err)
            reject(err);

            resolve(results);
        });
    });
}

function deleteTodoFromDb(id){
    return new Promise(function(resolve,reject){
        db.connection.query('delete from todos where id = ?', 
        [id],function(err, results){
            if(err)
            reject(err);

            resolve(results);
        });
    });
}

module.exports =  {
    getTodoFromDb,
    saveTodoDb,
    deleteTodoFromDb
} 

