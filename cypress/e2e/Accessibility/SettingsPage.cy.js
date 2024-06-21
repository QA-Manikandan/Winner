import envDetails from '../../fixtures/envDetails.json';
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

    it('Settings Page', () => {

        //settings dropdown and pages accessibility check 

        [
            { key: 'Basic Details', index: 1, url: 'general' },
            { key: 'Users and Roles', index: 2, url: 'members' },
            { key: 'Pricing', index: 3, url: 'pricing?activeTab=billing' },
            { key: 'Sharing', index: 4, url: 'project/sharing' },


        ].map((item) => {
            cy.wait(5000);
            methods.clickElement(locators.setting)
            cy.xpath(`//h4[text()="Project Settings"]//following::h4[${item.index}]`).click({ force: true });
            cy.wait(2000)
            methods.UrlValidationset(item.url)
            // if (item.key == 'Pricing') {
            //     methods.VisibilityofElement(locators.pricing_breadcrumb)
            //     methods.VisibilityofElement1(locators.billing, 'Billing')
            // } else {
            //     methods.VisibilityofElement(locators.Page_title)
            //     methods.Titletextcontains(locators.Page_title, item.key)
            // }
        });
    });


})