import Login3 from '../PageObjects/Login3';
import { deviceViewport, extraTimeOut } from '../Utils';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('TouchPoint Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('TouchPoint', () => {

        cy.wait(10000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.clickElement(locators.setting)
        cy.wait(2000)
        methods.clickElementByXPath(locators.Touchpoints)
        methods.clickElementByXPath(locators.Hubspot_1)
        cy.wait(5000)
        methods.clickElementByXPath(locators.Add_New)
        cy.wait(5000)
        // methods.assertElementContainsText(locators.Account_Pagetitle, 'Add new Touchpoint')
        methods.clickElementByXPath1(locators.Create_a_touchpoint_using_Contact)
        methods.clickElement(locators.Campaigns)
        methods.clickElementByXPath(locators.Add_Filter_1)
        methods.clickElement0(locators.Company_Identification, 0)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(1000)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Select_Type_Property)
        methods.clickElement(locators.Tactic_1)
        methods.clickElementByXPath(locators.Select_Source_Property)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Select_Campaign_Property)
        methods.clickElementByXPath(locators.pageview_option5)
        methods.clickElementByXPath(locators.Select_Channel_Property)
        methods.clickElementByXPath(locators.pageview_option6)
        cy.wait(1000)
        methods.clickElement(locators.done)
        cy.wait(2000)
        methods.MouseoverWithXpath(locators.Touchpoints_Delete_option)
        methods.clickElementByXPath(locators.Touchpoints_Delete)
        cy.wait(2000)

    })

})