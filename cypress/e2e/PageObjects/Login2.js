import userDetails2 from '../../fixtures/userDetails2.json';
import envDetails from '../../fixtures/envDetails.json';
import { extraTimeOut } from '../Utils';

const Login2 = () => {

  // open login page url
  cy.visit(`${envDetails.backendApiUrl}/login`)

  //Login form elements - visible + fill
  cy.wait(5000)
  cy.get('#login_form_username',{ timeout: extraTimeOut }).should('be.visible').type(userDetails2.email).should('have.value', userDetails2.email)
  cy.get('#login_form_password',{ timeout: extraTimeOut }).should('be.visible').type(userDetails2.password).should('have.value', userDetails2.password)

  //click on login button
  cy.get('.ant-form-item-control-input-content > .ant-btn-primary').should('be.visible').click()

  cy.wait(2000) //wait till the api loads 

}


export default Login2