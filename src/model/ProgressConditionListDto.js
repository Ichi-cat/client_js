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
import {ProgressConditionDto} from './ProgressConditionDto';

/**
 * The ProgressConditionListDto model module.
 * @module model/ProgressConditionListDto
 * @version 1.0
 */
export class ProgressConditionListDto {
  /**
   * Constructs a new <code>ProgressConditionListDto</code>.
   * @alias module:model/ProgressConditionListDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProgressConditionListDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProgressConditionListDto} obj Optional instance to populate.
   * @return {module:model/ProgressConditionListDto} The populated <code>ProgressConditionListDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProgressConditionListDto();
      if (data.hasOwnProperty('progressConditions'))
        obj.progressConditions = ApiClient.convertToType(data['progressConditions'], [ProgressConditionDto]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/ProgressConditionDto>} progressConditions
 */
ProgressConditionListDto.prototype.progressConditions = undefined;

