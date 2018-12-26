import FetchRequest from './FetchRequest';
import FetchOptions from './FetchOptions';

type BeforeMiddleware = (options: FetchOptions) => FetchOptions;

type AfterMiddleware = (request: FetchRequest, response: Response) => any;

export default class Fetch {
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
}
