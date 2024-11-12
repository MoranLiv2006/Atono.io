class Footer {

    list_listOfEnabledButtonsInTheThirdColoum = "div:nth-child(3) > nav:nth-child(1) > li> a:nth-child(1)";
    list_listOfDisabledButtonsInTheThirdColoum = ":nth-child(3) > .list-none > li > .text-gray-300";
    // btn_aboutButton = ""

    getTheEnableButtonsList() {
        return cy.get(this.list_listOfEnabledButtonsInTheThirdColoum);
    }

    getTheDisableButtonList() {
        return cy.get(this.list_listOfDisabledButtonsInTheThirdColoum);
    }
}

export default Footer