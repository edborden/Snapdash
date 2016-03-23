import config from '../config/environment';
import Ember from 'ember';
import computed from 'ember-computed-decorators';

const {
  Service
} = Ember;

export default Service.extend({

  @computed
  client() {
    return new Keen({
      projectId: config.keenProjectId,
      readKey: config.keenReadKey,
      protocol: 'auto',
      host: 'api.keen.io/3.0',
      requestType: 'jsonp'
    });
  },

  @computed
  organicFunnel() {
    return new Keen.Query('funnel', {
      steps: [
        {
          eventCollection: 'index',
          actorProperty: 'visitId',
          timeframe: 'this_30_days'
        },
        {
          eventCollection: 'location',
          actorProperty: 'visitId',
          timeframe: 'this_30_days'
        },
          eventCollection: 'search',
          actorProperty: 'visitId',
          timeframe: 'this_30_days'
        },
          eventCollection: 'loginInitiated',
          actorProperty: 'visitId',
          timeframe: 'this_30_days'
        },
          eventCollection: 'joinInitiated',
          actorProperty: 'visitId',
          timeframe: 'this_30_days'
        }
      ]
    });
  }

});