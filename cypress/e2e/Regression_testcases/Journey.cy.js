import Login3 from '../PageObjects/Login3';
import { deviceViewport, extraTimeOut } from '../Utils';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Journey Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('TC_RE_01 - Journey - Path analysis ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Path_Analysis)
        cy.wait(8000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'Path Analysis')
        methods.VisibilityofElement(locators.Path_Analysis_Pageload)
    })

    it('TC_RE_02, TC_RE_03 - Journey - Path analysis create event ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Path_Analysis)
        cy.wait(8000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'Path Analysis')
        methods.VisibilityofElement(locators.Path_Analysis_Pageload)
        methods.clickElement(locators.Create_New_PathAna)
        methods.clickElement0(locators.Start_with_an_event_title, 0)
        methods.clickElementByXPath(locators.Start_with_an_event)
        methods.clickElementByXPath(locators.Add_Event_1)
        cy.wait(2000)
        methods.clickElement0(locators.others1, 1)
        cy.wait(2000)
        methods.clickElementByXPath(locators.select_option)
        methods.clickElement0(locators.All_events_except_title, 0)
        methods.clickElementByXPath(locators.All_events_except)
        methods.clickElementByXPath(locators.Add_Event_1)
        methods.clickElement0(locators.Hubspot_Companies, 1)
        methods.clickElement(locators.Company_Created_title)
    })

    it('TC_RE_04, TC_RE_05 - Journey - Path analysis create event ', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Path_Analysis)
        cy.wait(8000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'Path Analysis')
        methods.VisibilityofElement(locators.Path_Analysis_Pageload)
        methods.clickElement(locators.Create_New_PathAna)
        methods.clickElement0(locators.Start_with_an_event_title, 0)
        methods.clickElementByXPath(locators.Start_with_an_event)
        methods.clickElementByXPath(locators.Add_Event_1)
        cy.wait(2000)
        methods.clickElement0(locators.others1, 1)
        cy.wait(2000)
        methods.clickElementByXPath(locators.select_option)
        methods.clickElement0(locators.All_events_except_title, 0)
        methods.clickElementByXPath(locators.All_events_except)
        methods.clickElementByXPath(locators.Add_Event_1)
        methods.clickElement0(locators.Hubspot_Companies, 1)
        methods.clickElement(locators.Company_Created_title)
        methods.clickElementByXPath(locators.Add_new2)
        cy.wait(1000)
        methods.clickElement0(locators.others, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(1000)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Steps)
        methods.clickElement(locators.Four_steps)
        methods.clickElementByXPath(locators.Select_date_range)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Preview_Month)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Start_Date)
        methods.clickElementByXPath(locators.End_Date)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Save_and_Build)
        methods.typeElement(locators.Basic_title, testName)
        methods.typeElement(locators.Basic_description, 'Testing Report')
        methods.clickElement(locators.done)
        methods.VisibilityofElement(locators.Popup_Message)
        methods.assertElementContainsTextxpath(locators.Building_Validation, 'Building')
        methods.MouseoverWithXpath(locators.Journey_Option)
        methods.clickElementByXPath(locators.Delete_Report)
        methods.clickElementByXPath(locators.Yes)
        methods.VisibilityofElement(locators.Popup_Message)
        cy.wait(2000)

    })

    it('TC_RE_06, TC_RE_07 - Journey - Path analysis create event ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Path_Analysis)
        cy.wait(8000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'Path Analysis')
        methods.VisibilityofElement(locators.Path_Analysis_Pageload)
        methods.clickElement(locators.Create_New_PathAna)
        methods.clickElement0(locators.Start_with_an_event_title, 0)
        methods.clickElementByXPath(locators.Start_with_an_event)
        methods.clickElementByXPath(locators.Add_Event_1)
        cy.wait(2000)
        methods.clickElement0(locators.others1, 1)
        cy.wait(2000)
        methods.clickElementByXPath(locators.select_option)

        methods.clickElement0(locators.All_events_except_title, 0)
        methods.clickElementByXPath(locators.Only_specific_events)
        methods.clickElementByXPath(locators.Add_New)
        methods.clickElement(locators.If_the_event_equals_title)
        methods.clickElementByXPath(locators.If_the_event_equals)
        methods.clickElementByXPath(locators.Path_Select_event)
        methods.clickElementByXPath(locators.G2_Engagement_option)

        methods.clickElementByXPath(locators.Add_New)
        methods.clickElement0(locators.If_the_event_equals_title, 1)
        methods.clickElementByXPath(locators.If_the_event_is_of_type)
        methods.clickElementByXPath(locators.Path_Select_event_1)
        methods.clickElement(locators.Page_Views)

    })

    it('TC_RE_08 - Journey - Path analysis create event ', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Path_Analysis)
        cy.wait(8000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'Path Analysis')
        methods.VisibilityofElement(locators.Path_Analysis_Pageload)
        methods.clickElement(locators.Create_New_PathAna)
        methods.clickElement0(locators.Start_with_an_event_title, 0)
        methods.clickElementByXPath(locators.Start_with_an_event)
        methods.clickElementByXPath(locators.Add_Event_1)
        cy.wait(2000)
        methods.clickElement0(locators.others1, 1)
        cy.wait(2000)
        methods.clickElementByXPath(locators.select_option)

        methods.clickElement0(locators.All_events_except_title, 0)
        methods.clickElementByXPath(locators.Only_specific_events)
        methods.clickElementByXPath(locators.Add_New)
        methods.clickElement(locators.If_the_event_equals_title)
        methods.clickElementByXPath(locators.If_the_event_equals)
        methods.clickElementByXPath(locators.Path_Select_event)
        methods.clickElementByXPath(locators.G2_Engagement_option)

        methods.clickElementByXPath(locators.Add_New)
        methods.clickElement0(locators.If_the_event_equals_title, 1)
        methods.clickElementByXPath(locators.If_the_event_is_of_type)
        methods.clickElementByXPath(locators.Path_Select_event_1)
        methods.clickElement(locators.Page_Views)

        methods.clickElementByXPath(locators.Add_new2)
        cy.wait(1000)
        methods.clickElement0(locators.others, 0)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(1000)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Steps)
        methods.clickElement(locators.Four_steps)
        methods.clickElementByXPath(locators.Select_date_range)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Preview_Month)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Start_Date)
        methods.clickElementByXPath(locators.End_Date)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Save_and_Build)
        methods.typeElement(locators.Basic_title, testName)
        methods.typeElement(locators.Basic_description, 'Testing Report')
        methods.clickElement(locators.done)
        methods.VisibilityofElement(locators.Popup_Message)
        methods.assertElementContainsTextxpath(locators.Building_Validation, 'Building')
        methods.MouseoverWithXpath(locators.Journey_Option)
        methods.clickElementByXPath(locators.Delete_Report)
        methods.clickElementByXPath(locators.Yes)
        methods.VisibilityofElement(locators.Popup_Message)
        cy.wait(2000)
    })

    it('TC_RE_09 - Journey - Explain ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Explain)
        cy.wait(8000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'Explain')
        methods.VisibilityofElement(locators.Explain_pageload)
    })


    it('TC_RE_10 - Journey - Explain create', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Explain)
        cy.wait(8000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'Explain')
        methods.VisibilityofElement(locators.Explain_pageload)
        methods.clickElement(locators.Explain_CreateNew)
        methods.clickElement(locators.Select_Analysis_Window)
        methods.clickElementByXPath(locators.Last_7_days)

    })

    it('TC_RE_11, TC_RE_12, TC_RE_13, TC_RE_14 - Journey - Explain create  ', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Explain)
        cy.wait(8000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'Explain')
        methods.VisibilityofElement(locators.Explain_pageload)
        methods.clickElement(locators.Explain_CreateNew)
        methods.clickElement(locators.Select_Analysis_Window)
        methods.clickElementByXPath(locators.Last_7_days)
        methods.clickElementByXPath(locators.Add_Event_1)
        cy.wait(2000)
        methods.clickElement0(locators.others1, 1)
        cy.wait(2000)
        methods.clickElementByXPath(locators.select_option)
        methods.clickElementByXPath(locators.Add_another_event_1)
        cy.wait(1000)
        methods.clickElement0(locators.Linkedin_Company_Engagements, 0)
        methods.clickElement(locators.Linkedin_Ad_Clicked)
        methods.clickElementByXPath(locators.Add_Event_explain)
        cy.wait(1000)
        methods.clickElement0(locators.Hubspot_Contacts, 0)
        methods.clickElement(locators.Contact_List_1)
        methods.clickElementByXPath(locators.Save_and_Build)
        methods.typeElement(locators.Basic_title, testName)
        methods.typeElement(locators.Basic_description, 'Testing Report')
        methods.clickElement(locators.done)
        methods.VisibilityofElement(locators.Popup_Message)
        methods.assertElementContainsTextxpath(locators.Building_Validation, 'Building')
        methods.MouseoverWithXpath(locators.Journey_Option)
        methods.clickElementByXPath(locators.Delete_Report)
        methods.clickElementByXPath(locators.Yes)
        methods.VisibilityofElement(locators.Popup_Message)
        cy.wait(2000)
    })
})