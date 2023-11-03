import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I type a fisrt name", () => {
  cy.get("[name='first_name']").type("Joe");
});

When("I type a last name", () => {
  cy.get("[name='last_name']").type("Blogs");
});

When("I enter an email address", () => {
  cy.get("[name='email']").type("joe@blogs.com");
});

When("I type a comment", () => {
  cy.get("textarea[name='message']").type("How are you?");
});

When("I click on the submit button", () => {
  cy.get("[type='submit']").click();
});

Then(
  "I should presented with a successful contact us submisson message",
  () => {
    cy.get("h1").should("contain", "Thank You for your Message!");
  }
);

Then(
  "I should presented with a unsuccessful contact us submisson message",
  () => {
    cy.get("body").contains("Error: Invalid email address");
  }
);

When("I type specific fisrt name {string}", (firstName) => {
  cy.get("[name='first_name']").type(firstName);
});

When("I type specific last name {string}", (lastName) => {
  cy.get("[name='last_name']").type(lastName);
});

When("I type specific email address {string}", (email) => {
  cy.get("[name='email']").type(email);
});

When(
  "I type specific string {string} and specific number {int} within the comment input filed",
  (word, number) => {
    cy.get("textarea[name='message']").type(word + number);
  }
);
