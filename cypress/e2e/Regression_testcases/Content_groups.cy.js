import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut } from '../Utils';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Content_groups Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Content_groups', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Demo_${randomNumber}`;

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Touchpoints)
        methods.clickElementByXPath(locators.Content_Groups)
        cy.wait(5000)
        methods.clickElementByXPath(locators.Add_New)
        methods.typeElement(locators.content_group_name, testName)
        methods.typeElement(locators.content_group_description, 'Testing Purpose')
        methods.clickElementByXPath(locators.New_Value)
        methods.typeElement(locators.content_group_value, 'Testing1')
        methods.clickElementByXPath(locators.Add_Rule)
        methods.typeElement(locators.page_value, '25')
        methods.clickElement0(locators.done, 1)
        cy.wait(1000)
        methods.clickElementByXPath(locators.New_Value)
        methods.typeElement(locators.content_group_value, 'Testing2')
        methods.clickElement(locators.Or_value)
        methods.clickElementByXPath(locators.Add_Rule)
        methods.clickElement(locators.Contains)
        methods.clickElement(locators.Equals)
        methods.typeElement(locators.page_value, '26')
        methods.clickElement0(locators.done, 1)
        cy.wait(1000)
        methods.clickElement(locators.done)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Delete_option)
        methods.clickElementByXPath(locators.Remove)
        methods.clickElementByXPath(locators.confirm_1)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(2000)
        cy.reload()
        cy.wait(3000)
    })
})