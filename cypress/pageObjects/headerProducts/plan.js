class Plan {

    txt_title = ".hero-wrapper > .mb-1";
    img_planImage = "div[class='block w-full'] > img";
    txt_productDiscription = ".body > .font-medium";
    list_roadPlanObjects = "div[class='duplex-block fifty-fifty bg-white dark:bg-gray-900 dark:text-gray-300 section']";

    getTheTitleText() {
        return cy.get(this.txt_title);
    }

    getThePlanPageImage() {
        return cy.get(this.img_planImage);
    }

    getTheProductPlanPageDiscritpion() {
        return cy.get(this.txt_productDiscription);
    }

    getThePlanList() {
        return cy.get(this.list_roadPlanObjects);
    }
}

export default Plan;