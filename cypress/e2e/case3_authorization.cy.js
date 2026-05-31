describe('Zootopia - ქეისი 3: ავტორიზაცია', () => {

  beforeEach(() => {
    cy.goToHome();
  });

  it('Case 3: წარმატებული ავტორიზაცია ვალიდური მონაცემებით', () => {

    cy.login('lan.soseliaa@gmail.com', 'soselia12');

    // Assertion 1: URL აღარ შეიცავს /register-ს
    cy.url().should('not.contain', '/register');

    // Assertion 2: პროფილის აიქონი არსებობს
    cy.get('.iprof').should('exist');

  });

});
