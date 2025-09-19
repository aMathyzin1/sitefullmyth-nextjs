import { Module } from '@nestjs/common';
import { HomeController } from './controllers/home.controller';
import { ContentService } from './services/content.service';
import { DownloadsController } from './controllers/downloads.controller';
import { AboutController } from './controllers/about.controller';
import { LegalController } from './controllers/legal.controller';
import { RedirectsController } from './controllers/redirects.controller';
import { GameController } from './controllers/game.controller';
import { NotFoundController } from './controllers/not-found.controller';

@Module({
  controllers: [
    HomeController,
    DownloadsController,
    AboutController,
    LegalController,
    RedirectsController,
    GameController,
    NotFoundController
  ],
  providers: [ContentService]
})
export class PagesModule {}
