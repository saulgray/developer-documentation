##Groups

The Survey Groups resource will return survey group details for a particular survey number. This information can be used to track survey groups to avoid sending a respondent to a survey which is in a survey group with a survey they have already been sent to.

The [Surveys/AllOfferwall](#get-list-exchange-surveys) and [SupplierAllocations/BySurveyNumber](#get-show-an-allocated-survey) calls return a SurveyGroupExists property which will indicate if the survey is in a survey group. The Surveys/SurveyGroups call can then be made to identify and track survey group details. You will need to continue to check the survey number and do not send the same respondent to any survey in that survey group until the original survey number sent to returns "null".

#### Survey Groups Model

| Property     | Type  | Description                               |
|--------------|-------|-------------------------------------------|
| SurveyGroup  | string| Name associated with the survey group.    |  
| SurveyGroupID| int   | Unique ID associated a survey group       |

### GET List a Survey’s Groups

> Definition

```plaintext
GET  https://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}
```

> Example Request

```shell
curl -H "Authorization: YOUR_API_KEY_HERE" https://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

request['Authorization'] = YOUR_API_KEY_HERE

response = http.request(request)  
```

```php
<?php
$URL = "https://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}";

$aHTTP['http']['method']  = 'GET';

$aHTTP['http']['header']  = "Authorization: YOUR_API_KEY_HERE";

$context = stream_context_create($aHTTP);

$response = file_get_contents($URL, false, $context);
?>
```

```python
import requests

url = 'https://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}'

headers = {'Authorization' : YOUR_API_KEY_HERE}

response = requests.get(url, headers=headers)
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}");

request.Headers.Add("Authorization", YOUR_API_KEY_HERE);

WebResponse response = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "GET",
  "hostname": "api.samplicio.us",
  "path": "/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}",
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
