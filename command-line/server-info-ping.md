## Getting Info from Servers

### curl
- `curl -s -I duckduckgo.com|grep Server`
- `curl -s -I duckduckgo.com`
- `curl -v http://gql.datapool.dev.freeyou.de/graphql`

### page output in terminal
- `wget -S -O - lms.lernen.hamburg`

### only server response
- `wget --server-response http://www.example.com/ --spider`

### Count
- `ping -c 2 lms.lernen.hamburg`

### traceroute
- `traceroute lms.lernen.hamburg`

### nslookup
```
// here it's important to only the domain and not something like `/more/folders`<br>
// this will give you similar info as 'curl -v randomurl.com' but less verbose.

nslookup calculator.abacus.test.freeyou.de
```
