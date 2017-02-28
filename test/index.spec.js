import { expect } from 'chai';
import { findColor } from '../src/index';

describe('Default tests', () => {
  it('Should be something', () => {
    expect(findColor('#9b59b6')).to.equal('Purple Plum');
  });
});
