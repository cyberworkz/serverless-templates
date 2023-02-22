import { Injectable } from '@nestjs/common';

import { metrics } from './main';
import { MetricUnits} from '@aws-lambda-powertools/metrics';

@Injectable()
export class AppService {
  getHello(): string {

    // measure greetings
    metrics.addMetric('greetings', MetricUnits.Count, 1);
    metrics.addMetadata('date', Date());
    
    return 'Hello World!';
  }
}
