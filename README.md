Simple Weather App
A clean and responsive web application that provides real-time weather information for any city around the world. This project uses the OpenWeatherMap API and is built with vanilla HTML, CSS, and JavaScript, with a secure backend powered by Netlify Functions.

Live Demo
https://naturemood.netlify.app/

Screenshot
Features
Real-time Weather Data: Get up-to-the-minute weather information for any city.

Dynamic UI: The interface updates with the current temperature, city name, humidity, and wind speed.

Local Time Display: Automatically calculates and displays the local time of the searched city.

Weather Icons: Displays a dynamic icon that corresponds to the current weather conditions (e.g., sunny, cloudy, rainy).

Secure API Key Handling: API requests are proxied through a Netlify serverless function, keeping the API key hidden from the client-side.

Error Handling: Provides a clear error message if the entered city name is not found.

Responsive Design: A mobile-first design that looks great on all devices, from small phones to desktops.

Technologies Used
Frontend:

HTML5

CSS3 (with Flexbox and Media Queries)

Vanilla JavaScript (with Fetch API and Async/Await)

Backend:

Netlify Functions (Node.js)

API:

OpenWeatherMap API

How It Works
The user enters a city name into the search bar on the index.html page.

The script.js file captures the input and makes a fetch request to a serverless function endpoint (/.netlify/functions/getWeather).

The Netlify function (getWeather.js) receives the request. It securely retrieves the OpenWeatherMap API key from environment variables.

The function then calls the OpenWeatherMap API with the city name and the secret API key.

Upon receiving the data from OpenWeatherMap, the serverless function sends it back to the frontend as a JSON response.

The script.js file parses the JSON data and dynamically updates the DOM to display the weather information and relevant icon.

If the API returns an error (e.g., city not found), the error is caught and a user-friendly message is displayed on the screen.

Setup and Local Installation
To run this project locally, follow these steps:

Clone the repository:

Bash

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
Get an API Key:

Sign up for a free account on OpenWeatherMap.

Navigate to the 'API keys' tab and get your default API key.

Install the Netlify CLI:

You need Node.js installed. Then, run the following command to install the Netlify command-line tool.

Bash

npm install netlify-cli -g
Create Environment Variable:

This project requires you to set your API key as an environment variable. You can do this by creating a .env file in the root of the project.

Create a file named .env and add the following line, replacing YOUR_API_KEY with the key you got from OpenWeatherMap:

WEATHER_API_KEY=YOUR_API_KEY
Run the project:

Start the local development server using the Netlify CLI. This command will automatically read your .env file and make the serverless function available.

Bash

netlify dev
Your project will be running at http://localhost:8888.

Deployment
To deploy this project, you can use Netlify.

Push your code to a GitHub repository.

Log in to Netlify and select "Add new site" -> "Import an existing project".

Connect to your Git provider and select the repository.

Configure the build settings (for this vanilla JS project, they are often not needed).

Go to "Site settings" -> "Build & deploy" -> "Environment" and add your WEATHER_API_KEY as an environment variable. This is crucial for the deployed function to work.

Trigger a deploy. Netlify will automatically build and deploy your site.
