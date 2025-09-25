# Backlog Multi Times — Offline Ready

Aplicação simples de **gestão de iniciativas/backlog** para múltiplos times.  
Funciona **100% no navegador** (sem servidor), com **IndexedDB** e opção de **auto-save em arquivo local**.

👉 [Demonstração no GitHub Pages](https://SEU-USUARIO.github.io/backlog-app-manager/)  
*(substitua `SEU-USUARIO` pelo seu username do GitHub após publicar)*

---

## ✨ Funcionalidades
- Gestão de **times e pessoas**.
- Cadastro de **iniciativas** com título, descrição, responsável, status, prioridade, esforço, tags e links (Azure DevOps, Jira, HubSpot ou outro).
- **Kanban** com status:
  - Despriorizado  
  - A fazer  
  - Fazendo  
  - Bloqueado  
  - Feito
- **Drag & Drop** para mover e reordenar cards.
- **Modal de edição** com todos os campos.
- **Exportar/Importar** JSON e **Exportar CSV**.
- **IndexedDB** como armazenamento principal (robusto e offline).
- **Auto-save em arquivo local** (Chrome/Edge com File System Access API).
- **Tema Dark/Light** com toggle.
- Layout **responsivo**.

---

## 🚀 Como usar
1. Abra o [link do GitHub Pages](https://SEU-USUARIO.github.io/backlog-app-manager/) ou o `index.html` localmente.
2. Cadastre **times** e **pessoas**.
3. Crie **iniciativas** preenchendo os campos e adicionando links externos.
4. Arraste os cards no **Kanban** para organizar.
5. Clique em **Vincular arquivo (Auto-save)** para salvar automaticamente em um `.json` no seu computador (Chrome/Edge).

---

## 📦 Deploy no GitHub Pages
1. Crie um repositório no GitHub (ex.: `backlog-app-manager`).
2. Faça upload do `index.html` (e deste `README.md`).
3. Vá em **Settings → Pages**.
4. Em **Branch**, selecione `main` e pasta `/root`.
5. Salve.  
   Seu app ficará disponível em: https://SEU-USUARIO.github.io/backlog-app-manager/
---

## 🛠 Tecnologias
- **HTML5 / CSS3 / JavaScript** (puro, sem frameworks pesados).
- **Dexie.js** para IndexedDB.
- **File System Access API** (opcional, Chrome/Edge).
- Nenhum servidor ou backend necessário.

---

## 📄 Licença
Este projeto é de uso livre (MIT).  
Sinta-se à vontade para adaptar às suas necessidades.
