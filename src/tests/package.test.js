'use strict';

const packageTransformer = require('./package');

describe('Tests', () => {
  describe('Package transformer', () => {
    it('should work with an empty package.json', () => {
      expect(packageTransformer({})).toMatchSnapshot();
    });
  });
});
