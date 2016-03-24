## Surveys

The Survey resource contains basic information about a survey opportunity posted by a sample buyer. More detailed information about who qualifies for the survey is contained in the [Qualifications](#qualifications) and [Quotas](#quotas) resources.

#### Surveys Model

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
| CPI                          | double   | Gross payout per complete. This value is before any applicable commissions or fees.                                                                     |
| FieldEndDate                 | datetime | Target date for survey closure. This field usually does not indicate a hard closure time, although buyers may opt to automatically close the study.     |
| IndustryID                   | int      | Industry associated with the survey's topic.                                                                                                            |
| StudyTypeID                  | int      | Indicates the survey's format and purpose (i.e. adhoc, recruit, etc).                                                                                   |
| OverallCompletes             | int      | Number of completes already achieved.                                                                                                                   |
| TotalRemaining               | int      | Number of completes still available.                                                                                                                    |
| CompletionPercentage         | int      | Percentage of the survey that has filled in terms of completes.                                                                                         |
| SurveyGroup                  | string   | Deprecated: Will return `null`. Instead use the SurveyGroupExists property.                                                                             |
| SurveyGroupID                | int      | Deprecated: Will return `null`. If SurveyGroupExists is `true`, then [list the survey's groups](#list-a-survey’s-groups).                               |
| SurveyGroupExists            | int      | Indicates whether there is a survey group(s) associated with the survey. (0=`false`, 1=`true`)                                                          |
| BidLengthOfInterview         | int      | Estimated time for a respondent to complete the survey excluding the Fulcrum prescreener in minutes as provided by the buyer.                           |
| TerminationLengthOfInterview | int      | Median time for a respondent to be termed in minutes.                                                                                                   |
| IsTrueSample                 | string   | Indicates whether True Sample's Identity Validation feature is enabled for the study.                                                                   |
| SurveyMobileConversion       | int      | Percentage of mobile respondents who complete the survey after qualifying.                                                                              |
| SurveyQuotaCalcTypeID        | int      | Indicates whether quotas are calculated based on completes or prescreens (1=Completes, 2=Prescreens).                                                   |
| SampleTypeID                 | int      | The type of sample the survey is open to (i.e. consumer, business-to-business, etc).                                                                    |

<h3 class="get" id="list-exchange-surveys"><span>GET</span> List Exchange Surveys</h3>

> Definition

```plaintext
GET  https://api.samplicio.us/Supply/v1/Surveys/AllOfferwall/{SupplierCode}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Supply/v1/Surveys/AllOfferwall/{SupplierCode}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Supply/v1/Surveys/AllOfferwall/{SupplierCode}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

surveys = http.request(request)  
```

```php
<?php
$surveys = file_get_contents('https://api.samplicio.us/Supply/v1/Surveys/AllOfferwall/{SupplierCode}?key={APIKey}');
?>
```

```python
import requests

surveys = requests.get('https://api.samplicio.us/Supply/v1/Surveys/AllOfferwall/{SupplierCode}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Supply/v1/Surveys/AllOfferwall/{SupplierCode}?key={APIKey}");

WebResponse surveys = request.GetResponse();
```

```javascript
const https = require('https');

var surveys = https.get('https://api.samplicio.us/Supply/v1/Surveys/AllOfferwall/{SupplierCode}?key={APIKey}');
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
    "API Message: GetAllOfferwallSurveys successful."
  ],
  "ResultCount": 1,
  "Surveys": [
    {
      "SurveyName": "Asthma Sufferers",
      "SurveyNumber": 457751,
      "SurveySID": "26CB55E2-74CC-4E19-88E3-7F2F8D4DE74D",
      "AccountName": "Sample Company",
      "CountryLanguageID": 9,
      "LengthOfInterview": 12,
      "BidIncidence": 30,
      "Conversion": 1,
      "CPI": 1.5,
      "FieldEndDate": "\/Date(1388293200000-0600)\/",
      "IndustryID": 30,
      "StudyTypeID": 1,
      "OverallCompletes": 5,
      "TotalRemaining": 995,
      "CompletionPercentage": 0,
      "SurveyGroup": null,
      "SurveyGroupID": null,
      "SurveyGroupExists": 1,
      "BidLengthOfInterview": 10,
      "TerminationLengthOfInterview": 6,
      "SurveyQuotaCalcTypeID": 1,
      "IsTrueSample": false,
      "SurveyMobileConversion": 0,
      "SampleTypeID": null
    }
  ]
}
```

Returns a list of all live survey opportunities available through the Exchange for which you have an allocation or entry link.

<aside class="notice">After <a href="#create-a-link">creating an entry link</a> you can <a href="#list-allocated-surveys">list allocated surveys</a> or <a href="#show-an-allocated-survey">show an allocated survey</a> to access these opportunities.</aside>


#### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SupplierCode                 | int      | true     | Unique code associated with a supplier account.                                                                                              |

