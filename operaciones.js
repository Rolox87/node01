const fs = require("fs");

const registrar = (nombre, edad, animal, color, enfermedad) => {
  const nuevaCita = {
    Nombre: nombre,
    Edad: edad,
    Animal: animal,
    Color: color,
    Enfermedad: enfermedad,

  };

  let citas = [];
  try {

    const contenido = fs.readFileSync("citas.json", "utf8");
    citas = JSON.parse(contenido);
  } catch (error) {
    console.log("no se lee archivo citas.json:", error);
  }

  citas.push(nuevaCita);

  try {

    fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2));
    console.log("ingreso registrado exitosamente.");
  } catch (error) {
    console.log("Error al escribir en citas.json:", error);

  }
};

const ver = () => {
  try {
    
    const contenido = fs.readFileSync("citas.json", "utf8");
    const citas = JSON.parse(contenido);

    console.log("Citas registradas:");
    citas.forEach((cita, index) => {
    console.log(`Cita ${index + 1}:`);
    console.log("Nombre:", cita.Nombre);
    console.log("Edad:", cita.Edad);
    console.log("Animal:", cita.Animal);
    console.log("Color:", cita.Color);
    console.log("Enfermedad:", cita.Enfermedad);
    console.log("------------------");

    });
  } catch (error) {

    console.log("problemasal ver el archivo citas.json:", error);

  }
};

module.exports = { registrar, ver };
