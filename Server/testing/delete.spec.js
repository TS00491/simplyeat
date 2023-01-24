//Delete Restaurant
describe('Delete Restaurant', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('Deletes a restaurant by ID', () => {
      cy.get('[data-testid="restaurant-list"]').find('li').first().then(($li) => {
        const id = $li.data('id');
        cy.get('[data-testid="delete-button"]').first().click();
        cy.get('[data-testid="confirm-delete-button"]').click();
        cy.get('[data-testid="restaurant-list"]').should('not.contain', id);
      });
    });
  });