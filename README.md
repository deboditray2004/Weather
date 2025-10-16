# Simple Weather App

A clean and responsive web application that provides real-time weather information for any city around the world. This project is built with vanilla HTML, CSS, and JavaScript, and it uses the OpenWeatherMap API with a secure backend powered by Netlify Functions.

## Live Demo

**[https://naturemood.netlify.app/](https://naturemood.netlify.app/)**

## Screenshot

![A screenshot of the weather app showing the weather for a city.](https://i.imgur.com/L8aF3jD.png)

## Features

-   **Real-time Weather Data**: Get up-to-the-minute weather information for any city.
-   **Dynamic UI**: The interface updates with the current temperature, city name, humidity, and wind speed.
-   **Local Time Display**: Automatically calculates and displays the local time of the searched city.
-   **Weather Icons**: Displays a dynamic icon that corresponds to the current weather conditions.
-   **Secure API Key Handling**: API requests are proxied through a Netlify serverless function, keeping the API key hidden from the client-side.
-   **Error Handling**: Provides a clear error message if the entered city name is not found.
-   **Responsive Design**: A mobile-first design that looks great on all devices, from small phones to desktops.

## Technologies Used

-   **Frontend**:
    -   HTML5
    -   CSS3 (with Flexbox and Media Queries)
    -   Vanilla JavaScript (with Fetch API and Async/Await)
-   **Backend**:
    -   Netlify Functions (Node.js)
-   **API**:
    -   [OpenWeatherMap API](https://openweathermap.org/api)

## How It Works

1.  The user enters a city name into the search bar and clicks the search button.
2.  The `script.js` file captures the input and makes a `fetch` request to a serverless function endpoint (`/.netlify/functions/getWeather`).
3.  The Netlify function (`getWeather.js`) receives the request. It securely retrieves the OpenWeatherMap API key from environment variables.
4.  The function then calls the OpenWeatherMap API with the city name and the secret API key.
5.  Upon receiving the data from OpenWeatherMap, the serverless function sends it back to the frontend as a JSON response.
6.  The `script.js` file parses the JSON data and dynamically updates the DOM to display the weather information and relevant icon.
7.  If the API returns an error (e.g., city not found), the error is caught and a user-friendly message is displayed on the screen.

## Setup and Local Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Get an API Key:**
    -   Sign up for a free account on [OpenWeatherMap](https://openweathermap.org/api).
    -   Navigate to the 'API keys' tab and get your default API key.

3.  **Install the Netlify CLI:**
    -   You need Node.js installed. Then, run the following command to install the Netlify command-line tool.
    ```bash
    npm install netlify-cli -g
    ```

4.  **Create Environment Variable:**
    -   This project requires you to set your API key as an environment variable. Create a file named `.env` in the root of the project and add the following line, replacing `YOUR_API_KEY` with the key you got from OpenWeatherMap:
    ```
    WEATHER_API_KEY=YOUR_API_KEY
    ```

5.  **Run the project:**
    -   Start the local development server using the Netlify CLI. This command will automatically read your `.env` file and make the serverless function available.
    ```bash
    netlify dev
    ```
    -   Your project will be running at `http://localhost:8888`.

## Deployment

To deploy this project, you can use Netlify.

1.  Push your code to a GitHub repository.
2.  Log in to Netlify and select "Add new site" -> "Import an existing project".
3.  Connect to your Git provider and select the repository.
4.  Go to "Site settings" -> "Build & deploy" -> "Environment" and add your `WEATHER_API_KEY` as an environment variable. This is crucial for the deployed function to work.
5.  Trigger a deploy. Netlify will automatically build and deploy your site.
