Cypress.Commands.add('goToHome', () => {
  cy.visit('https://testzootopia.loremipsum.ge/ka');
});

Cypress.Commands.add('goToRegister', () => {
  cy.visit('https://testzootopia.loremipsum.ge/ka/register');
});

Cypress.Commands.add('goToCart', () => {
  cy.visit('https://testzootopia.loremipsum.ge/ka/cart');
});

//ავტორიზაცია

Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://testzootopia.loremipsum.ge/ka');
  cy.get('.menu-pop > .rprof').click();
  cy.get('input[name="login_email"]').type(email);
  cy.get('input[name="login_password"]').type(password);
  cy.contains('button', 'ავტორიზაცია').click();
});

// რეგისტრაცია 

Cypress.Commands.add('register', (userData) => {
  cy.visit('https://testzootopia.loremipsum.ge/ka/register');
  cy.get('input[name="first_name"]').type(`${userData.firstName} ${userData.lastName}`);
  cy.get('input[name="reg_email"]').type(userData.validEmail);
  cy.get('input[name="personal_id"]').type(userData.personalId);
  cy.get('input[name="phone"]').type(userData.phone);
  cy.get('input[name="reg_password"]').type(userData.password);
  cy.get('input[name="reg_password_confirmation"]').type(userData.password);
  cy.get('input[name="agree"]').check({ force: true });
  cy.contains('button', 'რეგისტრაცია').click();
});

// კალათა

Cypress.Commands.add('addToCart', () => {
  cy.get('button.add-pro[type="submit"]').click();
});

Cypress.Commands.add('increaseQty', () => {
  cy.get('button.plus[type="button"]').click();
});

Cypress.Commands.add('decreaseQty', () => {
  cy.get('button.minus[type="button"]').click();
});

Cypress.Commands.add('goToCategory', (url) => {
  cy.visit(url);
});
