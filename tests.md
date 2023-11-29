# Testes Cypress - Document Processing Sequence

## Teste 1: Iniciar o processamento do documento e exibir "Aguarde..." no clique do botão

1. Acesse [http://localhost:8080](http://localhost:8080).
2. Preencha o campo de ID do documento (`#docs-id`) com a URL fornecida.
3. Clique no botão de envio (`#btn-submit`) usando `{force: true}` para forçar a ação, mesmo se o botão estiver desabilitado.
4. Aguarde a resposta assíncrona.
5. Verifique se o botão contém o texto "Aguarde..." indicando que o processamento foi iniciado.

## Teste 2: Iniciar o processamento do documento e exibir "Aguarde..." no clique do botão (verificando o estado do botão)

1. Acesse [http://localhost:8080](http://localhost:8080).
2. Preencha o campo de ID do documento (`#docs-id`) com a URL fornecida.
3. Clique no botão de envio (`#btn-submit`) usando `{force: true}` para forçar a ação, mesmo se o botão estiver desabilitado.
4. Aguarde a resposta assíncrona.
5. Verifique se o botão está desabilitado e se contém o texto "Aguarde..." indicando que o processamento foi iniciado.

## Teste 3: Exibir mensagem de erro quando #docs-id estiver vazio

1. Acesse [http://localhost:8080](http://localhost:8080).
2. Clique no botão de envio (`#btn-submit`) usando `{force: true}` para forçar a ação, mesmo sem preencher o campo de ID do documento.
3. Verifique se há uma mensagem de erro (`error-message`) visível.
4. Confirme se a mensagem de erro contém o texto "Erro ao buscar texto gerado. Verifique sua conexão e tente novamente." (ajuste conforme necessário).

---

**Observação:** Certifique-se de executar esses testes em um ambiente local onde o servidor esteja em execução e acessível em [http://localhost:8080](http://localhost:8080).
