
# Weather Dashboard

A responsive React-based weather dashboard that displays current weather information and a 5-day forecast using the OpenWeatherMap API. The dashboard includes animations, Material-UI components, and icons for an intuitive and modern user experience.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [License](#license)

## Features

- **Current Weather**: Displays the current weather conditions including temperature, humidity, wind speed, and visibility.
- **5-Day Forecast**: Provides a 5-day weather forecast with daily summaries.
- **Icons & Animations**: Utilizes Material-UI icons and CSS animations for an engaging UI.
- **Responsive Design**: Adapts to different screen sizes, making it accessible on desktops, tablets, and mobile devices.
- **Sunrise & Sunset Times**: Shows sunrise and sunset times with animations.
- **Temperature Unit Toggle**: Supports switching between Celsius and Fahrenheit.

## Demo

[Link to the live demo](https://weather-dashboard-nu-eight.vercel.app/) (replace with your actual demo link)

![Screenshot](path_to_screenshot.png) (replace with an actual screenshot)

## Technologies

- **React**: Frontend library for building user interfaces.
- **Material-UI**: UI component library for React for styling and icons.
- **OpenWeatherMap API**: Provides weather data.

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/WeatherDashboard.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd weather-dashboard
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Set up the API key:**
   - Create a `.env` file in the root directory.
   - Add your OpenWeatherMap API key:
     ```
     REACT_APP_WEATHER_API_KEY=your_api_key_here
     ```

## Usage

1. **Start the development server:**
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

2. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready build will be in the `build` folder.

3. **Customize**:
   - Modify the `WeatherCard` and `Forecast` components to change the displayed data.
   - Adjust CSS styles in the respective CSS files for custom theming and layout changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize the README further by adding sections such as "Contributing," "Credits," or "Future Work" if relevant. Make sure to replace placeholders like `https://example.com`, `path_to_screenshot.png`, and `your_api_key_here` with actual URLs, paths, and keys.
