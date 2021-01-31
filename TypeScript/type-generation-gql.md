## Generate a type via GQL query

- find the query and make sure it is named
- add the query link to `codegen.yml`
- run `yarn generate`
- import the query into your vue file
- create type based on the query and the levels of the query:<br>`type nameOfType = NameOfGeneratedQuery['thirdParties'][items'][number]`

examples: ContractAccount, ThirdPartyAutoComplete
