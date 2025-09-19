import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import { ContentService } from '../services/content.service';

@Controller()
export class HomeController {
  constructor(private readonly content: ContentService) {}

  @Get(['', '/', 'index.html', 'en', 'en/', 'en/index.html', 'EN-US', 'EN-US/', 'EN-US/index.html'])
  @Render('pages/home')
  renderHome(@Req() req: Request) {
    const locale = this.content.getLocaleFromPath(req.path);
    const home = this.content.getHome(locale);

    return {
      ...this.content.getBaseContext(locale, req.path),
      meta: home.seo,
      hero: home.hero,
      features: home.features,
      steps: home.steps,
      spotlight: home.spotlight,
      testimonials: home.testimonials,
      communityCta: home.communityCta,
      structuredData: [
        {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'aMathyzin',
          url: home.seo.url,
          logo: `${home.seo.image}`,
          sameAs: [
            'https://www.youtube.com/@aMathyzin',
            'https://github.com/aMathyzin',
            'https://discord.gg/WYbPYDhQ8y'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            email: 'contato@amathyzin.com'
          }
        },
        {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'aMathyzin',
          url: home.seo.url,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${home.seo.url}?s={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        }
      ]
    };
  }
}
