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

    it('TouchPoint_UTM', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.clickElement(locators.setting)
        methods.clickElementByXPath(locators.Touchpoints)
        methods.clickElementByXPath(locators.Email_tracking)
        cy.wait(20000)
        methods.clickElement(locators.Search_type)
        methods.clickElement(locators.Hubspot)
        methods.clickElementByXPath(locators.Copy_Hubspot_UTM_Parameter)
        methods.VisibilityofElement(locators.notification_popup3)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Add_Email_tracking)
        methods.typeElement(locators.utm_tag, 'Testing')
        methods.clickElement(locators.done)
        methods.VisibilityofElement(locators.Popup_Message)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Email_tracking)
        cy.wait(20000)
        methods.clickElement(locators.Search_type)
        methods.clickElement(locators.Hubspot)
        methods.assertElementContainsTextxpath(locators.Verified_saved_UTM, '?Testing={{contact.email}}')
        cy.wait(1000)
        methods.clickElementByXPath(locators.X_close)
        methods.clickElementByXPath(locators.Ok)
        methods.VisibilityofElement(locators.Popup_Message)
        cy.wait(5000)
        methods.clickElementByXPath(locators.Email_tracking)

    })

})