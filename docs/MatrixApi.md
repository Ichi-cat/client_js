# Notes.MatrixApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMatrices**](MatrixApi.md#getMatrices) | **GET** /Matrix | 

<a name="getMatrices"></a>
# **getMatrices**
> MatrixListDto getMatrices(apiVersion)



### Example
```javascript
import {Notes} from 'notes';

let apiInstance = new Notes.MatrixApi();
let apiVersion = "apiVersion_example"; // String | 

apiInstance.getMatrices(apiVersion, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **apiVersion** | **String**|  | 

### Return type

[**MatrixListDto**](MatrixListDto.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

