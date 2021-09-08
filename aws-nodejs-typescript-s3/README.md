<!--
title: 'AWS SQS Standard Example (NodeJS & Typescript)'
description: 'This example demonstrates how to setup a SQS with Typescript.'
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

