/* ==========================================================================
   CONTEÚDO DO SITE
   Para adicionar algo, copie um bloco existente, cole na lista e edite.
   Nada aqui precisa de build: salvou, commitou, está no ar.
   ========================================================================== */

window.SITE = {
  nome: "Nestor Araujo",
  papel: "Engenheiro de dados",
  local: "São Paulo, SP",
    github: "https://github.com/nestoraraujo",
  linkedin: "https://www.linkedin.com/in/nestor-araujo-9aa06780/",

  apresentacao:
    "Construo pipelines, modelos e painéis, e ajudo times a tornar os dados confiáveis. " +
    "Comecei em BI e ERP em 1998 e hoje trabalho com engenharia e governança de dados na nuvem. " +
    "Este espaço reúne o que construí, o que estou testando e o que escrevi pelo caminho."
};

/* --------------------------------------------------------------------------
   PROJETOS (desenvolvimento)
   estado: "em andamento" | "concluído" | "em preparação"
   detalhes: lista de { titulo, texto } mostrada ao clicar em "Ver detalhes"
   -------------------------------------------------------------------------- */
window.PROJETOS = [
  {
    id: "rc18",
    titulo: "RC18: cadastro de regulatórios CADOC",
    estado: "em andamento",
    resumo:
      "Aplicação web que apoia o cumprimento da Resolução Conjunta nº 18/2025, sobre a qualidade da informação " +
      "prestada ao Banco Central. Cadastra os documentos regulatórios (CADOC), acompanha entregas e vencimentos " +
      "e avalia cada documento nas 12 dimensões de qualidade da norma.",
    tags: ["Regulatório", "Qualidade da informação", "JavaScript", "Banco Central"],
    links: [
      { rotulo: "Abrir a aplicação", url: "projetos/rc18/" }
    ],
    detalhes: [
      {
        titulo: "Para que serve",
        texto:
          "Dar à instituição um lugar único para saber quais regulatórios CADOC existem, em que situação estão, " +
          "quando vencem e se a informação enviada ao Banco Central atende aos critérios de qualidade da resolução."
      },
      {
        titulo: "O que a aplicação faz",
        texto:
          "Cadastro e situação dos CADOC, registro de entregas, mapa de entregas e próximos vencimentos, " +
          "avaliação das 12 dimensões com matriz de conformidade, indicadores de qualidade, alerta antecipado de problemas, " +
          "documentação do dicionário de dados, trilha de auditoria e exportação em CSV."
      },
      {
        titulo: "Sobre os dados",
        texto:
          "A aplicação publicada aqui começa vazia. Tudo o que você cadastrar fica salvo apenas no seu navegador."
      }
    ]
  },
  {
    id: "dashboard-kpis-governanca",
    titulo: "Painel de KPIs de governança de dados",
    estado: "concluído",
    resumo:
      "Painel em Power BI, com 13 páginas, que acompanha a saúde da governança de dados: " +
      "visão executiva, evolução e metas, sensibilidade, ownership, linhagem, qualidade, " +
      "metadados, uso e criticidade, domínios e times, ativos e glossário de indicadores.",
    tags: ["Power BI", "DAX", "Governança de dados", "KPIs e OKRs"],
    links: [
      { rotulo: "Baixar o arquivo do Power BI (.pbix)", url: "projetos/dashboard-kpis/KPIs_Governanca_Dados-v4.pbix" },
      { rotulo: "Guia que embasa o painel", url: "publicacoes/Guia_Completo_Governanca_de_Dados.pdf" }
    ],
    detalhes: [
      {
        titulo: "Para que serve",
        texto:
          "Mostrar, para quem decide e para quem opera, se a governança está evoluindo: quanto dos dados " +
          "críticos tem dono, está classificado, tem linhagem e passa nas regras de qualidade."
      },
      {
        titulo: "Como está organizado",
        texto:
          "Uma página executiva com poucos números e a direção, páginas de aprofundamento por tema " +
          "(sensibilidade, ownership, linhagem, qualidade, metadados, uso) e páginas de detalhe por " +
          "domínio, time e ativo. Um glossário reúne a definição, a fórmula e o dono de cada indicador."
      },
      {
        titulo: "Sobre os dados",
        texto:
          "Projeto entregue e disponível como exemplo. O arquivo pode ser baixado e aberto no Power BI Desktop."
      }
    ]
  },
  {
    id: "avaliador-pac",
    titulo: "Avaliador de documentação de entidades no Confluence",
    estado: "concluído",
    resumo:
      "Programa em Python que audita páginas de documentação de dados no Confluence. " +
      "Combina regras objetivas com uma avaliação feita por LLM e devolve nota, evidência e sugestão de melhoria por página.",
    tags: ["Python", "Confluence", "BeautifulSoup", "LLM (Claude)", "Excel"],
    links: [],
    detalhes: [
      {
        titulo: "Como funciona",
        texto:
          "Três camadas. Primeiro, lê o HTML da página e agrupa o conteúdo por seção canônica, " +
          "aceitando variações de título. Depois, aplica checagens objetivas: campos do resumo, seções " +
          "obrigatórias e resíduos do template que ninguém preencheu. Por fim, uma rubrica de 0 a 3 julgada " +
          "por LLM avalia objetivo, regras de negócio, dicionário de colunas, linhagem e operação."
      },
      {
        titulo: "Decisões de projeto",
        texto:
          "A nota mede se o documento responde ao critério; melhorias de redação viram sugestão com prioridade, " +
          "sem baixar a nota. Seções vazias podem estar cobertas em outra parte da página, e respostas " +
          "explícitas de “não se aplica” não contam como lacuna. Rubrica e pesos ficam em um bloco de configuração."
      },
      {
        titulo: "Resultado",
        texto:
          "Uma planilha com nota final ponderada, justificativas e a lista do que ajustar para subir cada nota, " +
          "em lote, para uma árvore inteira de páginas."
      }
    ]
  }
];

