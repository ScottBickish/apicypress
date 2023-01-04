
describe('Basic crud method api tests', () => {

  it('GET', () => {
    cy.request('/api/users?page=2').then((response) => {
      expect(response).to.have.property('status', 200);
      expect(response.status).equal(200);
      for (let i = 0; i > response.body.data.length; i++) {
        if ([i].first_name === 'Rachel')
          break;
      }
      expect(response.body.data[0].first_name).equal('Michael');
    });
  });

  it('POST', () => {
    let user = {
      "name": "Scott",
      "job": "Software Engineer SDET"
    }
    cy.request('POST', '/api/users', user).then((response) => {
      expect(response.status).equal(201);
      expect(response.body.name).equal(user.name);
      expect(response.body.job).equal(user.job);
    });
  });

  it('PUT', () => {
    let user1 = {
      "name": "Scott",
      "job": "AccountAdmin"
    }
    cy.request('PUT', '/api/users/2', user1).then((response) => {
      expect(response.status).equal(200);
      expect(response.body.name).equal(user1.name);
      expect(response.body.job).equal(user1.job);
    });
  });

  it('DELETE', () => {
    cy.request('DELETE', '/api/users/2').then((response) => {
      expect(response.status).equal(204);
    });
  });

  it('PATCH', () => {
    let user2 = {
      "job": "AccountAdmin"
    };
    cy.request('PATCH', '/api/users/2', user2).then((response) => {
      expect(response.status).equal(200);
      expect(response.body.job).equal(user2.job);

    });
  });

  it.only('login using custom command', () => {
    cy.visit('https://admin-demo.nopcommerce.com/login');
    cy.Login(Cypress.env('userEmail'), Cypress.env('userPassword'));
    cy.get(':nth-child(1) > .card > .card-header > .float-left').click();
    cy.get('.navigation-top-menu-main > :nth-child(4) > .navigation-top-menu-link > .navigation-top-menu-label').click();
    cy.get(':nth-child(1) > .list > :nth-child(2) > a').click();
    cy.get('.desktop-logo > img').click();

  })


}); 