# notes

Notes - JavaScript client for notes
Backend app with Notes and Notetasks
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0
- Package version: 1.0
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen
For more information, please visit [https://localhost](https://localhost)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install notes --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Notes = require('notes');

var api = new Notes.CategoryApi()
var apiVersion = "apiVersion_example"; // {String} 
var opts = { 
  'body': new Notes.CreateCategoryVm() // {CreateCategoryVm} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createCategory(apiVersion, opts, callback);
```

## Documentation for API Endpoints

All URIs are relative to */*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Notes.CategoryApi* | [**createCategory**](docs/CategoryApi.md#createCategory) | **POST** /Category | 
*Notes.CategoryApi* | [**deleteCategory**](docs/CategoryApi.md#deleteCategory) | **DELETE** /Category/{id} | 
*Notes.CategoryApi* | [**getCategories**](docs/CategoryApi.md#getCategories) | **GET** /Category | 
*Notes.CategoryApi* | [**updateCategory**](docs/CategoryApi.md#updateCategory) | **PUT** /Category | 
*Notes.MatrixApi* | [**getMatrices**](docs/MatrixApi.md#getMatrices) | **GET** /Matrix | 
*Notes.NoteApi* | [**createNote**](docs/NoteApi.md#createNote) | **POST** /Note | 
*Notes.NoteApi* | [**deleteNote**](docs/NoteApi.md#deleteNote) | **DELETE** /Note/{id} | 
*Notes.NoteApi* | [**getNoteById**](docs/NoteApi.md#getNoteById) | **GET** /Note/{id} | 
*Notes.NoteApi* | [**getNotes**](docs/NoteApi.md#getNotes) | **GET** /Note | 
*Notes.NoteApi* | [**getNotesByCategoryId**](docs/NoteApi.md#getNotesByCategoryId) | **GET** /Note/ByCategory/{id} | 
*Notes.NoteApi* | [**updateNote**](docs/NoteApi.md#updateNote) | **PUT** /Note | 
*Notes.NoteTaskApi* | [**createNoteTask**](docs/NoteTaskApi.md#createNoteTask) | **POST** /NoteTask | 
*Notes.NoteTaskApi* | [**deleteNoteTask**](docs/NoteTaskApi.md#deleteNoteTask) | **DELETE** /NoteTask/{id} | 
*Notes.NoteTaskApi* | [**getNoteTaskById**](docs/NoteTaskApi.md#getNoteTaskById) | **GET** /NoteTask/{id} | 
*Notes.NoteTaskApi* | [**getNoteTaskByMatrix**](docs/NoteTaskApi.md#getNoteTaskByMatrix) | **GET** /NoteTask/bymatrix/{id} | 
*Notes.NoteTaskApi* | [**getNoteTaskByProgressCondition**](docs/NoteTaskApi.md#getNoteTaskByProgressCondition) | **GET** /NoteTask/byprogresscondition/{id} | 
*Notes.NoteTaskApi* | [**getNoteTasks**](docs/NoteTaskApi.md#getNoteTasks) | **GET** /NoteTask | 
*Notes.NoteTaskApi* | [**updateNoteTask**](docs/NoteTaskApi.md#updateNoteTask) | **PUT** /NoteTask | 
*Notes.ProgressConditionApi* | [**getProgressConditions**](docs/ProgressConditionApi.md#getProgressConditions) | **GET** /ProgressCondition | 

## Documentation for Models

 - [Notes.CategoryDto](docs/CategoryDto.md)
 - [Notes.CategoryListDto](docs/CategoryListDto.md)
 - [Notes.CreateCategoryVm](docs/CreateCategoryVm.md)
 - [Notes.CreateNoteTaskVm](docs/CreateNoteTaskVm.md)
 - [Notes.CreateNoteVm](docs/CreateNoteVm.md)
 - [Notes.MatricesEnum](docs/MatricesEnum.md)
 - [Notes.MatrixDto](docs/MatrixDto.md)
 - [Notes.MatrixListDto](docs/MatrixListDto.md)
 - [Notes.NoteDetailsDto](docs/NoteDetailsDto.md)
 - [Notes.NoteDto](docs/NoteDto.md)
 - [Notes.NoteListDto](docs/NoteListDto.md)
 - [Notes.NoteTaskDetailsDto](docs/NoteTaskDetailsDto.md)
 - [Notes.NoteTaskDto](docs/NoteTaskDto.md)
 - [Notes.NoteTaskListDto](docs/NoteTaskListDto.md)
 - [Notes.ProblemDetails](docs/ProblemDetails.md)
 - [Notes.ProgressConditionDto](docs/ProgressConditionDto.md)
 - [Notes.ProgressConditionEnum](docs/ProgressConditionEnum.md)
 - [Notes.ProgressConditionListDto](docs/ProgressConditionListDto.md)
 - [Notes.UpdateCategoryVm](docs/UpdateCategoryVm.md)
 - [Notes.UpdateNoteTaskVm](docs/UpdateNoteTaskVm.md)
 - [Notes.UpdateNoteVm](docs/UpdateNoteVm.md)

## Documentation for Authorization

 All endpoints do not require authorization.

