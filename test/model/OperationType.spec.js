/*
 * Notes
 * Backend app with Notes and Notetasks
 *
 * OpenAPI spec version: 1.4.0
 * Contact: staske11111@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.35
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Notes);
  }
}(this, function(expect, Notes) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('OperationType', function() {
      beforeEach(function() {
        instance = Notes.OperationType;
      });

      it('should create an instance of OperationType', function() {
        // TODO: update the code to test OperationType
        expect(instance).to.be.a('object');
      });

      it('should have the property _0', function() {
        expect(instance).to.have.property('_0');
        expect(instance._0).to.be(0);
      });

      it('should have the property _1', function() {
        expect(instance).to.have.property('_1');
        expect(instance._1).to.be(1);
      });

      it('should have the property _2', function() {
        expect(instance).to.have.property('_2');
        expect(instance._2).to.be(2);
      });

      it('should have the property _3', function() {
        expect(instance).to.have.property('_3');
        expect(instance._3).to.be(3);
      });

      it('should have the property _4', function() {
        expect(instance).to.have.property('_4');
        expect(instance._4).to.be(4);
      });

      it('should have the property _5', function() {
        expect(instance).to.have.property('_5');
        expect(instance._5).to.be(5);
      });

      it('should have the property _6', function() {
        expect(instance).to.have.property('_6');
        expect(instance._6).to.be(6);
      });

    });
  });

}));
