/**
 * check whether http method takes body or not
 * @param method
 * @returns boolean
 */
export function isMethodWithBody(method: string): boolean {
  if (['put', 'post', 'patch'].indexOf(method) != -1) {
    return true;
  }

  return false;
}

/**
 * Returns an object with the skipped properties
 *
 * @param {Object} obj the object to skip properties from
 * @param {[String]} keys keys of the properties to skip
 * @return {Object} the object with the properties skipped
 */
export function skip(obj: Object, keys: string[]) {
  const result: Object = {};
  Object.keys(obj)
    .filter(key => keys.indexOf(key) == -1)
    .forEach(key => {
      //@ts-ignore
      result[key] = obj[key];
    });
  return result;
}
