import { Controller, Get, Render, Req } from '@nestjs/common';
import { Request } from 'express';
import { ContentService } from '../services/content.service';

@Controller()
export class GameController {
  constructor(private readonly content: ContentService) {}

  @Get(['game', 'game_integrado/game', 'game_integrado/game.html', 'en/game', 'EN-US/game'])
  @Render('pages/game')
  renderGame(@Req() req: Request) {
    const locale = this.content.getLocaleFromPath(req.path);
    const game = this.content.getGame(locale);

    return {
      ...this.content.getBaseContext(locale, req.path),
      meta: game.seo,
      title: game.title,
      description: game.description
    };
  }
}
