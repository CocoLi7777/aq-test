const { getLocal, getFeed, getSearch } = require('../controllers/data')

describe('test api service', () => {
  it('test api service for local aqi data', () => {
    getLocal().then((result) => {
      expect(result.data.aqi).toBe(14)
      expect(axios).toHaveBeenCalledTimes(1)
    })
  })

  it('test api service for feed aqi data', () => {
    getFeed().then((result) => {
      expect(result.data.aqi).toBe(14)
      expect(axios).toHaveBeenCalledTimes(1)
    })
  })

  it('test api service for feed aqi data', () => {
    getFeed().then((result) => {
      expect(result.data[0].aqi).toBe(30)
      expect(axios).toHaveBeenCalledTimes(1)
    })
  })
})
