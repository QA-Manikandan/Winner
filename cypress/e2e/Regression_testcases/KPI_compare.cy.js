import Login3 from '../PageObjects/Login3';
import envDetails from '../../fixtures/envDetails.json';
import { deviceViewport, extraTimeOut } from '../Utils';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('KPI comapre Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('KPI comapre', () => {

        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.VisitKPIreport()
        methods.UrlValidationKPI()
        cy.wait(5000)

        // Select KPI report & add event

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
        methods.VisibilityofElement(locators.Attri_pageloaded)
        methods.clickElementByXPath(locators.Compare)
        methods.clickElementByXPath(locators.Compare_to)
        methods.VisibilityofElement(locators.Attri_pageloaded)


    })
})