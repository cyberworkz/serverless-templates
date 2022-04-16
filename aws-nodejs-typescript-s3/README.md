<!--
title: 'AWS Lambda S3 event template (NodeJS & Typescript)'
description: 'This template enables to setup AWS Lambda for S3 events with Typescript.'
platform: AWS
language: TypeScript
authorLink: 'https://github.com/cyberworkz/serverless-templates'
authorName: 'Haiko van der Schaaf'
-->
# Serverless S3 Template

This serverless template enables you to handle S3 events with AWS Lambda using Serverless and TypeScript.

## Use Cases
- import CSV files into a database or DynamoDB
- create thumbnails from uploaded images

## Setup
1. Install serverless - ```npm install -g serverless```
2. Use serverless to create a project with template-url. For example
   ```serverless create --template-url https://github.com/cyberworkz/serverless-templates/tree/main/aws-nodejs-typescript-s3 --path myService```

## Usage
- To print out the logs of the handler sqs handler on the terminal
  `sls logs -f handler -t`
  
## Examples
See the following article for an example how to apply the template https://medium.com/dev-genius/s3-trigger-serverless-csv-upload-into-dynamodb-8877c770fb32

