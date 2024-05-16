export interface Config {
    API_ENDPOINT: string;
    DEBUG: boolean;
    IS_DEV: boolean;
  }

const appConfig: Config = {
    DEBUG: process.env.REACT_APP_DEBUG === 'true',
    API_ENDPOINT: process.env.REACT_APP_API_ENDPOINT || '/api/',
    IS_DEV: false,
  };

  if (process.env.NODE_ENV === 'development') {
    appConfig.IS_DEV = true;
    // tslint:disable-next-line:no-var-requires
    const overrideConfig: any = require('./app.dev');
    overrideConfig.default(appConfig);
  }
  
  export let logo: string = '';
  export default appConfig;