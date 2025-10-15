# serverless-templates
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/sudokar/nx-serverless/blob/master/LICENSE)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/Naereen/badges.svg)](http://isitmaintained.com/project/Naereen/badges 'Percentage of issues still open')
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/sudokar/nx-serverless)
![Maintained](https://img.shields.io/maintenance/yes/2023.svg)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
[![Follow me on Bluesky](https://img.shields.io/badge/Bluesky-0285FF?logo=bluesky&logoColor=fff&label=Follow%20me%20on&color=0285FF)](https://bsky.app/profile/serverlesscorner.com)
---
Templates for generating Serverless projects. AWS oriented.


## How to use 
1. Install oss-serverless  ```npm install -g osls```
2. Use oss-serverless to create a project with template-url. For example
   ```serverless create --template-url https://github.com/cyberworkz/serverless-templates/tree/main/aws-nodejs-typescript-sqs --path myService```
   
## Known issues
Use node 15.3.0 or lower for templates with the serverless-webpack-plugin. A higher node version results in uploading an empty ZIP file. See https://github.com/serverless/serverless/issues/8794 for more info.

## Further help

- Visit [Serverless Documentation]([)](https://github.com/oss-serverless/serverless/tree/main/docs) to learn more about the open source alternative Serverless framework

## Contribution

Found an issue? feel free to raise an issue with information to reproduce.

Pull requests are welcome to improve.

## Support

Like the templates?

Click to <a href="https://www.buymeacoffee.com/haiko" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="50" width="250"></a>

Or, Add a star :star: to the repository

### Medium ###
These templates are used in my stories on <a href="https://serverlesscorner.com" target="_blank">Serverlesscorner</a>. 

## Maintainer

This template is authored and maintained by [Haiko van der Schaaf](https://github.com/cyberworkz)

## License

MIT

