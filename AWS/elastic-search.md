Query changed from `query_string` to `simple_query_string`

This accommodates 'messy' queries, without a closing ", or an extra +, etc.

```
query: {
    simple_query_string: {
        query: term,
        default_operator: 'AND'
    }
},
```

FYI:
- app/graphql/scip_search/resolvers/elastic_search.rb
- https://gitlab.sumcumo.net/scip/backoffice/search-scip/blob/main/lib/search/scip/concerns/elastic_search.rb#L83
