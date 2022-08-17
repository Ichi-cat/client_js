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
    describe('CategoryListDto', function() {
      beforeEach(function() {
        instance = new Notes.CategoryListDto();
      });

      it('should create an instance of CategoryListDto', function() {
        // TODO: update the code to test CategoryListDto
        expect(instance).to.be.a(Notes.CategoryListDto);
      });

      it('should have the property categories (base name: "categories")', function() {
        // TODO: update the code to test the property categories
        expect(instance).to.have.property('categories');
        // expect(instance.categories).to.be(expectedValueLiteral);
      });

    });
  });

}));
