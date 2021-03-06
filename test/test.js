'use strict';

var cyrillicToTranslit = require('..');
var assert = require('assert');
var should = require('should');

describe('cyrillicToTranslit', function() {
    it('cyrillicToTranslit should be a function and have 1 public method transform', function () {
        var c2t = cyrillicToTranslit();
        c2t.should.be.a.Function;
        c2t.should.have.property('transform');
        c2t.transform.should.be.a.Function;
    });
    describe('transform', function() {
        it('should return empty string when parameters are empty', function () {
            assert.equal("", cyrillicToTranslit().transform());
            assert.equal("", cyrillicToTranslit().transform(null));
        });
        it('should return translit when first parameter cyrillic', function () {
            assert.equal("privet mir!", cyrillicToTranslit().transform("привет мир!"));
        });
        it('should return translit with replaced " " on "_"', function () {
            assert.equal("privet_mir!", cyrillicToTranslit().transform("привет мир!", "_"));
        });
        it('should return translit if translit passed', function () {
            assert.equal("privet mir!", cyrillicToTranslit().transform("privet mir!"));
        });
    });
});