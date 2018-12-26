import { isMethodWithBody } from '../Utils';

export default class FetchOptions {
  url: string;
  method: string;
  headers: { [key: string]: string };
  mode?: string;
  body?: FormData | any;
  credentials?: string;
  cache?: string;
  redirect?: string;
  referrer?: string;
  integrity?: string;

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

    if (this.body && isMethodWithBody(this.method)) {
      options.body = this.body;
    }

    return options;
  }
}
