import Login1 from '../PageObjects/Login1';
import {deviceViewport, extraTimeOut } from '../Utils';   
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

    it('People view', () => {

        methods.assertElementContainsText(locators.Account_Pagetitle,'All Accounts')
        cy.wait(1000)
        methods.navigateToUrlPeople()
        cy.wait(1000)
        methods.UrlValidationPeople()
        cy.wait(1000)
        methods.assertElementContainsText(locators.Account_Pagetitle,'All People')
        cy.wait(60000)
        methods.VisibilityofElement(locators.account_pageloaded)

        // select account & birdview

        methods.clickElement(locators.search_button)
        cy.wait(1000)
        methods.typeElementByXPath(locators.Search1,'saurabh.singh@webengage.com')
        cy.wait(1000)
        methods.EnterXpath(locators.Search1)
        cy.wait(1000)
        methods.clickElement(locators.account_pageloaded)
        cy.wait(1000)
        methods.VisibilityofElement(locators.View_visible)
        cy.wait(60000)
        methods.MouseoverWithXpath(locators.people_firstvalue)
        cy.wait(1000)
        methods.VisibilityofElement(locators.popupcard)
        cy.wait(1000)
        methods.AssertNotEmpty(locators.popupcard)
        cy.wait(1000)
        methods.Mouseover(locators.timestamp_validation)
        cy.wait(1000)

        // expand the pageView and verify the show less visibility

        methods.clickElementByXPath(locators.Expand)
        cy.wait(1000)

        // contract the pageview 

        methods.clickElementByXPath(locators.collapse)
        cy.wait(1000)

        // event select

        methods.clickElementByXPath(locators.Birdview_option)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Contact_List)
        cy.wait(1000)
        methods.AssertNotEmpty(locators.Event_validation)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Contact_List)
        cy.wait(1000)

        // user millistone

        methods.clickElementByXPath(locators.Milestones)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Milestones_option1)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Milestones_option2)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Milestones_option3)
        cy.wait(1000)
        methods.VisibilityofElement(locators.notification_popup2)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Apply2)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Birdview_option)
        cy.wait(1000)

        // left side filter

        methods.MouseoverAndClick(locators.City_delete)
        cy.wait(1000)
        methods.MouseoverAndClick(locators.email_delete)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Add_Property1)
        cy.wait(1000)
        methods.clickElement0(locators.others,0)
        cy.wait(1000)
        methods.typeElement(locators.select_property,'ema')
        cy.wait(1000)
        methods.clickElement(locators.email)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Add_Property1)
        cy.wait(1000)
        methods.clickElement0(locators.User_identification,0)
        cy.wait(1000)
        methods.typeElement(locators.select_property,'city')
        cy.wait(1000)
        methods.clickElement(locators.User_City)
        cy.wait(1000)

        // account activity

        methods.clickElementByXPath(locators.time_dropdown)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Time_stamp)
        cy.wait(1000)
        methods.AssertNotEmpty(locators.timestamp_validation)
        cy.wait(1000)
        methods.clickElementByXPath(locators.time_dropdown)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Hourly)
        cy.wait(1000)
        methods.AssertNotEmpty(locators.timestamp_validation)
        cy.wait(1000)
        methods.clickElementByXPath(locators.time_dropdown)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Weekly)
        cy.wait(1000)
        methods.AssertNotEmpty(locators.timestamp_validation)
        cy.wait(1000)
        methods.clickElementByXPath(locators.time_dropdown)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Monthly)
        cy.wait(1000)
        methods.AssertNotEmpty(locators.timestamp_validation)
        cy.wait(1000)
        methods.clickElementByXPath(locators.time_dropdown)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Daily)
        cy.wait(1000)
        methods.AssertNotEmpty(locators.timestamp_validation)
        cy.wait(1000)

        // Timeline

        methods.clickElementByXPath(locators.Time_line)
        cy.wait(1000)
        methods.VisibleofElement(locators.Time_line_Validation)
        cy.wait(1000)

    })
})