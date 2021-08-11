const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/',(req, res)=>{
    conexion.query('SELECT * FROM users',(error, results)=>{
        if(error){
            throw error;
        }else{
            res.render('index.ejs', {results:results});
        }
    })
})
//Rura para crear registros
router.get('/create', (req, res)=>{
    res.render('create')
})
// RUTA PARA EDITAR EL REGISTRO
router.get('/edit/:id', (req,res)=>{    
    const id = req.params.id;
    conexion.query('SELECT * FROM users WHERE userId=?',[id] , (error, results) => {
        if (error) {
            throw error;
        }else{            
            res.render('edit.ejs', {users:results[0]});            
        }        
    });
});
//RUTA PARA ELIMINAR EL REGISTRO
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM users WHERE userId = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
    })
});

const crud = require('./controllers/crud');

router.post('/save', crud.save);
router.post('/update', crud.update);


module.exports = router;