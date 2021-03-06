import '../orxe-orxe-image-list';

describe('orxe-image-list', () => {
  let imageSlider;

  beforeEach(async () => {
    document.body.appendChild(document.createElement('orxe-image-list'));
    imageSlider = document.querySelector('orxe-image-list');
    await Promise.resolve();
  });
  
  afterEach(async function () {
    await imageSlider.remove();
  });


  it('', () => {
    expect(true).toBeTruthy();
  });

  
  it('should check type of variable', async () => {
    expect(typeof imageSlider.currentFullIndex).toBe('number');
    expect(typeof imageSlider.currentRegIndex).toBe('number');
    expect(typeof imageSlider.currentSmallIndex).toBe('number');
  });

  it('should check default value for properties', () => {
    expect(imageSlider.currentFullIndex).toEqual(0);
    expect(imageSlider.currentRegIndex).toEqual(0);
    expect(imageSlider.currentSmallIndex).toEqual(0);
  });

  it('should check right button click Event for Full Image', async () => {
    imageSlider.currentFullIndex = 0;
    imageSlider.size = 'full';
    imageSlider.goNext(imageSlider.size);
    expect(imageSlider.currentFullIndex).toEqual(1);
  });

  it('should check previous button click Event for Full Image', async () => {
    imageSlider.currentFullIndex = 2;
    imageSlider.size = 'full'
    imageSlider.goPrevious(imageSlider.size);
    expect(imageSlider.currentFullIndex).toEqual(1);
  });

  it('should check next button click Event for Regular Image', async () => {
    imageSlider.currentRegIndex = 0;
    imageSlider.size = 'regular'
    imageSlider.goNext(imageSlider.size);
    expect(imageSlider.currentRegIndex).toEqual(1);
  });

  it('should check previous button click Event for Regular Image', async () => {
    imageSlider.currentRegIndex = 2;
    imageSlider.size = 'regular'
    imageSlider.goPrevious(imageSlider.size);
    expect(imageSlider.currentRegIndex).toEqual(1);
  });

  it('should check next button click Event for Small Image', async () => {
    imageSlider.currentSmallIndex = 0;
    imageSlider.size = 'small';
    imageSlider.goNext(imageSlider.size);
    expect(imageSlider.currentSmallIndex).toEqual(1);
  });

  it('should check previous button click Event for Small Image', async () => {
    imageSlider.currentSmallIndex = 2;
    imageSlider.size = 'small';
    imageSlider.goPrevious(imageSlider.size);
    expect(imageSlider.currentSmallIndex).toEqual(1);
  });

  it('should check currentFullIndex should not change when index is 0', async () => {
    imageSlider.currentFullIndex = 0;
    imageSlider.size = 'full';
    imageSlider.goPrevious(imageSlider.size);
    expect(imageSlider.currentFullIndex).toEqual(0);
  });

  it('should check currentRegIndex should not change when index is 0', async () => {
    imageSlider.currentRegIndex = 0;
    imageSlider.size = 'regular';
    imageSlider.goPrevious(imageSlider.size);
    expect(imageSlider.currentRegIndex).toEqual(0);
  });

  it('should check currentFullIndex should not change when index is 0', async () => {
    imageSlider.currentSmallIndex = 0;
    imageSlider.size = 'small';
    imageSlider.goPrevious(imageSlider.size);
    expect(imageSlider.currentSmallIndex).toEqual(0);
  });

  it('should check currentFullIndex should not change when index is 2', async () => {
    imageSlider.currentFullIndex = 2;
    imageSlider.size = 'full';
    imageSlider.goNext(imageSlider.size);
    expect(imageSlider.currentFullIndex).toEqual(2);
  });

  it('should check currentRegIndex should not change when index is 2', async () => {
    imageSlider.currentRegIndex = 2;
    imageSlider.size = 'regular';
    imageSlider.goNext(imageSlider.size);
    expect(imageSlider.currentRegIndex).toEqual(2);
  });

  it('should check currentFullIndex should not change when index is 2', async () => {
    imageSlider.currentSmallIndex = 2;
    imageSlider.size = 'small';
    imageSlider.goNext(imageSlider.size);
    expect(imageSlider.currentSmallIndex).toEqual(2);
  });

});