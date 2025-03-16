import { users } from '@support/helpers'
import { RegistrationFormPage } from '../pages/RegistrationFormPage'
import { describe } from 'mocha'

describe('Form Submission', () => {
  let registrationFormPage: RegistrationFormPage
  beforeEach(() => {
    registrationFormPage = new RegistrationFormPage()
    registrationFormPage.open()
  })

  describe('Positive field validation', () => {
    it('TC_001 - should validate name and last name fields', () => {
      registrationFormPage.firstNameField().should('be.visible')
      registrationFormPage.lastNameField().should('be.visible')

      registrationFormPage.verifyFieldsAreEnabled().verifyFieldsAreEmpty().fillForm({
        firstName: users.userValid.firstName,
        lastName: users.userValid.lastName,
      })

      registrationFormPage.firstNameField().should('have.value', users.userValid.firstName)
      registrationFormPage.lastNameField().should('have.value', users.userValid.lastName)

      registrationFormPage.submitButton().click()

      registrationFormPage.firstNameField().isValid()
      registrationFormPage.lastNameField().isValid()
    })

    it('TC_003 - should validate email field ', () => {
      registrationFormPage.emailField().should('be.visible')

      registrationFormPage.verifyFieldsAreEnabled().fillForm({
        email: users.userValid.email,
      })

      registrationFormPage.emailField().should('have.value', users.userValid.email)

      registrationFormPage.submitButton().click()

      registrationFormPage.emailField().isValid()
    })

    it('TC_005 - should validate mobile field 10 digits', () => {
      registrationFormPage.phoneNumberField().should('be.visible')

      registrationFormPage.verifyFieldsAreEnabled().fillForm({
        phoneNumber: users.userValid.phoneNumber,
      })

      registrationFormPage.phoneNumberField().should('have.value', users.userValid.phoneNumber)

      registrationFormPage.submitButton().click()

      registrationFormPage.phoneNumberField().isValid()
    })

    it('TC_010 - should validate address field', () => {
      registrationFormPage.addressField().should('be.visible')

      registrationFormPage.verifyFieldsAreEnabled().fillForm({
        address: users.userValid.address,
      })

      registrationFormPage.addressField().should('have.value', users.userValid.address)

      registrationFormPage.submitButton().click()

      registrationFormPage.addressField().isValid()
    })
  })

  describe('e2e test', () => {
    it('TC_012 - should submit form with valid data', () => {
      registrationFormPage.verifyFieldsAreEnabled().verifyFieldsAreEmpty().verifyFieldsAreVisible()

      registrationFormPage.fillForm(users.userValid)

      registrationFormPage.submitButton().click()

      registrationFormPage.confirmationTable().should('be.visible')

      registrationFormPage.verifyConfirmationTableData(users.userValid)
    })
  })

  describe('Negative field validation', () => {
    it('TC_013 - should show an error for email without "@" symbol', () => {
      registrationFormPage.verifyFieldsAreEnabled().fillForm({
        email: users.userInvalid.emailNoAt,
      })
      registrationFormPage.emailField().should('have.value', users.userInvalid.emailNoAt)

      registrationFormPage.submitButton().click()

      registrationFormPage.emailField().isInvalid()
    })

    it('TC_015 - should show an error for email without domain', () => {
      registrationFormPage.verifyFieldsAreEnabled().fillForm({
        email: users.userInvalid.emailNoDomain,
      })

      registrationFormPage.emailField().should('have.value', users.userInvalid.emailNoDomain)

      registrationFormPage.submitButton().click()

      registrationFormPage.emailField().isInvalid()
    })

    it('TC_016 - should show an error for phone number with alphabetic characters', () => {
      registrationFormPage.verifyFieldsAreEnabled().fillForm({
        phoneNumber: users.userInvalid.phoneNumber,
      })

      registrationFormPage.phoneNumberField().should('have.value', users.userInvalid.phoneNumber)

      registrationFormPage.submitButton().click()

      registrationFormPage.phoneNumberField().isInvalid()
    })
  })
})
