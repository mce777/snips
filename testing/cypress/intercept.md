try this

```js
before(() => {
  cy.intercept('GET', 'https://sentry.aws.freeyou.ag/*', req => {
    req.reply({});
  });
});
```
https://sentry.aws.freeyou.ag/api/6/envelope/?sentry_key=250da58fbab24d9b85d8613f8399d35a&sentry_version=7&sentry_client=sentry.javascript.vue%2F7.52.1
