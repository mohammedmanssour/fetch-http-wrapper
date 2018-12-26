import test from 'ava';
import FetchOptions from '../dist/lib/FetchOptions';

let options;
function initOptions() {
  options = new FetchOptions();
  options.url = 'https://mohammedmanssour.me';
  options.headers = {
    'Content-Type': 'Application/json'
  };
  options.method = 'get';
}

test('FetchOptions can rebuild options object', t => {
  initOptions();
  t.deepEqual(
    {
      url: 'https://mohammedmanssour.me',
      headers: {
        'Content-Type': 'Application/json'
      },
      method: 'get'
    },
    options.getRequestOptions()
  );
});

test('FetchOptions can rebuild options object with mode', t => {
  initOptions();
  options.mode = 'some-mode';
  t.deepEqual(
    {
      url: 'https://mohammedmanssour.me',
      headers: {
        'Content-Type': 'Application/json'
      },
      method: 'get',
      mode: 'some-mode'
    },
    options.getRequestOptions()
  );
});

test('FetchOptions can rebuild options object with credentials', t => {
  initOptions();
  options.credentials = 'some-credentials';
  t.deepEqual(
    {
      url: 'https://mohammedmanssour.me',
      headers: {
        'Content-Type': 'Application/json'
      },
      method: 'get',
      credentials: 'some-credentials'
    },
    options.getRequestOptions()
  );
});

test('FetchOptions can rebuild options object with cache', t => {
  initOptions();
  options.cache = 'some-cache';
  t.deepEqual(
    {
      url: 'https://mohammedmanssour.me',
      headers: {
        'Content-Type': 'Application/json'
      },
      method: 'get',
      cache: 'some-cache'
    },
    options.getRequestOptions()
  );
});

test('FetchOptions can rebuild options object with redirect', t => {
  initOptions();
  options.redirect = 'some-redirect';
  t.deepEqual(
    {
      url: 'https://mohammedmanssour.me',
      headers: {
        'Content-Type': 'Application/json'
      },
      method: 'get',
      redirect: 'some-redirect'
    },
    options.getRequestOptions()
  );
});

test('FetchOptions can rebuild options object with referrer', t => {
  initOptions();
  options.referrer = 'some-referrer';
  t.deepEqual(
    {
      url: 'https://mohammedmanssour.me',
      headers: {
        'Content-Type': 'Application/json'
      },
      method: 'get',
      referrer: 'some-referrer'
    },
    options.getRequestOptions()
  );
});

test('FetchOptions can rebuild options object with integrity', t => {
  initOptions();
  options.integrity = 'some-integrity';
  t.deepEqual(
    {
      url: 'https://mohammedmanssour.me',
      headers: {
        'Content-Type': 'Application/json'
      },
      method: 'get',
      integrity: 'some-integrity'
    },
    options.getRequestOptions()
  );
});

test('FetchOptions can rebuild options object with body', t => {
  initOptions();
  options.body = {
    key: 'value1'
  };
  t.deepEqual(
    {
      url: 'https://mohammedmanssour.me',
      headers: {
        'Content-Type': 'Application/json'
      },
      method: 'get',
      body: {
        key: 'value1'
      }
    },
    options.getRequestOptions()
  );
});
