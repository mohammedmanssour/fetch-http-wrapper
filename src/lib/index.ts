import FetchRequest from './FetchRequest';
import { BeforeMiddleware, AfterMiddleware } from '../types';
import FetchOptions from './FetchOptions';
import * as middlewares from '../middlewares';

export default class Fetch {
  static middlewares = middlewares;

  static beforeMiddlewares: BeforeMiddleware[] = [];

  static afterMiddlewares: AfterMiddleware[] = [];

  /**
   * init fetchRequest with method and url
   * @param method
   * @param url
   * @returns FetchRequest
   */
  static request(method: string, url: string) {
    return new FetchRequest().setUrl(url).withMethod(method);
  }

  /**
   * init fetch request with get method and url
   * @param url
   * @returns FetchRequest
   */
  static get(url: string) {
    return this.request('get', url);
  }

  /**
   * init fetch request with post method and url
   * @param url
   * @returns FetchRequest
   */
  static post(url: string) {
    return this.request('post', url);
  }

  /**
   * init fetch request with put method and url
   * @param url
   * @returns FetchRequest
   */
  static put(url: string) {
    return this.request('put', url);
  }

  /**
   * init fetch request with patch method and url
   * @param url
   * @returns FetchRequest
   */
  static patch(url: string) {
    return this.request('patch', url);
  }

  /**
   * init fetch request with head method and url
   * @param url
   * @returns FetchRequest
   */
  static head(url: string) {
    return this.request('head', url);
  }

  /**
   * init fetch request with delete method and url
   * @param url
   * @returns FetchRequest
   */
  static delete(url: string) {
    return this.request('delete', url);
  }

  static before(middleware: BeforeMiddleware) {
    this.beforeMiddlewares.push(middleware);
    return this;
  }

  static after(middleware: AfterMiddleware) {
    this.afterMiddlewares.push(middleware);
    return this;
  }

  /**
   * this apply after middleware via reduce
   * @param options FetchOptions
   * @returns FetchOptions
   */
  static applyBeforeMiddleware(options: FetchOptions): Partial<FetchOptions> {
    const chain = (
      options: Partial<FetchOptions>,
      middleware: BeforeMiddleware
    ) => middleware(options);

    return this.beforeMiddlewares.reduce(chain, options);
  }

  /**
   * apply after middlewares via reduce
   * @param request
   * @param response
   * @return Promise
   */
  static applyAfterMiddleware(
    request: FetchRequest,
    response: any
  ): Promise<any> {
    const chain = (promise: Promise<any>, middleware: AfterMiddleware) =>
      promise.then(res => middleware(request, res));
    return this.afterMiddlewares.reduce(chain, Promise.resolve(response));
  }
}
