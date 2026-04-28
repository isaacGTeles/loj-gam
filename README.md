# 🎮 Loja de Games - Gerenciador de Catálogo

Projeto desenvolvido para a unidade curricular de **Frameworks e Consumo de APIs**. A aplicação consiste em um sistema de gerenciamento de jogos, permitindo o controle completo de um catálogo (CRUD) integrando um frontend moderno em **Angular** com um backend simulado em **Node.js**.

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar a aplicação em sua máquina local:

### 1. Requisitos Próximos
* **Node.js 24** ou superior
* **Angular CLI** instalado (`npm install -g @angular/cli`)

### 2. Iniciar o Backend (API Simulada)
Na raiz do projeto, execute o comando para subir o servidor de dados:
```bash
npx json-server --watch db.json
```
O servidor rodará em: http://localhost:3000

### 3. Iniciar o Frontend (Angular)
Em um novo terminal, instale as dependências e inicie a aplicação:

```Bash
npm install
ng serve
```
Acesse no navegador: http://localhost:4200

### 🔐 Acesso ao Sistema (Login)
Para navegar nas áreas restritas da aplicação, utilize as credenciais abaixo:

```
E-mail: admin@teste.com

Senha: 123
```

### 🛠️ Tecnologias Utilizadas
Angular 21: Framework principal utilizando Componentes Standalone.

Signals: Gerenciamento de estado reativo para alta performance.

Angular Material: Biblioteca de componentes de UI (Cards, Forms, Buttons).

JSON-Server: Simulação de API RESTful para persistência de dados.

TypeScript: Tipagem forte para maior segurança no desenvolvimento.

### 📂 Funcionalidades (CRUD)
[x] Autenticação: Validação de credenciais e proteção de rotas.

[x] Listagem (Read): Exibição dinâmica de jogos via API através de Signals.

[x] Cadastro (Create): Inclusão de novos títulos com envio de payload JSON via POST.

[x] Exclusão (Delete): Remoção de itens com atualização automática da interface (sem refresh).

### 📁 Estrutura do Projeto
src/app/components: Componentes de interface (Login, Home, Cadastro).

src/app/services: Lógica de consumo de API (HttpClient).

src/app/models: Interfaces de dados (Tipagem do Jogo).

src/app/app.routes.ts: Definição de rotas e navegação.

db.json: Base de dados local.
