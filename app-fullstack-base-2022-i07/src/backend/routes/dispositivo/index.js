const express = require('express')

const routerDispositivo = express.Router()

var pool = require('../../mysql-connector');

routerDispositivo.get('/', function(req, res) {
    pool.query('SELECT d.dispositivoId, d.electrovalvulaId, d.nombre, d.ubicacion, COALESCE(lr.apertura, 0) AS apertura FROM Dispositivos d LEFT JOIN ( SELECT l1.electrovalvulaId, l1.apertura FROM Log_Riegos l1 JOIN ( SELECT electrovalvulaId, MAX(fecha) AS max_fecha FROM Log_Riegos GROUP BY electrovalvulaId ) l2 ON l1.electrovalvulaId = l2.electrovalvulaId AND l1.fecha = l2.max_fecha ) lr ON d.electrovalvulaId = lr.electrovalvulaId ORDER BY d.dispositivoId ASC;', function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

routerDispositivo.get('/medicion/:id', function(req, res) {
    const dispositivoId = req.params.id;

    pool.query('Select * from Mediciones where dispositivoId=? order by fecha, medicionId desc', [dispositivoId], function(err, result, fields) {

        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(result);
    });
});

routerDispositivo.get('/logsriego/:id', function(req, res) {
    const electrovalvulaId = req.params.id;

    pool.query('Select lr.*, ev.nombre from Log_Riegos lr JOIN Electrovalvulas ev ON lr.electrovalvulaId = ev.electrovalvulaId where lr.electrovalvulaId=? order by fecha, logRiegoId desc', [electrovalvulaId], function(err, result, fields) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(result);
    });
});

/*routerDispositivo.get('/logsriego/:id', function(req, res) {
    const electrovalvulaId = req.params.id;

    pool.query('Select * from Log_Riegos where electrovalvulaId=? order by fecha, logRiegoId desc', [electrovalvulaId], function(err, result, fields) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(result);
    });
});*/

routerDispositivo.get('/ultmedicion/:id', function(req, res) {
    const dispositivoId = req.params.id;

    pool.query('Select * from Mediciones where dispositivoId=? order by fecha, medicionId desc limit 1', [dispositivoId], function(err, result, fields) {

        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(result);
    });
});

routerDispositivo.get('/estadovalvula/:id', function(req, res) {
    const electrovalvulaId = req.params.id;

    pool.query('Select apertura from Log_Riegos where electrovalvulaId=? order by fecha, logRiegoId desc limit 1', [electrovalvulaId], function(err, result, fields) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(result);
    });
});

routerDispositivo.get('/valvula/:id', function(req, res) {
    const dispositivoId = req.params.id;

    pool.query('Select electrovalvulaId from Dispositivos where dispositivoId=?', [dispositivoId], function(err, result, fields) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(result);
    });
});

/*routerDispositivo.get('/cambiavalv/:id', function(req,res) {
    const evId = parseInt(req.params.id) || 4 ;
    //const electrovalvulaId = req.body.electrovalvulaId;

    pool.query('INSERT INTO log_riegos (fecha, apertura, electrovalvulaId) VALUES (NOW(), 1, '+ evId +')', function(err, result, fields) {
        if (err) {
            res.status(400).send(err);
            console.log('error apert');
            return;
        }
        res.send(result);
        console.log('send to DB');
    });
});*/

