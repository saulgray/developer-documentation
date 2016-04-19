## Allocations

Allocations allow buyers to allocate portions of studies to specific suppliers. This resource returns the allocation you have been given for a study based on your supplier code.

#### SupplierAllocationSurveys Model

| Property                     | Type     | Description                                                                                                                                             |
|------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyName                   | string   | External name of the survey. This name may be exposed to respondents. This value is not unique across surveys.                                          |
| SurveyNumber                 | int      | Unique number associated with the survey.                                                                                                               |
| SurveySID                    | string   | Unique hash value (GUID) assoicated with the survey.                                                                                                    |
| AccountName                  | string   | Name of the buyer running the survey.                                                                                                                   |
| CountryLanguageID            | int      | Unique id associated with the country-language pair the survey is open to.                                                                              |
| LengthOfInterview            | int      | Median time for a respondent to complete the survey excluding the Fulcrum prescreener in minutes.                                                       |
| BidIncidence                 | double   | Estimated incidence rate of the survey as provided by the buyer.                                                                                        |
| Conversion                   | int      | Percentage of respondents who complete the survey after qualifying.                                                                                     |
| FieldBeginDate               | datetime | Target date for survey start. This field usually does not indicate a hard start time, although buyers may opt to automatically open the study.          |
| FieldEndDate                 | datetime | Target date for survey closure. This field usually does not indicate a hard closure time, although buyers may opt to automatically close the study.     |
| IndustryID                   | int      | Industry associated with the survey's topic.                                                                                                            |
| StudyTypeID                  | int      | Indicates the survey's format and purpose (i.e. adhoc, recruit, etc).                                                                                   |
| Priority                     | int      | Survey priority from 1-11 (1 being the highest). Priority only applies to routed sample.                                                                |
| SurveyGroup                  | string   | Deprecated: Will return `null`. Instead use the SurveyGroupExists property.                                                                             |
| SurveyGroupExists            | int      | Indicates whether there is a survey group(s) associated with the survey. (0=`false`, 1=`true`)                                                          |
| BidLengthOfInterview         | int      | Estimated time for a respondent to complete the survey excluding the Fulcrum prescreener in minutes as provided by the buyer.                           |
| TerminationLengthOfInterview | int      | Median time for a respondent to be termed in minutes.                                                                                                   |
| IsTrueSample                 | string   | Indicates whether True Sample's Identity Validation feature is enabled for the study.                                                                   |
| SurveyMobileConversion       | int      | Percentage of mobile respondents who complete the survey after qualifying.                                                                              |
| SurveyQuotaCalcTypeID        | int      | Indicates whether quotas are calculated based on completes or prescreens (1=Completes, 2=Prescreens).                                                   |
| SampleTypeID                 | int      | The type of sample the survey is open to (i.e. consumer, business-to-business, etc).                                                                    |

#### SupplierAllocationSurvey Model

