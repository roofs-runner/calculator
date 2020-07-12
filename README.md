This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Link to the deployed app: https://roofs-runner.github.io/calculator/

## Motivation

For this particular assignment I've used react app.
It is easy to use and requires minimal efforts to get up and running.

For styling, I've used styled components. They are perfectly compatible with react components paradigm.
Styled components help avoid cumbersome CSS classes manipulation and chaining.

For testing, I've used Enzyme to test componets.
Jest was used for assertions.
@testing-library/react-hooks is used for testing of hooks.
 
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Notes on solution

I've tried to make application easy and intuitive.

Application is divided into components and blocks.

Blocks are the smallest parts of the application. Usually, they are the part of components.

Components are building elements of the application. They consist of blocks and can have state.

I've offloaded most of the state manage to hooks. This gave me a chance to avoid testing headaches of the components.

Calculation algorithms are incapsulated in classes.

Application is mobile responsive.

## Final note

Sorry for potential bugs or not following the best approaches to the fullest.
