### Mocking API responses with Requestly (Chrome Ext.)

https://app.requestly.io/

- choose `Modify API response`
- select `GraphQL API`
- choose `URL`, `Contains` and then your Endpoint/URL
    - example: https://gql.xyz.test.company.de/graphql

This next part is a little tricky. Select `Dynamic (JavaScript)`.

(type "operationName" and then the value, e.g. "Contracts", to swap a specific query)

![Screenshot 2023-07-13 at 09.39.44.png](src%2FScreenshot%202023-07-13%20at%2009.39.44.png)

And paste the following
```js
function modifyResponse(args) {
  const {method, url, response, responseType, requestHeaders, requestData, responseJSON} = args;
  // Change response below depending upon request attributes received in args
  // Here you can programatically modify the response (eg randomization).
  // exported below
  contracts = [
    {
      "goodies": [
        {
          "id": "wheel_insurance",
          "name": (Math.random() + 1).toString(36).substring(7),
          "selected": true,
          "used": false,
          "validFrom": "2022-10-01T00:00:00",
          "validTill": "2022-12-15T23:59:59",
          "__typename": "Goody"
        },
        {
          "id": "deductible_refund",
          "name": "Erstattung Selbstbeteiligung",
          "selected": false,
          "used": false,
          "validFrom": "2022-10-01T00:00:00",
          "validTill": "2022-12-15T23:59:59",
          "__typename": "Goody"
        }
      ],
      "id": "42709",
      "rating": 3,
      "__typename": "Contract"
    },
    {
      "goodies": [
        {
          "id": "wheel_insurance",
          "name": "Reifenversicherung",
          "selected": false,
          "used": false,
          "validFrom": "2022-10-01T00:00:00",
          "validTill": "2022-12-15T23:59:59",
          "__typename": "Goody"
        },
        {
          "id": "deductible_refund",
          "name": "Erstattung Selbstbeteiligung",
          "selected": true,
          "used": false,
          "validFrom": "2022-10-01T00:00:00",
          "validTill": "2022-12-15T23:59:59",
          "__typename": "Goody"
        }
      ],
      "id": "636206",
      "rating": 4,
      "__typename": "Contract"
    },
    {
      "goodies": [],
      "id": "639551",
      "rating": null,
      "__typename": "Contract"
    },
    {
      "goodies": [],
      "id": "639554",
      "rating": null,
      "__typename": "Contract"
    },
    {
      "goodies": [],
      "id": "639557",
      "rating": null,
      "__typename": "Contract"
    },
    {
      "goodies": [],
      "id": "639560",
      "rating": null,
      "__typename": "Contract"
    },
    {
      "goodies": [],
      "id": "647143",
      "rating": null,
      "__typename": "Contract"
    },
    {
      "goodies": [],
      "id": "647144",
      "rating": null,
      "__typename": "Contract"
    },
    {
      "goodies": [],
      "id": "647145",
      "rating": null,
      "__typename": "Contract"
    }
  ].sort(() => Math.random() - 0.5) // random sorting to re-create error
  
  // when you just need to change the response, insert data below
  // and forget about all that stuff above
  json = {
    "data": {
      "customers": [
        {
          "contracts": contracts,
          // customer.id
          "id": 7,
          "__typename": "Customer"
        }
      ]
    }
  };
  return json;
}
```
