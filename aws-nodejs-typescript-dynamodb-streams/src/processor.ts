import {DynamoDBStreamEvent, DynamoDBStreamHandler} from 'aws-lambda';

const processor: DynamoDBStreamHandler= async (event: DynamoDBStreamEvent) => {
    // tslint:disable-next-line:prefer-template
  console.log('received event on ' + new Date().toDateString());

  try {
    for (const record of event.Records) {
      const source: string = record.eventSource;
      const newImage = record.dynamodb.NewImage
      console.log(' source-->  ', source);
      console.log('new image \n' + newImage)
            // Do something

    }
  } catch (error) {
    console.log(error);
  }
};

export default processor;
