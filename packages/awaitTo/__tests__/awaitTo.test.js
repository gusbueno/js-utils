import { expect } from 'chai'

import { to } from '../lib/awaitTo'

describe('awaitTo function', () => {
  it('should return data when promise is resolved', async () => {
    const expectedData = 'unmojonsubmarino'
    const promise = Promise.resolve(expectedData)

    const [err, data] = await to(promise)

    expect(err).to.be.null
    expect(data).to.be.equal(expectedData)
  })

  it('should return an error when promise is rejected', async () => {
    const expectedError = 'mecagoentusmuelas'
    const promise = Promise.reject(expectedError)

    const [err, data] = await to(promise)
    
    expect(err).to.be.equal(expectedError)
    expect(data).to.be.undefined
  })
})
