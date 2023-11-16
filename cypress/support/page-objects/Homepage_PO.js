import { Base_PO } from "./Base_PO";

export class Homepage_PO extends Base_PO {
  navigateToHomepage() {
    super.navigate("/");
  }

  clickOnContactUsButton() {
    cy.clickAndOpenLink_InSameTab("#contact-us");
  }

  clickOnLoginButton() {
    cy.clickAndOpenLink_InSameTab("#login-portal");
  }
}
