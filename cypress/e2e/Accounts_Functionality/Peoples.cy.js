import envDetails from '../../fixtures/envDetails.json';
import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut } from '../Utils';
import dayjs from 'dayjs';
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


    it('People', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const combination = testName + randomNumber;

        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(1000)
        methods.UrlvalidationPeople()
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All People')

        // Search username

        cy.wait(60000)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElement(locators.search_button)
        cy.wait(1000)
        methods.typeElementByXPath(locators.Search1, 'baliga')
        cy.wait(1000)
        methods.EnterXpath(locators.Search1)
        cy.wait(10000)
        methods.assertElementContainsText(locators.rowname, 'baliga@factors.ai')
        cy.wait(1000)
        methods.clickElementByXPath(locators.filter_closebtn)
        cy.wait(3000)

        // add column

        methods.clickElement(locators.Add_column)
        cy.wait(1000)
        methods.VisibilityofElement(locators.table_property)
        cy.wait(1000)
        methods.clickElement(locators.company_name1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(1000)
        methods.VisibilityofElement(locators.row_validation)
        cy.wait(1000)

        // Add filter

        methods.clickElement(locators.filter)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Add_filter1)
        methods.clickElement0(locators.others, 0)
        methods.clickElement(locators.email_option)
        methods.clickElement(locators.true1)
        methods.clickElementByXPath(locators.Apply1)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Add_event)
        methods.clickElement0(locators.others1, 0)
        methods.clickElement(locators.login_option)
        methods.clickElement(locators.Apply_Changes)
        cy.wait(2000)
        methods.VisibilityofElement(locators.account_pageloaded)

        // Save Segment

        methods.clickElement(locators.save_segment)
        cy.wait(1000)
        methods.ClickandTypeXpath(locators.segment_namefield, testName)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Save)
        cy.wait(1000)
        methods.VisibilityofElement(locators.notification_popup)

        // open the saved segment

        cy.wait(1000)
        methods.typeElement(locators.Search_segment, testName)
        cy.wait(1000)
        methods.clickwithcontaintext(locators.Account_Pagetitle, testName)
        cy.wait(3000)
        methods.VisibilityofElement(locators.account_pageloaded)

        // renaming segment

        // methods.MouseoverAndClick(locators.Threedots)
        cy.xpath(`//span[text()='${testName}']//following::span[1]`).trigger('mouseover', { force: true })
        cy.wait(3000)
        methods.clickElementByXPath(locators.rename_segment)
        cy.wait(1000)
        methods.typeElementByXPath(locators.seg_rename, randomNumber)
        cy.wait(1000)
        methods.clickElementByXPath(locators.save1)
        cy.wait(1000)
        methods.Titletextcontains(locators.Account_Pagetitle, combination)
        cy.wait(1000)

        //deleting the segment

        // methods.MouseoverAndClick(locators.Threedots1)
        cy.xpath(`//span[text()='${combination}']//following::span[1]`).trigger('mouseover', { force: true })
        cy.wait(3000)
        methods.clickElementByXPath(locators.Delete_segment)
        cy.wait(1000)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(1000)
        methods.VisibilityofElement(locators.notification_popup1)
    })
})