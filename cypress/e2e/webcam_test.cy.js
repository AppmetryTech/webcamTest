describe("Validate Webcam", () => {
    it.only("Webtest", () => {
        cy.visit("/")
        cy.get('#premeeting-name-input').type('QA TESTER');
        cy.get('[data-testid="prejoin.joinMeeting"]').click();
        cy.get("#chrome-extension-banner__checkbox").click();
        cy.get('.chrome-extension-banner__close-container > .jitsi-icon > svg').click();
        cy.get('.css-1gdmx13-action').click();

    })

})