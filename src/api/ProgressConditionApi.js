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
import {ApiClient} from "../ApiClient";
import {ProblemDetails} from '../model/ProblemDetails';
import {ProgressConditionListDto} from '../model/ProgressConditionListDto';

/**
* ProgressCondition service.
* @module api/ProgressConditionApi
* @version 1.0
*/
export class ProgressConditionApi {

    /**
    * Constructs a new ProgressConditionApi. 
    * @alias module:api/ProgressConditionApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the getProgressConditions operation.
     * @callback moduleapi/ProgressConditionApi~getProgressConditionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProgressConditionListDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} apiVersion 
     * @param {module:api/ProgressConditionApi~getProgressConditionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getProgressConditions(apiVersion, callback) {
      
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling getProgressConditions");
      }

      let pathParams = {
        
      };
      let queryParams = {
        'api-version': apiVersion
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ProgressConditionListDto;

      return this.apiClient.callApi(
        '/ProgressCondition', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}