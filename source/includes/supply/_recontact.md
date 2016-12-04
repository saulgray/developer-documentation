##Recontact

Recontacts allow buyers to collect a follow-up impression on a respondent they have already interacted with or already have knowledge of.

#### SurveyQualifiedRespondents Model

| Property | Type   | Description                                                 |
|----------|--------|-------------------------------------------------------------|
| IsActive | boolean| Indicates whether a respondent qualifies for the recontact. |
| PID      | string | A supplier's unique respondent identifier.                  |

### GET List Qualified Respondents

> Definition

```plaintext
GET  https://api.samplicio.us/Supply/v1/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/{SurveyNumber}/{SupplierCode}
```

> Example Request

```shell
curl -H "Authorization: YOUR_API_KEY_HERE" https://api.samplicio.us/Supply/v1/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/{SurveyNumber}/{SupplierCode}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Supply/v1/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/{SurveyNumber}/{SupplierCode}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

request['Authorization'] = YOUR_API_KEY_HERE

response = http.request(request)  
```

```php
<?php
$URL = "https://api.samplicio.us/Supply/v1/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/{SurveyNumber}/{SupplierCode}";

$aHTTP['http']['method']  = 'GET';

$aHTTP['http']['header']  = "Authorization: YOUR_API_KEY_HERE";

$context = stream_context_create($aHTTP);

$response = file_get_contents($URL, false, $context);
?>
```

```python
import requests

url = 'https://api.samplicio.us/Supply/v1/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/{SurveyNumber}/{SupplierCode}'

headers = {'Authorization' : YOUR_API_KEY_HERE}

response = requests.get(url, headers=headers)
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Supply/v1/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/{SurveyNumber}/{SupplierCode}");

request.Headers.Add("Authorization", YOUR_API_KEY_HERE);

WebResponse response = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "GET",
  "hostname": "api.samplicio.us",
  "path": "/Supply/v1/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/{SurveyNumber}/{SupplierCode}",
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
    "API Message: SurveyQualifiedRespondentsBySurveyNumberSupplierCode successful."
  ],
  "ResultCount": 4,
  "SurveyQualifiedRespondents": [
    {
      "PID": "1111110",
      "IsActive": true
    },
    {
      "PID": "1111101",
      "IsActive": true
    },
    {
      "PID": "1111001",
      "IsActive": true
    },
    {
      "PID": "1110001",
      "IsActive": true
    }
  ]
}

```

Returns the list of PIDs by supplier for a specific Fulcrum survey when study type is `Recontact`.



#### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                                                    |
| SupplierCode                 | string   | true     | Unique code associated with the supplier performing the call.               
