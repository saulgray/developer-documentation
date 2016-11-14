## Definitions

### GET List Global Definitions

> Definition

```plaintext
GET  http://api.samplicio.us/Lookup/v1/BasicLookups/BundledLookups/{Bundle}
```
> Example Request

```shell
curl -H "Authorization: YOUR_API_KEY_HERE" https://api.samplicio.us/Lookup/v1/BasicLookups/BundledLookups/CountryLanguages,Industries,SampleTypes,StudyTypes,SupplierLinkTypes,SurveyStatuses
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Lookup/v1/BasicLookups/BundledLookups/CountryLanguages,Industries,SampleTypes,StudyTypes,SupplierLinkTypes,SurveyStatuses')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

request['Authorization'] = YOUR_API_KEY_HERE

response = http.request(request)
```

```php
<?php
$URL = "https://api.samplicio.us/Lookup/v1/BasicLookups/BundledLookups/CountryLanguages,Industries,SampleTypes,StudyTypes,SupplierLinkTypes,SurveyStatuses";

$aHTTP['http']['method']  = 'GET';

$aHTTP['http']['header']  = "Authorization: YOUR_API_KEY_HERE";

$context = stream_context_create($aHTTP);

$response = file_get_contents($URL, false, $context);
?>
```

```python
import requests

url = 'https://api.samplicio.us/Lookup/v1/BasicLookups/BundledLookups/CountryLanguages,Industries,SampleTypes,StudyTypes,SupplierLinkTypes,SurveyStatuses'

headers = {'Authorization' : YOUR_API_KEY_HERE}

response = requests.get(url, headers=headers)
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Lookup/v1/BasicLookups/BundledLookups/CountryLanguages,Industries,SampleTypes,StudyTypes,SupplierLinkTypes,SurveyStatuses");

request.Headers.Add("Authorization", YOUR_API_KEY_HERE);

WebResponse response = request.GetResponse();
```
```javascript
const https = require('https');

var options = {
  "method": "GET",
  "hostname": "api.samplicio.us",
  "path": "/Lookup/v1/BasicLookups/BundledLookups/CountryLanguages,Industries,SampleTypes,StudyTypes,SupplierLinkTypes,SurveyStatuses",
  "headers": {'Authorization': YOUR_API_KEY_HERE}
};

var request = https.request(options, function (response) {
  var chunks = [];

  response.on("data", function (chunk) {
    chunks.push(chunk);
  });

});

request.end();
```

> Example Response

```json
{
  "ApiResult": 0,
  "ApiResultCode": 0,
  "ApiAccount": "Anon",
  "AccountType": 2,
  "ApiAccountStatus": 1,
  "AccountCode": "AA",
  "ApiMessages": [
    "API Message: Response initialized.",
    "API Message: GetBundledLookups successful."
  ],
  "ResultCount": 6,
  "AllBidProbabilities": [],
  "AllBidStatuses": [],
  "AllCategoryLockOutDurations": [],
  "AllCountries": [],
  "AllCountryLanguages": [
  {
      "Code": "CHI-CN",
      "Id": "1",
      "IsActive": true,
      "Name": "Chinese Simplified - China",
      "SortOrder": 1
    }
  ],
  "AllIndustries": [
  {
      "Code": "AUTO",
      "Id": "1",
      "IsActive": true,
      "Name": "Automotive",
      "SortOrder": 1
    }
  ],
  "AllProposalTypes": [],
  "AllQuestionClassifications": [],
  "AllSampleTypes": [
  {
      "Code": "Consumer",
      "Id": "100",
      "IsActive": true,
      "Name": "Consumer",
      "SortOrder": 1
    }
  ],
  "AllStudyTypes": [
  {
      "Code": "ADH",
      "Id": "1",
      "IsActive": true,
      "Name": "Adhoc",
      "SortOrder": 1
    }
  ],
  "AllSupplierLinkTypes": [
  {
      "Code": "TS",
      "Id": "1",
      "IsActive": true,
      "Name": "Targeted / Standalone",
      "SortOrder": 1
    }
  ],
  "AllSupplierPreferenceTypes": [],
  "AllSupplierRequestStatuses": [],
  "AllSupplierTrackingUrlTypes": [],
  "AllSurveyPlatforms": [],
  "AllSurveyStatuses": [
  {
      "Code": "02",
      "Id": "1",
      "IsActive": true,
      "Name": "Pending",
      "SortOrder": 1
    }
  ],
  "AllThirdPartyServices": []
  }

```

Returns a list of global system definitions. Arguments can be passed individually or in aggregate, with arguments separated by a comma. One argument must be provided at minimum.  

<aside class="notice">Only some of these should be checked regularly for updates and modifications, namely CountryLanguages, Industries, and SupplierLinkTypes.</aside>

#### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Bundle                       | string   | true     | A string of lookup options delimited by a comma.  

#### Options

