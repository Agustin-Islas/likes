// Importar dependencias
import express from 'express';
import fetch from 'node-fetch';

// Inicializar la aplicación Express
const app = express();

// Puerto donde correrá el servidor
const PORT = 3000;

// URL de la API
const apiUrl = 'https://randommer.io/api/Name?nameType=fullname&quantity=3';

const apiKey = 'f990946f76314b7ba24b6b4fce8db8e3';

// Ruta que consume la API externa y sirve los datos
app.get('/miapi/data', async (req, res) => {
  try {
    // Consumir la API externa con la API Key en los encabezados
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Api-Key': `${apiKey}`  // O usa 'x-api-key': apiKey si es el caso
      }
    });
    
    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      return res.status(response.status).json({ error: 'Error al consumir la API externa' });
    }
    
    // Convertir la respuesta a JSON
    const data = await response.json();
    
    // parsear data a texto.
    const likes = 'A ' + data[0] + ', ' + data[1] + ' y ' + data[2] + ' les gusta esta pelicula.';

    // Crear un objeto JSON con el mensaje
    const jsonResponse = {
        text: likes
    };

    const jsonText = JSON.stringify(jsonResponse);

    // Enviar los datos como respuesta de tu API
    res.json(jsonResponse);
  } catch (error) {
    // Manejo de errores
    console.error('Error al obtener los datos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
