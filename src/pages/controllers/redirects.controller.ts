import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ContentService } from '../services/content.service';

@Controller()
export class RedirectsController {
  constructor(private readonly content: ContentService) {}

  @Get([
    'redirects/:slug',
    'redirects/:slug.html',
    'en/redirects/:slug',
    'en/redirects/:slug.html',
    'EN-US/redirects/:slug',
    'EN-US/redirects/:slug.html'
  ])
  handleRedirect(@Param('slug') slug: string, @Req() req: Request, @Res() res: Response) {
    const locale = this.content.getLocaleFromPath(req.path);
    const cleaned = slug.replace(/\.html$/i, '');
    const redirect = this.content.getRedirect(locale, cleaned) || this.content.getRedirect('pt', cleaned);

    if (!redirect) {
      return res.redirect(locale === 'en' ? '/en' : '/');
    }

    res.setHeader('Cache-Control', 'public, max-age=3600');
    return res.redirect(302, redirect.url);
  }
}
