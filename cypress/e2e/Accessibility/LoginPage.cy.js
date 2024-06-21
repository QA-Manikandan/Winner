import userDetails from '../../fixtures/userDetails.json';
import Login from '../PageObjects/Login';
import { deviceViewport, extraTimeOut } from '../Utils';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

    })

    it('Login Page - Success', () => {

        Login();

        //checking if Login is success

        methods.launchUrl()

        //Displays logged in user details
        cy.wait(5000)
        methods.VisibilityofElement(locators.usermail)
        methods.VisibilityofElement1(locators.usermail, userDetails.email)

        //landing in default screen - All account
        cy.wait(5000)
        methods.VisibilityofElement(locators.Account_Pagetitle)
        methods.VisibilityofElement1(locators.Account_Pagetitle, 'All Accounts')
    });


})