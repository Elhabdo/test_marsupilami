const mysql =require('mysql');
const express = require('express');
var app = express();
const bodyparser = require("body-parser");
app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'marsupilamibd'
});
mysqlConnection.connect((err)=>{
    if(!err) console.log("DB connection succeded");
    else console.log("DB connection failed \n error: "+JSON.stringify(err,undefined,2));
})

app.listen(3000,()=>console.log("exprerss server is running at port no : 3000"));
// allow route to be acceced from any origin
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

// get all 
app.get('/marsupilamis',(req,res)=>{
    mysqlConnection.query('SELECT * FROM marsupilami',(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    });
});

// register
app.post('/marsupilamis',(req,res)=>{
    let reg = req.body;
    var sql = "INSERT INTO marsupilami (nom,age,famille,race,nourriture,password)\
    VALUES (?,?,?,?,?,?);"
    mysqlConnection.query(sql,[reg.nom,reg.age,reg.famille,reg.race,reg.nourriture,reg.password],(err,rows,fields)=>{
        if(err)
        console.log(err);
        else
        res.send()
    });
});

// delete
app.delete('/marsupilamis/:id',(req,res)=>{
    mysqlConnection.query('DELETE FROM marsupilami WHERE ID=?',[req.params.id],(err,rows,fields)=>{
        if(err)
        console.log(err);
        else
        res.send()
    });
});