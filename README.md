# Formação Front-end - Parte 3: React e TypeScript ⚛️

Este repositório faz parte da minha jornada na **Formação Front-end** do Matheus Battisti (Hora de Codar). O objetivo desta etapa é dominar a biblioteca front-end mais requisitada do mercado e combiná-la com o poder da tipagem estática, criando aplicações web modernas, dinâmicas, seguras e escaláveis.

> **Nota:** Este é o terceiro e último de uma série de repositórios que compõem a formação completa (HTML/CSS, JavaScript, React e TypeScript).

## 📚 Sobre este Módulo
Neste módulo, o foco principal é o **React JS** em conjunto com o **TypeScript**. Aqui, damos um grande salto em relação ao JavaScript puro (Vanilla JS) e começamos a construir aplicações web robustas pensando de forma modular, reutilizável e com controle rigoroso de dados e interfaces.

### Principais tópicos abordados:
* **Fundamentos do React:** JSX, criação, renderização e hierarquia de componentes.
* **Gerenciamento de Dados:** Utilização de Props, State Lift (elevação de estado) e consumo de APIs.
* **React Hooks:** Domínio de hooks essenciais (como `useState`, `useEffect`, etc.) para lidar com o ciclo de vida e reatividade.
* **Context API:** Gerenciamento avançado de estados globais na aplicação.
* **Imersão em TypeScript:** Tipagem estática, interfaces, types e como integrar TS com React seguindo as melhores práticas (Clean Code) exigidas pelo mercado.

---

## 📂 Estrutura de Aprendizado
O repositório está organizado por módulos seguindo a cronologia do curso:

1. **`1_INTRO/`**: Criação do primeiro projeto React (utilizando Vite), configuração do ambiente e entendimento da árvore de arquivos padrão.
2. **`2_FUNDAMENTOS/`**: Entendendo a Componentização, JSX, Template Expressions, hierarquia de componentes e manipulação de Eventos.
3. **`3_AVANCANDO/`**: Aprofundamento em React com Hooks (`useState`), renderização de listas, props, Fragments, children e elevação de estado (State Lift).
4. **`4_CSS_REACT/`**: Estilização em React usando CSS global, inline dinâmico e a abordagem profissional de CSS Modules (Scoped CSS).
5. **`5_FORM_REACT/`**: Manipulação de formulários, inputs controlados (Controlled Components), textareas, selects e submissão de dados.
6. **`6_PROJETO_IMC/`**: Recriação da Calculadora de IMC, agora totalmente componentizada e com gestão de estado no React.
7. **`7_HTTP_REACT/`**: Requisições para APIs com o hook `useEffect`, criação de Custom Hooks (`useFetch`) para reaproveitamento e estados de carregamento (Loading).
8. **`8_PROJETO_MULTISTEP/`**: Construção de um formulário avançado com múltiplas etapas (Multi-step form) focado em componentização e hooks customizados.
9. **`9_ROUTER/`**: Implementação de navegação Single Page Application (SPA) utilizando o React Router, com rotas dinâmicas, links e páginas de erro (404).

---

## 💻 Projetos em Destaque

### ⚖️ Calculadora de IMC (React)
A clássica calculadora de saúde recriada do zero utilizando o ecossistema React. Demonstra perfeitamente a diferença entre manipular o DOM diretamente no JavaScript puro e utilizar o `useState` para controlar renderizações condicionais e a atualização da interface de forma puramente reativa.

### 📝 Formulário Multi-step
Um formulário de avaliação dividido em várias etapas interativas. Este projeto foca numa arquitetura inteligente de componentes, passagem de `props` complexas e na criação de um **Custom Hook** para gerir o estado de qual passo o utilizador se encontra, permitindo avançar e retroceder sem perder os dados.

---

## 🔗 Outras Partes da Formação
* [Parte 1: HTML e CSS](https://github.com/mauricegss/ff-html-css)
* [Parte 2: JavaScript](https://github.com/mauricegss/ff-javascript)