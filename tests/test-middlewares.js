import test from 'ava';
import { json, jsonResponse, query } from '../dist/middlewares';
import FetchOptions from '../dist/lib/FetchOptions';

test('json middlware works correctly', t => {
  const options = new FetchOptions();
  options.method = 'post';
  options.body = {
    key: 'value',
    key2: 'value2'
  };

  const newOptions = json(options);

  t.deepEqual(newOptions.headers, {
    'Content-Type': 'application/json'
  });

  t.deepEqual(
    newOptions.body,
    JSON.stringify({
      key: 'value',
      key2: 'value2'
    })
  );
});

test('query middleware works correctly', t => {
  const options = new FetchOptions();
  options.url = 'http://mohammedmanssour.me/api/register';
  options.query = {
    key: 'value',
    key2: 'value2'
  };

  const newOptions = query(options);

  t.deepEqual(
    newOptions.url,
    'http://mohammedmanssour.me/api/register?key=value&key2=value2'
  );
});

test('jsonResponse after middleware works correctly', t => {
  var response = {
    json() {
      return Promise.resolve({ key: 'value', key2: 'value2' });
    }
  };

  return jsonResponse({}, response).then(({ data, response: res }) => {
    t.deepEqual({ key: 'value', key2: 'value2' }, data);
    t.is(res, response);
  });
});
