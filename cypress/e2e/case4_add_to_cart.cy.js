describe('Zootopia - ქეისი 4: კალათაში დამატება', () => {

  it('Case 4: პროდუქტის კალათაში დამატება სავარცხლების კატეგორიიდან', () => {

    cy.goToCategory('https://testzootopia.loremipsum.ge/ka/category/117-%E1%83%B0%E1%83%98%E1%83%92%E1%83%98%E1%83%94%E1%83%9C%E1%83%90-%E1%83%93%E1%83%90-%E1%83%9B%E1%83%9D%E1%83%95%E1%83%9A%E1%83%90');

    // პირველი პროდუქტის კალათაში დამატება
    cy.get('[data-id]').first().click();

    // Assertion 1: კალათის counter გახდა 1
    cy.get('span#cart-items-count').should('contain', '1');

    // Assertion 2: კალათის აიქონი არსებობს
    cy.get('a.icart').should('exist');

  });

});
