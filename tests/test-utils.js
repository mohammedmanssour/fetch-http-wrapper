import test from 'ava';
import { isMethodWithBody, skip } from '../dist/Utils';

test('isMethodWithBody works correctly', t => {
  t.true(isMethodWithBody('post'));
  t.true(isMethodWithBody('post'));
  t.true(isMethodWithBody('patch'));

  t.false(isMethodWithBody('get'));
  t.false(isMethodWithBody('head'));
  t.false(isMethodWithBody('delete'));
});

test('skip function will skip the mentioned keys', t => {
  const object = {
    name: 'Mohammed Manssour',
    age: '26',
    position: 'Software Engineer'
  };

  const newObj = skip(object, ['age']);
  t.deepEqual(
    {
      name: 'Mohammed Manssour',
      position: 'Software Engineer'
    },
    newObj
  );
});
