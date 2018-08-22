const utils = require('../dist')

const data = [
  {
    name: 'BTC',
    value: 6000
  }, {
    name: 'XRP',
    value: 0.34
  }
]

const objectData = utils.arrayToObject(data, 'name')

console.log(objectData)