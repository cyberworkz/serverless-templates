import {SQSEvent, SQSHandler, SQSMessageAttributes} from 'aws-lambda';

const processor: SQSHandler = async (event: SQSEvent) => {
    // tslint:disable-next-line:prefer-template
  console.log('received event on ' + new Date().toDateString());

  try {
    for (const record of event.Records) {
      const messageAttributes: SQSMessageAttributes = record.messageAttributes;
      console.log('Message Attributtes -->  ', messageAttributes);
      // Do something

    }
  } catch (error) {
    console.log(error);
  }
};

export default processor;
