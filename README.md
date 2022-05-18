# serverless-templates
Templates for generating Serverless projects. AWS oriented.
[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/sudokar/nx-serverless/blob/master/LICENSE)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/Naereen/badges.svg)](http://isitmaintained.com/project/Naereen/badges 'Percentage of issues still open')
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/sudokar/nx-serverless)
![Maintained](https://img.shields.io/maintenance/yes/2022.svg)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)


How to use 
1. Install serverless - ```npm install -g serverless```
2. Use serverless to create a project with template-url. For example
   ```serverless create --template-url https://github.com/cyberworkz/serverless-templates/tree/main/aws-nodejs-typescript-sqs --path myService```
   
## Known issues
Use node 15.3.0 or lower for templates with the serverless-webpack-plugin. A higher node version results in uploading an empty ZIP file. See https://github.com/serverless/serverless/issues/8794 for more info.

