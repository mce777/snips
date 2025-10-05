// usually this is enough to select
cy.selectByTestId('document-list-table').should('exist')

// but sometimes, multiple elements have the same data-test="whatever"
// if the index doesn't vary, you can select it like this
cy.get('[data-test="navigation-action-ContractDocuments"]').eq(0).click()
