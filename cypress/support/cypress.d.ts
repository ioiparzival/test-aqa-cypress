declare namespace Cypress {
  interface Chainable {
    isValid(): Chainable<Element>
    isInvalid(): Chainable<Element>
  }
}
