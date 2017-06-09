import { NGFormLearnPage } from './app.po';

describe('ng-form-learn App', () => {
  let page: NGFormLearnPage;

  beforeEach(() => {
    page = new NGFormLearnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
