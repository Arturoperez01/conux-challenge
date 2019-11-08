
import Properties from "../properties";
import Database from "../database";

const ProyectoController = {

    init: router => {
        const baseUrl = `${Properties.config.api}/proyecto`;
        router.post(baseUrl + "", ProyectoController.create);
        router.delete(baseUrl + "/:id", ProyectoController.delete);
        router.get(baseUrl + "/:id", ProyectoController.get);
        router.get(baseUrl + "", ProyectoController.list);
        router.post(baseUrl + "/:id", ProyectoController.update);
      },
    
    create: (req, res) => {
        const sql = `INSERT INTO Proyecto ( Codigo, NombreProyecto,	Region,	Tipologia, TipoProyecto, FechaIngreso, Estado) VALUES ('${req.body.title}', '${req.body.name}', '${req.body.age}')`;
        Database.getConnection().query(sql, function(err, results, fields) {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            console.log('New Proyecto added')
            return res.json(results);
        })
    },
      
    update: (req, res) => {
        const sql = `UPDATE Proyecto SET Codigo = '${req.body.Codigo}', NombreProyecto = '${req.body.NombreProyecto}',	Region = '${req.body.Region}',	Tipologia = '${req.body.Tipologia}', TipoProyecto = '${req.body.TipoProyecto}', FechaIngreso = '${req.body.FechaIngreso}', Estado  = '${req.body.Estado}'`;
        
        Database.getConnection().query(sql, function(err, results, fields) {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            console.log('Proyecto has been updated', results)
            return res.json(results);
        })
    },

    list: (req, res) => {
        
        const sql = `SELECT * FROM Proyecto`;

        Database.getConnection().query(sql, function(err, results) {
                if (err) {
                    return res.status(500).send(err);
                }
                //console.log('results from Proyecto table', results)
                return res.json(results);
            }
        );
    },
    
    get: (req, res) => {
    
    
        const sql = `SELECT * FROM Proyecto WHERE Codigo = '${req.params.Codigo}' LIMIT 1`;
        Database.getConnection().query(sql, function(err, results) {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            console.log('Proyecto found ', results)
            return res.json(results[0]);
            
        })
    },
    delete: (req, res) => {
        const sql = `DELETE FROM Proyecto WHERE Codigo = ${req.params.Codigo}`;
        Database.getConnection().query(sql, function(err, results, fields) {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            console.log('Proyecto has been eliminated ')
            return res.json(results[0]);
        })
    }

};

export default ProyectoController;