export const switchToWindow = (targetTitle) => {
    cy.window().then((win) => {
        const targetWindow = Array.from(win.open('', '_self')).find(w => w.document.title === targetTitle);
        targetWindow.focus();
    });
};

export const switchToParentWindow = () => {
    cy.window().then((win) => {
        win.opener.focus();
    });
};

export const switchToParentWithChildClose = () => {
    cy.window().then((win) => {
        win.opener.focus();
        win.close();
    });
};

export const switchToFrame = (locator) => {
    cy.get(locator).then($iframe => {
        const iframe = $iframe.contents().find('body');
        cy.wrap(iframe);
    });
};
