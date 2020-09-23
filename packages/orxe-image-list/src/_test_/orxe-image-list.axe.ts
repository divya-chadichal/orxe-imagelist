import { OrxeOrxeImageList } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-orxe-image-list-axe', () => {
  it('', () => {
    expect(true).toBeTruthy();
  });
  
  let OrxeImageList;

  beforeEach(async () => {
    OrxeOrxeImageList;
    document.body.appendChild(document.createElement('OrxeImageList'));
    OrxeImageList = document.querySelector('OrxeImageList') as OrxeOrxeImageList;
  });

  afterEach(() => {
    OrxeImageList.remove();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(OrxeImageList);
    expect(result).toHaveNoViolations();
  });
});
