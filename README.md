# QA Web Automation - Cypress

## 📌 Descrição

Projeto de automação de testes E2E utilizando **Cypress**, focado em cenários de autenticação (login/logout) da aplicação **OrangeHRM Demo**.

Este repositório foi criado com objetivo de **estudo, prática e portfólio em QA Automation**, seguindo boas práticas de organização, nomenclatura e versionamento.



## 🧪 Cenários Automatizados

### 🔐 Login

* Login com credenciais válidas (sucesso)
* Login com credenciais inválidas
* Login sem informar senha
* Login com campos obrigatórios vazios
* Validação de mensagem de erro para login inválido

### 🚪 Logout

* Logout realizado com sucesso após login válido


### Navegação

* Validação de menu visível após login
* Navegação entre módulos
* Acesso a funcionalidades específicas (ex: Admin, PIM)


### Sessão

* Logout por encerramento de sessão
* Validação de comportamento de refresh de sessão


### 🔒 Segurança / Rota protegida

* Tentativa de acesso direto ao dashboard sem autenticação



## 📁 Estrutura do Projeto


cypress/
 ├─ e2e/                    # Testes E2E organizados por domínio
 │   ├─ login/              # Cenários de autenticação
 │   ├─ logout/             # Cenários de logout
 │   ├─ navigation/         # Navegação e menus
 │   ├─ session/            # Sessão e refresh
 │   └─ security/           # Segurança e rotas protegidas
 │
 ├─ fixtures/               # Massa de dados
 ├─ pages/                  # Page Objects
 ├─ support/                # Commands e configs globais




## ▶️ Como Executar o Projeto

### Pré-requisitos

* Node.js instalado
* Git instalado

### Instalação

```bash
npm install
```

### Abrir o Cypress (modo interativo)

```bash
npm run cy:open
```

### Executar os testes em modo headless

```bash
npm run cy:run
```

---

## 🛠 Tecnologias Utilizadas

* Cypress
* JavaScript
* Node.js
* Git / GitHub

---

## 📌 Observações

* O projeto utiliza a aplicação pública **OrangeHRM Demo** apenas para fins de estudo.
* Alguns cenários de segurança podem ser limitados por regras da aplicação externa.

---

## 👤 Autor

**Marcos Sapanhos**

QA Engineer | Testes Manuais e Automação
