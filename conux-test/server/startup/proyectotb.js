
import sqlDatabase from "../database";

const ProyectoModel = {
  /**
   * Init  schema
   */
  init() {
    const db = sqlDatabase.getConnection();
    /*
    let createProyecto = `create table if not exists Proyecto(
        _id int primary key auto_increment,
        title varchar(255)not null,
        name varchar(255)not null,
        age int(11)not null
    )`;
    //*/
    let createData = `
    create table if not exists Proyecto(
      Codigo int primary key auto_increment NOT NULL,
      NombreProyecto varchar(50) NULL,
      Region varchar(30) null,
      Tipologia varchar(20) null,
      TipoProyecto varchar(50) null,
      FechaIngreso datetime null,
      Estado varchar(30));
    
    INSERT INTO \`Proyecto\` VALUES(117150,'BICENTENARIO','VII  REGI�N DEL MAULE','TECNICO','CONSTRUCCION EN NUEVOS TERRENOS','03-09-2019','Calificaci�n Definitiva'),
    (117151,'PROYECTO X','VII  REGI�N DEL MAULE','TECNICO','CONSTRUCCION EN NUEVOS TERRENOS','04-09-2019','Calificaci�n Condicional'),
    (117152,'PROYECTO Y1','VII  REGI�N DEL MAULE','TECNICO','CONSTRUCCION EN NUEVOS TERRENOS','05-09-2019','En Preparaci�n'),
    (117153,'PROYECTO Y2','VII  REGI�N DEL MAULE','TECNICO','CONSTRUCCION SITIO PROPIO','06-09-2019','Con Observaciones'),
    (117154,'PROYECTO Y3','VII  REGI�N DEL MAULE','TECNICO','CONSTRUCCION EN NUEVOS TERRENOS','02-09-2019','Beneficiado'),
    (117155,'PROYECTO Z','VII  REGI�N DEL MAULE','TECNICO','CONSTRUCCION EN SITIO PROPIO','01-09-2019','En Evaluaci�n')
    `;

    db.query(createData, function(err, results, fields) {
        if (err) {
        console.log(err.message);
        }
        else {
            console.log('Proyecto table created');
        }
    })
    
  }

};

export default ProyectoModel;