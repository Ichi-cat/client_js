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

  beforeEach(function() {
    instance = new Notes.ProgressConditionApi();
  });

  describe('(package)', function() {
    describe('ProgressConditionApi', function() {
      describe('getProgressConditions', function() {
        it('should call getProgressConditions successfully', function(done) {
          // TODO: uncomment, update parameter values for getProgressConditions call and complete the assertions
          /*

          instance.getProgressConditions(apiVersion, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Notes.ProgressConditionListDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));