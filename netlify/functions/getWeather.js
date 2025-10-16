// Netlify serverless function to fetch weather data securely

export async function handler(event) {
  const { city } = event.queryStringParameters;
  const apiKey = process.env.WEATHER_API_KEY; // Securely stored on Netlify

  if (!city) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "City parameter missing" }),
    };
  }

  try {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch weather data" }),
    };
  }
}
