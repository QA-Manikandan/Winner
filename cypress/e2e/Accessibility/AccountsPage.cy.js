import Login from '../PageObjects/Login';
import envDetails from '../../fixtures/envDetails.json';
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

    it('Accounts Page', () => {

        //Accounts screen
        [
            { key: 'All Accounts', index: 1, url: '/' },
            // { key: 'User Profiles', index: 2, url: '/profiles/people' },
            // { key: 'Account identification', index: 3, url: '/profiles/visitor_report' },
        ].map((item) => {
            cy.wait(5000)

            methods.clickElement(locators.account_dropdown)
            cy.get(`.ant-dropdown > .ant-dropdown-menu > li:nth-child(${item.index}) > span > a`).click({ force: true });
            cy.wait(1000)
            // cy.url().should('eq', `${envDetails.backendApiUrl}${item.url}`);
            methods.navigateToUrl(item.url)
            methods.VisibilityofElement(locators.Account_Pagetitle)
            methods.VisibilityofElement1(locators.Account_Pagetitle, item.key)
        })


    });


})