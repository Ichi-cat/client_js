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
import {ApiClient} from '../ApiClient';
import {ProgressConditionEnum} from './ProgressConditionEnum';

/**
 * The ProgressConditionDto model module.
 * @module model/ProgressConditionDto
 * @version 1.0
 */
export class ProgressConditionDto {
  /**
   * Constructs a new <code>ProgressConditionDto</code>.
   * @alias module:model/ProgressConditionDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ProgressConditionDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProgressConditionDto} obj Optional instance to populate.
   * @return {module:model/ProgressConditionDto} The populated <code>ProgressConditionDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ProgressConditionDto();
      if (data.hasOwnProperty('id'))
        obj.id = ProgressConditionEnum.constructFromObject(data['id']);
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/ProgressConditionEnum} id
 */
ProgressConditionDto.prototype.id = undefined;

/**
 * @member {String} name
 */
ProgressConditionDto.prototype.name = undefined;

