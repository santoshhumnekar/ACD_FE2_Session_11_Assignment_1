import { ServiceDirectiveappPage } from './app.po';

describe('service-directiveapp App', function() {
  let page: ServiceDirectiveappPage;

  beforeEach(() => {
    page = new ServiceDirectiveappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
