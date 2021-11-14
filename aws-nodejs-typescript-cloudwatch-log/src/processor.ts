import {
  CloudWatchLogsDecodedData,
  CloudWatchLogsEvent,
  CloudWatchLogsEventData,
  CloudWatchLogsHandler,
} from 'aws-lambda';
import * as zlib from "zlib";


/**
 * Note: Cloudwatch log events are gzip-compressed and base64-encoded
 */
const processor: CloudWatchLogsHandler = async (event: CloudWatchLogsEvent) => {

  console.log('received log event on ' + new Date().toDateString());

  const compressedData: CloudWatchLogsEventData = event.awslogs;

  if(compressedData){
    const payload = Buffer.from(compressedData.data, 'base64')
    const decodedData: CloudWatchLogsDecodedData = JSON.parse(zlib.unzipSync(payload).toString()) as CloudWatchLogsDecodedData;

    console.log("Log group:" + decodedData.logGroup);
  }
};

export default processor;
