class DatabaseService {
    saveUser(email, password) {
        try {
            //Guardar usuario en la base de datos real!
            console.log("Guardando usuario en la base de datos real!");
        } catch (e) {
            //si hay un error, arroja un error feo
            throw "error.de.creacion.de.usuario";
        }
        
        return 123456;
    
    }
}



module.exports = DatabaseService;