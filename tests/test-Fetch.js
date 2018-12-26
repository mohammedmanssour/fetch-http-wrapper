import test from 'ava';
import Fetch from '../dist/lib';
import FetchRequest from '../dist/lib/FetchRequest';

test('can create new request instance with method and url', t => {
  let request = Fetch.request('post', 'http://mohammedmanssour.me');

  t.true(request instanceof FetchRequest);
  t.deepEqual('post', request.options.method);
  t.deepEqual('http://mohammedmanssour.me', request.options.url);
});

test('can create new request with get method and url', t => {
  let request = Fetch.get('http://mohammedmanssour.me');

  t.true(request instanceof FetchRequest);
  t.deepEqual('get', request.options.method);
  t.deepEqual('http://mohammedmanssour.me', request.options.url);
});

test('can create new request with post method and url', t => {
  let request = Fetch.post('http://mohammedmanssour.me');

  t.true(request instanceof FetchRequest);
  t.deepEqual('post', request.options.method);
  t.deepEqual('http://mohammedmanssour.me', request.options.url);
});

test('can create new request with put method and url', t => {
  let request = Fetch.put('http://mohammedmanssour.me');

  t.true(request instanceof FetchRequest);
  t.deepEqual('put', request.options.method);
  t.deepEqual('http://mohammedmanssour.me', request.options.url);
});

test('can create new request with patch method and url', t => {
  let request = Fetch.patch('http://mohammedmanssour.me');

  t.true(request instanceof FetchRequest);
  t.deepEqual('patch', request.options.method);
  t.deepEqual('http://mohammedmanssour.me', request.options.url);
});

test('can create new request with head method and url', t => {
  let request = Fetch.head('http://mohammedmanssour.me');

  t.true(request instanceof FetchRequest);
  t.deepEqual('head', request.options.method);
  t.deepEqual('http://mohammedmanssour.me', request.options.url);
});

test('can create new request with delete method and url', t => {
  let request = Fetch.delete('http://mohammedmanssour.me');

  t.true(request instanceof FetchRequest);
  t.deepEqual('delete', request.options.method);
  t.deepEqual('http://mohammedmanssour.me', request.options.url);
});

test('can add before middleware', t => {
  const middleware = request => request;
  Fetch.before(middleware);

  t.true(Fetch.beforeMiddlewares.length > 0);
  t.is(middleware, Fetch.beforeMiddlewares[0]);
});

test('can add after middleware', t => {
  const middleware = request => request;
  Fetch.after(middleware);

  t.true(Fetch.afterMiddlewares.length > 0);
  t.is(middleware, Fetch.afterMiddlewares[0]);
});
