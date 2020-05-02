export function generateQueryString(url, params) {
  const queryString = Object.keys(params)
    .filter((k) => params[k] !== null && params[k] !== '')
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
    .join('&');
  let stringReturn = '';
  if (queryString !== '') {
    stringReturn = `?${queryString}`;
  }
  return url + stringReturn;
}

export default generateQueryString;
