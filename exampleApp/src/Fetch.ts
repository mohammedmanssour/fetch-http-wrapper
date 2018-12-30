import Fetch from '../../dist/lib/index';

const { json, jsonResponse } = Fetch.middlewares;

export default Fetch.before(json)
  .after((req, res) => {
    console.log('response is', res);
    return res;
  })
  .after(jsonResponse);
