# Creating a Prepared Query

Move the query to: `packages/backoffice/src/api/queries/_preparedQueries` 
- the query will now be generated here: `api/queries/generatedQueries/`

Query then needs to be added here (or the equivalent in your project): 
`packages/frontend-dummy/src/config/queries.js`

Run `yarn generate`. The type will still have the same name (eg ScipDamageParticipantsQuery)

Then, you will need to call it differently. For example...
```js
    // old way:
    // DamagesParticipantsQuery: DocumentNode = DamagesParticipantsQuery
    // new way:
    DamagesParticipantsQuery: DocumentNode = this.scipConfig.getQueries().damagesParticipantsQuery

      // old way: 
      // query: damagesParticipantsQuery,
      // new way:
      query() {
        return this.scipConfig.getQueries().damagesParticipantsQuery
      },

      // don't forget
      @Inject() readonly scipConfig!: ScipConfigType
```

Why was this necessary??
- when you need to call product-specific fields
```gql

      damage {
        id
        damageDatum {
          ###FRAGMENTS_DAMAGE###
          __typename
        }
      }

```

FYI, this is a good example: `packages/backoffice/src/api/queries/_preparedQueries/damagesParticipants.gql`
 