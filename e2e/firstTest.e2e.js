describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have home screen', async () => {
    await expect(element(by.id('Home'))).toExist();
  });

  it('should click movie on screen', async () => {
    await element(by.text('Arrow')).tap();
  });

  it('slide scrollbar searching for movies', async () => {
    // offset direction startPositionX startPositionY
    await element(by.id('movieList')).scroll(100, 'down', NaN, 0.85);
  });

  it('add a movie to stared', async () => {

    await element(by.id('star').withAncestor(by.id('Arrow'))).tap();
    await element(by.id('FavoritiesTab')).tap();
    await expect(element(by.id('Favorities'))).toExist();
    await expect(element(by.text('Arrow'))).toExist();
  });

  it('search a movie', async () => {

    await element(by.id('SearchTab')).tap();
    await element(by.id('searchBar')).replaceText('House');
    await waitFor(element(by.id('House'))).toExist().withTimeout(2000);

  });
});
