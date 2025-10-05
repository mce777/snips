// select (vso)
cy.vuetifySelectOption('serviceGroup-input', 'Kosten')

// check for success notification (succ)
cy.selectByTestId('success-notification').should('exist')

// somewhat hacky way to get to damageFile participant page
cy.contains('Beteiligter "').first().click()

// nested select
cy.get('[data-test=damage-summary-damage-status]')
    .find('[data-test="sub-actions-activator"]')
    .click()

// selecting radios
cy.get('[type="radio"]').check('Radio label text', { force: true })
cy.get('[type="radio"]').first().check({ force: true })
