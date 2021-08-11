const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'anamariadiegoj1',
    database: 'dbTest2',
})

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es '+error);
        return
    }
    console.log('Conectado a la base de datos MySql!')
})
module.exports = conexion;