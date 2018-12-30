import * as React from 'react';
import { useContext } from 'react';
import { OptionsContext, ResponseContext } from '../context';
import { empty } from '../Utils';
import Fetch from '../Fetch';

export default function useFetchClient() {
  const options = useContext(OptionsContext);
  const { setData, setResponse } = useContext(ResponseContext);

  if (empty(options.url.value)) {
    return () => {};
  }

  const {
    url,
    method,
    headers,
    body,
    query,
    credentials,
    mode,
    cache,
    redirect,
    referrer
  } = options;

  return () => {
    const request = Fetch[method.value](url.value);
    if (!empty(headers.value)) {
      request.withHeaders(JSON.parse(headers.value));
    }
    if (!empty(query.value)) {
      request.withParams(query.value);
    }
    if (!empty(body.value)) {
      request.withBody(JSON.parse(body.value));
    }
    if (!empty(credentials.value)) {
      request.credentials(credentials.value);
    }
    if (!empty(cache.value)) {
      request.cache(cache.value);
    }
    if (!empty(mode.value)) {
      request.mode(mode.value);
    }
    if (!empty(redirect.value)) {
      request.redirect(redirect.value);
    }
    if (!empty(referrer.value)) {
      request.referrer(referrer.value);
    }

    request
      .call()
      .then(({ data, response }) => {
        setData(data);
        setResponse(response);
      })
      .catch(e => console.log(e));
  };
}
