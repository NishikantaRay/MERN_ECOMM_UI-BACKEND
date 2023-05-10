import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import routes from './routes';
import database from './config/database';
import {
  appErrorHandler,
  genericErrorHandler,
  notFound
} from './middlewares/error.middleware';
import logger, { logStream } from './config/logger';

import morgan from 'morgan';
import Endpoints from './models/endpoints.model';

const listEndpoints = require('express-list-endpoints')

const app = express();
const host = process.env.APP_HOST;
const port = process.env.APP_PORT;
const api_version = process.env.API_VERSION;

app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('combined', { stream: logStream }));

database();

app.use(`/api/${api_version}`, routes());
app.use(appErrorHandler);
app.use(genericErrorHandler);
app.use(notFound);

const endPoint = async () => {
  await Endpoints.remove({})
  let a = listEndpoints(app)
  // console.log(a,"<<<<<<<<<")
  let newEndpoint = new Endpoints({endpoints : a})
  const eventDetails = await newEndpoint.save()
  // console.log(eventDetails, "<")
}
endPoint()
app.listen(port, () => {
  logger.info(`Server started at ${host}:${port}/api/${api_version}/`);
});

export default app;
