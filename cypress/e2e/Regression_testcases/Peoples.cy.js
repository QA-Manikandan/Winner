import envDetails from '../../fixtures/envDetails.json';
import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut } from '../Utils';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Peoples Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('TC_RE_01 - Peoples_Page Load', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(8000)
        methods.UrlvalidationPeople()
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All People')

    })

    it('TC_RE_02, TC_RE_03 - Peoples_Page filter', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(60000)
        methods.UrlvalidationPeople()
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All People')
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
        cy.wait(10000)
        methods.VisibilityofElement(locators.account_pageloaded)

    })

    it('TC_RE_04 - Peoples_Filter clear', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(8000)
        methods.UrlvalidationPeople()
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All People')
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
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElement(locators.Hide_Filter)
        methods.clickElementByXPath(locators.Clear_All_Filter)
    })

    it('TC_RE_05 - Peoples_discard changes', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(8000)
        methods.UrlvalidationPeople()
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All People')
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
        methods.clickElementByXPath(locators.Discard_Filter)

    })

    it('TC_RE_06, TC_RE_07 - People_Search field ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(8000)
        methods.UrlvalidationPeople()
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All People')

        // Search username
        cy.wait(8000)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElement(locators.search_button)
        cy.wait(1000)
        methods.typeElementByXPath(locators.Search1, 'baliga')
        cy.wait(1000)
        methods.EnterXpath(locators.Search1)
        cy.wait(6000)
        methods.assertElementContainsText(locators.rowname, 'baliga@factors.ai')
        methods.clickElementByXPath(locators.clear_search)
    })

    it('TC_RE_08, TC_RE_09, TC_RE_10, TC_RE_11 - People_New Segment, search, rename and delete ', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const combination = testName + randomNumber;

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(8000)
        methods.UrlvalidationPeople()
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All People')
        methods.clickElementByXPath(locators.New_Segment)
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
        cy.wait(5000)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElementByXPath(locators.Save_Segment_1)
        methods.ClickandType(locators.segment_name, testName)
        methods.clickElementByXPath(locators.Save)
        cy.wait(1000)
        methods.VisibilityofElement(locators.notification_popup)

        // open the saved segment

        methods.typeElement(locators.Search_segment, testName)
        methods.clickElementByXPath(locators.Saved_segment)
        methods.Titletextcontains(locators.Account_Pagetitle, testName)

        // renaming segment

        // methods.clickElementByXPath(locators.Threedots1)
        cy.xpath(`//span[text()='${testName}']//following::span[1]`).trigger('mouseover', { force: true })
        cy.wait(3000)
        methods.clickElementByXPath(locators.rename_segment)
        methods.typeElementByXPath(locators.seg_rename, randomNumber)
        methods.clickElementByXPath(locators.save1)
        methods.Titletextcontains(locators.Account_Pagetitle, combination)
        methods.VisibilityofElement(locators.notification_popup)

        //deleting the segment

        // methods.clickElementByXPath(locators.Threedots1)
        cy.xpath(`//span[text()='${combination}']//following::span[1]`).trigger('mouseover', { force: true })
        cy.wait(3000)
        methods.clickElementByXPath(locators.Delete_segment)
        methods.clickElementByXPath(locators.confirm)
        methods.VisibilityofElement(locators.notification_popup1)

    })

    it('TC_RE_12, TC_RE_13 - People_Brid views ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(8000)
        methods.UrlvalidationPeople()
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All People')
        methods.VisibilityofElement(locators.account_pageloaded)

        // select account & birdview

        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.Search1, 'saurabh.singh@webengage.com')
        methods.EnterXpath(locators.Search1)
        cy.wait(5000)
        methods.clickElement(locators.account_pageloaded)
        methods.VisibilityofElement(locators.View_visible)

    })

    it('TC_RE_14 - People_Birdviews expand ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(8000)
        methods.UrlvalidationPeople()
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All People')
        methods.VisibilityofElement(locators.account_pageloaded)

        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.Search1, 'saurabh.singh@webengage.com')
        methods.EnterXpath(locators.Search1)
        methods.clickElement(locators.account_pageloaded)
        methods.VisibilityofElement(locators.View_visible)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Expand)
    })

    it('TC_RE_15 - People_Birdviews account activity ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.People)
        cy.wait(8000)
        methods.UrlvalidationPeople()
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All People')
        methods.VisibilityofElement(locators.account_pageloaded)

        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.Search1, 'saurabh.singh@webengage.com')
        methods.EnterXpath(locators.Search1)
        methods.clickElement(locators.account_pageloaded)
        methods.VisibilityofElement(locators.View_visible)
        cy.wait(1000)
        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Time_stamp)
        methods.AssertNotEmpty(locators.timestamp_validation)
        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Hourly)
        methods.AssertNotEmpty(locators.timestamp_validation)
        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Weekly)
        methods.AssertNotEmpty(locators.timestamp_validation)
        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Monthly)
        methods.AssertNotEmpty(locators.timestamp_validation)
        methods.clickElementByXPath(locators.time_dropdown)
        methods.clickElementByXPath(locators.Daily)
        methods.AssertNotEmpty(locators.timestamp_validation)
    })
})