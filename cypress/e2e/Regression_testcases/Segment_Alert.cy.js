import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut } from '../Utils';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Segment Alert Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Segment Alert', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Demo_${randomNumber}`;

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(1000)
        methods.clickElementByXPath(locators.Automation)
        methods.VisibilityofElement(locators.Account_Pagetitle)
        methods.clickElementByXPath(locators.Templates)
        methods.clickElementByXPath(locators.Account_Executives)
        methods.clickElementByXPath(locators.This_is_correct)
        methods.clickElement(locators.Performs_an_event)
        methods.clickElement(locators.Enter_the_segment)
        methods.scrollWithXpath(locators.Create_new_alert_title)
        cy.wait(1000)
        methods.clickElementByXPath1(locators.segment_name_2)
        cy.wait(1000)
        methods.clickElementByXPath(locators.In_Hubspot_text)
        methods.ClearAndType(locators.Alert_name, testName)

        methods.clickElementByXPath(locators.Enable_button)
        methods.clickElementByXPath(locators.Select_channel)
        methods.typeElement(locators.search_channel, 'stag')
        methods.clickElementByXPath(locators.choose_channel)
        methods.clickElementByXPath(locators.save_channel)
        methods.clickElementByXPath(locators.submit)
        cy.wait(1000)
        methods.VisibilityofElement(locators.notification_popup)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`).click({ force: true });
        cy.wait(1000)
        methods.clickElementByXPath(locators.remove_alert)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Ok)
        cy.wait(1000)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(2000)

    })
})