import {S3Event, S3Handler} from 'aws-lambda';

const processor: S3Handler = async (event: S3Event) => {
    // tslint:disable-next-line:prefer-template
  console.log('received event on ' + new Date().toDateString());

  try {
    for (const record of event.Records) {
      const key: string = record.s3.object.key;
      console.log(' key-->  ', key);
            // Do something

    }
  } catch (error) {
    console.log(error);
  }
};

export default processor;
