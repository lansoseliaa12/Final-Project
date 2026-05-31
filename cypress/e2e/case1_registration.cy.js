describe('Zootopia - ქეისი 1: რეგისტრაცია', () => {

  beforeEach(() => {
    cy.goToRegister();
  });

  it('Case 1: წარმატებული რეგისტრაცია უნიკალური მონაცემებით', () => {
    cy.fixture('example').then((user) => {
      const dynamicEmail = `testeri_${Date.now()}@gmail.com`;
      const dynamicPid = `${Date.now()}`.substring(0, 11);
      const dynamicPhone = `5${`${Date.now()}`.substring(5, 13)}`;

      cy.register({
        firstName: user.firstName,
        lastName: user.lastName,
        validEmail: dynamicEmail,
        personalId: dynamicPid,
        phone: dynamicPhone,
        password: user.password,
      });

      // Assertion 1: URL აღარ შეიცავს /register-ს
      cy.url().should('not.include', '/register');

      // Assertion 2: რეგისტრაციის ფორმა აღარ ჩანს
      cy.get('.reg-form-input-shablon').should('not.exist');
    });
  });

});
