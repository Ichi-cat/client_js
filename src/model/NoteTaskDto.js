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
import {ApiClient} from '../ApiClient';

/**
 * The NoteTaskDto model module.
 * @module model/NoteTaskDto
 * @version 1.4.0
 */
export class NoteTaskDto {
  /**
   * Constructs a new <code>NoteTaskDto</code>.
   * @alias module:model/NoteTaskDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>NoteTaskDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NoteTaskDto} obj Optional instance to populate.
   * @return {module:model/NoteTaskDto} The populated <code>NoteTaskDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new NoteTaskDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('date'))
        obj._date = ApiClient.convertToType(data['date'], 'Date');
      if (data.hasOwnProperty('seconds'))
        obj.seconds = ApiClient.convertToType(data['seconds'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
NoteTaskDto.prototype.id = undefined;

/**
 * @member {String} name
 */
NoteTaskDto.prototype.name = undefined;

/**
 * @member {Date} _date
 */
NoteTaskDto.prototype._date = undefined;

/**
 * @member {Number} seconds
 */
NoteTaskDto.prototype.seconds = undefined;

