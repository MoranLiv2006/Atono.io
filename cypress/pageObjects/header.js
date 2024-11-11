class Header {

    btnProducts = "button[for='toggle-0']"
    btnUpdates = ""

    clickProductsButton() {
        cy.get(this.btnProducts).click()
    }
}

export default Header