import FetchOptions from './FetchOptions';
import { skip, isNode } from '../Utils';
import Fetch from '.';
import { QueryObject } from '../types';

if (isNode()) {
  var fetch = require('node-fetch');
}

export default class FetchRequest {
  options: FetchOptions = new FetchOptions();

  /**
   * set reqyest url
   * @param url
   * @returns FetchRequest
   */
  setUrl(url: string): FetchRequest {
    this.options.url = url;
    return this;
  }

  /**
   * set request method
   * @param method
   * @returns FetchRequest
   */
  withMethod(method: string): FetchRequest {
    this.options.method = method;
    return this;
  }

  /**
   * set request body
   * @param body
   */
  withBody(body: any): FetchRequest {
    this.options.body = body;
    return this;
  }

  /**
   * add a body item to body list
   * @param key
   * @param value
   */
  withBodyItem(key: string, value: QueryObject): FetchRequest {
    this.options.body[key] = value;
    return this;
  }

  /**
   * set request query string
   * @param method
   * @returns FetchRequest
   */
  withParams(params: any): FetchRequest {
    this.options.query = params;
    return this;
  }

  /**
   * add a param to the params list
   * @param key
   * @param value
   * @returns FetchRequest
   */
  param(key: string, value: any): FetchRequest {
    this.options.query[key] = value;
    return this;
  }

  /**
   * set headers
   * @param headers
   * @returns FetchRequest
   */
  withHeaders(headers: { [key: string]: string }): FetchRequest {
    this.options.headers = headers;
    return this;
  }

  /**
   * add a header to the headers list
   * @param key
   * @param value
   * @returns FetchRequest
   */
  header(key: string, value: any): FetchRequest {
    this.options.headers[key] = value;
    return this;
  }

  /**
   * set request credentials options
   * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#Sending_a_request_with_credentials_included
   * @param credentials
   * @returns FetchRequest
   */
  credentials(credentials: string): FetchRequest {
    this.options.credentials = credentials;
    return this;
  }

  /**
   * set request model
   * https://developer.mozilla.org/en-US/docs/Web/API/Request/mode
   * @param mode
   * @returns FetchRequest
   */
  mode(mode: string): FetchRequest {
    this.options.mode = mode;
    return this;
  }

  /**
   * set request cache mode
   * https://developer.mozilla.org/en-US/docs/Web/API/Request/cache
   * @param cache
   * @returns FetchRequest
   */
  cache(cache: string): FetchRequest {
    this.options.cache = cache;
    return this;
  }

  /**
   * set request redirect mode
   * https://developer.mozilla.org/en-US/docs/Web/API/Request/Request
   * @param redirect
   */
  redirect(redirect: string): FetchRequest {
    this.options.redirect = redirect;
    return this;
  }

  /**
   * set request referrer
   * https://developer.mozilla.org/en-US/docs/Web/API/Request/Request
   * @param referrer
   * @return FetchRequest
   */
  referrer(referrer: string): FetchRequest {
    this.options.referrer = referrer;
    return this;
  }

  /**
   * set request integrity
   * @param integrity
   * @returns FetchRequest
   */
  integrity(integrity: string): FetchRequest {
    this.options.integrity = integrity;
    return this;
  }

  call() {
    //apply before middleware
    const options = Fetch.applyBeforeMiddleware(this.options);
    return fetch(options.url, skip(options.getRequestOptions(), ['url'])).then(
      (res: any) => Fetch.applyAfterMiddleware(this, res)
    );
  }
}
