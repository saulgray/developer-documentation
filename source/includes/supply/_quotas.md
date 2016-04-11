##Quotas

The quotas resource returns the number of completes available to you for each demographic cell in a survey. Quotas can be built on any qualification(s). For more information about quotas in Fulcrum please refer to [Understanding Fulcrum Quotas](#understanding-fulcrum-quotas) in the Supply API guide.  

#### Response Properties

| Property         | Type    | Description                                                                                                                                          |
|------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber     | int     | Unique number associated with the survey.                                                                                                            |
| SurveyQuotas     | array   | Contains an array of Survey Quotas models.                                                                                                           |
| SurveyStatusCode | double  | Code associated with the current status of the survey. See [List Global Definitions](#get-list-global-definitions) for a map of survey status codes. |
| SurveyStillLive  | boolean | A simple check to determine whether a survey is open to respondents. This can be used interchangeably with SurveyStatusCode.                         |

 

#### Survey Quotas Model

| Property            | Type   | Description                                                                                                                       |
|---------------------|--------|-----------------------------------------------------------------------------------------------------------------------------------|
| SurveyQuotaID       | int    | Unique number associated with the quota.                                                                                          |
| SurveyQuotaType     | string | Represents the function of the quota.                                                                                             |
|                     |        | The `Total` quota represents the maximum number of completes available on the survey and will always be present.                  |
|                     |        | `Client` quotas are any subquotas on the survey. They are independent of the total quota and may be overlapping with one another. |
| QuotaCPI            | double | Gross payout per complete. This value is before any applicable commissions or fees.                                               |
| Conversion          | int    | Percentage of respondents who complete the survey after qualifying for that quota.                                                |
| NumberOfRespondents | int    | Number of completes available in that quota group.                                                                                |
| Questions           | array  | Contains an array of Question models.                                                                                             |

#### Questions Model

| Property        | Type   | Description                                              |
|-----------------|--------|----------------------------------------------------------|
| QuestionID      | int    | Unique number associated with the question.              |
| LogicalOperator | string | Defines the logical operation applied to the conditions. |
| PreCodes        | array  | Qualification answer option identifier.                  |


### GET Show Quotas

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

Returns the total quota and client quotas associated with a survey. 

<aside class="notice">The NumberOfRespondents property is calculated in real-time. The cache rules do not apply to this property.</aside>


#### Arguments

| Property     | Type | Required | Description                                   |
|--------------|------|----------|-----------------------------------------------|
| SurveyNumber | int  | true     | Unique number associated with the survey.     |
| SupplierCode | int  | true     | Unique code associated with supplier account. |

