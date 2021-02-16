# WearherRun

WeatherRun is the app providing users with current air quality and weather data and provides clothes recommendations based on that data.

## Basics

* User can type in city name into the search box on the search page. 
* 5 last searches are displayed on the search page for returning users.
* When user presses search button or return keyboard key or one of remembered searches, site redirects to result page.
* Result Page displays current weather and air quality, 5 day forecast and recommended running clothes.
* User can switch between light and dark mode, choice is applied to all pages and is saved in localStorage, so it is remembered for the next visit.
* User can display data sources by clicking info button in bottom right corner.

## Storage

All data that need to be saved are stored in localStorage.

## Error handling

* When there is no match found for user search, the "City not found, please try again" message is displayed.
* When there is no URL match, "Page not found" message is displayed.

## Technology
* **APIs**: 
  * [OpenWeather API](https://openweathermap.org/api), 
  * [Mapbox Geocoding API](https://docs.mapbox.com/api/search/geocoding/), 
  * [AQICN API](https://aqicn.org/api/)
* **Technologies**:
  * [React](https://reactjs.org/), 
  * [TypeScript](https://www.typescriptlang.org/),
  * [Scss](https://sass-lang.com/),  
  * [react-router](https://reactrouter.com/),
  * [query-string](https://www.npmjs.com/package/query-string), 
  * [react-icons](https://react-icons.github.io/react-icons/), 
  * [Material-UI](https://material-ui.com/), 
  * [Bootstrap](https://getbootstrap.com/),
  * [React-Bootstrap](https://react-bootstrap.github.io/),  
  * [node-sass](https://www.npmjs.com/package/node-sass),  
  * [localStorage](https://developer.mozilla.org/pl/docs/Web/API/Window/localStorage)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start` or `npm install` and then`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build or npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
