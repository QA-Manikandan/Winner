import envDetails from '../../fixtures/envDetails.json';

describe.skip('Signup', () => {
  it.skip('Load Signup Screen', () => {

    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    // open page url
    cy.visit(`${envDetails.backendApiUrl}/signup`)

    //check if buttons are visible 
    cy.get('button.ant-btn-primary').should('be.visible')
    cy.get('button.ant-btn-default').should('be.visible')
    // cy.get('.flex > .ant-typography > a').should('be.visible').contains('Login')

  });

  it.skip('Fill Signup form', () => {

    let userDetail = {
      name: 'Baliga',
      email: 'baliga@factors.ai',
      password: 'Test1234*#',
      phone: '8129603322'

    }

    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    // open page url
    cy.visit(`${envDetails.backendApiUrl}/signup`)

    // click on signup with email button
    cy.get('button.ant-btn-primary').click()

    //Signup form elements - visible + fill
    cy.get('#login_email').should('be.visible').type(userDetail.email).should('have.value', userDetail.email)
    cy.get('#login_first_name').should('be.visible').type(userDetail.name).should('have.value', userDetail.name)
    cy.get('#login_phone').should('be.visible').type(userDetail.phone).should('have.value', userDetail.phone)
    cy.get('#login_subscribe_newsletter > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').and('not.be.checked')
    cy.get('#login_terms_and_conditions > .ant-checkbox-wrapper > .ant-checkbox > .ant-checkbox-input').and('not.be.checked').check().and('be.checked')

    cy.get('button.ant-btn-default').should('be.visible')
    cy.get('.ant-typography.fai-text__size--h7').should('be.visible')

    //submit signup form
    // cy.get('.ant-form-item-control-input-content > .ant-btn-primary').should('be.visible').click()

  });

})