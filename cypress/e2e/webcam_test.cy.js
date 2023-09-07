describe("Validate Webcam", () => {
    it("Webtest", () => {
        cy.visit("https://meet.jit.si/testWebcamCypress")
        cy.get('#premeeting-name-input').type('QA TESTER');
        cy.get('[data-testid="prejoin.joinMeeting"]').click();
        cy.get("#chrome-extension-banner__checkbox").click();
        cy.get('.chrome-extension-banner__close-container > .jitsi-icon > svg').click();
        cy.get('.css-1gdmx13-action').click();
        cy.wait(4000);
        cy.get("#localVideo_container").click();
        cy.get("#localVideo_container").screenshot();
       // cy.get("#localVideo_container").should("be.visible");
        cy.wait(20000)
        cy.get("#largeVideo").screenshot();
        cy.get("#largeVideo").should("be.visible")


    })

})