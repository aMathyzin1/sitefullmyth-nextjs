import { Controller, Get, Render, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ContentService } from '../services/content.service';

@Controller()
export class NotFoundController {
  constructor(private readonly content: ContentService) {}

  @Get('*')
  @Render('pages/not-found')
  renderNotFound(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    const locale = this.content.getLocaleFromPath(req.path);
    const notFound = this.content.getNotFound(locale);
    res.status(404);

    return {
      ...this.content.getBaseContext(locale, req.path),
      meta: notFound.seo,
      title: notFound.title,
      description: notFound.description,
      actionLabel: notFound.ctaLabel,
      actionHref: locale === 'en' ? '/en' : '/'
    };
  }
}