| Option                       | Description                                                                         |
|------------------------------|-------------------------------------------------------------------------------------|
| Countries 	                 | Array of all countries.      
| CountryLanguages             | Array of all Country-Language pairs by ID.      
| Industries	                 | Array of all options for industry type.      
| SampleTypes	                 | Array of all types of sample that buyers can field on the platform.      
| StudyTypes	                 | Array of all types of studies buyers can field on the platform.      
| SupplierLinkTypes            | Array of all link types suppliers can use to send sample.      
| SurveyStatuses               | Array of all possible survey statuses on the platform.      
| BidProbabilities             | Array of all probabilities of a bid being awarded (Low, Med, High).      
| BidStatuses	                 | Array of all possible statuses for a bid.      
| ProposalTypes                | Array of all possible proposal types.      
| CategoryLockOutDurations     | Array of all possible lockout times.      
| QuestionClassifications      | Array of all question categories on the platform.
| SupplierPreferenceTypes      | Array of all possible preferences a supplier can communicate.
| SupplierRequestStatuses      | Array of all tracking methods a supplier can use to track a respondent's status.
| SurveyPlatforms	             | Array of survey platforms users may be sending to or from.
| ThirdPartyServices	         | Array of all Third Party Services on the platform.



### GET List Suppliers

> Definition

```plaintext
GET  https://api.samplicio.us/Core/v1/Suppliers/AllWithAccount
```
> Example Request

```shell
curl -H "Authorization: YOUR_API_KEY_HERE" https://api.samplicio.us/Core/v1/Suppliers/AllWithAccount
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Core/v1/Suppliers/AllWithAccount')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

request['Authorization'] = YOUR_API_KEY_HERE

response = http.request(request)
```

```php
<?php
$URL = "https://api.samplicio.us/Core/v1/Suppliers/AllWithAccount",

$aHTTP['http']['method']  = 'GET';

$aHTTP['http']['header']  = "Authorization: YOUR_API_KEY_HERE";

$context = stream_context_create($aHTTP);

$response = file_get_contents($URL, false, $context);
?>
```

```python
import requests

url = 'https://api.samplicio.us/Core/v1/Suppliers/AllWithAccount'

headers = {'Authorization' : YOUR_API_KEY_HERE}

response = requests.get(url, headers=headers)
```
```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Core/v1/Suppliers/AllWithAccount");

request.Headers.Add("Authorization", YOUR_API_KEY_HERE);

WebResponse response = request.GetResponse();
```
```javascript
const https = require('https');

var options = {
  "method": "GET",
  "hostname": "api.samplicio.us",
  "path": "https://api.samplicio.us/Core/v1/Suppliers/AllWithAccount",
  "headers": {'Authorization': YOUR_API_KEY_HERE}
};

var request = https.request(options, function (response) {
  var chunks = [];

  response.on("data", function (chunk) {
    chunks.push(chunk);
  });

});

request.end();
```

> Example Response

```json
{
  "ApiResult": 0,
  "ApiResultCode": 0,
  "ApiAccount": "Anon",
  "AccountType": 2,
  "ApiAccountStatus": 1,
  "AccountCode": "AA",
  "ApiMessages": [
    "API Message: Response initialized.",
    "API Message: GetAllSuppliersGroupedByAccount successful."
  ],
  "ResultCount": 4,
  "AccountsWithSuppliers": [
    {
      "AccountName": "Sample Company",
      "Suppliers": [
        {
          "Name": "Supplier 1",
          "Code": "1010"
        },
        {
          "Name": "Supplier 2",
          "Code": "1010"
        },
        {
          "Name": "Supplier 3",
          "Code": "1010"
        },
        {
          "Name": "Supplier 4",
          "Code": "1010"
        },
      ]
    }
  ]
}

```

Returns a list of all suppliers.

### GET List Business Units

> Definition

```plaintext
GET  https://api.samplicio.us/Core/v1/BusinessUnits/All
```
> Example Request

```shell
curl -H "Authorization: YOUR_API_KEY_HERE" https://api.samplicio.us/Core/v1/BusinessUnits/All
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Core/v1/BusinessUnits/All')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

request['Authorization'] = YOUR_API_KEY_HERE

response = http.request(request)
```

```php
<?php

$URL = "https://api.samplicio.us/Core/v1/BusinessUnits/All";

$aHTTP['http']['method']  = 'GET';

$aHTTP['http']['header']  = "Authorization: YOUR_API_KEY_HERE";

$context = stream_context_create($aHTTP);

$response = file_get_contents($URL, false, $context);
?>
```

```python
import requests

url = 'https://api.samplicio.us/Core/v1/BusinessUnits/All'

headers = {'Authorization' : YOUR_API_KEY_HERE}

response = requests.get(url, headers=headers)
```
```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Core/v1/BusinessUnits/All");

request.Headers.Add("Authorization", YOUR_API_KEY_HERE);

WebResponse response = request.GetResponse();
```
```javascript
const https = require('https');

var options = {
  "method": "GET",
  "hostname": "api.samplicio.us",
  "path": "/Core/v1/BusinessUnits/All",
  "headers": {'Authorization': YOUR_API_KEY_HERE}
};

var request = https.request(options, function (response) {
  var chunks = [];

  response.on("data", function (chunk) {
    chunks.push(chunk);
  });

});

request.end();
```

> Example Response

```json
 {
  "ApiResult": 0,
  "ApiResultCode": 0,
  "ApiAccount": "Anon",
  "AccountType": 2,
  "ApiAccountStatus": 1,
  "AccountCode": "AA",
  "ApiMessages": [
    "API Message: Response initialized.",
    "API Message: GetAllBusinessUnits successful."
  ],
  "ResultCount": 1,
  "BusinessUnits": [
    {
      "AccountID": 001,
      "Id": "001",
      "Name": "Fulcrum"
    },
  ]
}

```
Returns a list of all Business Units.
