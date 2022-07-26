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
import {CreateNoteVm} from '../model/CreateNoteVm';
import {NoteDetailsDto} from '../model/NoteDetailsDto';
import {NoteListDto} from '../model/NoteListDto';
import {Operation} from '../model/Operation';
import {ProblemDetails} from '../model/ProblemDetails';
import {UpdateNoteVm} from '../model/UpdateNoteVm';

/**
* Note service.
* @module api/NoteApi
* @version 1.4.0
*/
export class NoteApi {

    /**
    * Constructs a new NoteApi. 
    * @alias module:api/NoteApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createNote operation.
     * @callback moduleapi/NoteApi~createNoteCallback
     * @param {String} error Error message, if any.
     * @param {'String'{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} apiVersion 
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateNoteVm} opts.body 
     * @param {module:api/NoteApi~createNoteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createNote(apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling createNote");
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
        '/Note', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteNote operation.
     * @callback moduleapi/NoteApi~deleteNoteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {String} apiVersion 
     * @param {module:api/NoteApi~deleteNoteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteNote(id, apiVersion, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteNote");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling deleteNote");
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
        '/Note/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNoteById operation.
     * @callback moduleapi/NoteApi~getNoteByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NoteDetailsDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {String} apiVersion 
     * @param {module:api/NoteApi~getNoteByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getNoteById(id, apiVersion, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getNoteById");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling getNoteById");
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
      let returnType = NoteDetailsDto;

      return this.apiClient.callApi(
        '/Note/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNotes operation.
     * @callback moduleapi/NoteApi~getNotesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NoteListDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} apiVersion 
     * @param {module:api/NoteApi~getNotesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getNotes(apiVersion, callback) {
      
      let postBody = null;
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling getNotes");
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
      let returnType = NoteListDto;

      return this.apiClient.callApi(
        '/Note', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getNotesByCategoryId operation.
     * @callback moduleapi/NoteApi~getNotesByCategoryIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NoteListDto{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {String} apiVersion 
     * @param {module:api/NoteApi~getNotesByCategoryIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getNotesByCategoryId(id, apiVersion, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getNotesByCategoryId");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling getNotesByCategoryId");
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
      let returnType = NoteListDto;

      return this.apiClient.callApi(
        '/Note/ByCategory/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateNote operation.
     * @callback moduleapi/NoteApi~updateNoteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} apiVersion 
     * @param {Object} opts Optional parameters
     * @param {module:model/UpdateNoteVm} opts.body 
     * @param {module:api/NoteApi~updateNoteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateNote(apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling updateNote");
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
        '/Note', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateNotePatch operation.
     * @callback moduleapi/NoteApi~updateNotePatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {String} apiVersion 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/Operation>} opts.body 
     * @param {module:api/NoteApi~updateNotePatchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateNotePatch(id, apiVersion, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateNotePatch");
      }
      // verify the required parameter 'apiVersion' is set
      if (apiVersion === undefined || apiVersion === null) {
        throw new Error("Missing the required parameter 'apiVersion' when calling updateNotePatch");
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
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/Note/{id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}