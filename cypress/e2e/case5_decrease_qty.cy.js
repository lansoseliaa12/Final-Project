describe('Zootopia - ქეისი 5: კალათის რაოდენობის შემცირება', () => {

  it('პროდუქტის რაოდენობის შემცირება', () => {

    // 1. კატეგორიის გვერდზე გადასვლა
    cy.goToCategory('https://testzootopia.loremipsum.ge/ka/category/117-%E1%83%B0%E1%83%98%E1%83%92%E1%83%98%E1%83%94%E1%83%9C%E1%83%90-%E1%83%93%E1%83%90-%E1%83%9B%E1%83%9D%E1%83%95%E1%83%9A%E1%83%90');

    cy.get('[data-id]').first().click();
    cy.get('span#cart-items-count').should('contain', '1')
    cy.goToCart();
    cy.increaseQty();
    cy.get('.cart-box input').should('have.value', '2');

    cy.decreaseQty();

    // Assertion 1: რაოდენობა დაბრუნდა 1-ზე
    cy.get('.cart-box input').should('have.value', '1');

    // Assertion 2: კალათის counter კვლავ 1-ია
    cy.get('span#cart-items-count').should('contain', '1');

  });

});
