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
import {ApiClient} from "../ApiClient";
import {CategoryListDto} from '../model/CategoryListDto';
import {CreateCategoryVm} from '../model/CreateCategoryVm';
import {ProblemDetails} from '../model/ProblemDetails';
import {UpdateCategoryVm} from '../model/UpdateCategoryVm';

/**
* Category service.
* @module api/CategoryApi
* @version 1.4.0
*/
export class CategoryApi {

    /**
    * Constructs a new CategoryApi. 
    * @alias module:api/CategoryApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createCategory operation.
     * @callback moduleapi/CategoryApi~createCategoryCallback
     * @param {String} error Error message, if any.
     * @param {'String'{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} apiVersion 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateCategoryVm} opts.body 
     * @param {module:api/CategoryApi~createCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createCategory(apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling createCategory");
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

      let authNames = ['oauth2'];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['application/json'];
      let returnType = 'String';

      return this.apiClient.callApi(
        '/Category', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteCategory operation.
     * @callback moduleapi/CategoryApi~deleteCategoryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {String} apiVersion 
     * @param {module:api/CategoryApi~deleteCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCategory(id, apiVersion, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteCategory");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling deleteCategory");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        'api-version': apiVersion
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/Category/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getCategories operation.
     * @callback moduleapi/CategoryApi~getCategoriesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CategoryListDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} apiVersion 
     * @param {module:api/CategoryApi~getCategoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getCategories(apiVersion, callback) {
      
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling getCategories");
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

      let authNames = ['oauth2'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CategoryListDto;

      return this.apiClient.callApi(
        '/Category', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateCategory operation.
     * @callback moduleapi/CategoryApi~updateCategoryCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} apiVersion 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateCategoryVm} opts.body 
     * @param {module:api/CategoryApi~updateCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateCategory(apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling updateCategory");
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

      let authNames = ['oauth2'];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/Category', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}