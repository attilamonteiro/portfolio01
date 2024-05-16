// main.js
import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM completamente carregado e analisado");
menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".rotadash",
  `Desenvolvedor Fullstack | Node.js | React Native
  Rota Financeira · Meio período
  jan de 2023 - o momento · 1 ano 5 meses
  Rio de Janeiro, Brasil · Remota
  A Rota Financeira é a solução definitiva para motoristas de aplicativo alcançarem o sucesso nos aplicativos de corrida. Nosso aplicativo de gestão simplifica a vida dos motoristas, proporcionando controle total do negócio. Equilibre receitas, despesas e metas de forma eficiente. Domine o volante do seu destino financeiro com nossa plataforma intuitiva e poderosa. Junte-se a nós!
  `,
  "Desenvolvedor Fullstack",
  "Rota Financeira",
  "jan de 2023 - o momento"
);

hoverChangeExperience(
  ".glitchfactory",
  `Gamer Developer
  Glitch Factory · Estágio
  dez de 2023 - mai de 2024 · 6 meses
  Remota
  Desenvolvimento de jogos com Unity/c#
  `,
  "Gamer Developer",
  "Glitch Factory",
  "dez de 2023 - mai de 2024"
);

hoverChangeExperience(
  ".rufustechnologies",
  `Desenvolvedor Fullstack Jr. | Node.js | Vue.js
  RUFUS Technologies · Tempo integral
  mai de 2023 - set de 2023 · 5 meses
  Rio de Janeiro, Brasil · Remota
  Experiência em Vue.js e Vuetify, com ênfase em interfaces para sistemas de gerenciamento. Destaque em lógicas eficientes para adição de eventos em calendários. Expertise inclui análises, otimização de fluxos Vue.js e criação de interfaces para aprimorar a usabilidade.
  `,
  "Desenvolvedor Fullstack Jr.",
  "RUFUS Technologies",
  "mai de 2023 - set de 2023"
);

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem de marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação que permite a você implementar elementos dinâmicos em páginas web."
);
hoverChangeDescription(
  ".sass",
  "Sass é um pré-processador CSS que adiciona alguns recursos que não estão disponíveis de forma nativa."
);
hoverChangeDescription(
  ".react",
  "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada."
);
hoverChangeDescription(
  ".next",
  "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React."
);
hoverChangeDescription(
  ".styled",
  "styled-components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS é um framework CSS que nos fornece classes utilitárias com o propósito de estilizar as páginas."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática."
);
hoverChangeDescription(
  ".radix",
  "Radix é uma biblioteca que fornece componentes acessíveis e sem estilos para a criação de aplicação em React."
);
hoverChangeDescription(
  ".cypress",
  "Cypress é um framework para automação de testes end-to-end, onde atualmente usa a linguagem JavaScript."
);
hoverChangeDescription(
  ".storybook",
  "Storybook é uma ferramenta que tem como objetivo documentar e testar os componentes da aplicação."
);
})