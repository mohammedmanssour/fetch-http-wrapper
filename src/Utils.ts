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

/**
 * check if the provided var is empty or not
 * @param mixedVar
 * @returns boolean
 */
export function empty(mixedVar: any) {
  //  discuss at: http://locutus.io/php/empty/
  // original by: Philippe Baumann
  //    input by: Onno Marsman (https://twitter.com/onnomarsman)
  //    input by: LH
  //    input by: Stoyan Kyosev (http://www.svest.org/)
  // bugfixed by: Kevin van Zonneveld (http://kvz.io)
  // improved by: Onno Marsman (https://twitter.com/onnomarsman)
  // improved by: Francesco
  // improved by: Marc Jansen
  // improved by: Rafał Kukawski (http://blog.kukawski.pl)
  //   example 1: empty(null)
  //   returns 1: true
  //   example 2: empty(undefined)
  //   returns 2: true
  //   example 3: empty([])
  //   returns 3: true
  //   example 4: empty({})
  //   returns 4: true
  //   example 5: empty({'aFunc' : function () { alert('humpty'); } })
  //   returns 5: false

  var undef;
  var key;
  var i;
  var len;
  var emptyValues = [undef, null, false, 0, '', '0'];

  for (i = 0, len = emptyValues.length; i < len; i++) {
    if (mixedVar === emptyValues[i]) {
      return true;
    }
  }

  if (typeof mixedVar === 'object') {
    for (key in mixedVar) {
      if (mixedVar.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  return false;
}

/**
 * check if current environment is node or not
 */
export function isNode() {
  return typeof module !== 'undefined' && module.exports;
}
