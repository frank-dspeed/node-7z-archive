/*global describe, it */
'use strict';
import chai from 'chai';
import {
  createLinuxSfx
} from '../../lib/index.mjs';
import fs from 'fs-extra';
const expect = chai.expect;

describe('Method: `CreateLinuxSfx`', function () {

  it('should return successfully on an Linux Sfx build', function (done) {
    createLinuxSfx('test', ['*.js'], './test/')
      .then(function (data) {
        expect(data).to.exist;
        expect(fs.existsSync('./test/SfxPackages/test.elf')).to.be.eql(true);
        fs.removeSync('./test/SfxPackages');
        done();
      })
      .catch(function (err) {
        console.error('No error should be displayed!');
        console.error(err);
        expect(err).to.exist;
        done();
      });
  });

});
