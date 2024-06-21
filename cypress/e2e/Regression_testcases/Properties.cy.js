import Login3 from '../PageObjects/Login3';
import { deviceViewport, extraTimeOut } from '../Utils';
import methods from '../../support/Common_Method.js';
import locators from '../../support/Locators.js';

describe('Properties Login', () => {

    beforeEach(() => {

        cy.viewport(deviceViewport);

        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //login before run test
        Login3();

    })

    it('Properties', () => {

        const randomNumber = Math.floor(Math.random() * 90) + 10;
        const testName = `Demo_${randomNumber}`;


        cy.wait(5000)
        methods.assertElementContainsText(locators.Account_Pagetitle, 'All Accounts')
        methods.clickElement(locators.setting)
        cy.wait(2000)
        methods.clickElementByXPath(locators.Touchpoints)
        methods.clickElementByXPath(locators.Campaign_Groups)
        methods.clickElementByXPath(locators.Add_New)
        methods.typeElement(locators.Name, testName)
        methods.typeElement(locators.description, 'Testing Purpose')
        methods.clickElementByXPath(locators.New_value_1)
        methods.assertElementContainsText(locators.Add_property_title, 'Add/Edit new value')
        methods.typeElement(locators.Value, 'Test')
        methods.clickElementByXPath(locators.New_Filter)
        methods.clickElementByXPath(locators.Select_Property_text)
        methods.clickElementByXPath(locators.Name_text)
        methods.typeElementByXPath(locators.Filter_Input, 'Test')
        methods.clickElement(locators.Add_property_title)
        methods.clickElementByXPath(locators.save1)
        cy.wait(1000)
        methods.clickElementByXPath(locators.Save_1)
        methods.VisibilityofElement(locators.notification_popup)
        methods.clickElementByXPath(locators.Cancel)
        cy.wait(1000)
        cy.xpath(`//span[text()='${testName}']`, { timeout: extraTimeOut }).scrollIntoView();
        cy.xpath(`//span[text()='${testName}']//following::button[1]`).click({ force: true });
        methods.clickElementByXPath(locators.Remove_Property)
        methods.clickElementByXPath(locators.confirm_1)
        methods.VisibilityofElement(locators.notification_popup)
        cy.wait(2000)

    })
})