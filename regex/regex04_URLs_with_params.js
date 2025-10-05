// the use case here: URLs being returned via graphQL hat different route params (time stamps is this case
// our problem was that Apollo Cache was saying "oh, these don't match, I'll refetch"

const url1 = 'http://www.test.com?xyzasdsdf3243455?fasdfasdf444'
const url2 = 'http://www.test.com?xyzyasdfaswhatverisheredoesnotmatterblababla'

// searches for "?" (".*" means everything after the "?" doesn't matter)
const example = new RegExp(url1.replace(/\?.*/, '')).test(url2)

console.log(example)
