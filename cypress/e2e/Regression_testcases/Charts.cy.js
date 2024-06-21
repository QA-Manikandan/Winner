import Login3 from '../PageObjects/Login3';
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
        Login3();

    })

    it('TC_RE_01_Charts - companies have been visited', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(60000)
        methods.VisibilityofElement(locators.Dashboards_Title)
        methods.clickElementByXPath(locators.Add_Report_1)
        methods.clickElementByXPath(locators.Event_Report)
        methods.clickElementByXPath(locators.Add_First_Event)
        methods.typeElement(locators.search_1, 'webs')
        cy.wait(1000)
        methods.ElementVisibleandClick(locators.web_options)
        methods.clickElement(locators.calender_css)
        cy.wait(1000)
        methods.clickElement0(locators.choose_date, 8)
        cy.wait(1000)
        methods.clickElement(locators.Run_analysis_css)
        methods.MouseoverWithXpath(locators.Sparkline)
        methods.clickElementByXPath(locators.Line_Chart)
    })

    it('TC_RE_02_Charts - Local filters, Local break down', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(60000)
        methods.VisibilityofElement(locators.Dashboards_Title)
        methods.clickElementByXPath(locators.Add_Report_1)
        methods.clickElementByXPath(locators.Event_Report)
        methods.clickElementByXPath(locators.Add_First_Event)
        methods.typeElement(locators.search_1, 'webs')
        cy.wait(1000)
        methods.clickElement0(locators.Website_Session, 0)

        methods.MouseoverAndClick(locators.Filter_this_event)
        methods.clickElement0(locators.Company_Identification, 0)
        cy.wait(3000)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(1000)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(10000)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(1000)
        methods.MouseoverAndClick(locators.Filter_this_event)
        cy.wait(1000)
        methods.clickElement0(locators.session_properties, 0)
        cy.wait(1000)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(3000)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Apply1)
        methods.MouseoverAndClick(locators.breakdown_option)
        methods.clickElementByXPath(locators.BreakDown)
        methods.clickElement0(locators.Traffic_source_1, 0)
        methods.clickElement(locators.Channel_option)
        methods.MouseoverAndClick(locators.breakdown_option)
        methods.clickElementByXPath(locators.BreakDown)
        methods.clickElement0(locators.session_properties, 0)
        methods.clickElement(locators.Session_Exit_Page_URL)
        methods.clickElement(locators.calender_css)
        cy.wait(1000)
        methods.clickElement0(locators.choose_date, 6)
        methods.clickElement(locators.Run_analysis_css)

    })
})