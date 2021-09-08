<!--
title: 'AWS SQS Standard Example (NodeJS & Typescript)'
description: 'This example demonstrates how to setup a SQS with Typescript.'
platform: AWS
language: TypeScript
authorLink: 'https://github.com/cyberworkz/serverless-templates'
authorName: 'Haiko van der Schaaf'
-->
# Serverless AWS SQS Example

This serverless template enables you to handle SQS events with AWS Lambda using Serverless and TypeScript.

## Use Cases
- Use for asynchronous processes.
- Listen to events from an existing SQS queue

## Setup
1. Install serverless - ```npm install -g serverless```
2. Use serverless to create a project with template-url. For example
   ```serverless create --template-url https://github.com/cyberworkz/serverless-templates/aws-nodejs-typescript-sqs --path myService```


## Usage
- To print out the logs of the handler sqs handler on the terminal
  `sls logs -f handler -t`

- send a HTTP POST request to the sender lambda with a JSON payload

