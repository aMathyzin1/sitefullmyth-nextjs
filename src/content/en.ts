import { SiteDictionary } from './types';

const baseUrl = 'https://amathyzin.com';

export const enContent: SiteDictionary = {
  locale: 'en',
  home: {
    seo: {
      title: 'aMathyzin - Free performance boosts for every PC',
      description:
        'Guides, packs and automation to accelerate Windows, Roblox and Valorant with proven tweaks from the aMathyzin community.',
      keywords: [
        'pc optimization',
        'roblox fps boost',
        'valorant boost',
        'windows tweaks',
        'amathyzin downloads'
      ],
      image: `${baseUrl}/img/thumb.png`,
      url: `${baseUrl}/en`
    },
    navigation: [
      { label: 'Home', href: '/en' },
      { label: 'Downloads', href: '/en/downloads' },
      { label: 'About', href: '/en/about' },
      { label: 'GitHub', href: 'https://github.com/aMathyzin', external: true },
      { label: 'Community', href: 'https://amathyzin.com/discord', external: true },
      { label: 'Videos', href: 'https://www.youtube.com/@aMathyzin', external: true }
    ],
    hero: {
      eyebrow: 'Performance ecosystem',
      title: 'High performance optimizations for all computers',
      subtitle:
        'Packs, scripts and automation built to extract the maximum out of Windows and competitive games.',
      ctaPrimary: {
        label: 'Browse downloads',
        href: '/en/downloads'
      },
      ctaSecondary: {
        label: 'Join the community',
        href: 'https://amathyzin.com/discord'
      },
      highlights: [
        '4+ years creating trusted tweaks',
        'Official integrations with BloxStrap, Valorant and Windows',
        'Video tutorials and hands-on support'
      ]
    },
    features: [
      {
        title: 'Featured projects',
        description:
          'RoBooster 2, the 3k Pack and BatchClick deliver constant updates with detailed guides in English and Portuguese.',
        icon: 'fa-rocket'
      },
      {
        title: 'Active community',
        description:
          'Our Discord server gathers support, giveaways and exclusive drops to fine tune your configuration live.',
        icon: 'fa-users'
      },
      {
        title: 'Educational content',
        description:
          'Recent videos teach quick wins and advanced fixes for Roblox, Valorant and Windows.',
        icon: 'fa-graduation-cap'
      }
    ],
    steps: [
      {
        title: 'Pick the right project',
        description:
          'Filter downloads focused on games, networking or overall Windows experience.'
      },
      {
        title: 'Follow the official walkthrough',
        description:
          'Each page ships with a full video tutorial, prerequisites and security notes.'
      },
      {
        title: 'Get help from the community',
        description:
          'Share feedback, ask questions and track updates directly with the aMathyzin team.'
      }
    ],
    spotlight: {
      title: 'Community favorites',
      description:
        'The most requested downloads delivering FPS, low latency and safe automation.',
      items: [
        {
          title: 'RoBooster 2',
          description: 'Advanced Roblox integration with guided installer.',
          badge: 'Roblox',
          href: '/en/downloads/robooster2'
        },
        {
          title: 'aMathyzin 3k Pack',
          description: 'Celebration preset with exclusive Windows tweaks.',
          badge: 'Windows',
          href: '/en/downloads/3kpack'
        },
        {
          title: 'BatchClick Pack',
          description: 'Batch automation tailor made for low and mid tier PCs.',
          badge: 'Windows',
          href: '/en/downloads/batchclick'
        }
      ]
    },
    testimonials: [
      {
        quote:
          'RoBooster brought Roblox back to life here. The installer, dependency checklist and community support saved countless hours.',
        author: 'aMathyzin Community',
        role: 'Real feedback collected on Discord'
      },
      {
        quote:
          'The 3k Pack boosted my FPS in competitive games while making Windows feel much more responsive without breaking anything.',
        author: 'Platinum Members',
        role: 'Shared success stories in #support'
      }
    ],
    communityCta: {
      title: 'Join the performance hub',
      description:
        'Events, giveaways, support and beta access to upcoming tools happen in our official Discord.',
      buttons: [
        { label: 'Join Discord', href: 'https://amathyzin.com/discord' },
        { label: 'Watch on YouTube', href: 'https://www.youtube.com/@aMathyzin' }
      ]
    },
    footer: {
      copyright: '© 2025 aMathyzin. All rights reserved.',
      links: [
        { label: 'Terms of Service', href: '/en/legal/terms' },
        { label: 'Privacy Policy', href: '/en/legal/privacy' },
        { label: 'GitHub', href: 'https://github.com/aMathyzin', external: true }
      ]
    }
  },
  downloads: {
    seo: {
      title: 'aMathyzin downloads – Boosters and packs',
      description:
        'Get RoBooster, BatchClick, the 3k Pack and more. Every page includes prerequisites, tutorials and security notes.',
      keywords: ['downloads', 'pc boost', 'roblox booster', 'valorant boost'],
      image: `${baseUrl}/logo.png`,
      url: `${baseUrl}/en/downloads`
    },
    title: 'Downloads hub',
    description:
      'Choose the right optimization for your scenario. Each project lists file size, tutorial, requirements and licensing.',
    categories: [
      {
        id: 'windows',
        title: 'System & Windows',
        description: 'Full packs to improve responsiveness and stability.'
      },
      {
        id: 'games',
        title: 'Games & FPS',
        description: 'Roblox, Valorant and competitive tweaks curated by the community.'
      },
      {
        id: 'network',
        title: 'Network & Latency',
        description: 'Scripts that adjust MTU, MSS, TTL and more for stable connections.'
      }
    ],
    items: [
      {
        slug: 'robooster2',
        seo: {
          title: 'RoBooster 2 – Ultimate Roblox optimizer',
          description:
            'Advanced integration with BloxStrap, guided setup and official dependencies to maximize Roblox FPS.',
          keywords: ['robooster 2', 'roblox booster', 'bloxstrap', 'roblox optimization'],
          image: `${baseUrl}/img/RoBooster2.png`,
          url: `${baseUrl}/en/downloads/robooster2`
        },
        name: 'RoBooster 2',
        tagline: 'Smart BloxStrap integration for the best Roblox experience.',
        description:
          'RoBooster 2 was rebuilt from scratch to deliver safe, high-impact presets for Roblox. The installer validates dependencies and respects BloxStrap best practices.',
        coverImage: '/static/img/RoBooster2.png',
        tutorialVideo: 'https://drive.google.com/file/d/1biF5hgcND6I1r5Xg6lvW0Pm-TLqqMyNj/preview',
        highlights: [
          'Official BloxStrap integration to tune graphics and cache.',
          'Lists Microsoft .NET runtime and BloxStrap as required dependencies.',
          'Download requires accepting the terms and displays a public counter.'
        ],
        requirements: [
          'Updated Windows with administrator permissions.',
          'Install the official BloxStrap beforehand.',
          'Install the latest Microsoft .NET runtime.'
        ],
        faqs: [
          {
            question: 'Who created RoBooster 2?',
            answer: 'Developed by aMathyzin under a proprietary license with all rights reserved.'
          },
          {
            question: 'Can I resell it?',
            answer: 'No. The tool is partially free to access and reselling is forbidden.'
          }
        ],
        downloadLinks: [
          {
            label: 'Direct download',
            url: 'https://raw.githubusercontent.com/aMathyzin/aMathyzin/refs/heads/main/arquivos/robooster.exe',
            type: 'primary'
          },
          {
            label: 'GitHub repository',
            url: 'https://github.com/aMathyzin/RoBooster-2',
            type: 'source'
          }
        ],
        extraNotes: [
          'Main file: RoBooster.exe – 95.08 MB.',
          'Licensed software. All rights reserved by aMathyzin.',
          'Official BloxStrap available at https://bloxstraplabs.com.'
        ]
      },
      {
        slug: 'robooster',
        seo: {
          title: 'RoBooster 1 – Classic Roblox boost',
          description: 'The original RoBooster to increase FPS and stability on any machine.',
          keywords: ['robooster', 'roblox', 'optimization', 'bloxstrap'],
          image: `${baseUrl}/downloads/icons/RobloxPlus.png`,
          url: `${baseUrl}/en/downloads/robooster`
        },
        name: 'RoBooster 1',
        tagline: 'The classic preset integrated with BloxStrap for smoother Roblox.',
        description:
          'The first RoBooster release stays available for anyone who prefers a lightweight, time-tested experience. Perfect for modest PCs needing instant FPS gains.',
        coverImage: '/static/img/RobloxPlus.png',
        tutorialVideo: 'https://www.youtube.com/embed/ylDMxtM9zTs',
        highlights: [
          'Requires BloxStrap and .NET runtime to operate.',
          'Official video walkthrough explains every tweak.',
          'Commercial distribution is explicitly prohibited.'
        ],
        requirements: [
          'Install BloxStrap and .NET runtime before running.',
          'Run as administrator to apply system tweaks.',
          'Keep a Windows restore point ready before applying changes.'
        ],
        faqs: [
          {
            question: 'Is there a support video?',
            answer: 'Yes, the video “Roblox Optimization - RoBooster” shows the complete process.'
          },
          {
            question: 'Does it cost anything?',
            answer: 'No. RoBooster is free and selling it is not allowed.'
          }
        ],
        downloadLinks: [
          {
            label: 'Download .rar',
            url: 'https://raw.githubusercontent.com/aMathyzin/aMathyzin/refs/heads/main/arquivos/robooster.rar',
            type: 'primary'
          }
        ],
        extraNotes: ['File: RoBooster.rar – 9 MB.', 'All rights reserved by the aMathyzin Group.']
      },
      {
        slug: '3kpack',
        seo: {
          title: 'aMathyzin 3k Pack – Celebration preset',
          description:
            'Special pack launched for the 3,000 subscriber milestone with deep Windows performance tweaks.',
          keywords: ['3k pack', 'windows optimization', 'amathyzin pack'],
          image: `${baseUrl}/img/3kpack.png`,
          url: `${baseUrl}/en/downloads/3kpack`
        },
        name: 'aMathyzin 3k Pack',
        tagline: 'The most complete pack from the channel with safe Windows automation.',
        description:
          'Built as a thank you to the community, the 3k Pack bundles scripts and registry adjustments validated by the community to boost FPS and system responsiveness.',
        coverImage: '/static/img/3kpack.png',
        tutorialVideo: 'https://www.youtube.com/embed/Pxcaxgx_j-0',
        highlights: [
          'Official video teaches installation and post-setup checklist.',
          'Contains proprietary scripts protected against reselling.',
          'Public download counter and mandatory terms acceptance.'
        ],
        requirements: [
          'Create a restore point before applying.',
          'Run every script with administrative privileges.',
          'Read the bundled guide carefully before execution.'
        ],
        faqs: [
          {
            question: 'What is the file size?',
            answer: '“aMathyzin 3k Pack.zip” is roughly 5.6 MB.'
          },
          {
            question: 'Can I sell the pack?',
            answer: 'No. It is free and protected by a proprietary license – selling is forbidden.'
          }
        ],
        downloadLinks: [
          {
            label: 'Primary download',
            url: 'https://raw.githubusercontent.com/aMathyzin/aMathyzin/refs/heads/main/arquivos/amathyzin3k.zip',
            type: 'primary'
          }
        ],
        extraNotes: ['ZIP archive with exclusive automation and guides.']
      },
      {
        slug: 'batchclick',
        seo: {
          title: 'BatchClick Pack – Complete Windows automation',
          description: 'Advanced pack created by aMathyzin & Memphis for mid and low tier PCs.',
          keywords: ['batchclick', 'windows optimization', 'amathyzin'],
          image: `${baseUrl}/downloads/icons/BatchClick.png`,
          url: `${baseUrl}/en/downloads/batchclick`
        },
        name: 'BatchClick Pack',
        tagline: 'Batch scripts with fine tuning for a responsive Windows.',
        description:
          'BatchClick groups automation buttons inside batch files to deliver safe, reversible optimizations tailored for different hardware profiles.',
        coverImage: '/static/img/batchclick.png',
        tutorialVideo: 'https://www.youtube.com/embed/iN5C3KDIGH8',
        highlights: [
          'Developed by aMathyzin and Memphis with focus on modest PCs.',
          'Scripts are commented and demonstrated in the official video.',
          'Distribution is free of charge – selling is prohibited.'
        ],
        requirements: [
          'Keep Windows up to date and create a restore point.',
          'Run as administrator to apply system-level tweaks.',
          'Follow the button sequence shown in the tutorial.'
        ],
        faqs: [
          {
            question: 'What is the file size?',
            answer: '“BatchClick Pack.zip” is about 3.01 MB.'
          },
          {
            question: 'Is support available?',
            answer: 'Yes. The video walkthrough and Discord server provide direct support.'
          }
        ],
        downloadLinks: [
          {
            label: 'Download .zip',
            url: 'https://raw.githubusercontent.com/aMathyzin/aMathyzin/refs/heads/main/arquivos/BatchClick.zip',
            type: 'primary'
          }
        ],
        extraNotes: ['All rights reserved by the aMathyzin Group.']
      },
      {
        slug: 'autonet',
        seo: {
          title: 'Autonet – Advanced network optimizer',
          description:
            'Automatic adjustments to MTU, MSS, TTL and RWIN to reduce latency and improve throughput.',
          keywords: ['autonet', 'network optimization', 'low latency'],
          image: `${baseUrl}/downloads/icons/Autonet.png`,
          url: `${baseUrl}/en/downloads/autonet`
        },
        name: 'Autonet V1',
        tagline: 'Network tuned with automation crafted by the aMathyzin team.',
        description:
          'Autonet enhances connection stability by tweaking key networking parameters. Produced by the aMathyzin Group with @based_miguelin.',
        coverImage: '/static/img/autonet_logo.jpg',
        tutorialVideo: 'https://www.youtube.com/embed/RzapmonmPp4',
        highlights: [
          'Optimizer recalibrates MTU, MSS, TTL and TCP window.',
          'Focus on reducing latency and improving upload/download speeds.',
          'Proprietary license – commercial distribution is forbidden.'
        ],
        requirements: [
          'Run with elevated permissions.',
          'Backup network settings before applying.',
          'Follow the full tutorial to revert tweaks if needed.'
        ],
        faqs: [
          {
            question: 'Who authored the tool?',
            answer: 'All rights reserved by the aMathyzin Group and developer @based_miguelin.'
          },
          {
            question: 'What is the file size?',
            answer: 'Autonet.exe is about 9.6 MB.'
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
          title: 'Haunted – Quick Windows optimization script',
          description:
            'Lightweight program authored by @based_miguelin to optimize Windows in seconds using tested commands.',
          keywords: ['haunted', 'windows script', 'quick optimization'],
          image: `${baseUrl}/downloads/icons/Haunted.png`,
          url: `${baseUrl}/en/downloads/haunted`
        },
        name: 'Haunted',
        tagline: 'Compact script for instant Windows adjustments.',
        description:
          'The Haunted script is perfect for quick results. The official video walks through each step and highlights usage terms.',
        coverImage: '/static/img/thumb.png',
        tutorialVideo: 'https://www.youtube.com/embed/ciHfcpppItg',
        highlights: [
          'Executes community-validated tweaks.',
          'Ideal for users who want fast optimizations.',
          'Distributed for free – selling is not allowed.'
        ],
        requirements: [
          'Create a restore point before running.',
          'Run the .bat file as administrator.',
          'Follow the video instructions to undo changes if required.'
        ],
        faqs: [
          {
            question: 'What is the file size?',
            answer: '“Haunted.bat” is approximately 53.6 KB.'
          },
          {
            question: 'Who is the author?',
            answer: 'All rights reserved by the aMathyzin Group and @based_miguelin.'
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
          title: 'Valorant Booster – Pre-Alpha',
          description:
            'Advanced optimization script crafted for Valorant with graphics and latency adjustments.',
          keywords: ['valorant booster', 'valorant fps', 'valorant optimization'],
          image: `${baseUrl}/downloads/icons/Valorant.png`,
          url: `${baseUrl}/en/downloads/valorantbooster`
        },
        name: 'Valorant Booster Pre-Alpha',
        tagline: 'Higher FPS and responsiveness in Valorant with proprietary tweaks.',
        description:
          'A preset created by aMathyzin with contributions from the Memphis team to enhance FPS and stability in Valorant. Includes a batch script with detailed instructions.',
        coverImage: '/static/img/VB.png',
        tutorialVideo: 'https://www.youtube.com/embed/7qV-fDkxeVc',
        highlights: [
          'Fine tune graphics and networking configurations for Valorant.',
          'Proprietary license focused on free personal use.',
          'Official video explains how to apply and revert tweaks.'
        ],
        requirements: [
          'Run the batch file as administrator.',
          'Watch the video before applying it to competitive accounts.',
          'Back up Valorant configuration files if you plan to revert.'
        ],
        faqs: [
          {
            question: 'What is the file size?',
            answer: '“Valorant Booster Pré Alpha.bat” is about 12 KB.'
          },
          {
            question: 'Can I sell it?',
            answer: 'No. It is free and any commercialization is forbidden.'
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
          description: 'Preset focused on increasing FPS in competitive games with system and graphics tweaks.',
          keywords: ['fps pack', 'fps boost', 'amathyzin'],
          image: `${baseUrl}/downloads/icons/FPSPack.png`,
          url: `${baseUrl}/en/downloads/fpspack`
        },
        name: 'aMathyzin FPSPack V3',
        tagline: 'The go-to pack to raise FPS on any setup.',
        description:
          'The FPSPack concentrates optimizations to maximize frames and graphic stability. Download is available through curated short links and includes a full video guide.',
        coverImage: '/static/img/thumb.png',
        tutorialVideo: 'https://www.youtube.com/embed/E26PVIiKWbQ',
        highlights: [
          'Specific adjustments for competitive gaming.',
          'Download via trusted external mirrors controlled by the team.',
          'Full walkthrough available in the official video.'
        ],
        requirements: [
          'Follow the video steps before applying.',
          'Back up Windows configurations.',
          'Use the official short links to access the latest version.'
        ],
        faqs: [
          {
            question: 'Which file is included?',
            answer: 'The package is delivered as “aMathyzin FPSPack V3.rar”.'
          },
          {
            question: 'Are the links safe?',
            answer: 'Yes. The team maintains the mirrors and validates them frequently.'
          }
        ],
        downloadLinks: [
          {
            label: 'Official short link',
            url: 'https://go.amathyzin.com/fpspack-v3',
            type: 'primary'
          },
          {
            label: 'Mirror short link',
            url: 'https://go.amathyzin.com/fpspack-v3-mirror',
            type: 'mirror'
          }
        ]
      }
    ]
  },
  about: {
    seo: {
      title: 'About aMathyzin – Mission and journey',
      description:
        'Learn the history, achievements and mission behind aMathyzin, plus how to collaborate with the community.',
      keywords: ['about amathyzin', 'pc optimization'],
      image: `${baseUrl}/img/thumb.png`,
      url: `${baseUrl}/en/about`
    },
    title: 'The team behind the optimizations',
    intro:
      'aMathyzin is a performance enthusiast sharing proven tweaks for more than four years to transform PCs and competitive gameplay.',
    mission:
      'Deliver free, accessible and transparent tools so everyone can achieve stable, high FPS without sacrificing safety.',
    sections: [
      {
        heading: 'Community driven',
        body: [
          'Projects such as the “aMathyzin 3K Pack” are built with direct feedback from subscribers and grow alongside the Discord server.',
          '“RoBooster” introduced a unique integration with BloxStrap for Roblox, keeping compatibility and frequent updates.'
        ]
      },
      {
        heading: 'Multiplatform content',
        body: [
          'YouTube videos like “OPTIMIZE YOUR PC WITH ONE COMMAND IN 1 MINUTE” showcase real gains with safe instructions.',
          'GitHub and socials host source code, changelog and documentation for every project.'
        ]
      }
    ],
    timeline: {
      title: 'Timeline',
      items: [
        { year: '2021', description: 'Released the first Windows automation scripts on YouTube.' },
        { year: '2022', description: 'Launched the Discord server and partnered with guest developers.' },
        { year: '2023', description: 'RoBooster gained traction with official BloxStrap integration.' },
        { year: '2024', description: '3K Pack celebrated the subscriber milestone with a proprietary free pack.' },
        { year: '2025', description: 'NestJS platform ships with improved SEO, performance and accessibility.' }
      ]
    },
    contactCta: {
      title: 'Let’s optimize together',
      description:
        'Reach out for feedback, partnerships or support. The team is always listening to the community.',
      actions: [
        { label: 'Join Discord', href: 'https://amathyzin.com/discord' },
        { label: 'Email us', href: 'mailto:contato@amathyzin.com' }
      ]
    }
  },
  legal: [
    {
      slug: 'terms',
      seo: {
        title: 'Terms of Service – aMathyzin',
        description:
          'Usage guidelines for downloads, scripts and community resources provided by aMathyzin.',
        keywords: ['terms of service', 'license', 'amathyzin'],
        image: `${baseUrl}/logo.png`,
        url: `${baseUrl}/en/legal/terms`
      },
      title: 'Terms of Service',
      updatedAt: 'Updated on January 12, 2025',
      sections: [
        {
          heading: '1. Acceptance of terms',
          body: [
            'By accessing aMathyzin.com you agree with these guidelines. If you disagree, stop using our services immediately.',
            'Downloads require acceptance of these terms and of third party policies such as GitHub and link shorteners.'
          ]
        },
        {
          heading: '2. Copyright and licensing',
          body: [
            'All content is protected by copyright owned by the aMathyzin Group and collaborators identified in each project.',
            'Reselling, sublicensing or charging for any free file is forbidden.'
          ]
        },
        {
          heading: '3. Responsible use',
          body: [
            'Run scripts only after creating restore points and proper backups.',
            'Do not modify files for malicious purposes or break third-party terms such as Roblox Corporation or Riot Games.'
          ]
        },
        {
          heading: '4. Support and changes',
          body: [
            'Support is available via the official Discord and the email contato@amathyzin.com according to team availability.',
            'Terms may change without prior notice. Check this page regularly to stay informed.'
          ]
        }
      ]
    },
    {
      slug: 'privacy',
      seo: {
        title: 'Privacy Policy – aMathyzin',
        description:
          'Transparency about how we collect, store and use data from visitors and community members.',
        keywords: ['privacy policy', 'data', 'amathyzin'],
        image: `${baseUrl}/logo.png`,
        url: `${baseUrl}/en/legal/privacy`
      },
      title: 'Privacy Policy',
      updatedAt: 'Updated on January 12, 2025',
      sections: [
        {
          heading: '1. Information we collect',
          body: [
            'We rely on analytics tools to gather aggregated metrics without personal identification.',
            'When joining the community, voluntarily provided data such as email or Discord ID may be collected.'
          ]
        },
        {
          heading: '2. How we use data',
          body: [
            'Collected data helps improve content, provide support and communicate essential updates.',
            'We do not sell or share data with third parties without consent unless legally required.'
          ]
        },
        {
          heading: '3. Cookies and integrations',
          body: [
            'Integrations with YouTube, Discord and link shorteners may set their own cookies under each service policy.',
            'You can disable cookies in your browser but some features may not work as expected.'
          ]
        },
        {
          heading: '4. User rights',
          body: [
            'Request data removal by contacting contato@amathyzin.com.',
            'For EU residents we comply with GDPR requests whenever applicable.'
          ]
        }
      ]
    }
  ],
  redirects: [
    {
      slug: 'discord',
      label: 'Official Discord',
      url: 'https://discord.gg/WYbPYDhQ8y',
      seo: {
        title: 'Join the aMathyzin Discord',
        description: 'Get support, giveaways and exclusive news in our community.',
        keywords: ['discord amathyzin', 'community'],
        image: `${baseUrl}/logo.png`,
        url: `${baseUrl}/en/redirects/discord`
      }
    },
    {
      slug: 'youtube',
      label: 'YouTube Channel',
      url: 'https://www.youtube.com/@aMathyzin',
      seo: {
        title: 'Official YouTube channel',
        description: 'Tutorials, showcases and updates about PC optimization.',
        keywords: ['youtube amathyzin', 'pc tutorials'],
        image: `${baseUrl}/repoimg/youtube-banner.png`,
        url: `${baseUrl}/en/redirects/youtube`
      }
    },
    {
      slug: 'github',
      label: 'GitHub Repository',
      url: 'https://github.com/aMathyzin',
      seo: {
        title: 'aMathyzin GitHub',
        description: 'Track source code, changelog and public repositories.',
        keywords: ['github amathyzin', 'source code'],
        image: `${baseUrl}/repoimg/github-banner.png`,
        url: `${baseUrl}/en/redirects/github`
      }
    }
  ],
  notFound: {
    seo: {
      title: 'Page not found – aMathyzin',
      description: 'The link you followed is no longer available. Jump back to the downloads hub or home page.',
      keywords: ['404', 'page not found'],
      image: `${baseUrl}/logo.png`,
      url: `${baseUrl}/en/404`
    },
    title: 'Page not found',
    description: 'The content you are looking for was moved or never existed. Let’s go back to the content hub?',
    ctaLabel: 'Return home',
    ctaHref: '/en'
  },
  game: {
    seo: {
      title: 'Subway Blocks – Three.js mini game',
      description:
        'Endless runner experiment built with Three.js featuring obstacles, XP tracking and responsive controls.',
      keywords: ['subway blocks', 'three.js', 'mini game'],
      image: `${baseUrl}/repoimg/game-thumb.png`,
      url: `${baseUrl}/en/game`
    },
    title: 'Subway Blocks',
    description:
      'A WebGL game inspired by endless runners to showcase Three.js skills with intuitive controls and instant feedback.'
  }
};
