import { NightlifeCoordinationAppPage } from './app.po';

describe('nightlife-coordination-app App', function() {
  let page: NightlifeCoordinationAppPage;

  beforeEach(() => {
    page = new NightlifeCoordinationAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
