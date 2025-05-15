const { esPar } = require("./numeros");
const Logger = require("logplease");
const logger = Logger.create("utils");
const numeros = [2, 3, 101, 201, 202, 10];
numeros.forEach((numero) => {
  esPar(numero) ? logger.info("El número es par") : logger.error("El número no es par");
});
