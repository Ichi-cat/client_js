/*
 * Notes
 * Backend app with Notes and Notetasks
 *
 * OpenAPI spec version: 1.0
 * Contact: staske11111@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
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
    describe('NoteTaskDetailsDto', function() {
      beforeEach(function() {
        instance = new Notes.NoteTaskDetailsDto();
      });

      it('should create an instance of NoteTaskDetailsDto', function() {
        // TODO: update the code to test NoteTaskDetailsDto
        expect(instance).to.be.a(Notes.NoteTaskDetailsDto);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property text (base name: "text")', function() {
        // TODO: update the code to test the property text
        expect(instance).to.have.property('text');
        // expect(instance.text).to.be(expectedValueLiteral);
      });

      it('should have the property seconds (base name: "seconds")', function() {
        // TODO: update the code to test the property seconds
        expect(instance).to.have.property('seconds');
        // expect(instance.seconds).to.be(expectedValueLiteral);
      });

      it('should have the property _date (base name: "date")', function() {
        // TODO: update the code to test the property _date
        expect(instance).to.have.property('_date');
        // expect(instance._date).to.be(expectedValueLiteral);
      });

      it('should have the property matrixId (base name: "matrixId")', function() {
        // TODO: update the code to test the property matrixId
        expect(instance).to.have.property('matrixId');
        // expect(instance.matrixId).to.be(expectedValueLiteral);
      });

      it('should have the property progressConditionId (base name: "progressConditionId")', function() {
        // TODO: update the code to test the property progressConditionId
        expect(instance).to.have.property('progressConditionId');
        // expect(instance.progressConditionId).to.be(expectedValueLiteral);
      });

    });
  });

}));
