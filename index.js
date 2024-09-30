// URL de la API
const apiUrl = 'https://randommer.io/api/Name?nameType=fullname&quantity=3';

const apiKey = 'f990946f76314b7ba24b6b4fce8db8e3';

async function getData() {
  try {
    // Configuración de la solicitud, incluyendo la API Key en el encabezado
    const response = await fetch(apiUrl, {
      method: 'GET', // Método de la solicitud (puede ser POST, PUT, etc.)
      headers: {
        'Content-Type': 'application/json', // Tipo de contenido
        'Authorization': `Bearer ${apiKey}` // API Key en el encabezado
      }
    });
    
    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    
    
    // Parsear los datos a formato JSON
    const data = await response.json();
    
    // Mostrar los datos en consola
    console.log(data);
  } catch (error) {
    // Manejo de errores
    console.error('Error al consumir la API:', error);
  }
}

// Llamar a la función para consumir la API
getData();
