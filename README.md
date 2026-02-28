# 🔍 Visualizador de Perfil do GitHub

Uma aplicação web interativa que permite aos usuários buscar e visualizar informações detalhadas de perfis do GitHub de forma rápida e elegante, consumindo diretamente a API oficial do GitHub.

![GitHub API](https://img.shields.io/badge/GitHub%20API-v3-black?style=for-the-badge&logo=github)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)
![CSS3](https://img.shields.io/badge/CSS3-Modular-blue?style=for-the-badge&logo=css3)

## 🚀 Funcionalidades

- **Busca em Tempo Real**: Encontre qualquer usuário do GitHub pelo seu username.
- **Informações do Perfil**: Exibição de foto de avatar, nome, biografia e estatísticas de seguidores/seguindo.
- **Listagem de Repositórios**: Mostra os 10 repositórios mais recentes do usuário.
- **Detalhes dos Repos**: Visualização de estrelas, forks, watchers e linguagem principal de cada projeto.
- **Responsividade**: Layout adaptável para diferentes tamanhos de tela.
- **Animações**: Interface fluida com feedbacks visuais durante a interação.

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estruturação semântica.
- **CSS3**: Estilização modularizada (Reset, Animations, Responsive, Profile).
- **JavaScript (ES6+)**: Lógica assíncrona com `async/await` e manipulação de DOM.
- **GitHub API**: Fonte de dados para perfis e repositórios.
- **Devicons**: Ícones estilizados para a interface.

## 📁 Estrutura do Projeto

```text
C:.
├── index.html          # Página principal
├── js/
│   ├── api.js          # Consumo da API do GitHub
│   ├── index.js        # Orquestração e eventos
│   └── renderProfile.js# Renderização dinâmica do perfil
└── src/
    └── css/
        ├── animations.css  # Efeitos e transições
        ├── profile.css     # Estilos do card de perfil
        ├── reset.css       # Reset de estilos padrão
        ├── responsive.css  # Media queries
        └── styles.css      # Estilos globais e container
```

## ⚙️ Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/GuilhermePinheiro-dev/Visualizador-perfil-GitHub.git
   ```
2. Navegue até a pasta do projeto.
3. Abra o arquivo `index.html` em seu navegador ou utilize a extensão **Live Server** no VS Code.
---
