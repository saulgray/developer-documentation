## Definitions

### GET List Global Definitions

> Definition

```plaintext
GET  http://api.samplicio.us/Lookup/v1/BasicLookups/BundledLookups/{Bundle}?key={APIKey}
```
> Example Request

```shell
curl https://api.samplicio.us/Lookup/v1/BasicLookups/BundledLookups/CountryLanguages,Industries,SampleTypes,StudyTypes,SupplierLinkTypes,SurveyStatuses?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Lookup/v1/BasicLookups/BundledLookups/CountryLanguages,Industries,SampleTypes,StudyTypes,SupplierLinkTypes,SurveyStatuses?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

globalDefinitions = http.request(request) 
```

```php
<?php
$globalDefinitions = file_get_contents('https://api.samplicio.us/Lookup/v1/BasicLookups/BundledLookups/CountryLanguages,Industries,SampleTypes,StudyTypes,SupplierLinkTypes,SurveyStatuses?key={APIKey}');
?>
```

```python
import requests

globalDefinitions = requests.get('https://api.samplicio.us/Lookup/v1/BasicLookups/BundledLookups/CountryLanguages,Industries,SampleTypes,StudyTypes,SupplierLinkTypes,SurveyStatuses?key={APIKey}')
```
```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Lookup/v1/BasicLookups/BundledLookups/CountryLanguages,Industries,SampleTypes,StudyTypes,SupplierLinkTypes,SurveyStatuses?key={APIKey}");

WebResponse globalDefinitions = request.GetResponse();
```
```javascript
const https = require('https');

https.get('https://api.samplicio.us/Lookup/v1/BasicLookups/BundledLookups/CountryLanguages,Industries,SampleTypes,StudyTypes,SupplierLinkTypes,SurveyStatuses?key={APIKey}', function(res){
  var globalDefinitions = res;
});
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
| Bundle                       | string   | false    | A string of lookup options delimited by a comma.  

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
GET  https://api.samplicio.us/Core/v1/Suppliers/AllWithAccount?key={APIKey}
```
> Example Request

```shell
curl https://api.samplicio.us/Core/v1/Suppliers/AllWithAccount?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Core/v1/Suppliers/AllWithAccount?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

suppliers = http.request(request) 
```

```php
<?php
$suppliers = file_get_contents('https://api.samplicio.us/Core/v1/Suppliers/AllWithAccount?key={APIKey}');
?>
```

```python
import requests

suppliers = requests.get('https://api.samplicio.us/Core/v1/Suppliers/AllWithAccount?key={APIKey}')
```
```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Core/v1/Suppliers/AllWithAccount?key={APIKey}");

WebResponse suppliers = request.GetResponse();
```
```javascript
const https = require('https');

https.get('https://api.samplicio.us/Core/v1/Suppliers/AllWithAccount?key={APIKey}', function(res){
  var suppliers = res;
});
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
GET  https://api.samplicio.us/Core/v1/BusinessUnits/All?key={APIKey}
```
> Example Request

```shell
curl https://api.samplicio.us/Core/v1/BusinessUnits/All?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Core/v1/BusinessUnits/All?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

businessUnits = http.request(request) 
```

```php
<?php
$businessUnits = file_get_contents('https://api.samplicio.us/Core/v1/BusinessUnits/All?key={APIKey}');
?>
```

```python
import requests

businessUnits = requests.get('https://api.samplicio.us/Core/v1/BusinessUnits/All?key={APIKey}')
```
```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Core/v1/BusinessUnits/All?key={APIKey}");

WebResponse businessUnits = request.GetResponse();
```
```javascript
const https = require('https');

https.get('https://api.samplicio.us/Core/v1/BusinessUnits/All?key={APIKey}', function(res){
  var businessUnits = res;
});
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
