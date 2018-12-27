import test from 'ava';
import toQueryString from '../dist/ToQueryString';

test('can convert object to query string', t => {
  const query = {
    key: 'value',
    key2: 'value2'
  };

  t.deepEqual('key=value&key2=value2', toQueryString(query));
});

test('can convert array to query string', t => {
  const query = {
    key: ['value', 'value2', 'value3'],
    key2: 'value2'
  };

  t.deepEqual(
    'key[0]=value&key[1]=value2&key[2]=value3&key2=value2',
    toQueryString(query)
  );
});
