export const getAlert = () => {
    return cy.on('window:alert', (alertText) => {
        return alertText;
    });
};

export const acceptAlert = () => {
    cy.on('window:alert', () => true);
};

export const dismissAlert = () => {
    cy.on('window:confirm', () => false);
};

export const getAlertText = () => {
    return cy.on('window:alert', (alertText) => {
        return alertText;
    });
};

export const isAlertPresent = () => {
    let alertPresent = false;
    cy.on('window:alert', () => {
        alertPresent = true;
    });
    return alertPresent;
};

export const acceptAlertIfPresent = () => {
    if (isAlertPresent()) {
        acceptAlert();
    }
};

export const dismissAlertIfPresent = () => {
    if (isAlertPresent()) {
        dismissAlert();
    }
};

export const acceptPrompt = (text) => {
    cy.window().then((win) => {
        cy.stub(win, 'prompt').returns(text);
        cy.on('window:confirm', () => true);
    });
};
