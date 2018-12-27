import { QueryObject } from './types';

export default function toQueryString(object: QueryObject): string {
  let query: string[] = [];

  for (var key in object) {
    if (Array.isArray(object[key])) {
      query.push(arrayToQueryString(key, object[key] as string[]));
    } else {
      query.push(`${key}=${object[key]}`);
    }
  }

  return query.join('&');
}

export function arrayToQueryString(key: string, array: string[]): string {
  let query: string[] = [];
  for (let index = 0; index < array.length; index++) {
    query.push(`${key}[${index}]=${array[index]}`);
  }
  return query.join('&');
}
