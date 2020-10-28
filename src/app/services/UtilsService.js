import qs from 'query-string';

import history from 'app_history';
import imageNotAvailable from 'app_assets/img/image_not_available.png';

const Utils = {
  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },

  isEmpty(value) {
    if (
      value && (
        (typeof value === 'string') ||
        (typeof value === 'number')
      )
    ) {
      return false;

    } else if (
      value &&
      (typeof value === 'object')
    ) {
      return Array.isArray(value)
        ? !Boolean(value.length)
        : !Boolean(Object.keys(value).length);
    }

    return true;
  },

  getDiffMethod(request) {
    return function (key, options = {}) {
/*       console.log('\n hasDiffs()');
      console.log('key:', key); */

      const {
        withDefault = false,
        defaultValue = null
      } = options;

      const location = history.location;
      const searchObject = qs.parse(location.search);

/*       console.log('searchObject:', searchObject);
      console.log('request:', request);
      console.log('searchObject[key]:', searchObject[key]);
      console.log('request[key]:', request[key]); */

      const sValue = searchObject[key];
      const rValue = request[key];

      const searchQueryDiff = Boolean(sValue && sValue != rValue);

      const defaultDiff = withDefault
        ? Boolean(typeof sValue == 'undefined' && rValue != defaultValue)
        : false;

/*       console.log('sValue:', sValue);
      console.log('rValue:', rValue);
      console.log('searchQueryDiff:', searchQueryDiff);
      console.log('defaultDiff:', defaultDiff); */

      return searchQueryDiff || defaultDiff;
    }
  }
}

const capitalize = Utils.capitalize;
const isEmpty = Utils.isEmpty;
const getDiffMethod = Utils.getDiffMethod;
const isNotEmpty = (value) => !Utils.isEmpty(value);

export default Utils;

export {
  imageNotAvailable,
  capitalize,
  getDiffMethod,
  isEmpty,
  isNotEmpty
}