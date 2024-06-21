// import userDetails from '../../fixtures/userDetails.json';
import envDetails from '../../fixtures/envDetails.json';
import Login from '../PageObjects/Login';
import moment from 'moment';

describe.skip('Reports -> Events', () => {  

    it.skip('Create and Save Event query', () => {
  
        cy.on('uncaught:exception', (err, runnable) => {
          return false;
        });
        
        Login();
    
        // open page url
        cy.visit(`${envDetails.backendApiUrl}/analyse/events`)
    
        let eventName1 = 'Total Sessions';
        
        cy.wait(2000) //wait for dropdown values to populate

        //Select event from event dropdown
        cy.get('.query_card_close > :nth-child(1) > .bordered > .ant-collapse > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > :nth-child(1) > .undefined > .QueryBlock_query_block__event__2Psl5 > .ant-btn').should('be.visible').click();
        cy.get('.fa-select-dropdown > .flex-col > :nth-child(1)').click() //select category
        cy.get('.fa-filter-select > .ant-input-affix-wrapper > .ant-input').type(eventName1).should('have.value', eventName1) //search event name
        cy.get('.fa-select-dropdown > .flex > :nth-child(1)').click(); //click on eventname
        cy.get('.query_card_open-add > :nth-child(1) > :nth-child(1) > .ant-collapse > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > :nth-child(1) > .undefined > .justify-start > :nth-child(2) > .max-w-7xl > :nth-child(1) > .ant-btn > span').should('have.text',eventName1) //check if the event is selected
        
        //Select event from event dropdown
        cy.get('.query_card_close > :nth-child(2) > .bordered > .ant-collapse > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > :nth-child(1) > .undefined > .QueryBlock_query_block__event__2Psl5 > .ant-btn').should('be.visible').click();
        cy.get('.fa-select-dropdown > .flex-col > :nth-child(1)').click() //select category
        cy.get('.fa-filter-select > .ant-input-affix-wrapper > .ant-input').type(eventName1).should('have.value', eventName1) //search event name
        cy.get('.fa-select-dropdown > .flex > :nth-child(1)').click(); //click on eventname
        cy.get('.query_card_open-add > :nth-child(1) > :nth-child(1) > .ant-collapse > .ant-collapse-item > .ant-collapse-content > .ant-collapse-content-box > :nth-child(1) > .undefined > .justify-start > :nth-child(2) > .max-w-7xl > :nth-child(1) > .ant-btn > span').should('have.text',eventName1) //check if the event is selected
        


        //Date Change through Datepicker
        // cy.get('.fa-custom-datepicker button.ant-dropdown-trigger').eq(0).scrollIntoView().should('be.visible').click();
        // cy.get('.fa-custom-datepicker--dropdown > .ant-dropdown-menu >  li:nth-child(4)').scrollIntoView().click();

        //Run query 
        cy.get('.query_card_open-add > :nth-child(1) > .KPIComposer_composer_footer__2DZvK > .ant-btn-primary').click();
        
        //results data table is visible 
        cy.get('.data-table').should('be.visible')
        cy.get('.data-table .ant-table-content th.text-right h1.fai-text').should('be.visible').should('have.text',eventName1)
        
        //Save button click 
        cy.get('#app-header button.ant-btn-primary').should('be.visible').click()
        
        let reportName = `Save Report - Automation ${moment().format('DDMMMYY')}`
        let reportDesc = `Description - Automation ${moment().format('DDMMMYY')}`
        
        //Save report modal
        cy.get('.fa-modal--regular .ant-modal-content input[placeholder="Name"]').type(reportName).should('have.value', reportName)
        cy.get('.fa-modal--regular .ant-modal-content textarea').type(reportDesc).should('have.value', reportDesc)
        cy.get('.fa-modal--regular .ant-modal-footer .ant-btn-primary').click()
        
        cy.wait(1000) //wait 

        //Success toaster check 
        cy.get('.ant-notification-notice-success').should('be.visible')
        
        //Save Button to be disabled
        cy.get('#app-header button.ant-btn-primary').eq(1).should('be.disabled')
        
        //Close query builder 
        cy.get('#app-header button.ant-btn-default').should('be.visible').click()


      });
    
  
  })