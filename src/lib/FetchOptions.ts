import { isMethodWithBody, empty } from '../Utils';
import { QueryObject } from '../types';

export default class FetchOptions {
  url: string;
  method: string;
  headers: { [key: string]: string } = {};
  mode?: string;
  body?: QueryObject = {};
  query?: QueryObject = {};
  credentials?: string;
  cache?: string;
  redirect?: string;
  referrer?: string;
  integrity?: string;

  clone() {
    const newOptions = new FetchOptions();

    newOptions.url = this.url;
    newOptions.method = this.method;
    newOptions.headers = this.headers;
    newOptions.mode = this.mode;
    newOptions.body = this.body;
    newOptions.query = this.query;
    newOptions.credentials = this.credentials;
    newOptions.cache = this.cache;
    newOptions.redirect = this.redirect;
    newOptions.referrer = this.referrer;
    newOptions.integrity = this.integrity;

    return newOptions;
  }

  getRequestOptions(): Partial<FetchOptions> {
    let options: Partial<FetchOptions> = {
      url: this.url,
      method: this.method,
      headers: this.headers
    };

    if (this.mode) {
      options.mode = this.mode;
    }

    if (this.credentials) {
      options.credentials = this.credentials;
    }

    if (this.cache) {
      options.cache = this.cache;
    }

    if (this.redirect) {
      options.redirect = this.redirect;
    }

    if (this.referrer) {
      options.referrer = this.referrer;
    }

    if (this.integrity) {
      options.integrity = this.integrity;
    }

    if (!empty(this.body) && isMethodWithBody(this.method)) {
      options.body = this.body;
    }

    return options;
  }
}
