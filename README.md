# Sistema de Perguntas e Respostas

Este projeto é uma aplicação simples de perguntas e respostas desenvolvida com Node.js, Express, Sequelize e EJS. Ele permite que os usuários publiquem perguntas e adicionem respostas às perguntas já cadastradas.

---

## 🚀 Funcionalidades

- Cadastrar perguntas com título e descrição.
- Visualizar perguntas cadastradas.
- Adicionar respostas às perguntas existentes.

---

## 📦 Estrutura do Projeto

```plaintext
projeto_node_01/
│
├── database/               # Configuração do banco de dados e modelos
│   ├── database.js         # Conexão com o banco de dados
│   ├── Models.js           # Modelo para perguntas
│   └── Resposta.js         # Modelo para respostas
│
├── public/                 # Arquivos estáticos (CSS, JS, imagens)
│
├── views/                  # Templates EJS para renderização das páginas
    └── partials
        ├── header.ejs
        ├── navbar.ejs
        └── footer.ejs        
│   ├── index.ejs           # Página inicial com a lista de perguntas
│   ├── perguntar.ejs       # Página para cadastrar uma pergunta
│   └── pergunta.ejs        # Página de detalhes de uma pergunta
│
├── index.js                # Arquivo principal da aplicação
├── package.json            # Dependências do projeto
└── README.md               # Documentação do projeto
