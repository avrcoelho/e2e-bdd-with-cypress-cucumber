import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

const url = "https://www.webdriveruniversity.com/";

Given(`I navigate to the webdriveruniversity homepage`, () => {
  cy.visit(url);
});

When(`I click on contact us button`, () => {
  cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
});

When(`I click on login portal button`, () => {
  cy.get("#login-portal").invoke("removeAttr", "target").click({ force: true });
});
