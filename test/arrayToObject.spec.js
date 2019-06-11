import { expect } from 'chai'

import { arrayToObject } from '../dist/js-utils'

describe('arrayToObject function', () => {
  it('should return an object with the name prop as key', () => {
    const data = [
      { name: 'BTC', value: 6000 },
      { name: 'XRP', value: 0.34 }
    ]

    const expected = {
      BTC: { name: 'BTC', value: 6000 },
      XRP: { name: 'XRP', value: 0.34 }
    }

    const result = arrayToObject(data, 'name')
    expect(result).to.deep.equal(expected)
  })
})
