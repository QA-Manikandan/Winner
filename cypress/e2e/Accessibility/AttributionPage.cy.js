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

        //login before run test
        Login();

    })

    it('Attribution Page', () => {

        cy.wait(5000)
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.attributes)
        cy.wait(1000);
        methods.UrlValidation('/attribution')
        methods.VisibilityofElement(locators.Account_Pagetitle)
        methods.Titletextcontains(locators.Account_Pagetitle, 'Attribution')
    });


})