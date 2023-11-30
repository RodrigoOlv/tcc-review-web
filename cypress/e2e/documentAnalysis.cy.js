describe('Document Processing Sequence', () => {
  it('should initiate document processing and display "Aguarde..." on button click', () => {
    // Acessar http://localhost:8080
    cy.visit('http://localhost:8080');

    // Preencher o input de id docs-id com a URL fornecida
    cy.get('#docs-id').type('https://docs.google.com/document/d/1EV7TzHDPC4eodQc8Qq9VnVEIlUvvflhadDDmdYLMW-8/edit');

    // Clicar no botão de id btn-submit usando {force: true}
    cy.get('#btn-submit').click({ force: true });

    // Aguarde a resposta assíncrona
    cy.contains('Aguarde...'); // Verificar se o botão contém o texto "Aguarde..."
  });

  it('should initiate document processing and display "Aguarde..." on button click', () => {
    // Acessar http://localhost:8080
    cy.visit('http://localhost:8080');

    // Preencher o input de id docs-id com a URL fornecida
    cy.get('#docs-id').type('https://docs.google.com/document/d/1EV7TzHDPC4eodQc8Qq9VnVEIlUvvflhadDDmdYLMW-8/edit');

    // Clicar no botão de id btn-submit usando {force: true}
    cy.get('#btn-submit').click({ force: true });

    // Aguarde a resposta assíncrona
    cy.get('#btn-submit').should('be.disabled'); // Verificar se o botão está desabilitado
    cy.contains('Aguarde...'); // Verificar se o texto "Aguarde..." está presente na página
  });
  
  it('should display error message when #docs-id is empty', () => {
    // Acessar http://localhost:8080
    cy.visit('http://localhost:8080');

    // Clicar no botão de id btn-submit
    cy.get('#btn-submit').click({ force: true });

    // Verificar se há uma mensagem de erro
    cy.get('.error-message')
        .should('be.visible')
        .contains('Erro ao buscar texto gerado. Verifique sua conexão e tente novamente.'); // Ajuste a mensagem conforme necessário
  });
});
