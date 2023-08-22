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

routerDispositivo.get('/estadovalvula/:id', function(req, res) {
    const electrovalvulaId = req.params.electrovalvulaId;

    pool.query('Select apertura from Log_Riegos where electrovalvulaId=? order by fecha, logRiegoId desc limit 1', [electrovalvulaId], function(err, result, fields) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(result);
    });
});

routerDispositivo.get('/valvula/:id', function(req, res) {
    const dispositivoId = req.params.electrovalvulaId;

    pool.query('Select electrovalvulaId from Dispositivos where dispositivoId=?', [dispositivoId], function(err, result, fields) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(result);
    });
});

module.exports = routerDispositivo

