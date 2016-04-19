##Groups

The Survey Groups resource will return survey group details for a particular survey number. This information can be used to track survey groups to avoid sending a respondent to a survey which is in a survey group with a survey they have already been sent to.

The [Surveys/AllOfferwall](http://developer.lucidhq.com/#get-list-exchange-surveys) and [SupplierAllocations/BySurveyNumber](http://developer.lucidhq.com/#get-show-an-allocated-survey) calls return a SurveyGroupExists property which will indicate if the survey is in a survey group. The Surveys/SurveyGroups call can then be made to identify and track survey group details. You will need to continue to check the survey number and do not send the same respondent to any survey in that survey group until the original survey number sent to returns "null". 

#### Survey Groups Model

| Property     | Type  | Description                               |
|--------------|-------|-------------------------------------------|
| SurveyGroup  | string| Name associated with the survey group.    |  
| SurveyGroupID| int   | Unique ID associated a survey group       |

### GET List a Survey’s Groups

> Definition

```plaintext
GET  https://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

groups = http.request(request)  
```

```php
<?php
$groups = file_get_contents('https://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}');
?>
```

```python
import requests

groups = requests.get('https://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}");

WebResponse groups = request.GetResponse();
```

```javascript
const https = require('https');

var groups = https.get('https://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}');
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
    "API Message: GetSurveyGroups successful."
  ],
  "ResultCount": 1,
  "SurveyGroups": [
    {
      "SurveyGroup": "Example Survey Group",
      "SurveyGroupID": 12259
    }
  ]
}
```
Returns information on the survey group used by the specified survey.

#### Arguments

| Property                     | Type     | Required | Description                                                                     |
|------------------------------|----------|----------|---------------------------------------------------------------------------------|
|SurveyNumber                  | int      | true     | Unique number associated with the survey.                                       |
|SupplierCode                  | string   | true     | Unique code associated with a supplier account.                                 |
