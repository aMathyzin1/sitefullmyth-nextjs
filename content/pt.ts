import { SiteDictionary } from './types';

const baseUrl = 'https://amathyzin.com';

export const ptContent: SiteDictionary = {
  locale: 'pt',
  home: {
    seo: {
      title: 'aMathyzin - Otimizações gratuitas para máxima performance',
      description:
        'Otimizações, ferramentas e guias gratuitos para acelerar PCs fracos e fortes com a curadoria da comunidade aMathyzin.',
      keywords: [
        'otimização de PC',
        'amathyzin',
        'downloads gratuitos',
        'roblox',
        'valorant',
        'windows'
      ],
      image: `${baseUrl}/img/thumb.png`,
      url: `${baseUrl}/`
    },
    navigation: [
      { label: 'Início', href: '/' },
      { label: 'Downloads', href: '/downloads' },
      { label: 'Sobre', href: '/sobre' },
      { label: 'GitHub', href: 'https://github.com/aMathyzin', external: true },
      { label: 'Comunidade', href: 'https://amathyzin.com/discord', external: true },
      { label: 'Vídeos', href: 'https://www.youtube.com/@aMathyzin', external: true }
    ],
    hero: {
      eyebrow: 'Ecossistema de performance',
      title: 'Otimizações de alto desempenho para qualquer PC',
      subtitle:
        'Packs, scripts e automações criados para extrair o máximo do seu Windows e turbinar jogos competitivos.',
      ctaPrimary: {
        label: 'Explorar downloads',
        href: '/downloads'
      },
      ctaSecondary: {
        label: 'Entrar na comunidade',
        href: 'https://amathyzin.com/discord'
      },
      highlights: [
        '4+ anos compartilhando tweaks comprovados',
        'Integrações oficiais com BloxStrap, Valorant e Windows',
        'Tutoriais em vídeo e suporte dedicado'
      ]
    },
    features: [
      {
        title: 'Projetos famosos',
        description:
          'RoBooster 2, aMathyzin 3k Pack e BatchClick são destaques com guias completos e atualizações constantes.',
        icon: 'fa-rocket'
      },
      {
        title: 'Comunidade ativa',
        description:
          'Servidor do Discord com suporte, sorteios e drops exclusivos para aperfeiçoar configurações em tempo real.',
        icon: 'fa-users'
      },
      {
        title: 'Conteúdo educativo',
        description:
          'Vídeos recentes ensinam desde otimizações rápidas até correções avançadas para Roblox, Valorant e Windows.',
        icon: 'fa-graduation-cap'
      }
    ],
    steps: [
      {
        title: 'Escolha o projeto ideal',
        description:
          'Use os filtros de downloads para encontrar otimizações focadas em jogos, rede ou experiência geral.'
      },
      {
        title: 'Siga o tutorial oficial',
        description:
          'Cada página inclui vídeo, pré-requisitos e instruções completas com notas de segurança e licenciamento.'
      },
      {
        title: 'Receba suporte da comunidade',
        description:
          'Compartilhe resultados, tire dúvidas e acompanhe atualizações diretamente com o time aMathyzin.'
      }
    ],
    spotlight: {
      title: 'Destaques da semana',
      description:
        'Os downloads mais pedidos pela comunidade com foco em FPS, estabilidade de rede e automação completa.',
      items: [
        {
          title: 'RoBooster 2',
          description: 'Integração avançada com BloxStrap para Roblox com instalador guiado.',
          badge: 'Roblox',
          href: '/downloads/robooster2'
        },
        {
          title: 'aMathyzin 3k Pack',
          description: 'Pacote comemorativo com ajustes de sistema e ferramentas exclusivas.',
          badge: 'Windows',
          href: '/downloads/3kpack'
        },
        {
          title: 'BatchClick Pack',
          description: 'Automação em batch para turbinar PCs médios e fracos com segurança.',
          badge: 'Windows',
          href: '/downloads/batchclick'
        }
      ]
    },
    testimonials: [
      {
        quote:
          'Os ajustes do RoBooster deram vida nova ao Roblox aqui. O tutorial guiado e as dependências explicadas passo a passo salvaram horas.',
        author: 'Comunidade aMathyzin',
        role: 'Feedback real coletado no Discord'
      },
      {
        quote:
          'O 3k Pack elevou meu FPS em jogos competitivos e ainda deixou o Windows mais responsivo sem quebrar nada.',
        author: 'Membros Platinum',
        role: 'Resultados compartilhados em #suporte'
      }
    ],
    communityCta: {
      title: 'Faça parte da base de performance',
      description:
        'Eventos, sorteios, suporte direto e beta tests das próximas otimizações acontecem no nosso Discord oficial.',
      buttons: [
        { label: 'Discord oficial', href: 'https://amathyzin.com/discord' },
        { label: 'YouTube', href: 'https://www.youtube.com/@aMathyzin' }
      ]
    },
    footer: {
      copyright: '© 2025 aMathyzin. Todos os direitos reservados.',
      links: [
        { label: 'Termos de Serviço', href: '/juridico/termos' },
        { label: 'Política de Privacidade', href: '/juridico/privacy' },
        { label: 'GitHub', href: 'https://github.com/aMathyzin', external: true }
      ]
    }
  },
  downloads: {
    seo: {
      title: 'Downloads aMathyzin – Packs e otimizadores gratuitos',
      description:
        'Baixe RoBooster, BatchClick, 3k Pack e outras ferramentas com tutoriais, pré-requisitos e notas de segurança.',
      keywords: [
        'download otimização',
        'robooster',
        'batchclick',
        'fps boost',
        'valorant booster'
      ],
      image: `${baseUrl}/logo.png`,
      url: `${baseUrl}/downloads`
    },
    title: 'Centro de downloads',
    description:
      'Selecione o projeto certo para sua necessidade. Cada download inclui informações detalhadas, links oficiais e checklist de instalação.',
    categories: [
      {
        id: 'windows',
        title: 'Sistema & Windows',
        description: 'Pacotes completos para otimizar desempenho geral e liberar recursos.'
      },
      {
        id: 'games',
        title: 'Games & FPS',
        description: 'Otimizações avançadas voltadas para Roblox, Valorant e títulos competitivos.'
      },
      {
        id: 'network',
        title: 'Rede & Latência',
        description: 'Scripts de rede que ajustam MTU, MSS, TTL e mais para conexões estáveis.'
      }
    ],
    items: [
      {
        slug: 'robooster2',
        seo: {
          title: 'RoBooster 2 – Otimizador definitivo para Roblox',
          description:
            'Integração avançada com BloxStrap, instalação guiada e dependências oficiais para turbinar FPS no Roblox.',
          keywords: [
            'robooster 2',
            'roblox booster',
            'bloxstrap',
            'otimização roblox'
          ],
          image: `${baseUrl}/img/RoBooster2.png`,
          url: `${baseUrl}/downloads/robooster2`
        },
        name: 'RoBooster 2',
        tagline: 'Integração inteligente com o BloxStrap para máxima performance no Roblox.',
        description:
          'O RoBooster 2 foi refeito do zero para entregar presets otimizados e seguros para Roblox. Ele acompanha instalador, valida dependências e respeita as boas práticas do BloxStrap.',
        coverImage: '/static/img/RoBooster2.png',
        tutorialVideo: 'https://drive.google.com/file/d/1biF5hgcND6I1r5Xg6lvW0Pm-TLqqMyNj/preview',
        highlights: [
          'Integração oficial com o BloxStrap para ajustar gráficos e cache.',
          'Pacote .NET e BloxStrap listados como pré-requisitos com links oficiais.',
          'Download monitorado com termos obrigatórios e contagem pública.'
        ],
        requirements: [
          'Windows atualizado com permissões de administrador.',
          'Instalar previamente o BloxStrap oficial.',
          'Instalar o runtime Microsoft .NET mais recente.'
        ],
        faqs: [
          {
            question: 'Quem desenvolveu o RoBooster 2?',
            answer: 'Projeto criado por aMathyzin com licença proprietária e todos os direitos reservados.'
          },
          {
            question: 'Posso revender ou redistribuir?',
            answer: 'Não. Ferramenta de acesso parcialmente gratuito – venda ou revenda são proibidas.'
          }
        ],
        downloadLinks: [
          {
            label: 'Download direto',
            url: 'https://raw.githubusercontent.com/aMathyzin/aMathyzin/refs/heads/main/arquivos/robooster.exe',
            type: 'primary'
          },
          {
            label: 'Repositório GitHub',
            url: 'https://github.com/aMathyzin/RoBooster-2',
            type: 'source'
          }
        ],
        extraNotes: [
          'Arquivo principal: RoBooster.exe – 95,08 MB.',
          'Ferramenta licenciada. Todos os direitos reservados por aMathyzin.',
          'BloxStrap oficial disponível em https://bloxstraplabs.com.'
        ]
      },
      {
        slug: 'robooster',
        seo: {
          title: 'RoBooster 1 – Boost clássico para Roblox',
          description:
            'Versão original do RoBooster com foco em aumentar FPS e estabilidade em qualquer PC.',
          keywords: ['robooster', 'roblox', 'otimização', 'bloxstrap'],
          image: `${baseUrl}/downloads/icons/RobloxPlus.png`,
          url: `${baseUrl}/downloads/robooster`
        },
        name: 'RoBooster 1',
        tagline: 'Preset tradicional integrado ao BloxStrap para Roblox fluido.',
        description:
          'A primeira versão do RoBooster continua disponível para quem prefere uma experiência clássica. Ideal para máquinas modestas que precisam de ganho rápido de FPS.',
        coverImage: '/static/img/RobloxPlus.png',
        tutorialVideo: 'https://www.youtube.com/embed/ylDMxtM9zTs',
        highlights: [
          'Integra-se ao BloxStrap e depende do runtime .NET.',
          'Explica no tutorial oficial cada ajuste aplicado.',
          'Termos deixam claro que a distribuição comercial é proibida.'
        ],
        requirements: [
          'Instalar BloxStrap e pacote .NET antes de executar.',
          'Executar como administrador para aplicar otimizações.',
          'Windows atualizado com restauração de sistema habilitada.'
        ],
        faqs: [
          {
            question: 'O download acompanha vídeo de suporte?',
            answer: 'Sim, o vídeo “Otimização pro Roblox - RoBooster” demonstra passo a passo o uso seguro.'
          },
          {
            question: 'Existe algum custo?',
            answer: 'Não. O RoBooster é gratuito e qualquer tentativa de venda é proibida.'
          }
        ],
        downloadLinks: [
          {
            label: 'Download .rar',
            url: 'https://raw.githubusercontent.com/aMathyzin/aMathyzin/refs/heads/main/arquivos/robooster.rar',
            type: 'primary'
          }
        ],
        extraNotes: [
          'Arquivo: RoBooster.rar – 9 MB.',
          'Todos os direitos reservados ao Grupo aMathyzin.'
        ]
      },
      {
        slug: '3kpack',
        seo: {
          title: 'aMathyzin 3k Pack – Preset comemorativo',
          description:
            'Pacote especial lançado nos 3.000 inscritos com ajustes profundos de desempenho para Windows.',
          keywords: ['3k pack', 'windows otimização', 'amathyzin pack'],
          image: `${baseUrl}/img/3kpack.png`,
          url: `${baseUrl}/downloads/3kpack`
        },
        name: 'aMathyzin 3k Pack',
        tagline: 'O pack mais completo do canal com automações seguras para Windows.',
        description:
          'Com foco em gratidão aos 3.000 inscritos, o 3k Pack reúne scripts e ajustes de registro validados pela comunidade para dar mais FPS e estabilidade ao Windows.',
        coverImage: '/static/img/3kpack.png',
        tutorialVideo: 'https://www.youtube.com/embed/Pxcaxgx_j-0',
        highlights: [
          'Vídeo oficial ensina instalação e checklist pós-aplicação.',
          'Inclui scripts proprietários protegidos contra revenda.',
          'Downloads monitorados com contagem pública e termos.'
        ],
        requirements: [
          'Realizar ponto de restauração antes de aplicar.',
          'Executar cada script com privilégios administrativos.',
          'Ler atentamente o guia incluso no pacote.'
        ],
        faqs: [
          {
            question: 'Qual o tamanho do arquivo?',
            answer: 'O pacote “aMathyzin 3k Pack.zip” possui aproximadamente 5,6 MB.'
          },
          {
            question: 'Posso comercializar o pack?',
            answer: 'Não. O pack é gratuito e protegido por licença proprietária – venda proibida.'
          }
        ],
        downloadLinks: [
          {
            label: 'Download principal',
            url: 'https://raw.githubusercontent.com/aMathyzin/aMathyzin/refs/heads/main/arquivos/amathyzin3k.zip',
            type: 'primary'
          }
        ],
        extraNotes: ['Arquivo ZIP com automações e guias exclusivos.']
      },
      {
        slug: 'batchclick',
        seo: {
          title: 'BatchClick Pack – Automação completa para Windows',
          description: 'Pack avançado feito por aMathyzin & Memphis para PCs médios e fracos.',
          keywords: ['batchclick', 'otimização windows', 'amathyzin'],
          image: `${baseUrl}/downloads/icons/BatchClick.png`,
          url: `${baseUrl}/downloads/batchclick`
        },
        name: 'BatchClick Pack',
        tagline: 'Scripts em batch com ajustes finos para Windows responsivo.',
        description:
          'O BatchClick centraliza automações com botões interativos em arquivos batch, garantindo otimizações seguras e reversíveis para diferentes perfis de hardware.',
        coverImage: '/static/img/batchclick.png',
        tutorialVideo: 'https://www.youtube.com/embed/iN5C3KDIGH8',
        highlights: [
          'Desenvolvido por aMathyzin e Memphis com foco em PCs modestos.',
          'Scripts comentados e prontos para uso com suporte no vídeo.',
          'Distribuição gratuita com proibição de venda ou revenda.'
        ],
        requirements: [
          'Windows atualizado e ponto de restauração criado.',
          'Executar como administrador para aplicar configurações.',
          'Seguir ordem de botões conforme vídeo oficial.'
        ],
        faqs: [
          {
            question: 'Qual o tamanho do arquivo?',
            answer: 'O arquivo “BatchClick Pack.zip” possui aproximadamente 3,01 MB.'
          },
          {
            question: 'Há suporte oficial?',
            answer: 'Sim. O vídeo guia e o servidor do Discord oferecem suporte direto.'
          }
        ],
        downloadLinks: [
          {
            label: 'Download .zip',
            url: 'https://raw.githubusercontent.com/aMathyzin/aMathyzin/refs/heads/main/arquivos/BatchClick.zip',
            type: 'primary'
          }
        ],
        extraNotes: ['Todos os direitos reservados ao Grupo aMathyzin.']
      },
      {
        slug: 'autonet',
        seo: {
          title: 'Autonet – Otimizador de rede avançado',
          description:
            'Ajustes automáticos de MTU, MSS, TTL e RWIN para diminuir latência e melhorar upload/download.',
          keywords: ['autonet', 'otimização de rede', 'latência baixa'],
          image: `${baseUrl}/downloads/icons/Autonet.png`,
          url: `${baseUrl}/downloads/autonet`
        },
        name: 'Autonet V1',
        tagline: 'Rede otimizada com ajustes automáticos feitos pela equipe aMathyzin.',
        description:
          'Ferramenta dedicada a melhorar estabilidade de conexão com ajustes em parâmetros-chave de rede. Produzido pela equipe aMathyzin com @based_miguelin.',
        coverImage: '/static/img/autonet_logo.jpg',
        tutorialVideo: 'https://www.youtube.com/embed/RzapmonmPp4',
        highlights: [
          'Otimizador que recalibra MTU, MSS, TTL e janela TCP.',
          'Foco em reduzir latência e melhorar velocidades de upload e download.',
          'Licença proprietária – distribuição comercial proibida.'
        ],
        requirements: [
          'Executar com permissões elevadas.',
          'Realizar backup das configurações de rede antes de aplicar.',
          'Seguir o tutorial completo para reverter ajustes, se necessário.'
        ],
        faqs: [
          {
            question: 'Quem é o autor?',
            answer: 'Todos os direitos reservados ao Grupo aMathyzin e ao desenvolvedor @based_miguelin.'
          },
          {
            question: 'Qual o tamanho do arquivo?',
            answer: 'Autonet.exe possui aproximadamente 9,6 MB.'
          }
        ],
        downloadLinks: [
          {
            label: 'Download .exe',
            url: 'https://raw.githubusercontent.com/aMathyzin/aMathyzin/refs/heads/main/arquivos/Autonet.exe',
            type: 'primary'
          }
        ]
      },
      {
        slug: 'haunted',
        seo: {
          title: 'Haunted – Script rápido de otimização Windows',
          description:
            'Programa leve feito por @based_miguelin para otimizar Windows em segundos com comandos testados.',
          keywords: ['haunted', 'script windows', 'otimização rápida'],
          image: `${baseUrl}/downloads/icons/Haunted.png`,
          url: `${baseUrl}/downloads/haunted`
        },
        name: 'Haunted',
        tagline: 'Script compacto para ajustes imediatos no Windows.',
        description:
          'Ferramenta em batch ideal para quem quer otimizar rapidamente. O vídeo oficial demonstra passo a passo e ressalta os termos de uso.',
        coverImage: '/static/img/thumb.png',
        tutorialVideo: 'https://www.youtube.com/embed/ciHfcpppItg',
        highlights: [
          'Executa tweaks validados pela comunidade.',
          'Ideal para usuários que querem resultados instantâneos.',
          'Distribuição gratuita – venda proibida.'
        ],
        requirements: [
          'Criar ponto de restauração antes da execução.',
          'Executar o .bat como administrador.',
          'Seguir orientações do vídeo para desfazer alterações se necessário.'
        ],
        faqs: [
          {
            question: 'Qual o tamanho do arquivo?',
            answer: 'O arquivo “Haunted.bat” possui cerca de 53,6 KB.'
          },
          {
            question: 'Quem é o autor?',
            answer: 'Todos os direitos reservados ao Grupo aMathyzin e ao autor @based_miguelin.'
          }
        ],
        downloadLinks: [
          {
            label: 'Download .bat',
            url: 'https://raw.githubusercontent.com/aMathyzin/aMathyzin/refs/heads/main/arquivos/Haunted.bat',
            type: 'primary'
          }
        ]
      },
      {
        slug: 'valorantbooster',
        seo: {
          title: 'Valorant Booster – Pré-Alpha',
          description:
            'Otimizador avançado criado para Valorant com ajustes precisos em gráficos e latência.',
          keywords: ['valorant booster', 'fps valorant', 'otimização valorant'],
          image: `${baseUrl}/downloads/icons/Valorant.png`,
          url: `${baseUrl}/downloads/valorantbooster`
        },
        name: 'Valorant Booster Pré-Alpha',
        tagline: 'Mais FPS e responsividade no Valorant com tweaks proprietários.',
        description:
          'Preset criado por aMathyzin com contribuições da equipe Memphis para melhorar FPS e estabilidade no Valorant. Inclui script em batch com instruções detalhadas.',
        coverImage: '/static/img/VB.png',
        tutorialVideo: 'https://www.youtube.com/embed/7qV-fDkxeVc',
        highlights: [
          'Ajustes finos de gráficos e configurações de rede para Valorant.',
          'Licença proprietária, focada em uso pessoal gratuito.',
          'Vídeo oficial explica cada passo de execução e reversão.'
        ],
        requirements: [
          'Executar o batch como administrador.',
          'Seguir o vídeo antes de aplicar em contas competitivas.',
          'Realizar backup das configs do Valorant se desejar reverter.'
        ],
        faqs: [
          {
            question: 'Qual o tamanho do arquivo?',
            answer: 'Valorant Booster Pré Alpha.bat possui cerca de 12 KB.'
          },
          {
            question: 'Posso vender o booster?',
            answer: 'Não. É gratuito e qualquer comercialização é proibida.'
          }
        ],
        downloadLinks: [
          {
            label: 'Download .bat',
            url: 'https://raw.githubusercontent.com/aMathyzin/aMathyzin/refs/heads/main/arquivos/ValorantBooster.bat',
            type: 'primary'
          }
        ]
      },
      {
        slug: 'fpspack',
        seo: {
          title: 'aMathyzin FPSPack V3',
          description:
            'Preset focado em aumentar FPS em jogos com ajustes gráficos e de sistema em um único pacote.',
          keywords: ['fps pack', 'fps boost', 'amathyzin'],
          image: `${baseUrl}/downloads/icons/FPSPack.png`,
          url: `${baseUrl}/downloads/fpspack`
        },
        name: 'aMathyzin FPSPack V3',
        tagline: 'O pacote definitivo para elevar FPS em qualquer setup.',
        description:
          'Pack com otimizações selecionadas para maximizar FPS e estabilidade gráfica. Inclui encurtadores externos para download e guia em vídeo.',
        coverImage: '/static/img/thumb.png',
        tutorialVideo: 'https://www.youtube.com/embed/E26PVIiKWbQ',
        highlights: [
          'Ajustes específicos para jogos competitivos.',
          'Download via mirrors externos confiáveis.',
          'Inclui instruções completas no vídeo oficial.'
        ],
        requirements: [
          'Seguir o passo a passo do vídeo antes de aplicar.',
          'Criar backup das configurações do Windows.',
          'Usar encurtadores oficiais listados para obter a versão atual.'
        ],
        faqs: [
          {
            question: 'Qual o arquivo principal?',
            answer: 'O pacote é entregue como “aMathyzin FPSPack V3.rar”.'
          },
          {
            question: 'Os links são seguros?',
            answer: 'Sim. São encurtadores controlados pela equipe com validação constante.'
          }
        ],
        downloadLinks: [
          {
            label: 'Encurtador oficial 1',
            url: 'https://go.amathyzin.com/fpspack-v3',
            type: 'primary'
          },
          {
            label: 'Encurtador oficial 2',
            url: 'https://go.amathyzin.com/fpspack-v3-mirror',
            type: 'mirror'
          }
        ]
      }
    ]
  },
  about: {
    seo: {
      title: 'Sobre a aMathyzin – Histórias e missão',
      description:
        'Conheça a trajetória do aMathyzin, conquistas, valores, missão e como participar da comunidade oficial.',
      keywords: ['sobre amathyzin', 'história', 'otimização'],
      image: `${baseUrl}/img/thumb.png`,
      url: `${baseUrl}/sobre`
    },
    title: 'Quem está por trás das otimizações',
    intro:
      'aMathyzin é um entusiasta de performance com mais de quatro anos compartilhando ajustes confiáveis para transformar PCs e experiências em jogos competitivos.',
    mission:
      'Entregar ferramentas gratuitas, acessíveis e transparentes para que qualquer pessoa conquiste estabilidade e FPS elevados sem comprometer a segurança.',
    sections: [
      {
        heading: 'Compromisso com a comunidade',
        body: [
          'Projetos como o “aMathyzin 3K Pack” nascem de feedback direto dos inscritos e evoluem junto com o Discord oficial.',
          'O “RoBooster” trouxe integração inédita com o BloxStrap para Roblox, mantendo compatibilidade e atualizações contínuas.'
        ]
      },
      {
        heading: 'Conteúdo multiplataforma',
        body: [
          'No YouTube, vídeos como “OTIMIZE SEU PC COM 1 COMANDO EM 1 MINUTO” mostram ganhos reais com instruções seguras.',
          'Em redes sociais e no GitHub, disponibilizamos códigos-fonte, changelog e documentação para cada projeto.'
        ]
      }
    ],
    timeline: {
      title: 'Linha do tempo',
      items: [
        { year: '2021', description: 'Lançamento das primeiras automações de Windows no canal.' },
        { year: '2022', description: 'Criação do servidor Discord e primeiras parcerias com desenvolvedores convidados.' },
        { year: '2023', description: 'RoBooster ganha destaque e integrações oficiais com o BloxStrap.' },
        { year: '2024', description: '3K Pack comemora marco de inscritos com pacote proprietário gratuito.' },
        { year: '2025', description: 'Lançamento da plataforma NestJS com foco em SEO, desempenho e acessibilidade.' }
      ]
    },
    contactCta: {
      title: 'Vamos otimizar juntos',
      description:
        'Fale com a equipe, envie feedback ou solicite parcerias. Estamos sempre ouvindo a comunidade.',
      actions: [
        { label: 'Discord oficial', href: 'https://amathyzin.com/discord' },
        { label: 'E-mail', href: 'mailto:contato@amathyzin.com' }
      ]
    }
  },
  legal: [
    {
      slug: 'terms',
      seo: {
        title: 'Termos de Serviço – aMathyzin',
        description:
          'Diretrizes de uso para downloads, scripts e projetos da plataforma aMathyzin. Consulte licenças e regras de distribuição.',
        keywords: ['termos de serviço', 'licença', 'amathyzin'],
        image: `${baseUrl}/logo.png`,
        url: `${baseUrl}/juridico/termos`
      },
      title: 'Termos de Serviço',
      updatedAt: 'Atualizado em 12 de janeiro de 2025',
      sections: [
        {
          heading: '1. Aceite dos termos',
          body: [
            'Ao acessar aMathyzin.com você concorda com as diretrizes aqui descritas. Caso não concorde, interrompa o uso imediatamente.',
            'O uso dos downloads está condicionado à aceitação destes termos e de políticas de parceiros como GitHub e encurtadores.'
          ]
        },
        {
          heading: '2. Direitos autorais e licenciamento',
          body: [
            'Todo conteúdo é protegido por direitos autorais do Grupo aMathyzin e colaboradores identificados em cada projeto.',
            'É proibida a revenda, sublicenciamento ou distribuição paga de qualquer arquivo disponibilizado gratuitamente.'
          ]
        },
        {
          heading: '3. Uso responsável',
          body: [
            'Execute scripts somente após criar pontos de restauração e backups adequados.',
            'Não modifique arquivos para fins maliciosos ou que violem termos de terceiros, como Roblox Corporation ou Riot Games.'
          ]
        },
        {
          heading: '4. Suporte e alterações',
          body: [
            'O suporte é oferecido via Discord oficial e e-mail contato@amathyzin.com conforme disponibilidade da equipe.',
            'Os termos podem ser atualizados sem aviso prévio. Consulte esta página regularmente para acompanhar mudanças.'
          ]
        }
      ]
    },
    {
      slug: 'privacy',
      seo: {
        title: 'Política de Privacidade – aMathyzin',
        description:
          'Transparência sobre coleta, uso e proteção de dados dos visitantes e membros da comunidade aMathyzin.',
        keywords: ['privacidade', 'dados', 'amathyzin'],
        image: `${baseUrl}/logo.png`,
        url: `${baseUrl}/juridico/privacy`
      },
      title: 'Política de Privacidade',
      updatedAt: 'Atualizado em 12 de janeiro de 2025',
      sections: [
        {
          heading: '1. Informações coletadas',
          body: [
            'Utilizamos ferramentas de analytics para métricas agregadas sem identificação pessoal.',
            'Ao entrar na comunidade, podem ser coletados dados fornecidos voluntariamente como e-mail ou ID do Discord.'
          ]
        },
        {
          heading: '2. Uso das informações',
          body: [
            'Dados coletados servem para melhorar conteúdo, oferecer suporte e comunicar atualizações importantes.',
            'Não vendemos ou compartilhamos dados com terceiros sem consentimento, salvo exigência legal.'
          ]
        },
        {
          heading: '3. Cookies e integrações',
          body: [
            'Integrações com YouTube, Discord e encurtadores podem definir cookies próprios, regidos pelas políticas de cada serviço.',
            'Você pode desabilitar cookies no navegador, porém algumas funcionalidades podem ser prejudicadas.'
          ]
        },
        {
          heading: '4. Direitos do usuário',
          body: [
            'Você pode solicitar remoção de dados entrando em contato via contato@amathyzin.com.',
            'Para membros da União Europeia, atendemos solicitações conforme GDPR quando aplicável.'
          ]
        }
      ]
    }
  ],
  redirects: [
    {
      slug: 'discord',
      label: 'Discord oficial',
      url: 'https://discord.gg/WYbPYDhQ8y',
      seo: {
        title: 'Entrar no Discord oficial aMathyzin',
        description: 'Acesse o servidor com suporte, sorteios e novidades exclusivas.',
        keywords: ['discord amathyzin', 'comunidade'],
        image: `${baseUrl}/logo.png`,
        url: `${baseUrl}/redirects/discord`
      }
    },
    {
      slug: 'youtube',
      label: 'Canal no YouTube',
      url: 'https://www.youtube.com/@aMathyzin',
      seo: {
        title: 'Canal oficial no YouTube',
        description: 'Tutoriais, demonstrações e novidades sobre otimizações de PC.',
        keywords: ['youtube amathyzin', 'tutoriais pc'],
        image: `${baseUrl}/repoimg/youtube-banner.png`,
        url: `${baseUrl}/redirects/youtube`
      }
    },
    {
      slug: 'github',
      label: 'Repositório GitHub',
      url: 'https://github.com/aMathyzin',
      seo: {
        title: 'GitHub do aMathyzin',
        description: 'Acompanhe códigos-fonte, changelog e repositórios públicos.',
        keywords: ['github amathyzin', 'código-fonte'],
        image: `${baseUrl}/repoimg/github-banner.png`,
        url: `${baseUrl}/redirects/github`
      }
    }
  ],
  notFound: {
    seo: {
      title: 'Página não encontrada – aMathyzin',
      description: 'O link acessado não existe mais. Explore os downloads ou volte para a página inicial.',
      keywords: ['404', 'página não encontrada'],
      image: `${baseUrl}/logo.png`,
      url: `${baseUrl}/404`
    },
    title: 'Página não encontrada',
    description: 'O conteúdo que você procura foi movido ou nunca existiu. Vamos voltar para a central de conteúdo?',
    ctaLabel: 'Ir para a página inicial',
    ctaHref: '/'
  },
  game: {
    seo: {
      title: 'Subway Blocos – Minigame em Three.js',
      description:
        'Experiência experimental em Three.js com obstáculos, contador de XP e integração com a temática de otimização.',
      keywords: ['subway blocos', 'three.js', 'minigame'],
      image: `${baseUrl}/repoimg/game-thumb.png`,
      url: `${baseUrl}/game`
    },
    title: 'Subway Blocos',
    description:
      'Jogo WebGL inspirado em endless runners para demonstrar habilidades em Three.js, com controles acessíveis e feedback visual imediato.'
  }
};
