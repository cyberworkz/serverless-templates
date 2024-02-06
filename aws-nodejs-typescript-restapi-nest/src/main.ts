import { Handler, Context } from 'aws-lambda';

import {configure as serverlessExpress} from '@codegenie/serverless-express';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

let cachedServer: Handler;

process.on('unhandledRejection', (reason) => {
  // tslint:disable-next-line:no-console
  console.error(reason);
});

process.on('uncaughtException', (reason) => {
  // tslint:disable-next-line:no-console
  console.error(reason);
});

async function bootstrapServer() {
 // if (!cachedServer) {
    const nestApp = await NestFactory.create(AppModule, {
      logger: ['debug'],
    });

    nestApp.enableCors();
    await nestApp.init();
    cachedServer = serverlessExpress({ app: nestApp.getHttpAdapter().getInstance()});
  //}
  return cachedServer;
}

export const handler = async (event: any, context: Context, callback: any) => {
  const server = await bootstrapServer();
  return server(event, context, callback);
};
