import { JsonplacePage } from './app.po';

describe('jsonplace App', () => {
  let page: JsonplacePage;

  beforeEach(() => {
    page = new JsonplacePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
