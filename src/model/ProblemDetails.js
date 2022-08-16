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
 * Swagger Codegen version: 3.0.35
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The ProblemDetails model module.
 * @module model/ProblemDetails
 * @version 1.0
 */
export class ProblemDetails {
  /**
   * Constructs a new <code>ProblemDetails</code>.
   * @alias module:model/ProblemDetails
   * @class
   * @extends Object
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProblemDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProblemDetails} obj Optional instance to populate.
   * @return {module:model/ProblemDetails} The populated <code>ProblemDetails</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProblemDetails();
      ApiClient.constructFromObject(data, obj, 'Object');
    }
    return obj;
  }
}
