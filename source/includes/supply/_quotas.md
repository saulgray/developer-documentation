#Quotas

The quotas resource determines the number of completes of each type of respondent needed for a survey. Quotas are always built off of qualifications. For more information about quotas in Fulcrum please refer to [Understanding Fulcrum Quotas](#UnderstandingFulcrumQuotas) in the Supply API guide.  

### Response Properties

| Property                     | Type     | Description                                                                                                                                             |
|------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | Unique number associated with the quota.                                                                                                                |
| SurveyQuotas                 | array    | Contains array of elements described below in Survey Quotas and Questions models.                                                                       |
| SurveyStatusCode             | double   | Code associated with the current status of the survey. See [List Global Definitions](#list-global-definitions) for survey statuses and codes.           |
| SurveyStillLive              | bool     | True or False if survey is currently live                                                                                                               |
 

### Survey Quotas Model

| Property                     | Type     | Description                                                                                                                                             |
|------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyQuotaID                | int      | Unique number associated with the quota                                                                                                                 |
| SurveyQuotaType              | string   | "Total" quota is the total number of compeltes available on the survey and will always be present. "Client" quotas are any subquotas on the survey.     |
| QuotaCPI                     | double   | Payout per complete (Please note that the price paid per complete to suppliers is *gross* and does not include any applicable commissions or fees)      |   
| Conversion                   | int      | Current in-field Fulcrum conversion rate of the survey after targeting (Fulcrum conversion = completes over client survey entrants)                     |
| NumberOfRespondents          | int      | Number of completes still available in that quota group                                                                                                 | 
| Questions                    | array    | Contains array of elements described below                                                                                                              |

### Questions Model

| Property                     | Type     | Description                                                                                                                                             |
|------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| QuestionID                   | int      | Survey question identifier.                                                                                                                             |
| LogicalOperator              | string   | Defines the logical operation applied to the conditions.                                                                                                |
| PreCodes                     | array    | Qualification answer option precodes.                                                                                                                   |

##Show Quotas

> Definition

```plaintext
GET  https://api.samplicio.us/Supply/v1/SurveyQuotas/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Supply/v1/SurveyQuotas/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Supply/v1/SurveyQuotas/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

surveyQuotas = http.request(request)  
```

```php
<?php
$surveyQuotas = file_get_contents('https://api.samplicio.us/Supply/v1/SurveyQuotas/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}');
?>
```

```python
import requests

surveyQuotas = requests.get('https://api.samplicio.us/Supply/v1/SurveyQuotas/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Supply/v1/SurveyQuotas/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}");

WebResponse surveyQuotas = request.GetResponse();
```

```javascript
const https = require('https');

var surveyQuotas = https.get('https://api.samplicio.us/Supply/v1/SurveyQuotas/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}');
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
    "API Message: GetSurveyQuotasBySurveyNumberAndSupplierCode successful."
  ],
  "ResultCount": 3,
  "SurveyNumber": 254256,
  "SurveyQuotas": [
    {
      "SurveyQuotaID": 1564722,
      "SurveyQuotaType": "Total",
      "QuotaCPI": 0,
      "Conversion": 0,
      "NumberOfRespondents": 20,
      "Questions": null
    },
    {
      "SurveyQuotaID": 1781601,
      "SurveyQuotaType": "Client",
      "QuotaCPI": 0,
      "Conversion": 0,
      "NumberOfRespondents": 10,
      "Questions": [
        {
          "QuestionID": 43,
          "LogicalOperator": "OR",
          "PreCodes": [
            "1"
          ]
        }
      ]
    },
    {
      "SurveyQuotaID": 1781602,
      "SurveyQuotaType": "Client",
      "QuotaCPI": 0,
      "Conversion": 0,
      "NumberOfRespondents": 10,
      "Questions": [
        {
          "QuestionID": 43,
          "LogicalOperator": "OR",
          "PreCodes": [
            "2"
          ]
        }
      ]
    }
  ],
  "SurveyStatusCode": "02",
  "SurveyStillLive": false
}
```

Returns the total quota and subquotas associated with a survey. 

<aside class="notice">NumberOfRespondents is calculated real-time</aside>


### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey                                                                                                     |
| SupplierCode                 | int      | true     | Unique code associated with supplier account                                                                                                  |