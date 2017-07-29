import { RosstripiPage } from './app.po';

describe('rosstripi App', () => {
  let page: RosstripiPage;

  beforeEach(() => {
    page = new RosstripiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
