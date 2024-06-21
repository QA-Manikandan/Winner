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


    it('Accounts', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;
        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const combination = testName + randomNumber;

        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(30000)
        methods.VisibilityofElement(locators.account_pageloaded)

        // Search Account

        methods.clickElement(locators.search_button)
        methods.typeElementByXPath(locators.search_area, 'factors')
        cy.wait(1000)
        methods.EnterXpath(locators.search_area)
        cy.wait(10000)
        methods.assertElementContainsText(locators.account_pageloaded, 'factors.ai')
        cy.wait(1000)

        // Download columns

        // methods.clickElementByXPath(locators.download_button)
        // methods.assertElementContainsText(locators.download_header, 'Selects which columns to include')
        // methods.ElementVisibleandClick(locators.exportCSV)
        cy.wait(3000)

        // Add filter

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
        cy.wait(1000)

        // Save Segment

        methods.clickElement(locators.save_segment)
        cy.wait(1000)
        methods.ClickandType(locators.segment_name, testName)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Save)
        cy.wait(2000)

        // open the saved segment

        methods.typeElement(locators.Search_segment, testName)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Select_segment)
        cy.wait(10000)

        // renaming segment

        // methods.MouseoverWithXpath(locators.Threedots)
        cy.xpath(`//span[text()='${testName}']//following::span[1]`).trigger('mouseover', { force: true })
        cy.wait(3000)
        methods.clickElementByXPath(locators.rename_segment)
        methods.typeElement(locators.segment_name, randomNumber)
        methods.clickElementByXPath(locators.Save)
        cy.wait(2000)
        methods.Titletextcontains(locators.Account_Pagetitle, combination)
        cy.wait(3000)

        //deleting the segment

        // methods.clickElementByXPath(locators.Threedots)
        cy.xpath(`//span[text()='${combination}']//following::span[1]`).trigger('mouseover', { force: true })
        cy.wait(3000)
        methods.clickElementByXPath(locators.Delete_segment)
        cy.wait(1000)
        methods.clickElementByXPath(locators.confirm)
        cy.wait(10000)

        // add column

        methods.clickElement1(locators.Add_column_1)
        cy.wait(1000)
        methods.VisibilityofElement(locators.Table_properties)
        cy.wait(1000)
        methods.clickElement(locators.company_name)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Apply1)
    })
})