import methods from '../../support/Common_Method.js'
import locators from '../../support/Locators.js'
import Login from '../PageObjects/Login.js';
import { deviceViewport, extraTimeOut } from '../Utils.js';

describe('Login', () => {

  beforeEach(() => {

    cy.viewport(deviceViewport);

    cy.on('uncaught:exception', (err, runnable) => {
      return false;
    });

    //login before run test
    Login();

  })

  it('Data Management', () => {


    //config dropdown and pages accessibility check 

    [
      { key: 'Integrations', index: 9, url: 'integration' },
      { key: 'Touchpoint Definitions', index: 10, url: 'touchpoint_definition?activeTab=utmParameters' },
      { key: 'Custom Definitions', index: 11, url: 'custom_definition?activeTab=customKPI' },
      { key: 'Account Scoring', index: 13, url: 'account_scoring?activeTab=engagementScoring' }

    ].map((item) => {

      cy.wait(5000)

      methods.clickElement(locators.setting)
      cy.xpath(`//h4[text()="Project Settings"]//following::h4[${item.index}]`).click({ force: true });
      cy.wait(1000);
      methods.UrlValidationset(item.url)
      methods.VisibilityofElement(locators.Page_title)
      methods.Titletextcontains(locators.Page_title, item.key)

    });

      cy.wait(1000)
      methods.clickElementByXPath(locators.Attribute_title)
      cy.wait(1000);
      methods.UrlValidationset('attribution')
      methods.VisibilityofElement(locators.Account_Pagetitle)
      methods.Titletextcontains(locators.Account_Pagetitle, 'Attribution')

  });

})