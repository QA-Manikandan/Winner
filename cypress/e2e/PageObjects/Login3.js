import userDetails3 from '../../fixtures/userDetails3.json';
import envDetails from '../../fixtures/envDetails.json';
import { extraTimeOut } from '../Utils';

const Login3 = () => {

  // open login page url
  cy.visit(`${envDetails.backendApiUrl}/login`)

  //Login form elements - visible + fill
  cy.wait(5000)
  cy.get('#login_form_username',{ timeout: extraTimeOut }).should('be.visible').type(userDetails3.email).should('have.value', userDetails3.email)
  cy.get('#login_form_password',{ timeout: extraTimeOut }).should('be.visible').type(userDetails3.password).should('have.value', userDetails3.password)

  //click on login button
  cy.get('.ant-form-item-control-input-content > .ant-btn-primary').should('be.visible').click()

  cy.wait(2000) //wait till the api loads 

}

export default Login3