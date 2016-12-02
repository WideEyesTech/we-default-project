# Default Project

Blueprint to build huge FE apps at [Wide eyes](http://wide-eyes.it)

**TODO:**

1. Server rendering (will probably end up in another branch)
2. Integrate React Hot Realoading 3 beta
3. Sync redux store with routes with react-react-router-redux
4. Move test runner to Jest
5. Move to webpack 2 beta

## Features

Idea is to keep it simple, while providing a robust dev environment.

Some features are:

- React components
- [Redux](https://github.com/reactjs/redux) for state management
- [Redux thunks](https://github.com/gaearon/redux-thunk) + [fetch polyfill](https://github.com/github/fetch) + [es6 promises](https://github.com/stefanpenner/es6-promise) polyfill for easy async actions
- [PostCSS](https://github.com/postcss/postcss-loader) + [preCSS](https://github.com/jonathantneal/precss) + [autoprefixer](https://github.com/postcss/autoprefixer) for *worriless* css development. CSS is locally scoped (css modules) and extracted on a separate file at compilation, thanks to [webpack extract text plugin](https://github.com/webpack/extract-text-webpack-plugin).
- Authentication with [redux-auth-wrapper](https://github.com/mjrussell/redux-auth-wrapper)
- [Dynamic routes](https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md) with [react-router](https://github.com/reactjs/react-router) and [Webpack code splitting](https://webpack.github.io/docs/code-splitting.html)
- html index page is generated at compilation thanks to [webpack html plugin](https://github.com/ampedandwired/html-webpack-plugin).
- Tests with [Ava](https://github.com/avajs) + [Enzyme](https://github.com/airbnb/enzyme)

## Development

Clone repo and install dependencies with `npm install`

Run dev server: `npm start`

Build for production: `npm run build`

Run tests: `npm test`

Watch over tests on file change: `npm run test:watch`

<!-- test: `npm test` -->
