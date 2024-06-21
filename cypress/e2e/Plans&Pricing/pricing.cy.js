import Login2 from '../PageObjects/Login2';
import { deviceViewport, extraTimeOut } from '../Utils';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe.skip('Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login2();

    })

    it.skip('Pricing', () => {

        // pricing

        cy.wait(5000)
        methods.clickElement(locators.setting)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Pricing)
        cy.wait(1000)

        // select upgrade plan

        methods.clickElement(locators.upgrade_plan)
        cy.wait(1000)
        methods.assertElementContainsText(locators.upgrade_title,'Upgrade to get more out of Factors')
        cy.wait(1000)

        // buy a plan

        methods.scrollWithXpath(locators.Buy_this_Plan)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Buy_this_Plan)
        cy.wait(1000)
        methods.VisibilityofElement(locators.Upgrade_validation)
        methods.VisibilityofElementXpath(locators.Continue)
        methods.clickElementByXPath(locators.Continue)
        cy.wait(3000)

        // Payment gateway
        
        cy.origin('https://factors-test.chargebee.com', () => {
            cy.url().should('contain', 'chargebee.com');
            cy.get('[data-cb-id="cart_submit"]').click()
            cy.get('[id="first_name"]').clear().type('sonali');
            cy.get('[class="cb-button cb-button__primary"]').click();
            cy.get('[data-cb-id="review_submit"]').click();
            cy.wait(5000)

        })

        // back to staging url

        methods.PricingURL()
        methods.VisibilityofElement(locators.Account_Pagetitle)

        // downgrading

        methods.clickElement(locators.upgrade_plan)
        methods.scrollWithXpath(locators.Buy_this_Plan)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Buy_this_Plan)
        methods.VisibilityofElement(locators.Upgrade_validation)
        methods.clickElementByXPath(locators.Continue)
        cy.wait(3000)

        cy.origin('https://factors-test.chargebee.com', () => {
            cy.url().should('contain', 'chargebee.com');
            cy.get('[data-cb-id="cart_submit"]').click();
            cy.get('[class="cb-button cb-button__primary"]').click();
            cy.get('[data-cb-id="review_submit"]').click();
            cy.wait(5000)
        })

        methods.PricingURL()
        methods.VisibilityofElement(locators.Account_Pagetitle)

    })
})