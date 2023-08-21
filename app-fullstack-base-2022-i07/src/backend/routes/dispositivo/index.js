const express = require('express')

const routerDispositivo = express.Router()

var pool = require('../../mysql-connector');

routerDispositivo.get('/', function(req, res) {
    pool.query('Select * from Dispositivos order by dispositivoId asc', function(err, result, fields) {
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

routerDispositivo.get('/logsriegos/:id', function(req, res) {
    const electrovalvulaId = req.params.electrovalvulaId;

    pool.query('Select * from Log_Riegos where electrovalvulaId=? order by fecha, logRiegoId desc', [electrovalvulaId], function(err, result, fields) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(result);
    });
});

routerDispositivo.get('/ultimo_log_valvula/:id', function(req, res) {
    const electrovalvulaId = req.params.electrovalvulaId;

    pool.query('Select * from Log_Riegos where electrovalvulaId=? order by fecha, logRiegoId desc limit 1', [electrovalvulaId], function(err, result, fields) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(result);
    });
});

module.exports = routerDispositivo

