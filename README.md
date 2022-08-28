# 🔆 Weather App

 ## ⚒  Built With <br/>

 #### `React + TS - Frontend` 
 #### `TailwindCSS`
 #### `React Icons - icons and loader` 
 #### `React Hooks`  
 #### `Custom Error handling` 

## ⚠ Future Improvements

From functionality side, a dropdown with cities can be added for better user experience and the UI can be refactored too. The icons provided by the OpenWeatherAPI didn't comply with the app design so I decided to replace them with React Icons which lead to partly incorrect display of day/night icons. That can be also added to the future improvements list. 
 
On app opening, the built in geolocation checks the user's coordinates and shows data for the certain city. If the user tries to search for not existing city or country, an error notification shows up for a few seconds.Users can also see the weathercast for the next 24 hours as well as the next 5 days. By clicking on one of the daily containers, the user will see the weathercast for all the available hours of that day. Unfortunately the required OpenWeatherAPI has some disadvantages and it doesn't always return full 24 hour weathercast for the next 5 days and this occurs only in some hours of the day depending on when you use the application. This is another thing that can be fixed in case there wasn't any specific task requirements. 

Type "any" has been used a few times which I usually try to avoid as per Typescript best practises and I'd change that too. Unfortunately I haven't written any tests for the application , but will be done with some more time available.

Last , but not least - the application can also be optimised in some ways as for example reduce the rerenders by using some state management tools as Redux or MobX.

# How to run the app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
