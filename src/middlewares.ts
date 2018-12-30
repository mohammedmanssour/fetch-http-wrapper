import FetchOptions from './lib/FetchOptions';
import FetchRequest from './lib/FetchRequest';
import { isMethodWithBody, empty } from './Utils';
import toQueryString from './ToQueryString';

/*----------------------------------------------
 * Request Middlewares
 ----------------------------------------------*/
/**
 * json middleware to send json compatible requests
 * 1. adds the right Content-Type to the headers
 * 2. convert body to jsom string
 * @param options
 */
export function json(options: FetchOptions) {
  const newOptions = options.clone();

  newOptions.headers['Content-Type'] = 'application/json';
  if (
    isMethodWithBody(newOptions.method) &&
    typeof newOptions.body !== 'string'
  ) {
    newOptions.body = JSON.stringify(newOptions.body);
  }

  return newOptions;
}

/**
 * query middleware to convert options body to query string
 */
export function query(options: FetchOptions) {
  if (empty(options.query)) {
    return options;
  }

  const newOptions = options.clone();
  newOptions.url = newOptions.url + '?' + toQueryString(newOptions.query);
  return newOptions;
}

/*----------------------------------------------
 * Response Middlewares
 ----------------------------------------------*/
/**
 * convert response to json
 */
export function jsonResponse(
  request: FetchRequest,
  response: any
): Promise<any> {
  return response.json().then((res: any) => {
    return Promise.resolve({ data: res, response });
  });
}
