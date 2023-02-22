<!--
title: 'AWS REST API Template with cloudwath EMF (NodeJS & Typescript)'
description: 'This template sets up an AWS Lambda with Typescript for a REST API and logging metrics to AWs EMF'
platform: AWS
language: TypeScript
authorLink: 'https://github.com/cyberworkz/serverless-templates'
authorName: 'Haiko van der Schaaf'
-->
# Serverless REST API and Cloudwatch EMF template

This serverless template enables you to run a NestJS REST API with AWS Lambda using Serverless and TypeScript. Furthermore, the template incorporates AWS Powertools using a layer. This allows you to log metrics to AWS EMF.
See also, https://awslabs.github.io/aws-lambda-powertools-typescript/latest/core/metrics/

## Use Cases
- REST API with AWS EMF metrics.

## Setup
1. Install serverless - ```npm install -g serverless```
2. Use serverless to create a project with template-url. For example
   ```serverless create --template-url https://github.com/cyberworkz/serverless-templates/tree/main/aws-nodejs-typescript-cloudwatch-emf --path myService```
   

## Examples
See the following article for details about AWS EMF https://medium.com/gitconnected/check-business-targets-with-aws-emf-2e2017aa31b9.


