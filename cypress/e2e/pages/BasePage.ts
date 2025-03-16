import { routes } from '@support/helpers'

export class BasePage {
  open(url?: string) {
    const finalUrl = url ? routes.baseUrlStaging + url : routes.baseUrlStaging
    cy.visit(finalUrl)
  }
}
