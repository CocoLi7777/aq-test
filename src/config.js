const API_URL = 'https://cors-anywhere.herokuapp.com/http://api.waqi.info/'
//const API_URL = 'http://api.waqi.info/'
const API_KEY = '&token=8d8e978e647d2b0a8c17c04ba331c0117cd06dc8'
const FEED_KEY = '/?token=8d8e978e647d2b0a8c17c04ba331c0117cd06dc8'
const SEARCH_URL = `${API_URL}search/?keyword=`
const FEED_URL = `${API_URL}feed/`
const LOCAL_URL = `${API_URL}feed/here${FEED_KEY}`
export { SEARCH_URL, API_KEY, FEED_URL, FEED_KEY, LOCAL_URL }
