  beforeEach(() => {
    cy.goToRegister();
  });

  it('Case 2: რეგისტრაციის მცდელობა წესებზე დათანხმების გარეშე', () => {
    cy.fixture('example').then((user) => {
      const dynamicEmail = `testeri_${Date.now()}@gmail.com`;
      const dynamicPid = `${Date.now()}`.substring(0, 11);
      const dynamicPhone = `5${`${Date.now()}`.substring(5, 13)}`;
      const fullName = `${user.firstName} ${user.lastName}`;

      cy.get('input[name="first_name"]').type(fullName);
      cy.get('input[name="reg_email"]').type(dynamicEmail);
      cy.get('input[name="personal_id"]').type(dynamicPid);
      cy.get('input[name="phone"]').type(dynamicPhone);
      cy.get('input[name="reg_password"]').type(user.password);
      cy.get('input[name="reg_password_confirmation"]').type(user.password);
      cy.contains('button', 'რეგისტრაცია').click();

      // Assertion 1: ისევ register გვერდზე ვართ
      cy.url().should('include', '/register');

      // Assertion 2: სახელის ველში მონაცემი შენახულია
      cy.get('input[name="first_name"]').should('have.value', fullName);
    });
  });
