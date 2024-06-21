import envDetails from '../fixtures/envDetails.json';
import { deviceViewport, extraTimeOut } from '../e2e/Utils';

class methods {

    assertElementContainsText(selector, text) {
        cy.get(selector, { timeout: extraTimeOut }).should('contain', text);
    }

    VisibilityofElementXpath(xpath) {
        cy.xpath(xpath).should('be.visible');
    }

    VisibleofElement(selector) {
        cy.get(selector).should('to.visible');
    }

    clickElement0(selector, int) {
        cy.get(selector, { timeout: extraTimeOut }).eq(int).click({ force: true });
    }

    clickElement(selector) {
        cy.get(selector, { timeout: extraTimeOut }).click({ force: true });
    }

    clickElementwithindex(selector, text) {
        cy.get(selector, text).click();
    }

    scroll(selector) {
        cy.get(selector).scrollIntoView();
    }

    scrollWithXpath(Xpath) {
        cy.xpath(Xpath).scrollIntoView();
    }

    clickElementwithtime(selector) {
        cy.get(selector).click();
    }

    clickElement1(selector) {
        cy.get(selector, { timeout: extraTimeOut }).click({ force: true });
    }

    navigateToUrlPeople() {
        cy.visit(`${envDetails.backendApiUrl}/profiles/people`);
    }

    launchUrl() {
        cy.url().should('eq', `${envDetails.backendApiUrl}/`);
    }

    navigateToUrl(url) {
        cy.url().should('eq', `${envDetails.backendApiUrl}${url}`);
    }

    navigateToUrljour(url) {
        cy.url().should('eq', `${envDetails.backendApiUrl}/${url}`);
    }

    UrlValidation(text) {
        cy.url().should('contain', `${envDetails.backendApiUrl}${text}`);
    }

    UrlValidationset(text) {
        cy.url().should('eq', `${envDetails.backendApiUrl}/settings/${text}`);
    }

    UrlValidationAccide() {
        cy.url().should('eq', `${envDetails.backendApiUrl}/reports/visitor_report`);
    }

    UrlValidationPeople() {
        cy.url().should('contain', `${envDetails.backendApiUrl}/profiles/people`);
    }

    UrlValidationevent() {
        cy.url().should('contain', `${envDetails.backendApiUrl}/analyse/event`);
    }

    UrlValidationKPI() {
        cy.url().should('contain', `${envDetails.backendApiUrl}/analyse/kpi`);
    }

    UrlvalidationPeople() {
        cy.url().should('contain', `${envDetails.backendApiUrl}/profiles/people`);
    }

    Titletextcontains(selector, text) {
        cy.get(selector, { timeout: extraTimeOut }).contains(text);
    }

    AssertNotEmpty(selector) {
        cy.get(selector, { timeout: extraTimeOut }).should('not.be.empty');
    }

    AssertNotEmptyWithXpath(Xpath) {
        cy.xpath(Xpath).should('not.be.empty');
    }

    Enter(selector) {
        cy.get(selector).type('{enter}');
    }

    EnterXpath(xpath) {
        cy.xpath(xpath).type('{enter}');
    }

    clickElementByXPath(xpath) {
        cy.xpath(xpath, { timeout: extraTimeOut }).click({ force: true });
    }

    clickElementByXPath1(xpath) {
        cy.xpath(xpath).click();
    }

    typeElementByXPath(xpath, text) {
        cy.xpath(xpath).type(text);
    }

    typeElement(selector, text) {
        cy.get(selector, { timeout: extraTimeOut }).type(text, { force: true });
    }

    clickwithcontaintext(selector, text) {
        cy.get(selector, { timeout: extraTimeOut }).contains(text).click();
    }

    ClickandType(selector, text) {
        cy.get(selector, { timeout: extraTimeOut }).click().type(text);
    }

    ClickandTypeXpath(Xpath, text) {
        cy.xpath(Xpath, { timeout: extraTimeOut }).click().type(text);
    }

    assertElementContainsTextxpath(xpath, text) {
        cy.xpath(xpath, { timeout: extraTimeOut }).should('contain', text);
    }

    VisibilityofElement(selector) {
        cy.get(selector, { timeout: extraTimeOut }).should('be.visible');
    }

    VisibilityofElementIndex(selector,int) {
        cy.get(selector, { timeout: extraTimeOut }).eq(int).should('be.visible');
    }

    VisibilityofElement1(selector, text) {
        cy.get(selector, { timeout: extraTimeOut }).should('have.text', text);
    }

    Mouseover(selector) {
        cy.get(selector, { timeout: extraTimeOut }).trigger('mouseover', { force: true });
    }

    MouseoverWithXpath(xpath) {
        cy.xpath(xpath, { timeout: extraTimeOut }).trigger('mouseover', { force: true });
    }

    chargebeeURL() {
        cy.url().should('contain', 'chargebee.com');
    }

    MouseoverAndClick(xpath) {
        cy.xpath(xpath, { timeout: extraTimeOut }).trigger('mouseover', { force: true }).click({ force: true });
    }

    ElementVisibleandClick(selector) {
        cy.get(selector, { timeout: extraTimeOut }).should('be.visible').click();
    }

    AttachFile(selector, filePath) {
        cy.get(selector).attachFile(filePath);
    }

    VisitEventreport() {
        cy.visit(`${envDetails.backendApiUrl}/analyse/event`)
    }

    VisitKPIreport() {
        cy.visit(`${envDetails.backendApiUrl}/analyse/kpi`)
    }

    Clickwithindexandvalidation(selector, int) {
        cy.get(selector, { timeout: extraTimeOut }).eq(int).should('be.visible').click();
    }

    ClearAndTypeWithXpath(xpath, text) {
        cy.xpath(xpath).clear().type(text)
    }

    ClearAndType(selector, text) {
        cy.get(selector).clear().type(text);
    }

    PricingURL() {
        cy.visit(`${envDetails.backendApiUrl}/settings/pricing?state=succeeded`);
    }

    Clear(selector) {
        cy.get(selector).clear()
    }

    ElementToBeClickable(selector) {
        cy.get(selector).should('not.be.disabled')
    }

    ScrollAndClick(selector) {
        cy.get(selector).scrollIntoView().click({ force: true })
    }

    ScrollAndClickxpath(xpath) {
        cy.xpath(xpath).scrollIntoView().click({ force: true })
    }
}

export default new methods();