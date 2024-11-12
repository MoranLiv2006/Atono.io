import About from "../pageObjects/about";
import Footer from "../pageObjects/footer";
import Header from "../pageObjects/header";
import Plan from "../pageObjects/headerProducts/plan";

describe("Atono.io mini automation", () => {

    const header = new Header;
    const plan = new Plan;
    const footer = new Footer;
    const about = new About;

    beforeEach(() => {
        //Change the test page resolution to 1024x768
        cy.viewport(1024, 768)

        //Before every test navigate to the atono website
        cy.visit("https://atono.io/")
    })

    it("Click on the 'Products' button in the header and verify there are 4 products", () => {
        //Click on the 'Products' button in the header
        header.clickProductsButton()

        //Verify thay are 4 products inside the 'Product' section
        header.getTheProductsList().should("have.length", 4)
    })

    it("Verify the Product 'Plan' page", () => {
        //Click on the 'Products' button in the header
        header.clickProductsButton();

        //Click on the 'Plan' button within the products section
        header.clickOnTheProductPlan();

        //Verify the plan page title
        plan.getTheTitleText().then((x) => {
            let titleText = x.text();
            assert.equal(titleText, "Roadmap and backlog");
        })

        //Verify the image is visible
        plan.getThePlanPageImage().should("be.visible");

        //Verify the plan page decrtipion
        plan.getTheProductPlanPageDiscritpion().then((x) => {
            assert.equal(x.text(), "Align your team with a clear plan to deliver on time, every time.");
        })

        //Verify there are 3 plan objects in the plan page
        plan.getThePlanList().should("have.length", 3);
    })

    it("Click on the 'Update' button in the header and verify the updates list isn't empty", () => {
        //Click on the 'Updates' button in the header
        header.clickUpdatesButton()

        //Verify the updates list isn't empty (have more then 0 updates)
        header.getTheUpdatesList().should("have.length.greaterThan", 0)
    })

    it("Verify enable and disable buttons in the middle coloum", () => {
        //Verify There are exactly 3 buttons that are enable in the middle coloum
        footer.getTheEnableButtonsList().should("have.length", 3);

        //Verify there are disable buttons
        footer.getTheDisableButtonList().should("have.length.greaterThan", 0)
    })

    it("Verify the 'About' page", () => {
        const aboutValue = "About"

        //Click on the 'About' button in the footer
        footer.getTheEnableButtonsList().contains(aboutValue).click()

        //Verify the image is visible
        about.getAboutImage().should("be.visible")

        //Verify the H1 title
        about.getH1TitleText().then((x) => {
            assert.equal(x.text(), "About");
            assert.notEqual(x.text(), "BlaBla");
        })

        //Verify the H2 title
        about.getH2TitleText().then((x) => {
            let h2Text = "Let’s rethink the way we build";
            assert.equal(x.text(), h2Text);
            expect(x.text()).to.equal(h2Text);
        })

        //Verify the page decription text
        about.getAboutPageDescription().then((x) => {
            assert.equal(x.text(), "Software development has come a long way in the past decade, so why are our tools still stuck in the past?");
        })

        //Verify the amount of the team members isn't empty
        about.getTheTeamNames().should("have.length", 13);

        //Print all the team members names
        about.getTheTeamNames().each(($teamMember) => {
            cy.log($teamMember.text())
        })

        //Writing my email in the email wish list
        about.writeEmailAddress("moran.liv2006@gmail.com");
    })
})