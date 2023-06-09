const express = require('express');
const { PORT } = require('./config');
const cors = require('cors');
const { errorMiddleware } = require('./middlewares/error.middleware');

class App {
  constructor(routes) {
    this.app = express();
    this.port = PORT;

    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeErrorHandling(routes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.info(`╭───────────────────────────────────────────────────╮`);
      console.info(`│                                                   │`);
      console.info(`│            App listening at port ${this.port}!            │`);
      console.info(`│                                                   │`);
      console.info(`╰───────────────────────────────────────────────────╯`);
    });
  }

  getServer() {
    return this.app;
  }

  initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  initializeRoutes(routes) {
    routes.forEach(route => {
      this.app.use('/', route.router);
    });
  }

  initializeErrorHandling() {
    this.app.use(errorMiddleware);
  }
}

module.exports = App;
