/// <reference types="cypress" />

describe('Testify Checklist App', () => {
  beforeEach(() => {
    // Visit the login page
    cy.visit('http://192.168.31.132:8080/Documents/Testify2.0.html'); // Update with your actual login page URL

    // Enter valid credentials and click login
    cy.get('#username').type('your_username'); // Update with your actual username
    cy.get('#password').type('your_password'); // Update with your actual password
    cy.get('button').contains('Log In').click();

    // Assert that we are on the home screen after login
    cy.get('#homeScreen').should('be.visible');
  });

  it('should execute checklist successfully', () => {
    // Execute checklist
    cy.get('button').contains('Execute Checklist').click();

    // Interact with the modal elements
    cy.get('#singleChoice').select('Option 1');
    cy.get('#textCheck').type('Some text');
    cy.get('#item1').check();
    cy.get('#item2').check();
    cy.get('#item3').check();

    // Add a comment
    cy.get('#comment').type('This is a comment');
    cy.get('.comment-btn').click();

    // Execute the checklist
    cy.get('.modal-content button').contains('Execute Checklist').click();

    // Assert that the checklist history has been updated
    cy.get('#checklistHistory .checklist-item').should('have.length', 1);
  });

  it('should add an issue successfully', () => {
    // Add an issue
    cy.get('button').contains('Add Issue').click();
    cy.get('#issueTitle').type('New Issue');
    cy.get('#issueDescription').type('Description for the new issue');
    cy.get('button').contains('Add Issue').click();

    // Assert that the issue is added to the overview
    cy.get('#issueList li').should('have.length', 1);
  });

  it('should add a comment successfully', () => {
    // Execute checklist first
    cy.get('button').contains('Execute Checklist').click();
    cy.get('.modal-content button').contains('Execute Checklist').click();

    cy.get('button').contains('Execute Checklist').click();
    // Add a comment to the executed checklist
    cy.get('#comment').type('This is another comment');
    cy.get('.comment-btn').click();

    // Close the checklist modal
    cy.get('.modal-content .close').click();

    // Assert that the comment is added to the last executed checklist
    cy.get('#checklistHistory .checklist-item:last-child span').contains('Comment').should('be.visible');
  });

  it('should reopen the last checklist item', () => {
    // Execute checklist first
    cy.get('button').contains('Execute Checklist').click();
    cy.get('.modal-content button').contains('Execute Checklist').click();

    // Right-click on the last checklist item to show the context menu
    cy.get('#checklistHistory .checklist-item:last-child .checklist-status').contains('(Open)').should('be.visible').rightclick();

    // Click on "Reopen" in the context menu
    cy.get('#contextReopen').click();

    // Assert that the status of the last checklist item is "Reopen"
    cy.get('#checklistHistory .checklist-item:last-child .checklist-status').contains('(Reopen)').should('be.visible');
  });

  it('should remove the last checklist item', () => {
    // Execute checklist first
    cy.get('button').contains('Execute Checklist').click();
    cy.get('.modal-content button').contains('Execute Checklist').click();

    // Right-click on the last checklist item to show the context menu
    cy.get('#checklistHistory .checklist-item:last-child .checklist-status').contains('(Open)').should('be.visible').rightclick();

    // Click on "Removed" in the context menu
    cy.get('#contextRemoved').click();

    // Assert that the status of the last checklist item is "Removed"
    cy.get('#checklistHistory .checklist-item:last-child .checklist-status').contains('(Removed)').should('be.visible');
  });
});