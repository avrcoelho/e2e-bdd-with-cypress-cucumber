import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

When(`I type a username {}`, (username) => {
  cy.get("#text").type(username);
});

When(`I type a password {}`, (password) => {
  cy.get("#password").type(password);
});

When(`I click on the login button`, () => {
  cy.get("#login-button").click();
});

Then(
  "I should be presented with an alert box which contains text {string}",
  (expectedAlertText) => {
    cy.on("window:alert", (stub) => {
      expect(stub).to.have.been.calledWith(expectedAlertText);
    });
  }
);
