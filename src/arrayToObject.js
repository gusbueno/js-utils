// @flow

/**
 * data: list of item
 * key: name of the field that will be the key for each item in object generated
 */

const arrayToObject = (data: Array<any>, key: string) => {
  return data.reduce((obj, item) => {
    obj[item[key]] = item
    return obj
  }, {})
}

export default arrayToObject
