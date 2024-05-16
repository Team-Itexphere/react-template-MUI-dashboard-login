import axios from 'axios';
import appConfig from '../config/configuration';
import normalizeUrl from "../utils/normalizeUrl";
import { KeyValuePair } from '../CustomTypes';
import MspError from './MspError';
import FileDownload from 'js-file-download';
import volatileMemory from './VolatileMemory';

export interface ClientProperties {
  headers?: KeyValuePair;
  baseUrl?: string;
}

export interface RequestSettings {
  url?: string;
  method?: 'get' | 'post' | 'put' | 'delete';
  baseUrl?: string;
  headers?: KeyValuePair;
  data?: any;
  params?: KeyValuePair;
  debugRequest?: boolean;
}
/*Client used for maing API calls to backend systems
* The client will automatically add header to the outgoing request to backend system.
*/
export default class Client {
  public headers: KeyValuePair;
  public baseUrl: string;

  public constructor(properties: ClientProperties = {}) {
    const { headers = {}, baseUrl = '/' } = properties;
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  public extendRequest(requestSettings: RequestSettings) {
    requestSettings.baseUrl = this.baseUrl;
    requestSettings.headers = {
      ...this.headers,
      ...requestSettings.headers,
    };
  }

  public request<T>(requestSettings: RequestSettings): Promise<T> {
    this.extendRequest(requestSettings);
    return Client.request<T>(requestSettings);
  }

  public get<T>(url: string = '', params: any = {}, options: RequestSettings = {}): Promise<T> {
    return this.request<T>({
      method: 'get',
      url,
      params,
      ...options,
    });
  }

  public post<T>(url: string = '', data: any = {}, options: RequestSettings = {}): Promise<T> {
    return this.request<T>({
      method: 'post',
      url,
      data,
      ...options,
    });
  }

  public put<T>(url: string = '', data: any = {}, options: RequestSettings = {}): Promise<T> {
    return this.request<T>({
      method: 'put',
      url,
      data,
      ...options,
    });
  }

  public delete<T>(url: string = '', options: RequestSettings = {}): Promise<T> {
    return this.request<T>({
      method: 'delete',
      url,
      ...options,
    });
  }

public static request<T>(requestSettings: RequestSettings): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      requestSettings.method = requestSettings.method || 'get';
      requestSettings.url = normalizeUrl(
        appConfig.API_ENDPOINT,
        requestSettings.baseUrl || '',
        requestSettings.url || '',
      );
      requestSettings.baseUrl = undefined;
      requestSettings.headers = {
        ...Client.getSessionHeaders(),
        ...requestSettings.headers,
      };
      if (appConfig.DEBUG) {
        // eslint-disable-next-line no-console
        console.log('Request Settings: ', requestSettings);
      }
      axios(requestSettings)
        .then((response) => {
          if (appConfig.DEBUG) {
            console.log('Response Data', response.data);
          }
          resolve(response.data);
        })
        .catch((error) => {
          const errorResponse = error.response ? error.response : {};
          const responseData: any = errorResponse.data;
          const errorStatusCode: number = errorResponse.status;
          switch (errorStatusCode) {
            case 500:
              try {
                const jsonParsedError = JSON.parse(responseData.message);
                if (jsonParsedError.type && jsonParsedError.details) {
                  return reject(new MspError(jsonParsedError.type, jsonParsedError.details));
                }
              } catch (err) {
                if (appConfig.DEBUG) {
                  // eslint-disable-next-line no-console
                  console.error('Request Settings', requestSettings, 'Error', err);
                } else {
                  console.error(err);
                }
              }
              break;
            case 504:
              return reject(new MspError('GatewayTimeout', { responseData }));
            default:
              break;
          }
          return reject(responseData);
        });
    });
  }

  public static get<T>(url: string = '', params: any = {}, options: RequestSettings = {}): Promise<T> {
    return Client.request<T>({
      method: 'get',
      url,
      params,
      ...options,
    });
  }

  public static post<T>(url: string = '', data: any = {}, options: RequestSettings = {}): Promise<T> {
    return Client.request<T>({
      method: 'post',
      url,
      data,
      ...options,
    });
  }

  public static put<T>(url: string = '', data: any = {}, options: RequestSettings = {}): Promise<T> {
    return Client.request<T>({
      method: 'put',
      url,
      data,
      ...options,
    });
  }

  public static delete<T>(url: string = '', options: RequestSettings = {}): Promise<T> {
    return Client.request<T>({
      method: 'delete',
      url,
      ...options,
    });
  }

  public download<T>(url: string = '', fileName: string = 'download', format: string = 'csv'): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const requestSettings: RequestSettings = {};
      requestSettings.method = 'get';
      requestSettings.url = normalizeUrl(
        appConfig.API_ENDPOINT,
        url,
      );
      requestSettings.headers = {
        ...Client.getSessionHeaders(),
      };
      if (appConfig.DEBUG) {
        // eslint-disable-next-line no-console
        console.log('Request Settings: ', requestSettings);
      }
      axios(requestSettings)
        .then((response) => {
          if (appConfig.DEBUG) {
            console.log('Response Data', response.data);
          }
          FileDownload(response.data, `${fileName}.${format}`);
          resolve(response.data);
        })
        .catch((error) => {
          const errorResponse = error.response ? error.response : {};
          const responseData: any = errorResponse.data;
          const errorStatusCode: number = errorResponse.status;
          switch (errorStatusCode) {
            case 500:
              try {
                const jsonParsedError = JSON.parse(responseData.message);
                if (jsonParsedError.type && jsonParsedError.details) {
                  return reject(new MspError(jsonParsedError.type, jsonParsedError.details));
                }
              } catch (err) {
                if (appConfig.DEBUG) {
                  // eslint-disable-next-line no-console
                  console.error('Request Settings', requestSettings, 'Error', err);
                } else {
                  console.error(err);
                }
              }
              break;
            case 504:
              return reject(new MspError('GatewayTimeout', { responseData }));
            default:
              break;
          }
          return reject(responseData);
        });
    });
  }

  public static getSessionHeaders(): KeyValuePair {
    const headers: KeyValuePair = {};
    // const userToken = UserTokenStorage.get();
    const userToken = volatileMemory.token;
    if (userToken) {
      headers.Authorization = `Bearer ${userToken}`;
    }
    return headers;
  }
}