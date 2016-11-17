##Quotas

Quotas are used to specify how many respondents of a desired demographic type are allowed to complete the survey. Quotas must be built off of qualifications.

#### Quotas Model

| Property        | Type    |  Description                                                                                |
|-----------------|---------|---------------------------------------------------------------------------------------------|
| SurveyQuotaID   | int     | Unique ID associated with the quota.                                                        |
| Name            | string  | Name associated with the quota.                                                             |
| FieldTarget     | int     | Field Target associated with the quota.                                                     |
| Quota           | int     | Quota number for the specified quota.                                                       |
| Prescreens      | int     | Number of prescreens achieved. A prescreen is a respondent who enters the client survey.    |
| Completes       | int     | Number of completes achieved.                                                               |
| IsActive        | boolean | Indicates if the quotas is active or inactive. Should the quota be enforced on this project?|
| Conditions      | array   | Contains an array of elements described below                                               |

#### Conditions Model

| Property     | Type               | Description                                                       |
|--------------|--------------------|-------------------------------------------------------------------|
| QuestionID   | int                | QuestionID(s) that the quota is based upon                        |  
| PreCodes     | array of strings   | Qualification answer option precodes defined by the API Standard  |

### POST Create a Quota

> Definition

```plaintext
POST https://api.samplicio.us/Demand/v1/SurveyQuotas/Create/{SurveyNumber}
```

> Example Request

```shell
curl -H "Content-Type: application/json" -H "Authorization: YOUR_API_KEY_HERE" -X POST --data '{"Name": "Quota Name", "Quota": 50, "IsActive":true, "Conditions":[{"QuestionID":42, "PreCodes": ["18","19","20","21","22"] }]}' https://api.samplicio.us/Demand/v1/SurveyQuotas/Create/{SurveyNumber}
```

```ruby
require 'net/http'
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SurveyQuotas/Create/{SurveyNumber}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Post.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {Name: "Quota Name", Quota: 50, IsActive:true, Conditions:[{QuestionID:42, PreCodes: ["18","19","20","21","22"] }]}.to_json

request['Authorization'] = YOUR_API_KEY_HERE

response = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{"Name": "Quota Name", "Quota": 50, "IsActive":true, "Conditions":[{"QuestionID":42, "PreCodes": ["18","19","20","21","22"] }]}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SurveyQuotas/Create/{SurveyNumber}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/json', 'Authorization: YOUR_API_KEY_HERE'),
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $params,
));

$response = curl_exec($curl);

curl_close($curl);
?>
```

```python
import requests, json

url = 'https://api.samplicio.us/Demand/v1/SurveyQuotas/Create/{SurveyNumber}'
params = {'Name': 'Quota Name', 'Quota': 50, 'IsActive': True, 'Conditions':[{'QuestionID':42, 'PreCodes': ['18','19','20','21','22'] }]}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Authorization' : 'YOUR_API_KEY_HERE', 'Accept': 'text/plain'}

response = requests.post(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SurveyQuotas/Create/{SurveyNumber}");

string args = @"{
                ""Name"": ""Quota Name"",
                 ""Quota"": 50,
                 ""IsActive"": true,
                 ""Conditions"":[{
                                  ""QuestionID"":42,
                                  ""PreCodes"": [""18"",""19"",""20"",""21"",""22""]
                                }]
              }";

request.Method = "POST";
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
  "method": "POST",
  "hostname": "api.samplicio.us",
  "path": "/Demand/v1/SurveyQuotas/Create/{SurveyNumber}",
  "headers": {'Content-Type': 'application/json',
  'Authorization': 'YOUR_API_KEY_HERE'}
};

var json = {
  "Name": "Quota Name",
  "Quota": 50,
  "IsActive": true,
  "Conditions":
  [
    {
      "QuestionID": 42,
      "PreCodes": [
        "18",
        "19",
        "20",
        "21",
        "22",
      ]
    }
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
    "API Message: CreateSurveyQuotaFromModel successful."
  ],
  "ResultCount": 2,
  "Quotas": [
    {
      "SurveyQuotaID": 0001100,
      "Name": "Total",
      "SurveyQuotaType": "Total",
      "FieldTarget": 100,
      "Quota": 100,
      "Prescreens": 0,
      "Completes": 0,
      "IsActive": true,
      "Conditions": null
    },
    {
      "SurveyQuotaID": 1000110,
      "Name": "Quota Name",
      "SurveyQuotaType": "Client",
      "FieldTarget": 50,
      "Quota": 50,
      "Prescreens": 0,
      "Completes": 0,
      "IsActive": true,
      "Conditions": [
        {
          "QuestionID": 42,
          "PreCodes": [
            "18",
            "19",
            "20",
            "21",
            "22",
          ]
        },

      ]
    }
  ]
}
```

