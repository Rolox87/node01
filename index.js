const { registrar, ver } = require("./operaciones");
const argumentos = process.argv.slice(2);
const operacion = argumentos[0];

if (operacion === "registrar") {
  const [nombre, edad, animal, color, enfermedad] = argumentos.slice(1);
  registrar(nombre, edad, animal, color, enfermedad);
} else if (operacion === "ver") {
  ver();
} else {
  console.log("Por favor ingrese una opción válida: registrar o ver.");
}
