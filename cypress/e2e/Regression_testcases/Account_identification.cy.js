import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut } from '../Utils';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Account Identification Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login1();

    })

    it('TC_RE_01, TC_RE_02 - Account Identification ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.Account_identification)
        cy.wait(8000)
        methods.Titletextcontains(locators.Account_Pagetitle, 'Top accounts that visited your website')

        // Verify table

        methods.AssertNotEmpty(locators.identi_table)
        methods.AssertNotEmpty(locators.table_row1)
        methods.AssertNotEmpty(locators.table_row2)

    })

    it('TC_RE_03 - Account Identification - Add filters ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.Account_identification)
        cy.wait(8000)
        methods.Titletextcontains(locators.Account_Pagetitle, 'Top accounts that visited your website')
        methods.AssertNotEmpty(locators.table_row1)
        methods.AssertNotEmpty(locators.table_row2)
        cy.wait(2000)

        // add direct filter 

        methods.clickElement(locators.channel)
        methods.VisibilityofElement(locators.channel_dropdown)
        methods.clickElement(locators.direct)
        cy.wait(1000)
        methods.assertElementContainsText(locators.organic_table1, 'Direct')
        methods.assertElementContainsText(locators.organic_table2, 'Direct')
        methods.assertElementContainsText(locators.organic_table3, 'Direct')

        // add Paid search filter 

        methods.clickElement(locators.channel)
        methods.VisibilityofElement(locators.channel_dropdown)
        methods.clickElement(locators.paid_search)
        cy.wait(1000)
        methods.assertElementContainsText(locators.organic_table1, 'Paid Search')
        methods.assertElementContainsText(locators.organic_table2, 'Paid Search')
        methods.assertElementContainsText(locators.organic_table3, 'Paid Search')
    })

    it('TC_RE_04 - Account Identification - Add campaign', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.Account_identification)
        cy.wait(8000)
        methods.Titletextcontains(locators.Account_Pagetitle, 'Top accounts that visited your website')
        methods.AssertNotEmpty(locators.identi_table)
        methods.AssertNotEmpty(locators.table_row1)
        cy.wait(2000)

        // add campaign

        methods.clickElement(locators.campaign)
        methods.VisibilityofElement(locators.campaign_dropdown)
        methods.clickElement(locators.TD_Search_Remarketing_Competitors)
        methods.clickElement(locators.Apply)
        methods.AssertNotEmpty(locators.identi_table)
        methods.clickElement(locators.campaign)
        methods.VisibilityofElement(locators.campaign_dropdown)
        methods.clickElement(locators.TD_Search_US_Deanon_Competition)
        methods.clickElement(locators.Apply)
    })

    it('TC_RE_05 - Account Identification - Page viewed', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.Account_identification)
        cy.wait(8000)
        methods.Titletextcontains(locators.Account_Pagetitle, 'Top accounts that visited your website')
        methods.AssertNotEmpty(locators.identi_table)
        methods.AssertNotEmpty(locators.table_row1)
        cy.wait(2000)

        // add Page viewed

        methods.clickElement(locators.page_view)
        methods.VisibilityofElement(locators.pageview_dropdown)
        cy.wait(3000)
        methods.clickElementByXPath(locators.pageview_option1)
        methods.clickElementByXPath(locators.pageview_option2)
        methods.clickElementByXPath(locators.pageview_option3)
        methods.clickElementByXPath(locators.pageview_option4)
        cy.wait(1000)
        methods.clickElement(locators.Apply)
        methods.VisibilityofElement(locators.identi_table1)
        cy.wait(1000)

    })

    it('TC_RE_06 - Account Identification - Search field', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.Account_identification)
        cy.wait(8000)
        methods.Titletextcontains(locators.Account_Pagetitle, 'Top accounts that visited your website')
        methods.AssertNotEmpty(locators.identi_table)
        methods.AssertNotEmpty(locators.table_row1)
        cy.wait(2000)

        methods.clickElement(locators.search)
        cy.get('.DataTable_searchBar__1fGz4').type('klenty');
        methods.Enter(locators.search_field)
        // cy.get('.DataTable_searchBar__1fGz4').type('{enter}');
        methods.assertElementContainsText(locators.Klenty_details, 'Klenty')
        methods.clickElement(locators.X_button)
        cy.wait(1000)
    })

    it('TC_RE_07 - Account Identification - Download CSV', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.Account_identification)
        cy.wait(8000)
        methods.Titletextcontains(locators.Account_Pagetitle, 'Top accounts that visited your website')
        methods.AssertNotEmpty(locators.identi_table)
        methods.AssertNotEmpty(locators.table_row1)
        cy.wait(2000)

        methods.clickElement(locators.download)

    })

    it('TC_RE_08 - Account Identification - Date range', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.Account_identification)
        cy.wait(8000)
        methods.Titletextcontains(locators.Account_Pagetitle, 'Top accounts that visited your website')
        methods.AssertNotEmpty(locators.identi_table)
        methods.AssertNotEmpty(locators.table_row1)
        cy.wait(2000)

        methods.clickElementByXPath(locators.calender)
        methods.clickElementByXPath(locators.select_date)
        methods.VisibilityofElement(locators.identi_table1)
    })

    it('TC_RE_09 - Account Identification - Share_Send Once', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.Account_identification)
        cy.wait(8000)
        methods.Titletextcontains(locators.Account_Pagetitle, 'Top accounts that visited your website')
        methods.AssertNotEmpty(locators.identi_table)
        methods.AssertNotEmpty(locators.table_row1);
        cy.wait(3000)

        methods.clickElementByXPath(locators.share1)
        methods.clickElement(locators.Send_Once)
        methods.typeElement(locators.email_field, 'sarath_tdfect@factors.ai')
        methods.clickElement(locators.done)
        methods.VisibilityofElement(locators.notification_popup)

    })

    it('TC_RE_10 - Account Identification - Share_Subscribe copy link', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.Account_identification)
        cy.wait(8000)
        methods.Titletextcontains(locators.Account_Pagetitle, 'Top accounts that visited your website')
        methods.AssertNotEmpty(locators.identi_table)
        methods.AssertNotEmpty(locators.table_row1);
        cy.wait(3000)

        methods.clickElementByXPath(locators.share1)
        cy.wait(1000)
        methods.typeElement(locators.email_field, 'sarath_tdfect@factors.ai')
        methods.clickElementByXPath(locators.copy_Link)
        methods.clickElement(locators.done)
        methods.VisibilityofElement(locators.notification_popup)

    })
})