Creates Quota based on specified questionIDs.

#### Arguments

| Property        | Type    | Required | Description                                                              |
|-----------------|---------|----------|--------------------------------------------------------------------------|
| SurveyNumber    | int     | true     | Unique number associated with the survey.                                |
| Name            | string  | true     | Name associated with the quota.                                          |
| FieldTarget     | int     | true     | Field Target associated with the quota.                                  |
| Quota           | int     | true     | Quota number for the specified quota.                                    |
| IsActive        | boolean | true     | Should the quota be enforced on this project?                            |
| SurveyQuotaType | string  | false    | Indicates quota type (Client or Total).                                  |
| Conditions      | array   | true     | Indicates conditions associated with quota (by questionID and precodes). |

### PUT Update a Quota

>Definition

```plaintext
PUT  https://api.samplicio.us/Demand/v1/SurveyQuotas/Update/{SurveyNumber}
```

>Example Request

```shell
curl -H "Content-Type: application/json" -H "Authorization: YOUR_API_KEY_HERE" -X PUT  --data '{"SurveyQuotaID": 1000110,"Name": "Quota Name", "FieldTarget":1000, "Quota": 50, "IsActive":true, "Conditions":[{"QuestionID":42, "Precodes": ["18","19","20","21","22"] }]}'  https://api.samplicio.us/Demand/v1/SurveyQuotas/Update/{SurveyNumber}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SurveyQuotas/Update/{SurveyNumber}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Put.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {SurveyQuotaID: 1000110, Name: "Quota Name", FieldTarget:1000, Quota: 50, IsActive:true, Conditions:[{QuestionID:42, PreCodes: [18, 19, 20, 21, 22] }]}.to_json

request['Authorization'] = YOUR_API_KEY_HERE

response = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{"SurveyQuotaID": 1000110, "Name": "Quota Name", "FieldTarget":1000, "Quota": 50, "IsActive":true, "Conditions":[{"QuestionID":42, "PreCodes": ["18","19","20","21","22"] }]}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SurveyQuotas/Update/{SurveyNumber}",
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

url = 'https://api.samplicio.us/Demand/v1/SurveyQuotas/Update/{SurveyNumber}'
params = {'SurveyQuotaID': 1000110, 'Name': "Quota Name", 'FieldTarget':1000, 'Quota': 50, 'IsActive': True, 'Conditions':[{'QuestionID':42, 'PreCodes': ['18','19','20','21','22'] }]}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Authorization' : 'YOUR_API_KEY_HERE', 'Accept': 'text/plain'}

updateQuotas = requests.put(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SurveyQuotas/Update/{SurveyNumber}");

string args = @"{
                ""SurveyQuotaID"": 1000110,
                 ""Name"": ""Quota Name"",
                 ""FieldTarget"":1000,
                 ""Quota"": 50,
                 ""IsActive"": true,
                 ""Conditions"":[{
                                  ""QuestionID"":42,
                                  ""PreCodes"": [""18"",""19"",""20"",""21"",""22""]
                                }]
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
  "path": "/Demand/v1/SurveyQuotas/Update/{SurveyNumber}",
  "headers": {'Content-Type': 'application/json',
  'Authorization': 'YOUR_API_KEY_HERE'
  }
};

var json = {
  "SurveyQuotaID": 0001100,
  "Name": "Quota Name",
  "FieldTarget": 50,
  "Quota": 50,
  "IsActive": true,
  "Conditions": [
    {
      "QuestionID": 42,
      "PreCodes": [
        "18",
        "19"
      ]
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
    "API Message: CreateSurveyQuotaFromModel successful."
  ],
  "ResultCount": 2,
  "Quotas": [
    {
      "SurveyQuotaID": 0001100,
      "Name": "Total",
      "SurveyQuotaType": "Total",
      "FieldTarget": 100,
      "Quota": 100,
      "Prescreens": 0,
      "Completes": 0,
      "IsActive": true,
      "Conditions": null
    },
    {
      "SurveyQuotaID": 1000110,
      "Name": "Quota Name",
      "SurveyQuotaType": "Client",
      "FieldTarget": 50,
      "Quota": 50,
      "Prescreens": 0,
      "Completes": 0,
      "IsActive": true,
      "Conditions": [
        {
          "QuestionID": 42,
          "PreCodes": [
            "18",
            "19",
            "20",
            "21",
            "22",
          ]
        },
      ]
    }
  ]
}
```

