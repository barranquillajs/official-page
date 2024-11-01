/// <reference types="cypress" />

describe('Render Components', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4321/');
    cy.viewport('macbook-13');
  });

  it('displays Navbar', () => {
    cy.get('.container.navbar').should('be.visible');
  });

  it('displays Menu Options', () => {
    cy.get('.container.navbar img').should('be.visible').should('have.attr', 'src').and('include', 'BAQJS');

    const options = ['Eventos', 'Sponsors', 'Organizadores', 'Héroes', 'Únete ahora'];
    cy.get('.container.navbar .menu.menu-horizontal li a').each(($el, index) => {
      cy.wrap($el).should('be.visible').and('have.text', options[index]);
    });
  });

  it('displays Jumbotron', () => {
    cy.get('article').first().find('h1').should('have.text', '¿Te apasiona Javascript?');

    cy.get('article')
      .first()
      .find('p')
      .invoke('text')
      .then((text) => {
        expect(text.replace(/\n/g, '')).to.equal('Únete a nuestra comunidad de desarrolladores entusiastas, en Barranquilla y la Costa');
      });

    cy.get('article')
      .first()
      .find('a')
      .first()
      .invoke('text')
      .then((text) => {
        expect(text.replace('  ', '').replace(' ', '')).to.equal('Unirme a la comunidad');
      });

    cy.get('article').first().find('h2').should('have.text', 'Síguenos en nuestras redes');
  });
});
