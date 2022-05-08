# UP42 Data Marketplace

Single page application with React, initialized with create-react-app.
Fetches products information, displays them in a grid and simulates a user's cart with cart management and credit system.

[Deployed Application (Netlify)](https://tranquil-griffin-90bf31.netlify.app/)

## Tech Stack

- Typescript
- React
- Chakra UI
- React Testing Library

## Available Scripts

    npm start 	// starts the application
    npm test 	// runs the test suites

## CORS error & solution

The endpoint for blocks / product information is CORS enabled, and therefore it's not possible to make calls from the browser. To workaround this issue, I have deployed my own cors-anywhere instance to use as a server in-between the browser and the server. The heroku instance can be found in the URL the fetch requests are sent to.

## Zero priced products

The zero priced may be changed to have a random price by uncommenting Math.random() snippet in the api.ts file.

#### There may be randomly failing requests due to this, and should produce a successful response after a few tries.

## Responsiveness

The application is fully responsive in devices of all sizes and works in every major browser.

## Future Improvements

- State management for cart, and actions could be moved to a hook/reducer instead of prop drilling into components.
- More tests to be included.
