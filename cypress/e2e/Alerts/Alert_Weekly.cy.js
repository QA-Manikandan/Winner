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
        methods.clickElementByXPath(locators.Weekly_updates)
        cy.wait(1000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'Weekly updates')
        methods.clickElementByXPath(locators.create_new)
        cy.wait(1000)
        methods.typeElement(locators.Alert_name,testName)
        methods.clickElementByXPath(locators.Add_a_KPI)
        methods.clickElement0(locators.Website_Session,0)
        cy.wait(1000)
        methods.clickElement(locators.Total_Session)
        methods.clickElement(locators.operator)
        methods.clickElementByXPath(locators.is_greater_than)
        methods.typeElement(locators.Value,'2')
        cy.wait(1000)
        methods.clickElement(locators.Date_Range)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Monthly)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Enable_button)
        methods.clickElementByXPath(locators.Select_channel)
        cy.wait(1000)
        methods.typeElement(locators.search_channel,'stag')
        methods.clickElementByXPath(locators.choose_channel)
        methods.clickElementByXPath(locators.save_channel)

        methods.scrollWithXpath(locators.save2)
        methods.clickElementByXPath(locators.save2)
        cy.wait(1000)
        methods.VisibilityofElement(locators.notification_popup)

        methods.clickElementByXPath(locators.Remove_Alert_option)
        methods.clickElementByXPath(locators.remove_alert)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Ok)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(2000)
        
    })

})