# 💍 Lariel — Painel Administrativo

Interface administrativa da plataforma Lariel, desenvolvida para permitir que o casal gerencie convites, convidados e mensagens enviadas pelo site público.

Este painel é responsável pelo controle total das informações do evento, garantindo organização, moderação e atualização em tempo real dos dados exibidos aos convidados.

---

## 📌 Status do Projeto

🚧 Em desenvolvimento contínuo  
✔ CRUD de convites implementado  
✔ CRUD de convidados implementado  
✔ Sistema de moderação de recados funcional  

---

## 🎯 Objetivo

Fornecer ao casal uma ferramenta segura e intuitiva para:

- Gerenciar convites físicos e virtuais  
- Controlar a lista de convidados  
- Acompanhar confirmações de presença  
- Moderar mensagens enviadas ao mural  

---

## 🚀 Funcionalidades

### 📩 Gestão de Convites

- Criar novo convite  
- Editar convite existente  
- Excluir convite  
- Visualizar ID do convite  
- Acessar convidados vinculados ao convite  

Cada convite funciona como um identificador único que conecta o grupo familiar aos seus respectivos convidados.

---

### 👥 Gestão de Convidados

- Adicionar convidado ao convite  
- Editar informações do convidado  
- Atualizar status de presença:
  - Confirmado (C)
  - Ausente (A)
  - Pendente (P)
- Remover convidado  

O sistema permite controle individual por convidado, facilitando o acompanhamento do RSVP.

---

### 📝 Moderação de Recados

Quando um visitante envia uma mensagem pelo site público:

1. O recado é salvo como **pendente**
2. No painel administrativo o casal pode:
   - ✅ Aceitar → move para recados aceitos e publica no mural
   - ❌ Recusar → remove permanentemente do sistema

Seções disponíveis:

- Recados Pendentes  
- Recados Aceitos  

---

## 🏗 Arquitetura

O painel administrativo integra-se com:

- API REST (Backend Java / Quarkus)
- Banco de dados Oracle
- Sistema de atualização em tempo real via requisições HTTP

Fluxo geral:

Frontend ADM → API REST → Banco Oracle → Atualização no Frontend Público

---

## 🛠 Tecnologias Utilizadas

### Frontend
- React
- Vite
- TypeScript
- Tailwind CSS

### Backend (Integração)
- Java
- Quarkus
- Deploy via Render

### Banco de Dados
- Oracle SQL
- Oracle SQL Developer
- Oracle Data Modeler

### Versionamento
- Git
- GitHub

---

## Link deploy vercel
https://lariel-adm.vercel.app

### 👨‍💻 Autor

Moisés Waidemann Molinillo Júnior

Desenvolvedor responsável por toda a arquitetura, implementação e integração do sistema.

⸻

📞 Contato

📧 Email: mjrmolinllo@icloud.com

🌐 GitHub: https://github.com/Waidemannm/lariel_front-ADM

## ⚙ Instalação

```bash
# Clone o repositório
git clone https://github.com/Waidemannm/lariel_front_adm.git

# Entre na pasta do projeto
cd lariel_front_adm

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev