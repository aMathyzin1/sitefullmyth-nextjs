import { Controller, Get, Param, Render, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { ContentService } from '../services/content.service';
import { Locale } from '../../content/types';

@Controller()
export class DownloadsController {
  constructor(private readonly content: ContentService) {}

  private normalizeSlug(slug: string) {
    return slug.replace(/\.html$/i, '');
  }

  private getDownloadBase(locale: Locale) {
    return locale === 'en' ? '/en/downloads' : '/downloads';
  }

  @Get([
    'downloads',
    'downloads/',
    'downloads/arquivos',
    'downloads/arquivos.html',
    'en/downloads',
    'en/downloads/',
    'en/downloads/arquivos',
    'en/downloads/arquivos.html',
    'EN-US/downloads',
    'EN-US/downloads/',
    'EN-US/downloads/arquivos',
    'EN-US/downloads/arquivos.html'
  ])
  @Render('pages/downloads')
  renderDownloads(@Req() req: Request) {
    const locale = this.content.getLocaleFromPath(req.path);
    const downloads = this.content.getDownloads(locale);

    return {
      ...this.content.getBaseContext(locale, req.path),
      meta: downloads.seo,
      title: downloads.title,
      description: downloads.description,
      categories: downloads.categories,
      items: downloads.items,
      downloadBase: this.getDownloadBase(locale)
    };
  }

  @Get([
    'downloads/:slug',
    'downloads/arquivos/:slug',
    'en/downloads/:slug',
    'en/downloads/arquivos/:slug',
    'EN-US/downloads/:slug',
    'EN-US/downloads/arquivos/:slug'
  ])
  @Render('pages/download-detail')
  renderDownloadDetail(
    @Param('slug') slug: string,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    const locale = this.content.getLocaleFromPath(req.path);
    const normalized = this.normalizeSlug(slug);
    if (normalized === 'arquivos' || normalized === 'downloads') {
      return res.redirect(locale === 'en' ? '/en/downloads' : '/downloads');
    }
    const download = this.content.getDownload(locale, normalized);

    if (!download) {
      res.status(404);
      const notFound = this.content.getNotFound(locale);
      return {
        ...this.content.getBaseContext(locale, req.path),
        meta: notFound.seo,
        title: notFound.title,
        description: notFound.description,
        actionLabel: notFound.ctaLabel,
        actionHref: locale === 'en' ? '/en' : '/',
        isNotFound: true
      };
    }

    const downloads = this.content.getDownloads(locale);

    return {
      ...this.content.getBaseContext(locale, req.path),
      meta: download.seo,
      download,
      related: downloads.items.filter((item) => item.slug !== download.slug).slice(0, 3),
      downloadBase: this.getDownloadBase(locale)
    };
  }
}
