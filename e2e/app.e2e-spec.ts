import { PokedexAngularPage } from './app.po';

describe('pokedex-angular App', function() {
  let page: PokedexAngularPage;

  beforeEach(() => {
    page = new PokedexAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
