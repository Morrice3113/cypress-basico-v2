Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function (){
    cy.get('#firstName').type('Mauricio')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('mauricioniigt@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button','Enviar').click()
})