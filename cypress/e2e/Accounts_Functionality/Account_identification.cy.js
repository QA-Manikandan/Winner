import Login1 from '../PageObjects/Login1';
import { deviceViewport, extraTimeOut } from '../Utils';
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


    it('Account Identification', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.account_dropdown)
        methods.clickElementByXPath(locators.Account_identification)
        cy.wait(1000)
        methods.UrlValidationAccide()
        methods.Titletextcontains(locators.Account_Pagetitle, 'Top accounts that visited your website')
        cy.wait(2000)

        // Verify table

        methods.AssertNotEmpty(locators.identi_table)
        methods.AssertNotEmpty(locators.table_row1)
        methods.AssertNotEmpty(locators.table_row2)

        // Apply filter for orgnaic search

        methods.clickElement(locators.channel)
        methods.VisibilityofElement(locators.channel_dropdown)
        methods.clickElement(locators.Organic_Search)
        cy.wait(1000)
        methods.assertElementContainsText(locators.organic_table1, 'Organic Search')
        methods.assertElementContainsText(locators.organic_table2, 'Organic Search')
        methods.assertElementContainsText(locators.organic_table3, 'Organic Search')

        // Apply filter for Direct

        methods.clickElement(locators.channel)
        methods.VisibilityofElement(locators.channel_dropdown)
        methods.clickElement(locators.direct)
        cy.wait(1000)
        methods.assertElementContainsText(locators.organic_table1, 'Direct')
        methods.assertElementContainsText(locators.organic_table2, 'Direct')
        methods.assertElementContainsText(locators.organic_table3, 'Direct')

        // Apply filter for Paid Social


        methods.clickElement(locators.channel)
        methods.VisibilityofElement(locators.channel_dropdown)
        methods.clickElement(locators.paid_search)
        cy.wait(1000)
        methods.assertElementContainsText(locators.organic_table1, 'Paid Search')
        methods.assertElementContainsText(locators.organic_table2, 'Paid Search')
        methods.assertElementContainsText(locators.organic_table3, 'Paid Search')

        // Apply campaign filter

        methods.clickElement(locators.campaign)
        methods.VisibilityofElement(locators.campaign_dropdown)
        methods.clickElement(locators.TD_Search_Remarketing_Competitors)
        methods.clickElement(locators.Apply)
        methods.AssertNotEmpty(locators.identi_table)
        methods.clickElement(locators.campaign)
        methods.VisibilityofElement(locators.campaign_dropdown)
        methods.clickElement(locators.TD_Search_US_Deanon_Competition)
        methods.clickElement(locators.Apply)

        // Apply page view 

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

        // Selete date

        methods.clickElementByXPath(locators.calender)
        methods.clickElementByXPath(locators.select_date)
        methods.VisibilityofElement(locators.identi_table1)
        cy.wait(1000)

        // Share

        methods.ElementVisibleandClick(locators.share)
        cy.wait(1000)
        methods.clickElementByXPath(locators.share1)
        methods.typeElement(locators.email_field, 'sarath_tdfect@factors.ai')
        methods.clickElement(locators.done)
        methods.VisibilityofElement(locators.notification_popup)

        // clear the filter

        methods.clickElement(locators.campaign)
        methods.clickElement(locators.clear)
        methods.clickElement(locators.Apply)
        cy.wait(1000)
        methods.clickElement(locators.page_view)
        methods.clickElement(locators.clear)
        methods.clickElement(locators.Apply)
        cy.wait(1000)

        // Search

        methods.clickElement(locators.search)
        cy.get('.DataTable_searchBar__1fGz4').type('klenty');
        // methods.typeElement(locators.search_field,'klenty')
        methods.assertElementContainsText(locators.Klenty_details, 'Klenty')
        methods.clickElement(locators.X_button)
        cy.wait(1000)

        // download

        methods.clickElement(locators.download)

    })
})