import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut } from '../Utils';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Event Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Event', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Custom_Definitions)
        methods.clickElementByXPath(locators.Event)
        methods.clickElementByXPath(locators.New_Event)
        methods.assertElementContainsText(locators.Event_Title, 'New Custom Event')
        methods.typeElement(locators.Name, testName)
        methods.typeElement(locators.description, testName)
        methods.clickElement(locators.Source)
        methods.clickElement(locators.Hubspot)
        methods.clickElement(locators.Object_type)
        methods.clickElement(locators.Contact)
        methods.clickElement(locators.Property_name)
        methods.typeElement(locators.Property_name,'cou')
        methods.clickElement(locators.Country1)
        methods.clickElementByXPath(locators.Record_modified_time)
        methods.scrollWithXpath(locators.Save_1)
        methods.clickElementByXPath(locators.Save_1)
        methods.VisibilityofElement(locators.Popup_Message)
        cy.wait(2000)
        methods.MouseoverWithXpath(locators.Event_option)
        methods.clickElementByXPath(locators.Remove_Event)
        methods.VisibilityofElement(locators.Popup_Message)
        cy.wait(2000)
    })
})