import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import { ContentService } from '../services/content.service';

@Controller()
export class AboutController {
  constructor(private readonly content: ContentService) {}

  @Get([
    'info/sobre',
    'info/sobre.html',
    'sobre',
    'en/about',
    'en/about.html',
    'EN-US/info/sobre',
    'EN-US/info/sobre.html'
  ])
  @Render('pages/about')
  renderAbout(@Req() req: Request) {
    const locale = this.content.getLocaleFromPath(req.path);
    const about = this.content.getAbout(locale);

    return {
      ...this.content.getBaseContext(locale, req.path),
      meta: about.seo,
      title: about.title,
      intro: about.intro,
      mission: about.mission,
      sections: about.sections,
      timeline: about.timeline,
      contactCta: about.contactCta
    };
  }
}
