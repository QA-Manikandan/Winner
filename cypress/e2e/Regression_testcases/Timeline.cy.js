import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut } from '../Utils';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Timeline Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Account Timeline -- User Properties and Event Properties', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(60000)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.search_area, 'accenture.com')
        methods.EnterXpath(locators.search_area)
        methods.clickElementByXPath(locators.Open_Accenture_Acc)
        cy.wait(1000)
        methods.VisibilityofElementIndex(locators.View_visible, 0)
        cy.wait(2000)
        methods.VisibilityofElement(locators.Time_line_Validation)
        cy.wait(5000)
        methods.clickElementByXPath(locators.Details)
        methods.VisibilityofElement(locators.Page_view_validation)
        methods.clickElementByXPath(locators.email_delete)
        methods.VisibilityofElement(locators.Popup_Message)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Add_Property_1)
        methods.clickElement0(locators.others, 0)
        methods.typeElement(locators.select_property, 'ema')
        cy.wait(1000)
        methods.clickElement(locators.email)
        methods.VisibilityofElement(locators.Popup_Message)
        cy.wait(2000)
        methods.clickElementByXPath(locators.Event_Properties)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Page_Domain)
        methods.VisibilityofElement(locators.Popup_Message)
        cy.wait(2000)
        methods.clickElementByXPath(locators.Event_Properties)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Add_Property_1)
        methods.clickElement0(locators.Page_Properties,0)
        methods.clickElement(locators.Page_domain_option)
        cy.wait(1000)
        methods.VisibilityofElement(locators.Popup_Message)
        cy.wait(2000)
        methods.clickElementByXPath(locators.Event_Properties)
    })

})