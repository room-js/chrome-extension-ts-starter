# chrome-extension-ts-starter

It is a boilerplate for a Chrome Extension built with TypeScript and Parcel.

## This starter consists of the following parts

* Background script (vanilla TS)
* Content script (vanilla TS)
* Options page (Vue.js, Sass)
* Popup page (Vue.js, Sass)
* DevTools panel page (React.js, Styled Components)

_And, of course, the `./manifest.json` file describing its configuration._

## Environment

* Node.js >=12.0.0
* NPM >= 6.0.0

_Most probably it will work with earlier versions too but I didn't test it._

## Testing

`Jest` is included and ready for the vanilla TS parts. Testing for React/Vue is not included in order to keep the Jest config clean.

## Scripts

* `npm run dist` - build the extension into `./dist` folder
* `npm run lint` - ESLint for `.ts` and `.tsx` files
* `npm run test` - Jest unit tests
