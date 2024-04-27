// Importa las dependencias necesarias

import express from "express";


// Crear una instancia de la aplicación Express
const app = express();

// Ruta raíz, devuelve un mensaje de bienvenida
app.get("/", (req, res) => {
    res.send("¡Bienvenido a la aplicación de Club deportivo!");
});




// Iniciar el servidor y escucha puerto 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
