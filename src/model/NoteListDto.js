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
import {NoteDto} from './NoteDto';

/**
 * The NoteListDto model module.
 * @module model/NoteListDto
 * @version 1.0
 */
export class NoteListDto {
  /**
   * Constructs a new <code>NoteListDto</code>.
   * @alias module:model/NoteListDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>NoteListDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NoteListDto} obj Optional instance to populate.
   * @return {module:model/NoteListDto} The populated <code>NoteListDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new NoteListDto();
      if (data.hasOwnProperty('notes'))
        obj.notes = ApiClient.convertToType(data['notes'], [NoteDto]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/NoteDto>} notes
 */
NoteListDto.prototype.notes = undefined;
