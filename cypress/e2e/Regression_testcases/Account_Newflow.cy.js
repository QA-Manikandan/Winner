import Login3 from '../PageObjects/Login3';
import { deviceViewport, extraTimeOut } from '../Utils';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('new structure Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('Accounts New flow', () => {

        cy.wait(60000)
        methods.VisibilityofElement(locators.Account_Pagetitle,'All Accounts')
        cy.wait(1000)
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(2000)
        methods.clickElementByXPath(locators.Account_FirstValue)
        methods.VisibilityofElementXpath(locators.Account_value)
        methods.clickElementByXPath(locators.Account_value_Close)
        cy.wait(1000)
        methods.MouseoverAndClick(locators.Open_NewTab)
        cy.wait(2000)

    })
})