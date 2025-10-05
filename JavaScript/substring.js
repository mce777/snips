const existing = "http://localhost:3000/avatars/eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDczMjY5NTMsInVzZXJfaWQiOjF9.asdf"
const incoming = "http://localhost:3000/avatars/eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MDczMjY5NTMsInVzZXJfaWQiOjF9.fdsa"

const indexOfAvatar = (url) => url.indexOf('avatars')

const avatarUrlEqualityCheck = (url1, url2) => {
    const index = indexOfAvatar(url1)
    const payloadEndIndex = 69

    // exampleString.substring(start, endIndex)
    // note: start is included, endIndex is the first char NOT included)
    const existing = url1.substring(index, index + payloadEndIndex)
    const incoming = url2.substring(index, index + payloadEndIndex)

    return [existing, incoming, existing === incoming]
}

console.log(avatarUrlEqualityCheck(existing, incoming))