/* --------------------------------------------------------------------------
   LABORATÓRIO (experimentos pequenos, ferramentas de uma página, rascunhos)
   Cada experimento pode ser uma pasta em /laboratorio com um index.html.
   -------------------------------------------------------------------------- */
window.LAB = [
  {
    titulo: "Calculadora de score de qualidade",
    resumo:
      "Informe as regras, a conformidade e o peso de cada uma. Veja o score ponderado e a faixa (verde, amarelo ou vermelho).",
    tags: ["HTML", "JavaScript"],
    data: "2026-11",
    url: "laboratorio/score-qualidade/"
  }
];

/* --------------------------------------------------------------------------
   PUBLICAÇÕES (guias, livros, artigos)
   cor: cor da capa gerada. arquivo: caminho do PDF (vazio = ainda não publicado).
   -------------------------------------------------------------------------- */
window.PUBLICACOES = [
  {
    titulo: "Governança de Dados: guia de estudo completo",
    subtitulo: "Do conceito à operação ágil",
    resumo:
      "Dez capítulos: governança e gestão, Big Data, metadados, linhagem, qualidade, ética e privacidade, " +
      "agilidade (DAD e SAFe), monitoramento contínuo e visuais para KPIs e OKRs.",
    formato: "PDF · 55 páginas",
    cor: "#17686B",
    arquivo: "publicacoes/Guia_Completo_Governanca_de_Dados.pdf"
  },
  {
    titulo: "Governança de Dados: guia de estudo ilustrado",
    subtitulo: "Uma ilustração por tema",
    resumo:
      "Catorze capítulos e um anexo em formato de uma página por tema, com conceitos-chave, " +
      "ideia de indicador e pergunta para fixar.",
    formato: "PDF · 18 páginas",
    cor: "#B8742A",
    arquivo: "publicacoes/Guia_Ilustrado_Governanca_de_Dados.pdf"
  },
  {
    titulo: "Emagrecer com saúde: guia prático",
    subtitulo: "Alimentação, treino de força, Tai Chi e sono",
    resumo:
      "Plano em números, método do prato, treino em casa com sete exercícios ilustrados, rotina de Tai Chi e acompanhamento.",
    formato: "PDF · 22 páginas",
    cor: "#3F6F4A",
    arquivo: "publicacoes/Guia_Emagrecimento_Saudavel_112kg_a_90kg.pdf"
  }
];