Updates a quota's size, conditions, and other parameters.

#### Arguments

| Property        | Type    | Required | Description                                                              |
|-----------------|---------|----------|--------------------------------------------------------------------------|
| SurveyNumber    | int     | true     | Unique number associated with the survey.                                |
| SurveyQuotaID   | int     | true     | Unique ID associated with the quota.                                     |
| FieldTarget     | int     | true     | Field Target associated with the quota.                                  |
| Quota           | int     | true     | Quota number for the specified quota.                                    |
| IsActive        | boolean | true     | Should the quota be enforced on this project?                            |
| SurveyQuotaType | string  | false    | Indicates quota type (Client or Total).                                  |
| Conditions      | array   | true     | Indicates conditions associated with quota (by questionID and precodes). |

### GET List Quotas

> Definition

```plaintext
GET  https://api.samplicio.us/Demand/v1/SurveyQuotas/BySurveyNumber/{SurveyNumber}
```

> Example Request

```shell
curl -H "Authorization: YOUR_API_KEY_HERE" https://api.samplicio.us/Demand/v1/SurveyQuotas/BySurveyNumber/{SurveyNumber}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Demand/v1/SurveyQuotas/BySurveyNumber/{SurveyNumber}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

request['Authorization'] = YOUR_API_KEY_HERE

response = http.request(request)  
```

```php
<?php
$URL = "https://api.samplicio.us/Demand/v1/SurveyQuotas/BySurveyNumber/{SurveyNumber}";

$aHTTP['http']['method']  = 'GET';

$aHTTP['http']['header']  = "Authorization: YOUR_API_KEY_HERE";

$context = stream_context_create($aHTTP);

$response = file_get_contents($URL, false, $context);
?>
```

```python
import requests

url = 'https://api.samplicio.us/Demand/v1/SurveyQuotas/BySurveyNumber/{SurveyNumber}'

headers = {'Authorization' : YOUR_API_KEY_HERE}

response = requests.get(url, headers=headers)
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SurveyQuotas/BySurveyNumber/{SurveyNumber}");

request.Headers.Add("Authorization", YOUR_API_KEY_HERE);

WebResponse response = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "GET",
  "hostname": "api.samplicio.us",
  "path": "/Demand/v1/SurveyQuotas/BySurveyNumber/{SurveyNumber}",
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
 "ResultCount": 2,
  "Quotas": [
    {
      "SurveyQuotaID": 0001000,
      "Name": "Total",
      "SurveyQuotaType": "Total",
      "FieldTarget": 100,
      "Quota": 100,
      "Prescreens": 0,
      "Completes": 0,
      "IsActive": true,
      "Conditions": null
    },
    {
      "SurveyQuotaID": 0101010,
      "Name": "Age Quota",
      "SurveyQuotaType": "Client",
      "FieldTarget": 40,
      "Quota": 40,
      "Prescreens": 0,
      "Completes": 0,
      "IsActive": true,
      "Conditions": [
        {
          "QuestionID": 42,
          "PreCodes": [
            "18",
            "19",
            "20",
            "24",
            "25"
          ]
        }
      ]
    }
```

Returns the list of quotas associated with the specified survey.

#### Arguments

| Property     | Type | Required | Description                               |
|--------------|------|----------|-------------------------------------------|
| SurveyNumber | int  | true     | Unique number associated with the survey. |
