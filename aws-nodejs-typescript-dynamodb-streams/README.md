<!--
title: 'AWS DynamoDB Stream template (NodeJS & Typescript)'
description: 'This template enables to setup a AWS Lambda for DynamoDB Stream events with Typescript.'
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


