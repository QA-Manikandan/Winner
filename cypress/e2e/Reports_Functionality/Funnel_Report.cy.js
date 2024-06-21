import Login3 from '../PageObjects/Login3';
import { deviceViewport, extraTimeOut } from '../Utils';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Funnel Report Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('Funnel Report', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const testName1 = `Demo_${nowTime}_1`;

        cy.wait(10000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(60000)
        methods.VisibilityofElement(locators.Dashboards_Title)
        methods.clickElementByXPath(locators.Drafts)
        cy.wait(10000)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Funnel_Report)
        methods.clickElementByXPath(locators.Add_First_Event)
        methods.typeElement(locators.search_1, 'Webs')
        methods.clickElement0(locators.Website_Session, 0)
        methods.clickElementByXPath(locators.Add_another_event)
        cy.wait(1000)
        methods.clickElement0(locators.Linkedin_Company_Engagements, 0)
        cy.wait(1000)
        methods.clickElement(locators.Linkedin_Ad_Clicked)
        methods.clickElementByXPath(locators.Add_New_FilterBy)
        cy.wait(1000)
        methods.clickElement0(locators.All_Account, 0)
        cy.wait(1000)
        methods.clickElement(locators.In_Hubspot)
        cy.wait(1000)
        methods.clickElement(locators.true)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Add_New_Breakdown)
        methods.clickElement0(locators.All_Account, 0)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.clickElementByXPath(locators.calender_MenuList)
        methods.clickElementByXPath(locators.Select_Month)
        methods.clickElement(locators.date_choosen)
        methods.clickElementByXPath(locators.Run_Anal)
        cy.wait(10000)
        methods.VisibilityofElement(locators.Attri_pageloaded)

        methods.clickElementByXPath(locators.Save_1)
        methods.typeElement(locators.Report_Name, testName)
        methods.typeElement(locators.Description_OP, 'Testing Purpose')
        methods.clickElementByXPath(locators.save1)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(2000)

        methods.clickElementByXPath1(locators.Closed)
        cy.wait(1000)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.View_Report)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElementByXPath(locators.Add_New_Breakdown1)
        methods.clickElement0(locators.Hubspot_Companies, 0)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.clickElementByXPath(locators.Run_Analysis1)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        cy.wait(2000)
        methods.MouseoverWithXpath(locators.Save_dropdown)
        methods.clickElementByXPath(locators.Save_as_New)
        methods.typeElement(locators.Report_Name, testName1)
        cy.wait(1000)
        methods.typeElement(locators.Description_OP, 'Testing Purpose')
        cy.wait(1000)
        methods.clickElementByXPath(locators.Save_2)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(2000)

        methods.clickElementByXPath1(locators.Closed)
        cy.wait(1000)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.Delete_Report_1)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(2000)

        cy.xpath(`//h4[text()='${testName1}']//following::button[1]`).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.View_Report)
        methods.clickElementByXPath(locators.Expand_1)

        methods.clickElementByXPath(locators.Add_New_FilterBy1)
        cy.wait(1000)
        methods.clickElement0(locators.All_Account, 0)
        cy.wait(1000)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(1000)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)

        methods.clickElementByXPath(locators.Run_Analysis1)
        cy.wait(10000)
        methods.VisibilityofElement(locators.Profile_report_gen)

        methods.MouseoverWithXpath(locators.Save_dropdown)
        methods.clickElementByXPath(locators.save1)
        cy.wait(3000)
        methods.clickElementByXPath(locators.Closed)
        cy.wait(1000)
        cy.xpath(`//h4[text()='${testName1}']//following::button[1]`).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.Delete_Report_1)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(2000)
    })

    it('Funnel Report New Flow', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(60000)
        methods.VisibilityofElement(locators.Dashboards_Title)
        methods.clickElementByXPath(locators.Drafts)
        cy.wait(10000)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Funnel_Report)
        methods.clickElementByXPath(locators.Add_First_Event)
        methods.typeElement(locators.search_1, 'Webs')
        methods.clickElement0(locators.Website_Session, 0)
        methods.clickElementByXPath(locators.Add_another_event)
        cy.wait(1000)
        methods.clickElement0(locators.Linkedin_Company_Engagements, 0)
        cy.wait(1000)
        methods.clickElement(locators.Linkedin_Ad_Clicked)
        methods.clickElementByXPath(locators.Add_New_FilterBy)
        cy.wait(1000)
        methods.clickElement0(locators.All_Account, 0)
        cy.wait(1000)
        methods.clickElement(locators.In_Hubspot)
        cy.wait(1000)
        methods.clickElement(locators.true)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElementByXPath(locators.Add_New_Breakdown)
        methods.clickElement0(locators.All_Account, 0)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.clickElementByXPath(locators.calender_MenuList)
        methods.clickElementByXPath(locators.Select_Month)
        methods.clickElement(locators.date_choosen)
        methods.clickElementByXPath(locators.Run_Anal)
        cy.wait(2000)
        methods.VisibilityofElement(locators.Attri_pageloaded)

        methods.clickElementByXPath(locators.Save_1)
        methods.typeElement(locators.Report_Name, testName)
        methods.typeElement(locators.Description_OP, 'Testing Purpose')
        methods.clickElementByXPath(locators.save1)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(5000)

        methods.clickElementByXPath1(locators.Closed)
        cy.wait(1000)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.View_Report)
        cy.wait(2000)
        methods.clickElementByXPath(locators.Expand_1)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Remove_FilterBy)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Remove_Breakdown)
        methods.clickElementByXPath(locators.Run_Analysis1)
        cy.wait(2000)
        methods.VisibilityofElement(locators.Profile_report_gen)

        methods.clickElementByXPath(locators.Save_1)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(5000)

        methods.clickElementByXPath1(locators.close_2)
        cy.wait(1000)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.Delete_Report_1)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(2000)

    })
})