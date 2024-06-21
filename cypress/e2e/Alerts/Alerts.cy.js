import Login1 from '../PageObjects/Login1';
import {deviceViewport, extraTimeOut } from '../Utils'; 
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Alert', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'All Accounts')
        cy.wait(1000)
        methods.clickElementByXPath(locators.Automation)
        cy.wait(20000)

        // New alert

        methods.clickElementByXPath(locators.create_new)
        cy.wait(1000)
        methods.clickElement(locators.Account_click)
        cy.wait(1000)
        methods.VisibilityofElementIndex(locators.alert_page)
        cy.wait(1000)

        // Select event

        methods.clickElementByXPath(locators.select_event)
        cy.wait(1000)
        methods.clickElement0(locators.Website_activity,0)
        cy.wait(1000)
        methods.typeElement(locators.search_1,'www.factors.ai/pricing')
        cy.wait(1000)
        methods.clickElement(locators.pricing_option)
        cy.wait(1000)

        // Add filters

        methods.scroll(locators.save_css)
        cy.wait(1000)
        methods.clickElement(locators.search_button)
        cy.wait(1000)
        methods.typeElement(locators.search_1,'active')
        cy.wait(1000)
        methods.clickElement(locators.select_Accountprop)
        cy.wait(1000);
        methods.clickElement(locators.equals)
        cy.wait(1000)
        methods.scroll(locators.save_css)
        cy.wait(1000)
        methods.clickElement(locators.equals_value)
        cy.wait(1000)
        cy.get(':nth-child(3) > div > .ant-btn').type('5'),{force: true};
        // methods.typeElement(locators.enter_value,'5')
        cy.wait(1000)
        methods.clickElement(locators.add_filter_css)
        cy.wait(1000)
        methods.typeElement(locators.search_1,'company c')
        cy.wait(1000)
        methods.clickElementByXPath(locators.Company_country)
        cy.wait(1000)
        methods.typeElement(locators.search_1,'unite')
        cy.wait(1000)
        methods.clickElement(locators.United_Kingdom)
        cy.wait(1000)
        methods.clickElement(locators.United_States)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(1000)
        methods.scroll(locators.save_css)
        cy.wait(1000)

        // alert name

        methods.typeElement(locators.Alert_name,testName)
        cy.wait(1000)

        // add property

        methods.clickElement(locators.Add_property)
        cy.wait(1000)
        methods.typeElement(locators.select_property,'company d')
        cy.wait(1000)
        methods.clickElement(locators.select_Accountprop)
        cy.wait(1000)
        methods.clickElement(locators.Add_property)
        cy.wait(1000)
        methods.typeElement(locators.select_property,'company n')
        cy.wait(1000)
        methods.clickElementByXPath(locators.Company_option)
        cy.wait(1000)
        methods.clickElement(locators.Add_property)
        cy.wait(1000)
        methods.typeElement(locators.select_property,'active')
        cy.wait(1000)
        methods.clickElement(locators.select_Accountprop)
        cy.wait(1000)
        methods.clickElement(locators.Add_property)
        cy.wait(1000)
        methods.typeElement(locators.select_property,'referrer')
        cy.wait(1000)
        methods.clickElementByXPath(locators.page_referrer_URL)
        cy.wait(1000)

        // Where to get the alert

        methods.clickElementByXPath(locators.Enable_button)
        methods.clickElementByXPath(locators.Select_channel)
        cy.wait(5000)
        methods.typeElement(locators.search_channel,'stag')
        cy.wait(5000)
        methods.clickElementByXPath(locators.choose_channel)
        methods.clickElementByXPath(locators.save_channel)

        // save the alert

        methods.clickElementByXPath(locators.submit)
        cy.wait(1000)
        methods.VisibilityofElement(locators.notification_popup)

        // Deleting the alert

        // methods.clickElementByXPath(locators.delete_alert)
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