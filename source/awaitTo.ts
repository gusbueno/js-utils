/**
 * promise: the request using async/await operator
 * 
 * it returns an  array
 */

export const to = (promise: Promise): Array<any> => {
  return promise.then((data: any) => {
    return [null, data]
  }).catch(err => [err])
}

export default to
