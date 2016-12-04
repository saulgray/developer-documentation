## Recontact

Recontacts allow buyers to collect a follow-up impression on a respondent they have already interacted with or already have knowledge of.

#### SurveyQualifiedRespondents Model

| Property | Type   | Description                                                 |
|----------|--------|-------------------------------------------------------------|
| IsActive | boolean| Indicates whether a respondent qualifies for the recontact. |
| PID      | string | A supplier's unique respondent identifier.                  |

### GET List Qualified Respondents

> Definition

```plaintext
GET  https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/{SurveyNumber}/{SupplierCode}
```

> Example Request

```shell
curl -H "Authorization: YOUR_API_KEY_HERE" https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/{SurveyNumber}/{SupplierCode}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/{SurveyNumber}/{SupplierCode}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

request['Authorization'] = YOUR_API_KEY_HERE

response = http.request(request)  
```

```php
<?php
$URL = "https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/{SurveyNumber}/{SupplierCode}";

$aHTTP['http']['method']  = 'GET';

$aHTTP['http']['header']  = "Authorization: YOUR_API_KEY_HERE";

$context = stream_context_create($aHTTP);

$response = file_get_contents($URL, false, $context);
?>
```

```python
import requests

url = 'https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/{SurveyNumber}/{SupplierCode}'

headers = {'Authorization' : YOUR_API_KEY_HERE}

response = requests.get(url, headers=headers)
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/{SurveyNumber}/{SupplierCode}");

request.Headers.Add("Authorization", YOUR_API_KEY_HERE);

WebResponse response = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "GET",
  "hostname": "api.samplicio.us",
  "path": "/Demand/v1/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/{SurveyNumber}/{SupplierCode}",
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
  "AccountType": 1,
  "ApiAccountStatus": 1,
  "AccountCode": "AA",
  "ApiMessages": [
    "API Message: Response initialized.",
    "API Message: SurveyQualifiedRespondentsBySurveyNumberSupplierCode successful."
  ],
  "ResultCount": 2,
  "SurveyQualifiedRespondents": [
    {
      "PID": "1110111",
      "IsActive": true
    },
    {
      "PID": "1110110",
      "IsActive": true
    },
  ]
}
```

Returns a list of qualified respondents for a specified recontact study and supplier by PID.

#### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                                                    |
| SupplierCode                 | string   | true     | Unique code associated with a supplier account.                                                                                              |


### PUT Update Qualified Respondents

>Definition

```plaintext
PUT  https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/Update/{SurveyNumber}/{SupplierCode}
```

>Example Request

```shell
curl -H "Content-Type: application/json"  -H "Authorization: YOUR_API_KEY_HERE" -X PUT  --data '{"SurveyQualifiedRespondents":[{"IsActive": true,"PID": "0001110"},]}' https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/Update/{SurveyNumber}/{SupplierCode}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/Update/{SurveyNumber}/{SupplierCode}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Put.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {
                  SurveyQualifiedRespondents:
                  [
                    {
                      IsActive: true,
                      PID: '0001110'
                    },
                  ]
                }.to_json

request['Authorization'] = YOUR_API_KEY_HERE

response = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{
              "SurveyQualifiedRespondents":
              [
                {
                  "IsActive": true,
                  "PID": "0001110"
                },
              ]
            }';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/Update/{SurveyNumber}/{SupplierCode}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/json', 'Authorization: YOUR_API_KEY_HERE'),
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "PUT",
  CURLOPT_POSTFIELDS => $params,
));

$response = curl_exec($curl);

curl_close($curl);
?>
```

```python
import requests, json

url = 'https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/Update/{SurveyNumber}/{SupplierCode}'
params = {
            'SurveyQualifiedRespondents':
            [
              {
                'IsActive': True,
                'PID': '0001110'
              },
            ]
          }

data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Authorization' : 'YOUR_API_KEY_HERE', 'Accept': 'text/plain'}

response = requests.put(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/Update/{SurveyNumber}/{SupplierCode}");

string args = @"{
                  ""SurveyQualifiedRespondents"":
                  [
                    {
                       ""IsActive"": true,
                       ""PID"": ""0001110""
                    },
                  ]
                }";

request.Method = "PUT";
request.ContentType = "application/json";
request.Headers.Add("Authorization", "YOUR_API_KEY_HERE");

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
streamWriter.Write(args);
streamWriter.Flush();
streamWriter.Close();
}

WebResponse response = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "PUT",
  "hostname": "api.samplicio.us",
  "path": "/Demand/v1/SurveyQualifiedRespondents/Update/{SurveyNumber}/{SupplierCode}",
  "headers": {'Content-Type': 'application/json',
  'Authorization': 'YOUR_API_KEY_HERE'
  }
};

var json = {
              "SurveyQualifiedRespondents":
              [
                {
                  "IsActive": true,
                  "PID": "0001110"
                },
              ]
            };

var params = JSON.stringify(json);

var request = https.request(options, function (response) {
  var chunks = [];

  response.on("data", function (chunk) {
    chunks.push(chunk);
  });

});

request.write(params);

request.end();
```

>Example Response

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
    "API Message: UpdateSurveyQualifiedRespondentsBySurveyNumberSupplierCode successful."
  ],
  "ResultCount": 1,
  "SurveyQualifiedRespondents": [
    {
      "PID": "1234",
      "IsActive": true
    },
  ]
}
```

Updates the list of PIDs that qualify for a recontact survey.

#### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                                                    |
| SupplierCode                 | string   | true     | Unique code associated with a supplier account.                                                                                              |
| IsActive                     | boolean  | true     | Should the respondent still qualify?                                                                                                         |
| PID                          | int      | true     | Persistent panelist identifier used by the supplier.                                                                                         |
