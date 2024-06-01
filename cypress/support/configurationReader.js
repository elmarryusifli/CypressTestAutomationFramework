export const getProperty = (fileName, key) => {
    return cy.readFile(`cypress/fixtures/${fileName}`).then((properties) => {
        return properties[key];
    });
};
