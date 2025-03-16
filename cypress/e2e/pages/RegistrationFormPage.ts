import { BasePage } from './BasePage'

interface FormFields {
  firstName?: string
  lastName?: string
  phoneNumber?: string
  email?: string
  gender?: string
  address?: string
  subject?: string
  hobby?: string
  state?: string
  city?: string
}

export class RegistrationFormPage extends BasePage {
  private readonly locators = {
    firstNameInput: '#firstName',
    lastNameInput: '#lastName',
    phoneNumberInput: '#userNumber',
    emailInput: '#userEmail',
    genderWrapper: '#genterWrapper',
    submitButton: '#submit',
    addressInput: '#currentAddress',
    confirmationModal: '.table-responsive table',
    subjectInput: '#subjectsInput',
    hobbyInput: '#hobbies-checkbox-1',
    stateInput: '#state',
    cityInput: '#city',
  }

  open() {
    super.open('automation-practice-form')
  }

  firstNameField() {
    return cy.get(this.locators.firstNameInput)
  }

  lastNameField() {
    return cy.get(this.locators.lastNameInput)
  }

  phoneNumberField() {
    return cy.get(this.locators.phoneNumberInput)
  }

  emailField() {
    return cy.get(this.locators.emailInput)
  }

  submitButton() {
    return cy.get(this.locators.submitButton)
  }

  addressField() {
    return cy.get(this.locators.addressInput)
  }

  confirmationTable() {
    return cy.get(this.locators.confirmationModal)
  }

  genderRadioButton(gender?: string) {
    if (gender) return cy.get(`[name="gender"][value="${gender}"]`)
    return cy.get(this.locators.genderWrapper)
  }

  verifyConfirmationTableData(formData: FormFields) {
    this.confirmationTable().within(() => {
      if (formData.firstName || formData.lastName) {
        cy.contains('td', 'Student Name')
          .next()
          .should('contain', `${formData.firstName || ''} ${formData.lastName || ''}`.trim())
      }

      if (formData.email) {
        cy.contains('td', 'Student Email').next().should('contain', formData.email)
      }

      if (formData.gender) {
        cy.contains('td', 'Gender').next().should('contain', formData.gender)
      }

      if (formData.phoneNumber) {
        cy.contains('td', 'Mobile').next().should('contain', formData.phoneNumber)
      }

      if (formData.address) {
        cy.contains('td', 'Address').next().should('contain', formData.address)
      }
    })
    return this
  }

  fillForm(formData: FormFields) {
    if (formData.firstName) this.firstNameField().type(formData.firstName)
    if (formData.lastName) this.lastNameField().type(formData.lastName)
    if (formData.phoneNumber) this.phoneNumberField().type(formData.phoneNumber)
    if (formData.email) this.emailField().type(formData.email)
    if (formData.address) this.addressField().type(formData.address)
    if (formData.gender) this.genderRadioButton(formData.gender).click({ force: true })
    return this
  }

  verifyFieldsAreEmpty() {
    this.firstNameField().should('be.empty')
    this.lastNameField().should('be.empty')
    this.phoneNumberField().should('be.empty')
    this.emailField().should('be.empty')
    this.addressField().should('be.empty')
    return this
  }

  verifyFieldsAreEnabled() {
    this.firstNameField().should('not.be.disabled')
    this.lastNameField().should('not.be.disabled')
    this.phoneNumberField().should('not.be.disabled')
    this.emailField().should('not.be.disabled')
    this.addressField().should('not.be.disabled')
    return this
  }
  verifyFieldsAreVisible() {
    this.firstNameField().should('be.visible')
    this.lastNameField().should('be.visible')
    this.phoneNumberField().should('be.visible')
    this.emailField().should('be.visible')
    this.addressField().should('be.visible')
    this.genderRadioButton().should('be.visible')
    this.submitButton().should('be.visible')
    return this
  }
}
