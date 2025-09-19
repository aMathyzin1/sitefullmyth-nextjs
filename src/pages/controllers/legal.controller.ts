import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ContentService } from '../services/content.service';

@Controller()
export class LegalController {
  constructor(private readonly content: ContentService) {}

  private getSlug(path: string) {
    if (path.includes('privacy')) {
      return 'privacy';
    }
    return 'terms';
  }

  @Get([
    'juridico/termos',
    'juridico/termos.html',
    'juridico/privacy',
    'juridico/privacy.html',
    'en/legal/terms',
    'en/legal/terms.html',
    'en/legal/privacy',
    'en/legal/privacy.html',
    'EN-US/juridico/termos',
    'EN-US/juridico/termos.html',
    'EN-US/juridico/privacy',
    'EN-US/juridico/privacy.html'
  ])
  @Render('pages/legal')
  renderLegal(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const locale = this.content.getLocaleFromPath(req.path);
    const slug = this.getSlug(req.path) as 'privacy' | 'terms';
    const page = this.content.getLegal(locale, slug);

    if (!page) {
      res.status(404);
      const notFound = this.content.getNotFound(locale);
      return {
        ...this.content.getBaseContext(locale, req.path),
        meta: notFound.seo,
        isNotFound: true,
        title: notFound.title,
        description: notFound.description,
        actionLabel: notFound.ctaLabel,
        actionHref: locale === 'en' ? '/en' : '/'
      };
    }

    return {
      ...this.content.getBaseContext(locale, req.path),
      meta: page.seo,
      title: page.title,
      updatedAt: page.updatedAt,
      sections: page.sections
    };
  }
}
