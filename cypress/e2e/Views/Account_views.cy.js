import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut } from '../Utils';
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

    it('Accounts view', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(60000)
        methods.VisibilityofElement(locators.account_pageloaded)

        // select account & birdview

        methods.clickElement(locators.search_button)
        cy.wait(1000)
        methods.typeElementByXPath(locators.search_area, 'infosys.com')
        cy.wait(1000)
        methods.EnterXpath(locators.search_area)
        cy.wait(5000)
        methods.assertElementContainsText(locators.account_pageloaded, 'infosys.com')
        cy.wait(1000)
        methods.MouseoverWithXpath(locators.open_account)
        methods.clickElementByXPath(locators.open_account)
        cy.wait(1000)
        methods.clickElementByXPath(locators.BirdView)
        methods.VisibilityofElement(locators.View_visible)
        cy.wait(1000)

        // expand the pageView and verify the show less visibility

        methods.clickElementByXPath(locators.Expand)
        cy.wait(1000)

        // contract the pageview 

        methods.clickElementByXPath(locators.collapse)
        cy.wait(1000)
        methods.scrollWithXpath(locators.First_value)
        cy.wait(1000)
        methods.VisibilityofElementXpath(locators.First_value)
        cy.wait(1000)

        // event select

        methods.clickElementByXPath(locators.Birdview_option)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Company_Created)
        cy.wait(1000)
        methods.AssertNotEmpty(locators.Event_validation)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Company_Created)
        cy.wait(1000)

        // user property

        methods.clickElement(locators.Birdview_properties)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Birdview_properties_option)
        methods.AssertNotEmptyWithXpath(locators.property_validation)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Birdview_properties_option1)
        methods.AssertNotEmptyWithXpath(locators.property_validation)
        cy.wait(1000)

        // // left side filter

        methods.MouseoverAndClick(locators.Company_domain_delete)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Add_Property1)
        cy.wait(1000)
        methods.clickElement0(locators.Company_Identification, 0)
        methods.typeElement(locators.select_property, 'dom')
        cy.wait(1000)
        methods.clickElement(locators.Company_domain)
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

        // Overview

        methods.clickElementByXPath(locators.Over_view)
        cy.wait(1000)
        // methods.VisibleofElement(locators.Over_view_validation)

    })
})