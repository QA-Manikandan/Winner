import Login3 from '../PageObjects/Login3';
import { deviceViewport, extraTimeOut } from '../Utils';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Profile Report Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('Profile Report', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const testName1 = `Demo_${nowTime}_1`;

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(60000)
        methods.VisibilityofElement(locators.Dashboards_Title)
        methods.clickElementByXPath(locators.Drafts)
        cy.wait(10000)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.Profile_Report)
        cy.wait(2000)
        methods.clickElementByXPath(locators.Add_New_1)
        methods.clickElement(locators.Website_Visitors)
        methods.clickElementByXPath(locators.BreakDown_AddNew)
        methods.clickElement0(locators.others, 0)
        methods.typeElement(locators.select_property, 'cou')
        cy.wait(1000)
        methods.clickElement(locators.Country)
        methods.clickElementByXPath(locators.Run_Anal)
        cy.wait(5000)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        methods.clickElementByXPath(locators.Save_1)
        methods.typeElement(locators.Report_Name, testName)
        methods.typeElement(locators.Description_OP, 'Testing Report')
        methods.clickElementByXPath(locators.save1)
        cy.wait(3000)
        methods.clickElementByXPath1(locators.Closed)
        cy.wait(2000)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.View_Report)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElementByXPath(locators.Add_New_Breakdown)
        methods.clickElement0(locators.User_identification, 0)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Filter_option1)
        methods.clickElementByXPath(locators.Run_Anal)
        cy.wait(5000)
        methods.VisibilityofElement(locators.Attri_pageloaded)

        methods.MouseoverWithXpath(locators.Save_dropdown)
        methods.clickElementByXPath(locators.Save_as_New)
        methods.typeElement(locators.Report_Name, testName1)
        methods.typeElement(locators.Description_OP, 'Testing Purpose')
        methods.clickElementByXPath(locators.Save_2)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(3000)

        methods.clickElementByXPath1(locators.Closed)
        cy.wait(2000)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.Delete_Report_1)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(2000)

        cy.xpath(`//h4[text()='${testName1}']//following::button[1]`).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.View_Report)
        methods.clickElementByXPath(locators.Expand_1)

        methods.clickElementByXPath(locators.Add_New_FilterBy)
        cy.wait(1000)
        methods.clickElement0(locators.others, 0)
        cy.wait(1000)
        methods.clickElementByXPath(locators.pageview_option1)
        cy.wait(1000)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)

        methods.clickElementByXPath(locators.Run_Anal)
        cy.wait(5000)
        methods.VisibilityofElement(locators.Profile_report_gen)

        methods.MouseoverWithXpath(locators.Save_dropdown)
        methods.clickElementByXPath(locators.save1)
        cy.wait(2000)
        methods.clickElementByXPath(locators.Closed)
        cy.wait(1000)
        cy.xpath(`//h4[text()='${testName1}']//following::button[1]`).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.Delete_Report_1)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(2000)
    })

    it('Profile Report New Flow', () => {

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
        methods.clickElementByXPath(locators.Profile_Report)
        cy.wait(2000)
        methods.clickElementByXPath(locators.Add_New_1)
        methods.clickElement(locators.Website_Visitors)
        methods.clickElementByXPath(locators.BreakDown_AddNew)
        methods.clickElement0(locators.others, 0)
        methods.typeElement(locators.select_property, 'cou')
        cy.wait(1000)
        methods.clickElement(locators.Country)
        methods.clickElementByXPath(locators.Run_Anal)
        cy.wait(5000)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        methods.clickElementByXPath(locators.Save_1)
        methods.typeElement(locators.Report_Name, testName)
        methods.typeElement(locators.Description_OP, 'Testing Report')
        methods.clickElementByXPath(locators.save1)
        cy.wait(3000)
        methods.clickElementByXPath1(locators.Closed)
        cy.wait(2000)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.View_Report)
        cy.wait(2000)
        methods.clickElementByXPath(locators.Expand_1)
        methods.clickElementByXPath(locators.Remove_Breakdown1)
        methods.clickElementByXPath(locators.Run_Anal)
        cy.wait(5000)
        methods.VisibilityofElement(locators.Attri_pageloaded)
        methods.clickElementByXPath(locators.Save_1)
        methods.clickElementByXPath(locators.Overwrite)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(2000)

        methods.clickElementByXPath1(locators.close_2)
        cy.wait(1000)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.Delete_Report_1)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(2000)

    })

})