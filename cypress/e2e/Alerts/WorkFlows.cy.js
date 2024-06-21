import Login3 from '../PageObjects/Login3.js';
import { deviceViewport, extraTimeOut } from '../Utils.js';
import envDetails from '../../fixtures/envDetails.json';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';
import dayjs from 'dayjs';


describe('WorkFlow Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })


    it('WorkFlow - Hubspot', () => {

        const nowTime = dayjs().format('H:m:s');
        const testName = `Demo_${nowTime}`;

        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        cy.wait(5000)
        cy.visit(`${envDetails.backendApiUrl}/workflows`)
        cy.wait(60000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'Workflows')
        cy.wait(2000)
        methods.clickElementByXPath(locators.workflow)
        methods.clickElementByXPath(locators.Hubspot_template)
        methods.clickElementByXPath(locators.Use_this_template)
        cy.wait(3000)
        methods.typeElement(locators.workflow_name,testName)
        methods.clickElementByXPath(locators.select_event)
        methods.clickElement0(locators.others1,0)
        methods.clickElementByXPath(locators.account_filter)
        methods.VisibilityofElement(locators.Action_flow)
        cy.wait(2000)
        methods.clickElementByXPath(locators.Configure_Action)
        methods.scrollWithXpath(locators.SaveandPublish)
        methods.VisibilityofElementXpath(locators.configurations_field)
        methods.clickElement(locators.Factors_Properties1)
        methods.typeElement(locators.Factors_Properties1,'company name')
        methods.clickElement(locators.Hubspot_company_name)
        cy.wait(1000)
        methods.clickElement(locators.Factors_Properties3)
        methods.typeElement(locators.Factors_Properties3,'domain')
        methods.clickElement(locators.Hubspot_company_domain_name)
        cy.wait(1000)
        methods.clickElement(locators.Factors_Properties4)
        methods.typeElement(locators.Factors_Properties4,'domain')
        methods.clickElement0(locators.Company_domain_name,0)
        cy.wait(1000)
        methods.clickElement(locators.Factors_Properties2)
        methods.typeElement(locators.Factors_Properties2,'name')
        methods.clickElement(locators.Companyname_hubspot)
        methods.clickElementByXPath(locators.SaveandPublish)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(1000)
        cy.xpath(`//h4[text()='${testName}']//following::button[1]`).click({ force: true });
        methods.clickElementByXPath(locators.Remove_workflow)
        methods.clickElementByXPath(locators.Ok)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(2000)

    })
})