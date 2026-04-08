# A Biblioteca Viva 📚

Uma experiência narrativa tátil e moderna para amantes de livros. Este projeto é uma plataforma para acompanhar o progresso de leitura, participar de discussões na comunidade e descobrir novas histórias, tudo com uma interface polida e animações fluidas.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca para construção da interface.
- **Vite** - Build tool extremamente rápida para desenvolvimento web.
- **Tailwind CSS 4** - Framework CSS utilitário para estilização moderna.
- **Framer Motion (motion/react)** - Biblioteca para animações e transições fluidas.
- **Lucide React** - Conjunto de ícones bonitos e consistentes.
- **React Router Dom** - Gerenciamento de rotas da aplicação.
- **TypeScript** - Tipagem estática para maior segurança no código.

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (Versão 18 ou superior recomendada)
- [npm](https://www.npmjs.com/) (Geralmente vem com o Node.js)

## 🛠️ Instalação e Execução Local

Siga os passos abaixo para rodar o projeto em sua máquina:

1. **Clone o repositório ou baixe os arquivos.**

2. **Abra o terminal na pasta raiz do projeto.**

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acesse a aplicação:**
   O terminal exibirá um link (geralmente `http://localhost:3000`). Abra-o no seu navegador.

## 🏗️ Scripts Disponíveis

No diretório do projeto, você pode executar:

- `npm run dev`: Inicia o servidor de desenvolvimento com Hot Module Replacement (HMR).
- `npm run build`: Compila a aplicação para produção na pasta `dist/`.
- `npm run preview`: Visualiza localmente o build de produção.
- `npm run lint`: Executa a verificação de tipos do TypeScript.
- `npm run clean`: Remove a pasta `dist/`.

## 📂 Estrutura do Projeto

- `src/components/`: Componentes reutilizáveis da interface (Navbar, Footer, Layout).
- `src/pages/`: Páginas principais da aplicação (Home, Library, Community, Profile, BookDetails).
- `src/lib/`: Utilitários e configurações (ex: `utils.ts` para Tailwind Merge).
- `src/App.tsx`: Configuração de rotas e estrutura global.
- `src/main.tsx`: Ponto de entrada da aplicação.
- `src/index.css`: Estilos globais e importação do Tailwind.

## 📝 Notas de Integração (Backend)

O código atual utiliza dados estáticos para demonstração da interface. Procure pelos comentários `// BACKEND:` nos arquivos da pasta `src/` para identificar onde as integrações com APIs e Banco de Dados devem ser realizadas.

---
Desenvolvido com ❤️ para amantes da leitura.
