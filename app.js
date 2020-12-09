var UserController = require('./user-controller.js');

var controller = new UserController();
var userId = controller.register("correo@usuario.com", "abc1234");
console.log("User id: " + userId);