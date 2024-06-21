import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut } from '../Utils';
import dayjs from 'dayjs';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Accounts Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('TC_RE_01 - Accounts_Page Load', () => {

        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(1000)
        methods.VisibilityofElement(locators.account_pageloaded)
        cy.wait(2000)
    })

    it.only('TC_RE_02, TC_RE_03 - Accounts_properties filter, Accounts_Event', () => {

        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(2000)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElement(locators.filter)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Add_filter)
        methods.clickElement(locators.select_Accountprop)
        methods.clickElement(locators.Visited_Website)
        cy.wait(1000)
        methods.clickElement(locators.true)
        methods.clickElement(locators.Apply)

        methods.clickElementByXPath(locators.Add_event)
        methods.clickElement(locators.Event_performed)
        methods.clickElementByXPath(locators.select_option)
        cy.wait(1000)
        methods.clickElement(locators.Apply_Changes)
        cy.wait(60000)
        methods.VisibilityofElement(locators.account_pageloaded)
    })

    it('TC_RE_04 - Accounts_Clear filter', () => {

        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(5000)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElement(locators.filter)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Add_filter)
        methods.clickElement(locators.select_Accountprop)
        methods.clickElement(locators.Visited_Website)
        cy.wait(1000)
        methods.clickElement(locators.true)
        methods.clickElement(locators.Apply)

        methods.clickElementByXPath(locators.Add_event)
        methods.clickElement(locators.Event_performed)
        methods.clickElementByXPath(locators.select_option)
        cy.wait(1000)
        methods.clickElement(locators.Apply_Changes)
        cy.wait(60000)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElement(locators.filter_css)
        methods.clickElementByXPath(locators.Clear_All_Filter)
    })

    it('TC_RE_05 - Accounts_discard changes', () => {

        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(1000)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElement(locators.filter)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Add_filter)
        methods.clickElement(locators.select_Accountprop)
        methods.clickElement(locators.Visited_Website)
        cy.wait(1000)
        methods.clickElement(locators.true)
        methods.clickElement(locators.Apply)

        methods.clickElementByXPath(locators.Add_event)
        methods.clickElement(locators.Event_performed)
        methods.clickElementByXPath(locators.select_option)
        methods.clickElementByXPath(locators.Discard_Filter)
    })

    it('TC_RE_06, TC_RE_07 - Accounts_Search field ', () => {

        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(1000)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.search_area, 'factors')
        cy.wait(1000)
        methods.EnterXpath(locators.search_area)
        cy.wait(1000)
        methods.assertElementContainsText(locators.account_pageloaded, 'factors.ai')
        methods.clickElementByXPath(locators.clear_search)

    })

    it('TC_RE_08 - Accounts_Exporting CSV ', () => {

        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(1000)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElementByXPath(locators.download_button)
        methods.assertElementContainsText(locators.download_header, 'Selects which columns to include')
        methods.ElementVisibleandClick(locators.exportCSV)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
    })

    it('TC_RE_09 - Accounts_Table Properties ', () => {

        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(1000)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElement1(locators.Add_column_1)
        cy.wait(1000)
        methods.VisibilityofElement(locators.Table_properties)
        cy.wait(1000)
        methods.clickElement(locators.company_name)
        cy.wait(1000)
        methods.clickElement(locators.company_name)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Apply1)
    })

    it('TC_RE_10, TC_RE_11, TC_RE_12, TC_RE_13 - Accounts_New Segment, search, rename and delete ', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const combination = testName + randomNumber;

        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(10000)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElementByXPath(locators.New_Segment)
        methods.clickElementByXPath(locators.Add_filter)
        methods.clickElement(locators.select_Accountprop)
        methods.clickElement(locators.Visited_Website)
        cy.wait(1000)
        methods.clickElement(locators.true)
        methods.clickElement(locators.Apply)

        methods.clickElementByXPath(locators.Add_event)
        methods.clickElement(locators.Event_performed)
        methods.clickElementByXPath(locators.select_option)
        cy.wait(1000)
        methods.clickElement(locators.Apply_Changes)
        cy.wait(60000)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElement(locators.save_segment_css)
        methods.ClickandType(locators.save_field, testName)
        methods.clickElementByXPath(locators.Save)
        methods.VisibilityofElement(locators.notification_popup)

        // search saved segment

        methods.VisibilityofElement(locators.account_pageloaded)
        methods.typeElement(locators.Search_segment, testName)
        methods.clickElementByXPath(locators.Select_segment)

        // rename

        methods.clickElementByXPath(locators.Threedots)
        methods.clickElement(locators.rename_segment)
        methods.typeElement(locators.segment_name, randomNumber)
        methods.clickElementByXPath(locators.Save)
        cy.wait(2000)
        methods.VisibilityofElement(locators.notification_popup)
        methods.Titletextcontains(locators.Account_Pagetitle, combination)

        //delete

        methods.clickElementByXPath(locators.Threedots)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Delect_segment)
        cy.wait(1000)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(3000)
        methods.VisibilityofElement(locators.notification_popup)

    })

    it('TC_RE_14, TC_RE_15 - Accounts_Brid views ', () => {

        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(1000)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElement(locators.search_button)
        cy.wait(1000)
        methods.typeElementByXPath(locators.search_area, 'infosys.com')
        cy.wait(1000)
        methods.EnterXpath(locators.search_area)
        methods.clickElementByXPath(locators.open_account)
        cy.wait(1000)
        methods.clickElementByXPath(locators.BirdView)
        methods.VisibilityofElement(locators.View_visible)
    })

    it('TC_RE_16 - Accounts_Timeline Views ', () => {

        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(1000)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElement(locators.search_button)
        cy.wait(1000)
        methods.typeElementByXPath(locators.search_area, 'infosys.com')
        cy.wait(1000)
        methods.EnterXpath(locators.search_area)
        methods.clickElementByXPath(locators.open_account)
        cy.wait(1000)
        methods.clickElementByXPath(locators.BirdView)
        methods.VisibilityofElement(locators.View_visible)
        methods.clickElementByXPath(locators.Time_line)
        cy.wait(1000)
        methods.VisibleofElement(locators.Time_line_Validation)
    })

    it('TC_RE_17 - Accounts_Birdviews expand ', () => {

        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(1000)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElement(locators.search_button)
        cy.wait(1000)
        methods.typeElementByXPath(locators.search_area, 'infosys.com')
        cy.wait(1000)
        methods.EnterXpath(locators.search_area)
        methods.clickElementByXPath(locators.open_account)
        cy.wait(1000)
        methods.clickElementByXPath(locators.BirdView)
        methods.VisibilityofElement(locators.View_visible)
        methods.clickElementByXPath(locators.Expand)
    })

    it('TC_RE_18 - Accounts_Birdviews account activity ', () => {

        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(1000)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElement(locators.search_button)
        cy.wait(1000)
        methods.typeElementByXPath(locators.search_area, 'infosys.com')
        cy.wait(1000)
        methods.EnterXpath(locators.search_area)
        methods.clickElementByXPath(locators.open_account)
        cy.wait(1000)
        methods.clickElementByXPath(locators.BirdView)
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

    it('TC_RE_19 - Accounts_Birdviews Properties ', () => {

        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(1000)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElement(locators.search_button)
        cy.wait(1000)
        methods.typeElementByXPath(locators.search_area, 'infosys.com')
        cy.wait(1000)
        methods.EnterXpath(locators.search_area)
        methods.clickElementByXPath(locators.open_account)
        cy.wait(1000)
        methods.clickElementByXPath(locators.BirdView)
        methods.VisibilityofElement(locators.View_visible)
        methods.clickElementByXPath(locators.Birdview_option)
        methods.clickElement(locators.Birdview_properties)
        methods.clickElementByXPath(locators.Company_Country)
        cy.wait(1000)
        methods.AssertNotEmptyWithXpath(locators.property_validation)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Company_Country)
        methods.AssertNotEmptyWithXpath(locators.property_validation)
    })

    it('TC_RE_20 - Accounts Properties - filter Equals - true', () => {

        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(1000)
        methods.VisibilityofElement(locators.account_pageloaded)
        methods.clickElement(locators.filter)
        methods.clickElementByXPath(locators.Add_filter)
        methods.clickElement0(locators.All_Account, 0)
        methods.clickElement(locators.In_Hubspot)
        methods.clickElement(locators.true)
        methods.clickElement(locators.Apply)

    })
})