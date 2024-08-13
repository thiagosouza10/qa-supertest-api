# Introdução  
Projeto de API com Supertest e Jest para automatizar a API https://serverest.dev/

# Instalação  
## Pré-requisitos  
* Instalar o Node.js: https://nodejs.org/en/download/package-manager  

## Dependências  
Instalação das dependências:  
Na pasta raiz executar o comando: `npm install`  

# Execução dos testes  
Existem alguns pré-requisitos para a execução dos testes que serão detalhados à seguir.  

## Variáveis de Ambiente
Para a execução dos testes, é necessária a presença de um arquivo `.env`.  
Podemos criar o arquivo de nome `api.env` na raiz do projeto.  
```
BASE_URL = https://serverest.dev
```

Para executar todos os testes utilize o comando `npx jest` 

# Relatório  
Após execução dos testes será gerado um relatório HTML na pasta: `/logs` 

# Documentações
Jest: https://jestjs.io/pt-BR/docs/getting-started
SuperTest: https://github.com/ladjs/supertest