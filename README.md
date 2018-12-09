# Audio Catalog Web App

> Example Angular 1.5+ (ES6 + Components) codebase that adheres to the Exelero specs and API.

## Getting started

1. Clone repo
2. `npm install`
3. `gulp`

Make sure you have gulp installed globally (`npm install -g gulp`)

### Making requests to the backend API

For convenience, we have a live API server running at https://conduit.productionready.io/api for the application to make requests against. You can view [the API spec here](https://github.com/GoThinkster/productionready/blob/master/api) which contains all routes & responses for the server.

The source code for the backend server (available for Node, Rails and Django) can be found in the [main RealWorld repo](https://github.com/gothinkster/realworld).

If you want to change the API URL to a local server, simply edit `src/js/config/app.constants.js` and change `api` to the local server's URL (i.e. `localhost:3000/api`)

<br />

[![Brought to you by Exelero](https://raw.githubusercontent.com/gothinkster/realworld/master/media/end.png)](http://tonnieexelero.com)
