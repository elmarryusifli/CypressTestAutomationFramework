import faker from 'faker';
require('@cypress/xpath');

describe('UI end-to-end tests', () => {
  it('should copy text from an element using XPath and paste it into a textarea', () => {
    // Step 1: Visit the webpage
    cy.visit('https://www.saucedemo.com/');

    // Step 2: Define the XPath for the element containing the text to copy
    const userNameXPath = '//*[@id="login_credentials"]/text()[1]';

    // Step 3: Find the element using XPath and copy its text
    cy.xpath(userNameXPath).invoke('text').then((copiedText) => {
      const trimmedCopiedText = copiedText.trim(); // Trim any extra whitespace

      // Step 4: Paste the copied text into the textarea with id 'user-name'
      cy.get('#user-name').type(trimmedCopiedText);
    });

    // Step 5: Type the password
    cy.get('#password').type('secret_sauce');

    // Step 6: Click the login button
    cy.get('#login-button').click();

    // Assert that the user is redirected to the products page
    cy.url().should('include', '/inventory.html');

    // Step 7: Add items to the cart
    cy.xpath('//*[@id="add-to-cart-sauce-labs-fleece-jacket"]').click();
    cy.xpath('//*[@id="add-to-cart-sauce-labs-bike-light"]').click();
    cy.xpath('//*[@id="add-to-cart-sauce-labs-backpack"]').click();

    // Assert that the cart badge shows 3 items
    cy.get('.shopping_cart_badge').should('contain', '3');

    // Step 8: Remove an item from the cart
    cy.xpath('//*[@id="remove-sauce-labs-bike-light"]').click();

    // Assert that the cart badge shows 2 items
    cy.get('.shopping_cart_badge').should('contain', '2');

    // Step 9: Proceed to checkout
    cy.xpath('//*[@id="shopping_cart_container"]/a').click();
    cy.xpath('//*[@id="checkout"]').click();

    // Step 10: Fill in the checkout information
    cy.get('#first-name').type('Elmar');
    cy.get('#last-name').type('Yusifli');
    cy.get('#postal-code').type('12345');

    // Step 11: Continue to the next step
    cy.get('#continue').click();

    // Assert that the overview page is displayed
    cy.url().should('include', '/checkout-step-two.html');

    // Step 12: Finish the checkout process
    cy.get('#finish').click();

    // Step 13: Define the XPath for the element containing the completion message
    const completeMessageXPath = '//*[@id="checkout_complete_container"]/h2';

    // Step 14: Find the element using XPath, get its text, and assert it is equal to "Thank you for your order!"
    cy.xpath(completeMessageXPath).invoke('text').then((text) => {
      const trimmedText = text.trim();
      expect(trimmedText).to.eq('Thank you for your order!'); // Replace 'THANK YOU FOR YOUR ORDER' with the exact text you expect
    });

    // Step 15: Navigate back to the products page
    cy.get('#back-to-products').click();

    // Assert that the user is redirected to the products page
    cy.url().should('include', '/inventory.html');

    // Step 16: Open the menu and log out
    cy.get('#react-burger-menu-btn').click();
    cy.xpath('//*[@id="logout_sidebar_link"]').click();

    // Assert that the user is redirected to the login page
    const logo = '//*[@id="root"]/div/div[1]';
    cy.xpath(logo).invoke('text').then((text) => {
      const trimmedText = text.trim();
      expect(trimmedText).to.eq('Swag Labs');
    });
  });
});
