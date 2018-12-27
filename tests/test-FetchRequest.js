import test from 'ava';
import FetchRequest from '../dist/lib/FetchRequest';

function initFetchRequest() {
  let request = new FetchRequest();

  return request;
}

test('request can set options url', t => {
  let request = initFetchRequest();
  request.setUrl('http://mohammedmanssour.me');
  t.deepEqual('http://mohammedmanssour.me', request.options.url);
});

test('request can set options method', t => {
  let request = initFetchRequest();
  t.deepEqual('get', request.withMethod('get').options.method);
});

test('request can set options params', t => {
  let request = initFetchRequest();
  t.deepEqual(
    {
      key: 'value'
    },
    request.withParams({
      key: 'value'
    }).options.query
  );

  t.deepEqual(
    {
      key: 'value',
      key2: 'value2'
    },
    request.param('key2', 'value2').options.query
  );
});

test('request can set options body', t => {
  let request = initFetchRequest();
  t.deepEqual(
    {
      key: 'value'
    },
    request.withBody({
      key: 'value'
    }).options.body
  );

  t.deepEqual(
    {
      key: 'value',
      key2: 'value2'
    },
    request.withBodyItem('key2', 'value2').options.body
  );
});

test('request can set options headers', t => {
  let request = initFetchRequest();
  t.deepEqual(
    {
      'Content-Type': 'application/json'
    },
    request.withHeaders({
      'Content-Type': 'application/json'
    }).options.headers
  );

  t.deepEqual(
    {
      'Content-Type': 'application/json',
      accepts: 'application/json'
    },
    request.header('accepts', 'application/json').options.headers
  );
});

test('request can set options credentials', t => {
  let request = initFetchRequest();
  t.deepEqual(
    'some-credentials',
    request.credentials('some-credentials').options.credentials
  );
});

test('request can set options mode', t => {
  let request = initFetchRequest();
  t.deepEqual('some-mode', request.mode('some-mode').options.mode);
});

test('request can set options cache', t => {
  let request = initFetchRequest();
  t.deepEqual('some-cache', request.cache('some-cache').options.cache);
});

test('request can set options redirect', t => {
  let request = initFetchRequest();
  t.deepEqual(
    'some-redirect',
    request.redirect('some-redirect').options.redirect
  );
});

test('request can set options referrer', t => {
  let request = initFetchRequest();
  t.deepEqual(
    'some-referrer',
    request.referrer('some-referrer').options.referrer
  );
});

test('request can set options integrity', t => {
  let request = initFetchRequest();
  t.deepEqual(
    'some-integrity',
    request.integrity('some-integrity').options.integrity
  );
});
