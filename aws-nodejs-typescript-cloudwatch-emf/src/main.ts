import { Handler, Context } from 'aws-lambda';
import { Server } from 'http';
import { createServer, proxy } from 'aws-serverless-express';
import { eventContext } from 'aws-serverless-express/middleware';

import { ExpressAdapter } from '@nestjs/platform-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as express from 'express';

// bootstrap Metrics outside Lambda handler
import { Metrics } from '@aws-lambda-powertools/metrics';

// empty constructor if using environment variables in serverless.yml
// export const metrics = new Metrics();

export const metrics = new Metrics({ namespace: 'yourNamespace', serviceName: 'yourService' });

// NOTE: If you get ERR_CONTENT_DECODING_FAILED in your browser, this is likely
// due to a compressed response (e.g. gzip) which has not been handled correctly
// by aws-serverless-express and/or API Gateway. Add the necessary MIME types to
// binaryMimeTypes below
const binaryMimeTypes: string[] = [];

let cachedServer: Server;

process.on('unhandledRejection', (reason) => {
  // tslint:disable-next-line:no-console
  console.error(reason);
});

process.on('uncaughtException', (reason) => {
  // tslint:disable-next-line:no-console
  console.error(reason);
});

async function bootstrapServer(): Promise<Server> {
  if (!cachedServer) {
    try {
      const expressApp = express();
      const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
      nestApp.enableCors();
      nestApp.use(eventContext());
      await nestApp.init();
      cachedServer = createServer(expressApp, undefined, binaryMimeTypes);
    }
    catch (error) {
      return Promise.reject(error);
    }
  }
  return Promise.resolve(cachedServer);
}

export const handler: Handler = async (event: any, context: Context) => {
  cachedServer = await bootstrapServer();
  let response =  proxy(cachedServer, event, context, 'PROMISE').promise;

  // publish AWS EMF  metrics before returning
  metrics.publishStoredMetrics();

  return response;
}
