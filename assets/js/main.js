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
    `Desenvolvedor Fullstack
    Rota Financeira · Junior
    jan de 2023 - o momento
    O Rota Financeira é um aplicativo desenvolvido para a gestão e controle de manutenção de motoristas de Uber, focado na otimização de processos e redução de custos operacionais. Utilizando Vue.js com Quasar Framework no front-end, o aplicativo oferece interfaces dinâmicas e responsivas, enquanto o back-end, implementado em Nest.js com Node.js e TypeScript, garante uma API RESTful robusta e escalável. Com funcionalidades como cadastro de veículos, registro de despesas, controle de manutenções e geração de relatórios, o projeto centraliza informações essenciais para melhor gerenciamento financeiro e operacional.
    `,
    "Desenvolvedor Fullstack",
    "Rota Financeira",
    "jan de 2023 - o momento"
  );

  hoverChangeExperience(
    ".glitchfactory",
    `Gamer Developer
    Glitch Factory · Estágio
    dez de 2023 - abr de 2024
    Durante meu estágio contínuo na Glitch Factory desde dezembro de 2023, tenho adquirido valiosa experiência no desenvolvimento de jogos, utilizando Unity e C#. Contribuo ativamente para o processo de criação, implementação de recursos e trabalho colaborativo em um ambiente de equipe dinâmico. Essa oportunidade tem fortalecido minhas habilidades técnicas e proporcionado insights valiosos sobre a indústria de jogos.
    `,
    "Gamer Developer",
    "Glitch Factory",
    "dez de 2023 - abr de 2024"
  );

  hoverChangeExperience(
    ".rufustechnologies",
    `Desenvolvedor Fullstack Jr.
    Rufus Technologies · Tempo integral
    mai de 2023 - set de 2023
    Experiência em Vue.js e Vuetify, com ênfase em interfaces para sistemas de gerenciamento. Destaque em lógicas eficientes para adição de eventos em calendários. Expertise inclui análises, otimização de fluxos Vue.js e criação de interfaces para aprimorar a usabilidade.
    `,
    "Desenvolvedor Fullstack Jr.",
    "Rufus Technologies",
    "mai de 2023 - set de 2023"
  );

  hoverChangeExperience(
    ".leste",
    `Desenvolvedor Fullstack
    Leste · Estágio
    jun de 2024 - o momento
    Atuando no desenvolvimento de sistemas utilizando Vue.js, Quasar Framework e TypeScript, focando na criação de interfaces dinâmicas e responsivas para aplicações de investimento. Participo na implementação de APIs em C# com arquitetura .NET (Domain, Infrastructure, API), garantindo uma comunicação eficiente entre frontend e backend. Utilizo Entity Framework e LINQ para manipulação de dados e realizar consultas otimizadas. Além disso, sou responsável pela integração de APIs RESTful e pela otimização de componentes, melhorando o desempenho das interfaces e a experiência do usuário.
    `,
    "Desenvolvedor Fullstack",
    "Leste",
    "jun de 2024 - o momento"
  );

  hoverChangeExperience(
    ".fab",
    `Sargento eletromecânico
    Força Aérea Brasileira · Órgão Público
    dez de 2012 - dez de 2019
    Atuei proativamente nos processos gerenciais, logísticos em alienação e transferência de veículos, contribui para a gestão de recursos na aquisição de novos veículos. Desenvolvi e executei procedimentos logísticos de vistoria, aprimorando a qualidade e garantindo conformidade. Colaborei na elaboração de relatórios gerenciais, destacando habilidades organizacionais e de comunicação na otimização dos processos e no atendimento satisfatório ao público.
    `,
    "Sargento eletromecânico",
    "Força Aérea Brasileira",
    "dez de 2012 - dez de 2019"
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
    ".typescript",
    "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática."
  );
  hoverChangeDescription(
    ".storybook",
    "Storybook é uma ferramenta que tem como objetivo documentar e testar os componentes da aplicação."
  );
  hoverChangeDescription(
    ".quasar",
    "Quasar é um framework baseado em Vue.js que permite criar aplicações web, mobile e desktop com uma única base de código."
  );
  hoverChangeDescription(
    ".nest",
    "Nest.js é um framework Node.js para a construção de aplicações server-side eficientes e escaláveis."
  );
  hoverChangeDescription(
    ".azuredevops",
    "Azure DevOps é um conjunto de ferramentas para colaboração no desenvolvimento de software, incluindo repositórios Git, pipelines de CI/CD, e gerenciamento de projetos."
  );
  hoverChangeDescription(
    ".dotnet",
    ".NET é uma plataforma de desenvolvimento de software livre e multiplataforma criada pela Microsoft, que permite a criação de diversos tipos de aplicações."
  );
  hoverChangeDescription(
    ".csharp",
    "C# é uma linguagem de programação moderna, orientada a objetos e fortemente tipada, desenvolvida pela Microsoft como parte da plataforma .NET."
  );
  hoverChangeDescription(
    ".sql",
    "SQL é uma linguagem padrão para gerenciamento de bancos de dados relacionais, permitindo a criação, leitura, atualização e exclusão de dados."
  );
  hoverChangeDescription(
    ".python",
    "Python é uma linguagem de programação de alto nível, interpretada e de propósito geral, conhecida por sua sintaxe clara e legibilidade."
  );
});