# QA Web Automation – Cypress

Este repositório é um **projeto de portfólio de Automação de Testes em QA**, utilizando **Cypress** para testes end-to-end (E2E) em aplicações web.

O objetivo principal é demonstrar **boas práticas reais de automação**, com foco em estabilidade, organização e legibilidade dos testes.

---

## 🎯 Objetivos do Projeto

- Aplicar boas práticas de automação de testes web
- Criar testes E2E estáveis e fáceis de manter
- Utilizar fixtures para dados de teste
- Separar cenários por responsabilidade
- Preparar a estrutura para evolução do projeto

---

## 🛠 Tecnologias e Ferramentas

- **Cypress** – Automação de Testes E2E
- **JavaScript**
- **Node.js**
- **VS Code**
- **Google Chrome**

---

## 🌐 Aplicação Testada

**OrangeHRM Demo**

- URL: https://opensource-demo.orangehrmlive.com
- Aplicação pública utilizada para fins de teste

---

## ✅ Cenários Automatizados

- Login com credenciais válidas
- Tentativa de login com credenciais inválidas e validação de mensagem de erro

---

## 📁 Estrutura do Projeto

```text
cypress/
├─ e2e/
│  ├─ login-success.cy.js      # Cenário de login com sucesso
│  └─ login-invalid.cy.js      # Cenário de login inválido
├─ fixtures/
│  └─ users.json               # Massa de dados de teste
├─ pages/
│  └─ LoginPage.js             # Page Object preparado para uso futuro
├─ support/
│  ├─ commands.js              # Comandos customizados do Cypress
│  └─ e2e.js
