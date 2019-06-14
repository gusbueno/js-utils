/**
 * data: list of item
 * key: name of the field that will be the key for each item in object generated
 * 
 * it returns an object
 */

const arrayToObject = (data: Array<any>, key: string): object => {
  return data.reduce((obj, item) => {
    obj[item[key]] = item
    return obj
  }, {})
}

export default arrayToObject
