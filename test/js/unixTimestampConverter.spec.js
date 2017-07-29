const { expect } = require('chai')

const { unixTime, convertedDateUtc, cleanDate } = require('../../js/scripts')
describe('scripts', () => {
  it('does a thing', () => {
    expect(unixTime).to.be.a('function')
  })
});