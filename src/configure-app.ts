import { join } from 'path';
import helmet from 'helmet';
import compression from 'compression';
import { engine } from 'express-handlebars';
import { NestExpressApplication } from '@nestjs/platform-express';

export function configureApp(app: NestExpressApplication) {
  app.use(
    helmet({
      contentSecurityPolicy: false,
      crossOriginEmbedderPolicy: false
    })
  );
  app.use(compression());

  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  app.engine(
    'hbs',
    engine({
      extname: '.hbs',
      defaultLayout: 'main',
      layoutsDir: join(__dirname, '..', 'views', 'layouts'),
      partialsDir: join(__dirname, '..', 'views', 'partials'),
      helpers: {
        upper: (value: string) => value?.toUpperCase?.() ?? '',
        join: (items: string[], separator: string) => items?.join?.(separator) ?? '',
        json: (context: unknown) => JSON.stringify(context),
        eq: (a: unknown, b: unknown) => a === b,
        plus: (a: unknown, b: unknown) => Number(a ?? 0) + Number(b ?? 0)
      }
    })
  );
}
