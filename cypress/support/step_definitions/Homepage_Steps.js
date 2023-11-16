import { Given, When, Before } from "@badeball/cypress-cucumber-preprocessor";
import { Base_PO } from "../page-objects/Base_PO";
import { Homepage_PO } from "../page-objects/Homepage_PO";

// const url = "https://www.webdriveruniversity.com/";
const base_PO = new Base_PO();
const homepage_PO = new Homepage_PO();

Before({ tags: "@smoke" }, () => {
  cy.log("Executing commands inside homepage steps");
});

Given(`I navigate to the webdriveruniversity homepage`, () => {
  // cy.visit(url);
  // base_PO.navigate("/");
  homepage_PO.getPageTitle();
});

When(`I click on contact us button`, () => {
  // cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
  // cy.clickAndOpenLink_InSameTab("#contact-us");
  homepage_PO.clickOnContactUsButton();
});

When(`I click on login portal button`, () => {
  // cy.get("#login-portal").invoke("removeAttr", "target").click({ force: true });
  // cy.clickAndOpenLink_InSameTab("#login-portal");
  homepage_PO.clickOnLoginButton();
});
