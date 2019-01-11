import FetchOptions from './lib/FetchOptions';

const callFetch = (url: string, options: Partial<FetchOptions>) => {
  //@ts-ignore
  if (typeof fetch === 'undefined') {
    return import('node-fetch').then(fetch => {
      //@ts-ignore
      return fetch(url, options);
    });
  }

  //@ts-ignore
  return fetch(url, options);
};

export default callFetch;
