class MailerService {
    sendRegistrationEmail(userId) {
        try {
            //Enviar correo realmente al usuario!
            console.log("Enviando correo real al usuario!");
        } catch (e) {
            //si hay un error, arroja un error feo
            throw "error.de.envio.de.correo";
        }
    }

}

module.exports = MailerService;