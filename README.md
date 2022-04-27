# serverless-templates
Templates for generating Serverless projects. AWS oriented.

How to use 
1. Install serverless - ```npm install -g serverless```
2. Use serverless to create a project with template-url. For example
   ```serverless create --template-url https://github.com/cyberworkz/serverless-templates/tree/main/aws-nodejs-typescript-sqs --path myService```
   
## Known issues
Use node 15.3.0 or lower for templates with the serverless-webpack-plugin. A higher node version results in uploading an empty ZIP file. See https://github.com/serverless/serverless/issues/8794 for more info.

