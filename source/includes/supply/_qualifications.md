##Qualifications

The Qualification resource contains the questions and corresponding conditions associated with a survey. These qualifications make up the Fulcrum prescreener and define the overall survey targeting criteria for suppliers.

#### Survey Qualification Model

| Property     | Type  | Description                               |
|--------------|-------|-------------------------------------------|
| SurveyNumber | int   | Unique number associated with the survey. |
| Questions    | array | Contains an array of Question models.     |


#### Questions Model

| Property        | Type   | Description                                              |
|-----------------|--------|----------------------------------------------------------|
| QuestionID      | int    | Unique number associated with the question.              |
| LogicalOperator | string | Defines the logical operation applied to the conditions. |
| PreCodes        | array  | Qualification answer option identifier.                  |


### GET Show Qualifications

> Definition

```plaintext
GET  https://api.samplicio.us/Supply/v1/SurveyQualifications/BySurveyNumberForOfferwall/{SurveyNumber}
```

> Example Request

```shell
curl -H "Authorization: YOUR_API_KEY_HERE" https://api.samplicio.us/Supply/v1/SurveyQualifications/BySurveyNumberForOfferwall/{SurveyNumber}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Supply/v1/SurveyQualifications/BySurveyNumberForOfferwall/{SurveyNumber}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

request['Authorization'] = YOUR_API_KEY_HERE

response = http.request(request)  
```

```php
<?php
$URL = "https://api.samplicio.us/Supply/v1/SurveyQualifications/BySurveyNumberForOfferwall/{SurveyNumber}";

$aHTTP['http']['method']  = 'GET';

$aHTTP['http']['header']  = "Authorization: YOUR_API_KEY_HERE";

$context = stream_context_create($aHTTP);

$response = file_get_contents($URL, false, $context);
?>
```

```python
import requests

url = 'https://api.samplicio.us/Supply/v1/SurveyQualifications/BySurveyNumberForOfferwall/{SurveyNumber}'

headers = {'Authorization' : YOUR_API_KEY_HERE}

response = requests.get(url, headers=headers)
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Supply/v1/SurveyQualifications/BySurveyNumberForOfferwall/{SurveyNumber}");

request.Headers.Add("Authorization", YOUR_API_KEY_HERE);

WebResponse response = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "GET",
  "hostname": "api.samplicio.us",
  "path": "/Supply/v1/SurveyQualifications/BySurveyNumberForOfferwall/{SurveyNumber}",
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
    "API Message: GetOfferwallQualificationsBySurveyNumber successful."
  ],
  "ResultCount": 10,
  "SurveyQualification": {
    "SurveyNumber": 254256,
    "Questions": [
      {
        "QuestionID": 42,
        "LogicalOperator": "Or",
        "PreCodes": [
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25"
        ]
      },
      {
        "QuestionID": 43,
        "LogicalOperator": "Or",
        "PreCodes": [
          "1",
          "2"
        ]
      }
    ]
  }
}
```

Returns a list of all standard and exposed custom qualifications associated with a survey.

<aside class="notice">This API call returns data for all types of surveys (not just Offerwall surveys).</aside>


#### Arguments

| Property     | Type | Required | Description                               |
|--------------|------|----------|-------------------------------------------|
| SurveyNumber | int  | true     | Unique number associated with the survey. |
