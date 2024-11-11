import Header from "../pageObjects/header";

describe("Atono.io mini automation", () => {

    beforeEach(() => {
        cy.viewport(1024, 768)
        cy.visit("https://atono.io/")
    })

    const header = new Header

    it("Verify ", () => {
        header.clickProductsButton()
    })
})