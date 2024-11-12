class About {

    img_aboutImage = ".mb-14";
    txt_h1TitleText = ".hero-wrapper > h1";
    txt_h2TitleText = ".hero-wrapper > h2";
    txt_pageDescription = "div[class='body mt-5 text-xl text-gray-600 dark:text-gray-400 max-w-[600px]']";
    list_teamNames = "#__next > div > main > div.person-block.section > div > div > a > div.w-full.text-center.mt-5 > h6";
    input_emailWishList = "input[type='email']";

    getAboutImage() {
        return cy.get(this.img_aboutImage);
    }

    getH1TitleText() {
        return cy.get(this.txt_h1TitleText);
    }

    getH2TitleText() {
        return cy.get(this.txt_h2TitleText);
    }

    getAboutPageDescription() {
        return cy.get(this.txt_pageDescription);
    }

    getTheTeamNames() {
        return cy.get(this.list_teamNames);
    }

    writeEmailAddress(email) {
        cy.get(this.input_emailWishList).type(email);
    }
}

export default About