/* --------------------------------------------------------------------------
   IDEIAS E COLABORAÇÕES
   estado: "explorando" | "rascunhando" | "procurando parceria"
   -------------------------------------------------------------------------- */
window.IDEIAS = [
  {
    titulo: "Classificação que acompanha o dado pela linhagem",
    texto:
      "A etiqueta de sensibilidade de uma coluna se propaga para tudo que deriva dela, e muda quando há tokenização.",
    estado: "explorando"
  },
  {
    titulo: "Definição de pronto para entregas de dados",
    texto:
      "Dono, descrição, classificação, regras de qualidade e linhagem verificados automaticamente no pipeline.",
    estado: "explorando"
  },
  {
    titulo: "Observabilidade de dados como produto",
    texto:
      "Frescor, volume, esquema e distribuição monitorados com alertas que têm dono e instrução de resposta.",
    estado: "procurando parceria"
  }
];

window.COLABORACAO =
  "Converso com prazer sobre engenharia de dados, governança, observabilidade e formação de times. " +
  "Se algo aqui combina com o que você faz, escreva.";

/* --------------------------------------------------------------------------
   CURRÍCULO (resumo público; sem telefone nem endereço)
   -------------------------------------------------------------------------- */
window.CURRICULO = {
  resumo:
    "Engenheiro de dados com mais de 25 anos de estrada, de BI e ERP à nuvem. Passei por Oracle, SAP BW e HANA, " +
    "liderei equipes de BW e hoje trabalho com data warehouse, AWS Redshift e Power BI. " +
    "Como líder do chapter de dados, mentoro times em engenharia, governança, metadados e observabilidade.",
  arquivo: "",
  experiencia: [
    {
      periodo: "1998 – 2004",
      cargo: "BI e ERP",
      texto: "Business intelligence financeiro e de RH, ETL e OLAP, e módulos do Oracle EBS em uma grande indústria e em projetos de consultoria."
    },
    {
      periodo: "2005 – 2013",
      cargo: "SAP BW e liderança de equipes",
      texto: "Consultor e líder de equipes de BW em grandes indústrias, com um projeto nos Estados Unidos. Requisitos, modelagem, construção e treinamento."
    },
    {
      periodo: "2014 – 2019",
      cargo: "Do BW ao HANA",
      texto: "Liderança da equipe de BW no Brasil, integração com sistemas de forecast e início da migração para BW on HANA."
    },
    {
      periodo: "2019 – hoje",
      cargo: "Nuvem, governança e mentoria",
      onde: "PagBank",
      texto: "Data warehouses e relatórios regulatórios, migração de relatórios estratégicos para AWS Redshift e Power BI. Líder do chapter de dados: mentoria de times, governança e metadados, produtos de dados, observabilidade, CI/CD e apoio à auditoria SOX."
    }
  ],
  competencias: [
    { grupo: "Dados", itens: ["SQL", "Modelagem de dados", "Data warehouse", "AWS Redshift", "Amazon S3", "SAP BW e HANA"] },
    { grupo: "Visualização", itens: ["Power BI", "Looker"] },
    { grupo: "Programação", itens: ["Python"] },
    { grupo: "Gestão", itens: ["Metodologia PMI", "Liderança de equipes", "Governança e metadados", "Formação de times"] }
  ],
  formacao: [
    "MBA em Ciência de Dados, IGTI – XP Educação",
    "MBA em Gestão Empresarial com suporte em ERP (SAP), FIAP",
    "Bacharelado em Ciência da Computação, UNIFAI"
  ]
};
