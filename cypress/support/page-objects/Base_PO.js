export class Base_PO {
  // #base_url = "https://www.webdriveruniversity.com";

  navigate(path) {
    cy.fixture("config.json").then((data) => {
      cy.visit(data.baseUrl + path);
    });
  }

  getPageTitle() {
    return cy.title();
  }
}
