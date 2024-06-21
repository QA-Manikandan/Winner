import Login from '../PageObjects/Login';
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
    Login();

  })

  it('Journeys Page', () => {

    //Journey screen
    [
      { key: 'Path Analysis', index: 2, url: 'path-analysis' },
      { key: 'Explain', index: 3, url: 'explain' },
    ].map((item) => {
      cy.wait(5000)
      methods.clickElementwithtime(locators.report_dropdown)
      cy.get(`.ant-dropdown > .ant-dropdown-menu > li:nth-child(${item.index}) > span > a`).click({ force: true });
      cy.wait(1000);
      methods.navigateToUrljour(item.url)
      methods.VisibilityofElement(locators.Account_Pagetitle)
      methods.VisibilityofElement1(locators.Account_Pagetitle, item.key)
    })
  });


})