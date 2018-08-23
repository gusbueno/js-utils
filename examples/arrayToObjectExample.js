import { arrayToObject } from '../dist'

const data = [
  {
    name: 'BTC',
    value: 6000
  }, {
    name: 'XRP',
    value: 0.34
  }
]

const objectData = arrayToObject(data, 'name')

/* RESULT
{
  BTC: {
    name: 'BTC',
    value: 6000
  },
  XRP: {
    name: 'XRP',
    value: 0.34
  }
}
 */
