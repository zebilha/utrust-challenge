# UTRUST - Ethereum addresses management and transaction simulation application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run test`

Runs application tests in console mode.

### Additional notes

- I used React Functional Components instead of Class Components;
- I also used Bootstrap classes to set the positioning of each component;
- To style a component I used SASS;
- I could have used the Bootstrap Card components instead but I preferred to construct one from root to avoid importing one;
- Since it wasn't a requirement to manually add addresses I didn't implement it so I used some mock addresses instead;
- I couldn't set font-family as 'FK Grotesk' since it is [patented](https://fonts.floriankarsten.com/fk-grotesk);
- I understand margins, text size and some lines aren't 1:1 perfectly equal to the mock-up. I tried to use only `rem` units to decrease the need to `px`;
- To decrease code duplication I added the majority of the styling in the `helper.scss`;
- I didn't add any validation to the amount sent, therefore the addresses can have negative values (which doesn't correspond to the reality);
- Code is prepared to handle no addresses added but I didn't added any front-end to it;
- Some components have no `keys`, and I recognize that's not recommended;
- I understand that having a general `state` in the `App.js` isn't recommended, however it was the solution I found to reduce the number of renders. Otherwise I would need to add an `useEffect` to update addresses every time the `transactionInfo` is updated and that would cause an infinity loop because the `address` state would have to be a dependency.
- Finally I also understand that in reality storing the transaction info and sending the transaction are two completely separated actions, but for the mock-up purposes it works as intended how it is implemented.
