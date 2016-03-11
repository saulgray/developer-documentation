# Allocations

## List Allocated Surveys
> Definition

```plaintext
GET  http://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/All/{SupplierCode}?key={APIKey}
```

> Example Request

```shell
curl http://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/All/{SupplierCode}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('http://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/All/{SupplierCode}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

surveys = http.request(request)  
```

```php
<?php
$surveys = file_get_contents('http://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/All/{SupplierCode}?key={APIKey}');
?>
```

```python
import requests

surveys = requests.get('http://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/All/{SupplierCode}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("http://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/All/{SupplierCode}?key={APIKey}");

WebResponse surveys = request.GetResponse();
```

```javascript
const https = require('https');

var surveys = https.get('http://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/All/{SupplierCode}?key={APIKey}');
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
	"ResultCount": 3,
	"SupplierAllocationSurveys": [
		{
			"SurveyName": "Hobbies Survey",
			"SurveyNumber": 143479,
			"SurveySID": "7CA6ED12-3108-44BA-8C36-9257CFA9B0F2",
			"AccountName": "Federated Sample",
			"CountryLanguageID": 9,
			"LengthOfInterview": 15,
			"BidIncidence": 100,
			"Conversion": 47,
			"FieldBeginDate": "/Date(1456380000000-0600)/",
			"FieldEndDate": "/Date(1457672400000-0600)/",
			"IndustryID": 22,
			"StudyTypeID": 1,
			"Priority": 11,
			"SurveyGroup": null,
			"SurveyGroupID": null,
			"SurveyGroupExists": 1,
			"BidLengthOfInterview": 10,
			"TerminationLengthOfInterview": 1,
			"SurveyQuotaCalcTypeID": 1,
			"IsTrueSample": false,
			"SurveyMobileConversion": 49,
			"SampleTypeID": 100
		},
		{
			"SurveyName": "IT Developers Survey",
			"SurveyNumber": 143479,
			"SurveySID": "4C2B4533-0EA1-364A-212B-345B38C6AF57",
			"AccountName": "Example Account Name",
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
		},
		{
			"SurveyName": "B2B survey",
			"SurveyNumber": 285390,
			"SurveySID": "F6605B8D-02C1-4D1A-85BD-AB5B73AAD4C4",
			"AccountName": "Federated Sample",
			"CountryLanguageID": 9,
			"LengthOfInterview": 9,
			"BidIncidence": 10,
			"Conversion": 34,
			"FieldBeginDate": "/Date(1456552800000-0600)/",
			"FieldEndDate": "/Date(1457845200000-0600)/",
			"IndustryID": 30,
			"StudyTypeID": 1,
			"Priority": 11,
			"SurveyGroup": null,
			"SurveyGroupID": null,
			"SurveyGroupExists": 1,
			"BidLengthOfInterview": 10,
			"TerminationLengthOfInterview": 2,
			"SurveyQuotaCalcTypeID": 1,
			"IsTrueSample": false,
			"SurveyMobileConversion": 33,
			"SampleTypeID": 101
		}
	]
}
```
Returns a list of all live survey opportunities available through the Exchange and/or directly allocated to you for which you have an allocation or entry link.

### Arguments

| Property                     | Type     | Required | Description                                                                     |
|------------------------------|----------|----------|---------------------------------------------------------------------------------|
|SupplierCode                  | int      | true     | Unique code associated with a supplier account                                  |
|SurveyNumber                  | int      | true     | Unique number associated with the survey                                        |


## Show an Allocated Survey
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

var allocations = https.get('https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}');
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

		"SurveyName": "Pet Owners Survey",

		"SurveyNumber": 66381,

		"SurveySID": "03B4B292-0EA1-212B-02C1-345B38C6AF57",

		"AccountName": "Example Account",

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

				"SupplierCode": "1010",

				"SupplierName": "Example Supplier",

				"OfferwallCompletes": 403,

				"AllocationRemaining": 47,

				"HedgeRemaining": 0,

				"TargetModel": {

					"SupplierLinkType": 18,

					"LiveSupplierLink": "http://staging.samplicio.us/router/default.aspx?SID=da944fcc-0dcf-c7f8-3ff4-6e2bda943ff4&PID=",

					"SupplierLinkSID": "da944fcc-0dcf-c7f8-3ff4-6e2bda943ff4",

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

### Arguments

| Property                     | Type     | Required | Description                                                                     |
|------------------------------|----------|----------|---------------------------------------------------------------------------------|
|SupplierCode                  | int      | true     | Unique code associated with a supplier account                                  |
|SurveyNumber                  | int      | true     | Unique number associated with the survey                                        |


## List Recently Allocated Surveys