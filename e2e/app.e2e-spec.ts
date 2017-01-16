import { MaanantaiPage } from './app.po';

describe('maanantai App', function() {
  let page: MaanantaiPage;

  beforeEach(() => {
    page = new MaanantaiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
