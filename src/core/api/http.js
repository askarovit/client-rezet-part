import axios from 'axios';

const SERVER = 'https://localhost:433/api/';
// const STATIC = 'http://localhost:8000/static/';

export function httpRequest(options, params) {
  if (!options.url || !options.method) {
    return false;
  }

  const _method = options.method.toLowerCase();
  const dataParam =
    _method === 'post' || _method === 'put' || _method === 'patch'
      ? 'data'
      : 'params';

  return axios({
    ...params,
    method: options.method,
    url: SERVER + options.url,
    [dataParam]: options.data
  })
}