routerDispositivo.get('/cambiavalv/:id', function(req, res) {
    const evId = parseInt(req.params.id) || 0;
    let result = 0;
    let actual_value;

    pool.query('SELECT * FROM Log_Riegos WHERE electrovalvulaId = ' + evId + ' ORDER BY fecha DESC', async function(err, result, fields) {
        if (err) {
            console.error(err);
            res.status(500).send("Error fetching data from database");
            return;
        }

        if (result.length === 0) {
            // No existing records, insert with apertura = 1
            try {
                pool.query('INSERT INTO Log_Riegos (fecha, apertura, electrovalvulaId) VALUES (NOW(), 1, ' + evId + ')', async function(error, result, fields) {
                    if (error) {
                        console.error(error);
                        res.status(500).send("Error inserting data into database");
                        return;
                    }
                    console.log(result);
                });
            } catch (error) {
                console.log(error);
            }
        } else {
            actual_value = result[0];
            const apert = ([actual_value.apertura]==0)? 1 : 0;
            //const apert = parseInt(actual_value.apertura) || 0;
            try {
                pool.query('INSERT INTO Log_Riegos (fecha, apertura, electrovalvulaId) VALUES (NOW(), ' + apert + ', ' + evId + ')', async function(error, result, fields) {
                    if (error) {
                        console.error(error);
                        res.status(500).send("Error inserting data into database");
                        return;
                    }
                    console.log(result);
                });
            } catch (error) {
                console.log(error);
            }
        }

        //res.status(200).send("Item status Updated");
    });
});

/*routerDispositivo.get('/cambiavalv/:id', function(req,res) {
        const evId = parseInt(req.params.id) || 0 ;
        let result=0;
        let actual_value;
    
        pool.query('SELECT * FROM Log_Riegos WHERE electrovalvulaId= '+ evId +' order by fecha desc', async function(err,result, fields){                   
            actual_value=result[0];
            const apert = parseInt([actual_value.apertura]) || 0;
            apert = ([actual_value.apertura]==0)? 1 : 0;
            //console.log(result[0]);
          
        try{ 
            pool.query('INSERT INTO Log_Riegos (fecha,apertura,electrovalvulaId) values (NOW(),'+ apert +','+ evId +')',await function(error,result, fields){
                   console.log(result);
                    if(error){
                            throw(error);
                        }                
                    }) 
            }catch(error){console.log(error);}
            //;} 
        });       

    //send response to frontend
    //res.send("Item status Updated").status(200);
    //res.end();
});*/

/*routerDispositivo.post('/autocambiavalv', function(req, res) {
    requestLocal = req.body[0].id;
    //requestLocal=req.params.id;
    
   console.log("cambiando ev:"+requestLocal);
    let result=0;
    let actual_value;

    pool.query('SELECT * FROM Log_Riegos  WHERE electrovalvulaId=? order by fecha desc',[req.body[0].id], async function(err,result, fields){                   
        actual_value=result[0];
        console.log(result[0]);
      
    try{ 
        pool.query('INSERT INTO Log_Riegos (apertura,fecha,electrovalvulaId) values (?, NOW(),?)',[([actual_value.apertura]==0)? 1 : 0,req.body[0].id],await function(error,result, fields){
               console.log(result);
                if(error){
                        throw(error);
                    }                
                }) 
        }catch(error){console.log(error);}
        //;} 
    });


    
    //send response to frontend
    res.send("Item status Updated").status(200);
    res.end();
});*/





/*routerDispositivo.put('/cambiavalvula/:id, async function(req, res, next) {
    
   const electrovalvulaId = req.params.id;
   const abrecierra = 0;

   pool.query('INSERT INTO Log_Riegos (apertura,fecha,electrovalvulaId) values (?, NOW(),?)', [electrovalvulaId,abrecierra], function(err, result, fields) {
    if (err) {
        res.status(400).send(err);
        return;
    }
    res.send(result);
});*/
   
   /*console.log("cambiando ev:"+requestLocal);
    let result=0;
    let actualState=0;
    let results="0";
    let actual_value;
    let action="cerrar";

    pool.query('SELECT * FROM Log_Riegos WHERE electrovalvulaId=? order by fecha desc',[req.params.electrovalvulaId], async function(err,result, fields){                   
        actual_value=result[0];
        console.log(result[0]);
      
    try{ 
        pool.query('INSERT INTO Log_Riegos (apertura,fecha,electrovalvulaId) values (?, NOW(),?)',[([actual_value.apertura]==0)? 1 : 0,req.params.electrovalvulaId],await function(error,result, fields){
               console.log(result);
                if(error){
                        throw(error);
                    }                
                }) 
        }catch(error){console.log(error);}
        //;} 
    });*/
  
    //send response to frontend
    /*res.send("Item status Updated").status(200);
    res.end();
});*/

module.exports = routerDispositivo

