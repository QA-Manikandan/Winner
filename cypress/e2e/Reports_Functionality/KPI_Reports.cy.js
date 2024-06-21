import Login3 from '../PageObjects/Login3';
import { deviceViewport, extraTimeOut } from '../Utils';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'
import dayjs from 'dayjs';

describe('Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('KPI Report', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const testName1 = `Demo_${nowTime}_1`;

        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(60000)
        methods.VisibilityofElement(locators.Dashboards_Title)
        methods.clickElementByXPath(locators.Drafts)
        cy.wait(10000)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.KPI_Report)

        // Select KPI report & add event
        cy.wait(3000)
        methods.clickElementByXPath(locators.Add_KPI)
        methods.Clickwithindexandvalidation(locators.Website_Session, 0)
        methods.typeElement(locators.search_1, 'tot')
        cy.wait(1000)
        methods.clickElement(locators.Total_Session)
        cy.wait(1000)

        // add filter

        methods.clickElementByXPath(locators.add_new_3)
        cy.wait(1000)
        methods.typeElement(locators.search_1, 'cha')
        cy.wait(2000);
        methods.Clickwithindexandvalidation(locators.Channel_option, 0)
        cy.wait(4000)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Apply1)

        // select date

        methods.clickElement(locators.cal_1)
        cy.wait(1000)
        methods.clickElement0(locators.choose_date, 7)
        cy.wait(1000)
        methods.clickElement(locators.run_analysis_KPI)
        methods.VisibilityofElement(locators.table_validation1)
        methods.VisibilityofElement(locators.table_validation2)

        // save

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
        cy.wait(2000)
        methods.clickElementByXPath(locators.Expand_1)

        methods.clickElementByXPath(locators.Add_another_KPI_1)
        methods.clickElement0(locators.Website_Session, 0)
        cy.wait(1000)
        methods.clickElementByXPath(locators.pageview_option2)

        methods.clickElementByXPath(locators.Run_Anal)
        cy.wait(5000)
        methods.VisibilityofElement(locators.Profile_report_gen)

        methods.MouseoverWithXpath(locators.Save_dropdown)
        methods.clickElementByXPath(locators.Save_as_New)

        methods.typeElement(locators.Report_Name, testName1)
        methods.typeElement(locators.Description_OP, 'Testing Purpose1')
        methods.clickElementByXPath(locators.Save_2)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(2000)
        methods.clickElementByXPath(locators.Closed)
        cy.wait(1000)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.Delete_Report_1)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(2000)
        cy.xpath(`//h4[text()='${testName1}']//following::button[1]`).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.View_Report)
        cy.wait(2000)
        methods.clickElementByXPath(locators.Expand_1)

        methods.clickElementByXPath(locators.Add_New_Breakdown)
        methods.clickElement0(locators.Company_Identification, 0)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Filter_option1)
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

    it('KPI Report New Flow', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(60000)
        methods.VisibilityofElement(locators.Dashboards_Title)
        methods.clickElementByXPath(locators.Drafts)
        cy.wait(10000)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.KPI_Report)

        // Select KPI report & add event
        cy.wait(3000)
        methods.clickElementByXPath(locators.Add_KPI)
        methods.Clickwithindexandvalidation(locators.Website_Session, 0)
        methods.typeElement(locators.search_1, 'tot')
        cy.wait(1000)
        methods.clickElement(locators.Total_Session)
        cy.wait(1000)

        // add filter

        methods.clickElementByXPath(locators.add_new_3)
        cy.wait(1000)
        methods.typeElement(locators.search_1, 'cha')
        cy.wait(2000);
        methods.Clickwithindexandvalidation(locators.Channel_option, 0)
        cy.wait(4000)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Apply1)

        // select date

        methods.clickElement(locators.cal_1)
        cy.wait(1000)
        methods.clickElement0(locators.choose_date, 7)
        cy.wait(1000)
        methods.clickElement(locators.run_analysis_KPI)
        methods.VisibilityofElement(locators.table_validation1)
        methods.VisibilityofElement(locators.table_validation2)

        // save

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
        cy.wait(2000)
        methods.clickElementByXPath(locators.Expand_1)

        methods.clickElementByXPath(locators.Remove_FilterBy1)
        methods.clickElementByXPath(locators.Run_Anal)
        cy.wait(5000)
        methods.VisibilityofElement(locators.Profile_report_gen)
        methods.clickElementByXPath(locators.Save_1)
        methods.clickElementByXPath(locators.Overwrite)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(2000)
        methods.clickElementByXPath(locators.Closed)
        cy.wait(1000)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`).trigger('mouseover', { force: true });
        methods.clickElementByXPath(locators.Delete_Report_1)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(2000)

    })

})