import { ContentService } from './content.service';

describe('ContentService', () => {
  let service: ContentService;

  beforeEach(() => {
    service = new ContentService();
  });

  it('resolves the correct locale from different path formats', () => {
    expect(service.getLocaleFromPath('/en/downloads')).toBe('en');
    expect(service.getLocaleFromPath('/EN-US/about')).toBe('en');
    expect(service.getLocaleFromPath('/downloads')).toBe('pt');
  });

  it('builds bilingual alternate links with normalized urls', () => {
    expect(service.buildAlternates('/downloads/')).toEqual([
      { locale: 'pt-BR', url: '/downloads' },
      { locale: 'en-US', url: '/en/downloads' }
    ]);

    expect(service.buildAlternates('/EN-US/Downloads')).toEqual([
      { locale: 'pt-BR', url: '/downloads' },
      { locale: 'en-US', url: '/en/downloads' }
    ]);
  });

  it('provides base context including navigation and footer', () => {
    const context = service.getBaseContext('pt', '/sobre');

    expect(context.locale).toBe('pt');
    expect(context.navigation.length).toBeGreaterThan(0);
    expect(context.footer.links.length).toBeGreaterThan(0);
    expect(context.alternates).toEqual([
      { locale: 'pt-BR', url: '/sobre' },
      { locale: 'en-US', url: '/en/sobre' }
    ]);
  });

  it('returns detailed download data for known slugs', () => {
    const download = service.getDownload('en', 'robooster2');

    expect(download).toBeDefined();
    expect(download?.name).toContain('RoBooster 2');
    expect(download?.downloadLinks.some((link) => link.type === 'primary')).toBe(true);
  });
});
