//Invocamos a la conexion de la DB
const conexion = require('../database/db');
// //GUARDAR un REGISTRO
exports.save = (req, res)=>{
    const name = req.body.name;
    const user = req.body.user;
    const pass = req.body.pass;
    const age = req.body.age;

    conexion.query('INSERT INTO users SET ?',{name:name,user:user,pass:pass,age:age}, (error, results)=>{
        if(error){
            console.log(error);
        }else{ 
            res.redirect('/');         
        }
});
};
// ACTUALIZAR un REGISTRO
exports.update = (req, res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const user = req.body.user;
    const pass = req.body.pass;
    const age = req.body.age;
    conexion.query('UPDATE users SET ? WHERE id = ?',[{cat:cat, name:name,user:user,pass:pass,age:age}, id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};