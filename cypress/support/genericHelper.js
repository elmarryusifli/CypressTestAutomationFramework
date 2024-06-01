export const getElement = (locator) => {
    return cy.get(locator);
};

export const getElementWithNull = (locator) => {
    return cy.get(locator).then($el => $el.length ? $el : null);
};

export const isElementPresentQuick = (locator) => {
    return cy.get(locator).then($el => $el.length > 0);
};

export const hover = (element) => {
    cy.get(element).trigger('mouseover');
};

export const getElementsText = (locator) => {
    return cy.get(locator).then($elements => {
        return $elements.map((_, el) => Cypress.$(el).text()).get();
    });
};

export const verifyElementDisplayed = (locator) => {
    cy.get(locator).should('be.visible');
};

export const selectRandomTextFromDropdown = (element) => {
    cy.get(element).then($select => {
        const options = $select.find('option');
        const randomOption = options[Math.floor(Math.random() * options.length)];
        cy.wrap($select).select(randomOption.value);
    });
};

export const clickWithJS = (element) => {
    cy.get(element).then($el => {
        $el[0].click();
    });
};

export const scrollToElement = (element) => {
    cy.get(element).scrollIntoView();
};

export const doubleClick = (element) => {
    cy.get(element).dblclick();
};

export const setAttribute = (element, attributeName, attributeValue) => {
    cy.get(element).invoke('attr', attributeName, attributeValue);
};

export const isClickable = (element) => {
    return cy.get(element).should('be.enabled');
};

export const scrollIntoView = (element) => {
    cy.get(element).scrollIntoView();
};

export const scrollIntoViewAndClick = (element) => {
    scrollIntoView(element);
    cy.get(element).click();
};

export const jSClick = (element) => {
    cy.get(element).then($el => {
        $el[0].click();
    });
};