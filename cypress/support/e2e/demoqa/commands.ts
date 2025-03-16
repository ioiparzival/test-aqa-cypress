const commands = {}

export default commands

/**
 * Checks that the given element's HTML5 form validation state is valid.
 *
 * It retrieves the element's 'validity' property and asserts that its 'valid' attribute equals true.
 *
 * @example
 * cy.get('input').isValid()
 */
Cypress.Commands.add('isValid', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).invoke('prop', 'validity').its('valid').should('eq', true)
})
/**
 * Checks that the given element's HTML5 form validation state is invalid.
 *
 * It retrieves the element's 'validity' property and asserts that its 'valid' attribute equals false.
 *
 * @example
 * cy.get('input').isInvalid()
 */
Cypress.Commands.add('isInvalid', { prevSubject: 'element' }, (subject) => {
  cy.wrap(subject).invoke('prop', 'validity').its('valid').should('eq', false)
})
