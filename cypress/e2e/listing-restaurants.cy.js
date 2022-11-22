describe('Listing Restaurants', () => {
  it('shows restaurantss from the server', () => {
    const sushiPlace = 'Sushi Place';
    const pizzaPlace = 'Pizza Place';

    cy.intercept('GET', 'https://api.outside.in/*/restaurants', [
      {id: 1, name: sushiPlace},
      {id: 2, name: pizzaPlace},
    ]);

    cy.visit('/');
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});
