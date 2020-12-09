var DatabaseService = require('./database-service.js');
var MailerService = require('./mailer-service.js');

class UserController {
    constructor() {}

    register(email, password) {
        //Validar correo
        if (typeof email === "undefined" || email.trim().length === 0) {
            return "Por favor ingresa tu correo";
        }

        var regexp = /\S+@\S+\.\S+/; //puede ser uno mejor :)
        if (!regexp.test(email)) {
            return "Por favor ingresa un correo valido";
        }

        //Validar contrasena
        if (typeof password === "undefined" || password.trim().length === 0) {
            return "Por favor ingresa tu contrasena";
        }

        //Validaciones muy completas de contrasena
        if (password.trim().length < 6) {
            return "Por favor ingresa una contrasena valida";
        }

        //Todo salio bien!
        //Guardar usuario
        var dbService = new DatabaseService();
        var userId = dbService.saveUser(email, password);
        //Enviar correo
        var mailerService = new MailerService();
        mailerService.sendRegistrationEmail(userId);

        return userId;
    }
}

module.exports = UserController;