| Property                     | Type     | Description                                                                                                                                             |
|------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyName                   | string   | External name of the survey. This name may be exposed to respondents. This value is not unique across surveys.                                          |
| SurveyNumber                 | int      | Unique number associated with the survey.                                                                                                               |
| SurveySID                    | string   | Unique hash value (GUID) assoicated with the survey.                                                                                                    |
| AccountName                  | string   | Name of the buyer running the survey.                                                                                                                   |
| CountryLanguageID            | int      | Unique id associated with the country-language pair the survey is open to.                                                                              |
| LengthOfInterview            | int      | Median time for a respondent to complete the survey excluding the Fulcrum prescreener in minutes.                                                       |
| BidIncidence                 | double   | Estimated incidence rate of the survey as provided by the buyer.                                                                                        |
| Conversion                   | int      | Percentage of respondents who complete the survey after qualifying.                                                                                     |
| FieldBeginDate               | datetime | Target date for survey start. This field usually does not indicate a hard start time, although buyers may opt to automatically open the study.          |
| FieldEndDate                 | datetime | Target date for survey closure. This field usually does not indicate a hard closure time, although buyers may opt to automatically close the study.     |
| IndustryID                   | int      | Industry associated with the survey's topic.                                                                                                            |
| StudyTypeID                  | int      | Indicates the survey's format and purpose (i.e. adhoc, recruit, etc).                                                                                   |
| Priority                     | int      | Survey priority from 1-11 (1 being the highest). Priority only applies to routed sample.                                                                |
| SupplierAllocations          | array    | Contains an array of SupplierAllocations elements described below.                                                                                      |
| OfferwallTotalRemaining      | int      | Deprecated: Use the AllocationRemaining and HedgeRemaining properties return in each respective model.                                                  |
| OfferwallAllocations         | array    | Contains an array of OfferwallAllocations elements described below.                                                                                     |
| SurveyGroup                  | string   | Deprecated: Will return `null`. Instead use the SurveyGroupExists property.                                                                             |
| SurveyGroupID                | int      | Deprecated: Will return `null`. If SurveyGroupExists is true, then list the survey’s groups.                                                            |
| SurveyGroupExists            | int      | Indicates whether there is a survey group(s) associated with the survey. (0=`false`, 1=`true`)                                                          |
| BidLengthOfInterview         | int      | Estimated time for a respondent to complete the survey excluding the Fulcrum prescreener in minutes as provided by the buyer.                           |
| TerminationLengthOfInterview | int      | Median time for a respondent to be termed in minutes.                                                                                                   |
| IsTrueSample                 | string   | Indicates whether True Sample's Identity Validation feature is enabled for the study.                                                                   |
| SurveyMobileConversion       | int      | Percentage of mobile respondents who complete the survey after qualifying.                                                                              |
| SurveyQuotaCalcTypeID        | int      | Indicates whether quotas are calculated based on completes or prescreens (1=Completes, 2=Prescreens).                                                   |
| SampleTypeID                 | int      | The type of sample the survey is open to (i.e. consumer, business-to-business, etc).                                                                    |

#### SupplierAllocations Model
| Property            | Type   | Description                                                                         |
|---------------------|--------|-------------------------------------------------------------------------------------|
| SupplierCode        | int    | Unique code associated with a supplier account.                                     |
| SupplierName        | string | Name of the supplier.                                                               |
| IsBlockRouted       | int    | Indicates if the survey accepts routed sample.                                      |
| AchievedCompletes   | int    | Number of completes that have been already achieved by the supplier in this survey. |
| AllocationRemaining | int    | Number of completes remaining as part of the allocation.                            |
| HedgeRemaining      | int    | Number of unallocated completes available to any suppliers with access to hedge.    |
| TargetModel         | int    | Contains an array of TargetModel elements described below.                          |

#### OfferwallAllocations Model
| Property            | Type   | Description                                                                         |
|---------------------|--------|-------------------------------------------------------------------------------------|
| SupplierCode        | int    | Unique code associated with a supplier account.                                     |
| SupplierName        | string | Name of the supplier.                                                               |
| OfferwallCompletes  | int    | Number of completes that have been already achieved by the Exchange in this survey. |
| AllocationRemaining | int    | Number of completes remaining as part of the allocation.                            |
| HedgeRemaining      | int    | Number of unallocated completes available to any suppliers with access to hedge.    |
| TargetModel         | int    | Contains an array of TargetModel elements described below.                          |

#### TargetModel Model
| Property         | Type   | Description                                                                                                                                                                      |
|------------------|--------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SupplierLinkType | int    | Defines the type of buyer-supplier engagment and the respondent's path in Fulcrum. See [List Global Definitions](#get-list-global-definitions) for a map of supplier link types. |
| LiveSupplierLink | string | Live supplier-specific respondent entry link generated by Fulcrum.                                                                                                               |
| SupplierLinkSID  | string | Number of completes that have been already achieved by the Exchange in this survey.                                                                                              |
| TargetCCPI       | double | Gross payout per targeted complete.                                                                                                                                              |

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

var allocations = https.get('https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/All/{SupplierCode}?key={APIKey}');
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

| Property     | Type   | Required | Description                                     |
|--------------|--------|----------|-------------------------------------------------|
| SupplierCode | string | true     | Unique code associated with a supplier account. |


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

| Property     | Type   | Required | Description                                     |
|--------------|--------|----------|-------------------------------------------------|
| SupplierCode | string | true     | Unique code associated with a supplier account. |
| SurveyNumber | int    | true     | Unique number associated with the survey.       |



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

var allocations = https.get('https://api.samplicio.us/Supply/v1/Surveys/SupplierAllocations/ByDate/{Date}/{SupplierCode}?key={APIKey}');
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
