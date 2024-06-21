import Login3 from '../PageObjects/Login3';
import { deviceViewport, extraTimeOut } from '../Utils';
import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'

describe('Attribution Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('TC_RE_01 - Attribution - page load ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.attributes)
        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'Attribution Reports')
        methods.VisibilityofElement(locators.attributes_pageload1)
        methods.VisibilityofElement(locators.attributes_pageload2)

    })

    it('TC_RE_02 - Attribution - Add filter ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.attributes)
        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'Attribution Reports')
        methods.VisibilityofElement(locators.attributes_pageload1)
        methods.VisibilityofElement(locators.attributes_pageload2)

        methods.clickElementByXPath(locators.Add_Report)
        methods.clickElementByXPath(locators.Add_KPI1)
        cy.wait(1000)
        methods.clickElement0(locators.Users, 0)
        methods.clickElement(locators.Total_Session)
        cy.wait(1000)
        methods.MouseoverAndClick(locators.Filter_this_Attribute)
        methods.clickElementByXPath(locators.Filter_By)
        methods.clickElement0(locators.Company_Identification, 0)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(1000)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.Apply1)

    })

    it('TC_RE_03 - Attribution - attribution Type ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.attributes)
        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'Attribution Reports')
        methods.VisibilityofElement(locators.attributes_pageload1)
        methods.VisibilityofElement(locators.attributes_pageload2)

        methods.clickElementByXPath(locators.Add_Report)
        methods.clickElementByXPath(locators.Add_KPI1)
        cy.wait(1000)
        methods.clickElement0(locators.Users, 0)
        methods.clickElement(locators.Total_Session)
        cy.wait(1000)
        methods.MouseoverAndClick(locators.Filter_this_Attribute)
        methods.clickElementByXPath(locators.Filter_By)
        methods.clickElement0(locators.Company_Identification, 0)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(1000)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElement(locators.Tactic)
        methods.clickElement(locators.Offer)
        methods.clickElement(locators.Tactic_Offer)
    })

    it('TC_RE_04 - Attribution - property ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.attributes)
        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'Attribution Reports')
        methods.VisibilityofElement(locators.attributes_pageload1)
        methods.VisibilityofElement(locators.attributes_pageload2)

        methods.clickElementByXPath(locators.Add_Report)
        methods.clickElementByXPath(locators.Add_KPI1)
        cy.wait(1000)
        methods.clickElement0(locators.Users, 0)
        methods.clickElement(locators.Total_Session)
        cy.wait(1000)
        methods.MouseoverAndClick(locators.Filter_this_Attribute)
        methods.clickElementByXPath(locators.Filter_By)
        methods.clickElement0(locators.Company_Identification, 0)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(1000)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElement(locators.Tactic)
        methods.clickElementByXPath(locators.Add_a_Property)
        methods.clickElement(locators.Campaign1)

    })

    it('TC_RE_05 - Attribution - Attribution model ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.attributes)
        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'Attribution Reports')
        methods.VisibilityofElement(locators.attributes_pageload1)
        methods.VisibilityofElement(locators.attributes_pageload2)

        methods.clickElementByXPath(locators.Add_Report)
        methods.clickElementByXPath(locators.Add_KPI1)
        cy.wait(1000)
        methods.clickElement0(locators.Users, 0)
        methods.clickElement(locators.Total_Session)
        cy.wait(1000)
        methods.MouseoverAndClick(locators.Filter_this_Attribute)
        methods.clickElementByXPath(locators.Filter_By)
        methods.clickElement0(locators.Company_Identification, 0)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(1000)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElement(locators.Tactic)
        methods.clickElementByXPath(locators.Add_a_Property)
        methods.clickElement(locators.Campaign1)

        methods.clickElementByXPath(locators.Add_Model)
        methods.clickElement(locators.First_Touch)
        methods.MouseoverAndClick(locators.Add_Compare_Model)
        methods.clickElementByXPath(locators.Add_Model)
        methods.clickElement(locators.Last_Touch)
    })

    it('TC_RE_06 - Attribution - date range ', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.attributes)
        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'Attribution Reports')
        methods.VisibilityofElement(locators.attributes_pageload1)
        methods.VisibilityofElement(locators.attributes_pageload2)

        methods.clickElementByXPath(locators.Add_Report)
        methods.clickElementByXPath(locators.Add_KPI1)
        cy.wait(1000)
        methods.clickElement0(locators.Users, 0)
        methods.clickElement(locators.Total_Session)
        cy.wait(1000)
        methods.MouseoverAndClick(locators.Filter_this_Attribute)
        methods.clickElementByXPath(locators.Filter_By)
        methods.clickElement0(locators.Company_Identification, 0)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(1000)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElement(locators.Tactic)
        methods.clickElementByXPath(locators.Add_a_Property)
        methods.clickElement(locators.Campaign1)

        methods.clickElementByXPath(locators.Add_Model)
        methods.clickElement(locators.First_Touch)
        methods.MouseoverAndClick(locators.Add_Compare_Model)
        methods.clickElementByXPath(locators.Add_Model)
        methods.clickElement(locators.Last_Touch)

        methods.clickElement(locators.cal_attri)
        methods.clickElementByXPath(locators.Last_7_days)
    })

    it('TC_RE_07 - Attribution - New Attribution created', () => {

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.Mouseover(locators.report_dropdown)
        methods.clickElementByXPath(locators.attributes)
        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'Attribution Reports')
        methods.VisibilityofElement(locators.attributes_pageload1)
        methods.VisibilityofElement(locators.attributes_pageload2)

        methods.clickElementByXPath(locators.Add_Report)
        methods.clickElementByXPath(locators.Add_KPI1)
        cy.wait(1000)
        methods.clickElement0(locators.Users, 0)
        methods.clickElement(locators.Total_Session)
        cy.wait(1000)
        methods.MouseoverAndClick(locators.Filter_this_Attribute)
        methods.clickElementByXPath(locators.Filter_By)
        methods.clickElement0(locators.Company_Identification, 0)
        methods.clickElementByXPath(locators.account_filter)
        cy.wait(1000)
        methods.clickElementByXPath(locators.account_filter)
        methods.clickElementByXPath(locators.Apply1)
        methods.clickElement(locators.Tactic)
        methods.clickElementByXPath(locators.Add_a_Property)
        methods.clickElement(locators.Campaign1)

        methods.clickElementByXPath(locators.Add_Model)
        methods.clickElement(locators.First_Touch)
        methods.MouseoverAndClick(locators.Add_Compare_Model)
        methods.clickElementByXPath(locators.Add_Model)
        methods.clickElement(locators.Last_Touch)

        methods.clickElement(locators.cal_attri)
        methods.clickElementByXPath(locators.Last_7_days)

        methods.clickElementByXPath(locators.Run_Analysis1)
        methods.clickElement(locators.Attri_pageloaded)
    })
})
