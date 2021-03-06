'use strict';

const assert = require('assert');
const assetsTransformer = require('./assets');

describe('Main', () => {
  describe('Assets transformer', () => {
    it('should fill author in the LICENCE file', () => {
      expect(
        assetsTransformer(
          {
            name: 'LICENSE',
            data:
              'The MIT License (MIT)\nCopyright © 2017 <copyright holders>\n',
          },
          {},
        ),
      ).toMatchSnapshot();
    });

    it('should let pass other files', () => {
      assert.deepEqual(
        assetsTransformer(
          {
            name: 'YOLO',
            data: 'Carpe diem\n',
          },
          {},
        ),
        {
          name: 'YOLO',
          data: 'Carpe diem\n',
        },
      );
    });
  });
});
