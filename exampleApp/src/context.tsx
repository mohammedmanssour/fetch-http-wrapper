import * as React from 'react';
import FormOption from './Models/FormOption';

export const OptionsContext = React.createContext({
  url: new FormOption(''),
  method: new FormOption('get'),
  headers: new FormOption({}),
  query: new FormOption({}),
  body: new FormOption({}),
  credentials: new FormOption(''),
  mode: new FormOption(''),
  cache: new FormOption(''),
  redirect: new FormOption(''),
  referrer: new FormOption('')
});

export const ResponseContext = React.createContext({
  data: {},
  response: {},
  setData: data => {},
  setResponse: respone => {}
});
