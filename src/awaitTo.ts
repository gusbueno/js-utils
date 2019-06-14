/**
 * promise: the request using async/await operator
 * 
 * it returns an  array
 */

export const to = (promise: Promise<any>): Promise<Array<any>> => {
  return promise.then((data: any): Array<any> => {
    return [null, data]
  }).catch((err: object): Array<any> => [err])
}

export default to
