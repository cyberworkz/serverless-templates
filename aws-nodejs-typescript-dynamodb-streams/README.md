<!--
title: 'AWS DynamoDB Streams Template (NodeJS & Typescript)'
description: 'This template sets up an AWS Lambda with Typescript for DynamoDB streams events.'
platform: AWS
language: TypeScript
authorLink: 'https://github.com/cyberworkz/serverless-templates'
authorName: 'Haiko van der Schaaf'
-->
# Serverless DynamoDB Streams template

This serverless template enables you to handle DynamoDB Stream events with AWS Lambda using Serverless and TypeScript.

## Use Cases
- Side effects on INSERT or UPDATE of a DynamoDB record.
- Audit events.
- Communicate DynamoDB data changes to other external services. 

## Setup
1. Install serverless - ```npm install -g serverless```
2. Use serverless to create a project with template-url. For example
   ```serverless create --template-url https://github.com/cyberworkz/serverless-templates/tree/main/aws-nodejs-typescript-dynamodb-streams --path myService```


