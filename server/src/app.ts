import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import Routes from './routes';
import { sequelize, syncDb } from './model';

dotenv.config();
const app = express();
app.use(cors({
  origin: ['http://localhost:3000', 'https://flashcard-app-client.herokuapp.com'],
}));
app.use(bodyParser.json());
app.set('sequelize', sequelize);
app.set('models', sequelize.models);

// register express routes from defined application routes
Routes.forEach((route: any) => {
  (app as any)[route.method](route.route, (req: any, res: any, next: any) => {
    const result = (new (route.controller)())[route.action](req, res, next);
    if (result instanceof Promise) {
      result.then(
        (result) => (result !== null && result !== undefined ? result : undefined),
      );
    } else if (result !== null && result !== undefined) {
      return res.send(result);
    }
  });
});

const run = async () => {
  try {
    syncDb();
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Application is running on ${process.env.PORT || 8080}`);
    });
  } catch (e) {
    console.error(`An error occurred: ${JSON.stringify(e)}`);
  }
};

run();
