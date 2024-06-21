import Login3 from '../PageObjects/Login3';
import { deviceViewport, extraTimeOut } from '../Utils';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Funnel compare Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('Funnel compare', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(60000)
        methods.VisibilityofElement(locators.Dashboards_Title)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Funnel_Report)
        methods.clickElementByXPath(locators.Add_First_Event)
        methods.typeElement(locators.search_1, 'Web')
        methods.clickElement0(locators.Website_Session, 0)
        methods.clickElementByXPath(locators.Add_another_event)
        cy.wait(1000)
        methods.clickElement0(locators.Linkedin_Company_Engagements, 0)
        cy.wait(1000)
        methods.clickElement(locators.Linkedin_Ad_Clicked)

        methods.clickElementByXPath(locators.Add_New_Breakdown)
        methods.clickElement0(locators.All_Account, 0)
        methods.clickElement(locators.Top_Engagement_Signals)

        methods.clickElementByXPath(locators.calender_MenuList)
        methods.clickElementByXPath(locators.Select_Month)
        methods.clickElement(locators.date_choosen)
        methods.clickElementByXPath(locators.Run_Anal)
        cy.wait(60000)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Compare)
        methods.clickElementByXPath(locators.Compare_to)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        cy.wait(2000)

    })
})