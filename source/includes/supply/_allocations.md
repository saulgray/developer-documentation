## Allocations

### GET List Allocated Surveys
> Definition

```plaintext
GET  https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/All/{SupplierCode}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/All/{SupplierCode}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/All/{SupplierCode}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

allocations = http.request(request)  
```

```php
<?php
$allocations = file_get_contents('https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/All/{SupplierCode}?key={APIKey}');
?>
```

```python
import requests

allocations = requests.get('https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/All/{SupplierCode}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/All/{SupplierCode}?key={APIKey}");

WebResponse allocations = request.GetResponse();
```

```javascript
const https = require('https');

https.get('https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/All/{SupplierCode}?key={APIKey}', function(res){
  var allocations = res;
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
    "API Message: GetSupplierAllocationsAll successful."
  ],
  "ResultCount": 1,
  "SupplierAllocationSurveys": [
    {
      "SurveyName": "IT Developers Survey",
      "SurveyNumber": 143479,
      "SurveySID": "4C2B4533-0EA1-364A-212B-345B38C6AF57",
      "AccountName": "Sample Company",
      "CountryLanguageID": 9,
      "LengthOfInterview": 2,
      "BidIncidence": 8,
      "Conversion": 1,
      "FieldBeginDate": "/Date(1429160400000-0500)/",
      "FieldEndDate": "/Date(1429848000000-0500)/",
      "IndustryID": 3,
      "StudyTypeID": 1,
      "Priority": 2,
      "SurveyGroup": null,
      "SurveyGroupID": null,
      "SurveyGroupExists": 0,
      "BidLengthOfInterview": 15,
      "TerminationLengthOfInterview": 5,
      "SurveyQuotaCalcTypeID": 1,
      "IsTrueSample": false,
      "SurveyMobileConversion": 0,
      "SampleTypeID": null
    }
  ]
}
```
Returns a list of all live survey opportunities for which you have an allocation or entry link.

#### Arguments

| Property     | Type | Required | Description                                     |
|--------------|------|----------|-------------------------------------------------|
| SupplierCode | int  | true     | Unique code associated with a supplier account. |


### GET Show an Allocated Survey
> Definition

```plaintext
GET  https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

allocations = http.request(request)  
```

```php
<?php
$allocations = file_get_contents('https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}');
?>
```

```python
import requests

allocations = requests.get('https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}");

WebResponse allocations = request.GetResponse();
```

```javascript
const https = require('https');

https.get('https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}', function(res){
  var allocations = res;
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
    "API Message: GetSupplierAllocationsBySurveyNumber successful."
  ],
  "ResultCount": 1,
  "SupplierAllocationSurvey": {
    "SurveyName": "Pet Owner Survey",
    "SurveyNumber": 17381,
    "SurveySID": "03B4B292-0EA1-212B-02C1-345B38C6AF57",
    "AccountName": "Sample Company",
    "CountryLanguageID": 9,
    "LengthOfInterview": 16,
    "BidIncidence": 20,
    "Conversion": 13,
    "FieldBeginDate": "/Date(1400562000000-0500)/",
    "FieldEndDate": "/Date(1401854400000-0500)/",
    "IndustryID": 18,
    "StudyTypeID": 1,
    "Priority": 1,
    "SupplierAllocations": [],
    "OfferwallTotalRemaining": 47,
    "OfferwallAllocations": [
      {
        "SupplierCode": "0050",
        "SupplierName": "Supply Company",
        "OfferwallCompletes": 403,
        "AllocationRemaining": 47,
        "HedgeRemaining": 0,
        "TargetModel": {
          "SupplierLinkType": 18,
          "LiveSupplierLink": "http://samplicio.us/router/default.aspx?SID=da94c7f8-0dcf-4fcc-80d4-6e2beafc3ff4&PID=",
          "SupplierLinkSID": "da94c7f8-0dcf-4fcc-80d4-6e2beafc3ff4",
          "TargetCCPI": 3
        }
      }
    ],
    "SurveyGroup": null,
    "SurveyGroupID": null,
    "SurveyGroupExists": 1,
    "BidLengthOfInterview": 15,
    "TerminationLengthOfInterview": 3,
    "SurveyQuotaCalcTypeID": 1,
    "IsTrueSample": false,
    "SurveyMobileConversion": 0,
    "SampleTypeID": null
  }
}
```
Returns any allocation(s) given to you for a particular survey.

#### Arguments

| Property     | Type | Required | Description                                     |
|--------------|------|----------|-------------------------------------------------|
| SupplierCode | int  | true     | Unique code associated with a supplier account. |
| SurveyNumber | int  | true     | Unique number associated with the survey.       |



### GET List Recently Allocated Surveys
> Definition

```plaintext
GET  https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/ByDate/{Date}/{SupplierCode}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/ByDate/{Date}/{SupplierCode}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/ByDate/{Date}/{SupplierCode}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

allocations = http.request(request)  
```

```php
<?php
$allocations = file_get_contents('https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/ByDate/{Date}/{SupplierCode}?key={APIKey}');
?>
```

```python
import requests

allocations = requests.get('https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/ByDate/{Date}/{SupplierCode}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/ByDate/{Date}/{SupplierCode}?key={APIKey}");

WebResponse allocations = request.GetResponse();
```

```javascript
const https = require('https');

https.get('https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/ByDate/{Date}/{SupplierCode}?key={APIKey}', function(res){
  var allocations = res;
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
    "API Message: GetSupplierAllocationsByDate successful."
  ],
  "ResultCount": 1,
  "SupplierAllocationSurveys": [
		{
			"SurveyName": "IT Developers Survey",
			"SurveyNumber": 143479,
			"SurveySID": "4C2B4533-0EA1-364A-212B-345B38C6AF57",
			"AccountName": "Sample Company",
			"CountryLanguageID": 9,
			"LengthOfInterview": 2,
			"BidIncidence": 8,
			"Conversion": 1,
			"FieldBeginDate": "/Date(1431666000000-0500)/",
			"FieldEndDate": "/Date(1432353600000-0500)/",
			"IndustryID": 30,
			"StudyTypeID": 1,
			"Priority": 2,
			"SurveyGroup": null,
			"SurveyGroupID": null,
			"SurveyGroupExists": 0,
			"BidLengthOfInterview": 15,
			"TerminationLengthOfInterview": 5,
			"SurveyQuotaCalcTypeID": 1,
			"IsTrueSample": false,
			"SurveyMobileConversion": 0,
			"SampleTypeID": null
		}
	]
}
```
Returns a list of allocations for which the TotalQuota has changed since a specified date.

#### Arguments

| Property     | Type   | Required | Description                                     |
|--------------|--------|----------|-------------------------------------------------|
| Date         | string | true     | Must follow the format YYYY-MM-DD               |
| SupplierCode | string | true     | Unique code associated with a supplier account. |
