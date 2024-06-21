import Login3 from '../PageObjects/Login3';
import { deviceViewport, extraTimeOut } from '../Utils';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Engagements Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('Engagements', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Demo_${randomNumber}`;

        cy.wait(5000)
        methods.VisibilityofElement(locators.Account_Pagetitle, 'All Accounts')
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Account_Scoring)
        // methods.clickElementByXPath(locators.Engagements)
        methods.VisibilityofElement(locators.Page_title, 'Account Scoring')
        methods.clickElementByXPath(locators.Add_signal)
        cy.wait(1000)
        methods.typeElement(locators.Pricing_page_visit_Search, testName)
        cy.wait(1000)
        methods.clickElementByXPath(locators.select_event)
        cy.wait(1000)
        methods.clickElementByXPath(locators.select_event)
        cy.wait(1000)
        methods.clickElementByXPath(locators.select_event)
        cy.wait(3000)
        methods.clickElement0(locators.others1, 0)
        cy.wait(2000)
        methods.clickElementByXPath(locators.select_option)
        cy.wait(2000)
        methods.clickElementByXPath(locators.Assign_weight)
        cy.wait(2000)
        methods.clickElementByXPath(locators.Add_signal_1)
        methods.VisibilityofElement(locators.notification_popup)
        methods.clickElementByXPath(locators.Last_page)
        cy.wait(1000)
        cy.xpath(`//td[text()='${testName}']//following::button[2]`, { timeout: { timeout: extraTimeOut } }).click({ force: true });
        methods.clickElementByXPath(locators.Yes)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(2000)

    })
})
