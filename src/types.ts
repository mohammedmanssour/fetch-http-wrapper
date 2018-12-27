import FetchOptions from './lib/FetchOptions';
import FetchRequest from './lib/FetchRequest';

export type BeforeMiddleware = (
  options: Partial<FetchOptions>
) => Partial<FetchOptions>;

export type AfterMiddleware = (request: FetchRequest, response: any) => any;

export interface QueryObject {
  [key: string]: string | string[];
}
