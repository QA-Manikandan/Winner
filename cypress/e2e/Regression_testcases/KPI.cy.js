import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut } from '../Utils';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('KPI Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('Kpi - Share to slack', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Demo_${randomNumber}`;

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(8000)
        methods.VisibilityofElement(locators.Dashboards_Title)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.KPI_Report)
        methods.clickElementByXPath(locators.Add_KPI)
        methods.Clickwithindexandvalidation(locators.Website_Session, 0)
        methods.typeElement(locators.search_1, 'tot')
        cy.wait(1000)
        methods.clickElement(locators.Total_Session)
        cy.wait(1000)

        // add filter

        methods.clickElementByXPath(locators.add_new_3)
        methods.typeElement(locators.search_1, 'cha')
        methods.Clickwithindexandvalidation(locators.Channel_option, 0)
        cy.wait(1000)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)

        // select date

        methods.clickElementByXPath(locators.KPI_Cal)
        methods.clickElement0(locators.choose_date, 9)
        methods.clickElementByXPath(locators.Run_Anal)
        methods.VisibilityofElement(locators.table_validation1)
        methods.VisibilityofElement(locators.table_validation2)

        methods.clickElementByXPath(locators.Save_1)
        methods.typeElement(locators.Report_Name, testName)
        methods.clickElementByXPath(locators.save1)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(2000)

        methods.MouseoverWithXpath(locators.KPI_Selection_option)
        methods.clickElementByXPath(locators.Share_to_slack)
        methods.typeElement(locators.slackShare_channel, 'staging')
        methods.clickElement(locators.alert_test_staging)
        methods.typeElement(locators.slackShare_message, 'Testing Report')
        methods.clickElement(locators.done)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(2000)

        methods.MouseoverWithXpath(locators.KPI_Selection_option)
        methods.clickElementByXPath(locators.Delete)
        methods.clickElementByXPath(locators.Delete_1)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(2000)

    })

    it('Kpi - Share to email', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Demo_${randomNumber}`;

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.Dashboards)
        cy.wait(8000)
        methods.VisibilityofElement(locators.Dashboards_Title)
        methods.clickElement(locators.New_Report_CSS)
        methods.clickElementByXPath(locators.KPI_Report)
        methods.clickElementByXPath(locators.Add_KPI)
        methods.Clickwithindexandvalidation(locators.Website_Session, 0)
        methods.typeElement(locators.search_1, 'tot')
        cy.wait(1000)
        methods.clickElement(locators.Total_Session)
        cy.wait(1000)

        // add filter

        methods.clickElementByXPath(locators.add_new_3)
        methods.typeElement(locators.search_1, 'cha')
        methods.Clickwithindexandvalidation(locators.Channel_option, 0)
        cy.wait(1000)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.Apply1)

        // select date

        methods.clickElementByXPath(locators.KPI_Cal)
        methods.clickElement0(locators.choose_date, 9)
        methods.clickElementByXPath(locators.Run_Anal)
        methods.VisibilityofElement(locators.table_validation1)
        methods.VisibilityofElement(locators.table_validation2)

        methods.clickElementByXPath(locators.Save_1)
        methods.typeElement(locators.Report_Name, testName)
        methods.clickElementByXPath(locators.save1)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(2000)

        methods.MouseoverWithXpath(locators.KPI_Selection_option)
        methods.clickElementByXPath(locators.Email_this_report)
        methods.typeElement(locators.emailShare_email, 'sarath_tdfect@factors.ai')
        methods.typeElement(locators.emailShare_message, 'Testing Report')
        methods.clickElement(locators.done)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(2000)

        methods.MouseoverWithXpath(locators.KPI_Selection_option)
        methods.clickElementByXPath(locators.Delete)
        methods.clickElementByXPath(locators.Delete_1)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(2000)

    })

})