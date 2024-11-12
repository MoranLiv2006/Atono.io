class Header {

    btn_atonoLogo = "div[class='relative block py-4 lg:py-5 pr-10 lg:pr-20']";

    btn_products = "button[for='toggle-0']";
    btn_updates = ".update-text";
    list_productsList = "ul[class='navigation_subNav__MxDBg w-full lg:w-1/2'] > li";
    list_updatesList = "body > div:nth-child(4) > div:nth-child(2) > header:nth-child(1) > nav:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div";

    btn_productsPlan = "#toggle-0 > li:nth-child(1) > a";

    returnToTheHomePage() {
        cy.get(this.btn_atonoLogo).click();
    }

    clickProductsButton() {
        cy.get(this.btn_products).click();
    }

    clickUpdatesButton() {
        cy.get(this.btn_updates).click();
    }

    getTheProductsList() {
        return cy.get(this.list_productsList);
    }

    getTheUpdatesList() {
        return cy.get(this.list_updatesList);
    }

    clickOnTheProductPlan() {
        cy.get(this.btn_productsPlan).click();
    }
}

export default Header