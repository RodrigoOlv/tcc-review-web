describe('Document Processing', () => {
    it('should load the home page', () => {
        cy.visit('/');
        cy.contains('Welcome to Document Processing System');
    });
  
    it('should process a document', () => {
        cy.visit('/document-processing');
        // Substitua 'example-url' pela URL real ou use uma URL inválida para testar a manipulação de erros.
        cy.get('input[name="documentUrl"]').type('example-url');
        cy.get('button[type="submit"]').click();
        cy.contains('Document processed successfully');
    });
  
    it('should handle invalid document URL', () => {
        cy.visit('/document-processing');
        cy.get('input[name="documentUrl"]').type('invalid-url');
        cy.get('button[type="submit"]').click();
        cy.contains('Invalid URL');
    });

    it('should display error message when #docs-id is empty', () => {
        // Acessar http://localhost:8080
        cy.visit('http://localhost:8080');
    
        // Clicar no botão de id btn-submit
        cy.get('#btn-submit').click();
    
        // Verificar se há uma mensagem de erro
        cy.get('.error-message').should('be.visible');
        cy.contains('Erro ao buscar texto gerado. Verifique sua conexão e tente novamente.'); // Pode ajustar a mensagem conforme necessário
    });
});
  