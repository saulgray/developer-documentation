##Quotas

### POST Create a Quota

> Definition

```plaintext
POST https://api.samplicio.us/Demand/v1/SurveyQuotas/Create/{SurveyNumber}?key={APIKey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" \
-X POST --data '{"Name": "Quota Name", "Quota": 50, "IsActive":true, "Conditions":[{"QuestionID":42, "Precodes": ["18","19","20","21","22"] }]}' \
https://api.samplicio.us/Demand/v1/SurveyQuotas/Create/{SurveyNumber}?key={APIKey}
```

```ruby
require 'net/http'
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SurveyQuotas/Create/{SurveyNumber}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Post.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {SupplierLinkTypeCode:"OWS",TrackingTypeCode:"NONE"}.to_json

quotas = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{"Name": "Quota Name", "Quota": 50, "IsActive":true, "Conditions":[{"QuestionID":42, "Precodes": ["18","19","20","21","22"] }]}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SurveyQuotas/Create/{SurveyNumber}?key={APIKey}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $params,
));

$quotas = curl_exec($curl);

curl_close($curl);
?>
```

```python
import requests, json

url = 'https://api.samplicio.us/Demand/v1/SurveyQuotas/Create/{SurveyNumber}?key={APIKey}'
params = {'Name': 'Quota Name', 'Quota': 50, 'IsActive': true, 'Conditions':[{'QuestionID':42, 'Precodes': ['18','19','20','21','22'] }]}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

quotas = requests.post(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SurveyQuotas/Create/{SurveyNumber}?key={APIKey}");

string params = "{\"Name\": \"Quota Name\", \"Quota\": 50, \"IsActive\": true, \"Conditions\":[{\"QuestionID\":42, \"Precodes\": [\"18\",\"19\",\"20\",\"21\",\"22\"] }]}\"}";

request.Method = "POST";
request.ContentType = "application/json";

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
streamWriter.Write(params);
streamWriter.Flush();
streamWriter.Close();
}

WebResponse quotas = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "POST",
  "hostname": "api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/SurveyQuotas/Create/{SurveyNumber}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {
  "Name": "Quota Name",
  "Quota": 50,
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
    };

var params = JSON.stringify(json);

var request = https.request(options, function (quotas) {
  var chunks = [];

  quotas.on("data", function (chunk) {
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
| Conditions      | array   | false    | Indicates conditions associated with quota (by questionID and precodes). |

### PUT Update a Quota

>Definition

```plaintext
PUT  https://api.samplicio.us/Demand/v1/SurveyQuotas/Update/{SurveyNumber}?key={APIKey}
```

>Example Request

```shell
curl -H "Content-Type: application/json" \
-X PUT  --data '{"Name": "Quota Name", "Quota": 50, "IsActive":true, "Conditions":[{"QuestionID":42, "Precodes": ["18","19","20","21","22"] }]}' \ 
```

```ruby
require 'net/http'
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SurveyQuotas/Update/{SurveyNumber}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Put.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {Name: "Quota Name", Quota: 50, IsActive:true, Conditions:[{QuestionID:42, Precodes: [18, 19, 20, 21, 22] }]}.to_json

quotas = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{"Name": "Quota Name", "Quota": 50, "IsActive":true, "Conditions":[{"QuestionID":42, "Precodes": ["18","19","20","21","22"] }]}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SurveyQuotas/Update/{SurveyNumber}?key={APIKey}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $params,
));

$quotas = curl_exec($curl);

curl_close($curl);
?>
```

```python
import requests, json

url = 'https://api.samplicio.us/Demand/v1/SurveyQuotas/Update/{SurveyNumber}?key={APIKey}'
params = {'Name': 'Quota Name', 'Quota': 50, 'IsActive': true, 'Conditions':[{'QuestionID':42, 'Precodes': ['18','19','20','21','22'] }]}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

updateQuotas = requests.put(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SurveyQuotas/Update/{SurveyNumber}?key={APIKey}");

string params = "{\"Name\": \"Quota Name\", \"Quota\": 50, \"IsActive\": true, \"Conditions\":[{\"QuestionID\":42, \"Precodes\": [\"18\",\"19\",\"20\",\"21\",\"22\"] }]}\"}";

request.Method = "POST";
request.ContentType = "application/json";

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
streamWriter.Write(params);
streamWriter.Flush();
streamWriter.Close();
}

WebResponse quotas = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "PUT",
  "hostname": "api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/SurveyQuotas/Update/{SurveyNumber}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
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

var request = https.request(options, function (quotas) {
  var chunks = [];

  quotas.on("data", function (chunk) {
    chunks.push(chunk);
  });

});

request.write(params);

request.end();
```

>Example Response
```
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
};
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
| Conditions      | array   | false    | Indicates conditions associated with quota (by questionID and precodes). |

### GET List Quotas

> Definition

```plaintext
GET  http://api.samplicio.us/Demand/v1/SurveyQuotas/BySurveyNumber/{SurveyNumber}}?key={APIKey}
```

> Example Request

```shell
curl http://api.samplicio.us/Demand/v1/SurveyQuotas/BySurveyNumber/{SurveyNumber}}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('http://api.samplicio.us/Demand/v1/SurveyQuotas/BySurveyNumber/{SurveyNumber}}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

quotas = http.request(request)  
```

```php
<?php
$quotas = file_get_contents('http://api.samplicio.us/Demand/v1/SurveyQuotas/BySurveyNumber/{SurveyNumber}}?key={APIKey}');
?>
```

```python
import requests

quotas = requests.get('http://api.samplicio.us/Demand/v1/SurveyQuotas/BySurveyNumber/{SurveyNumber}}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("http://api.samplicio.us/Demand/v1/SurveyQuotas/BySurveyNumber/{SurveyNumber}}?key={APIKey}");

WebResponse quotas = request.GetResponse();
```

```javascript
const https = require('https');

var quotas = https.get('http://api.samplicio.us/Demand/v1/SurveyQuotas/BySurveyNumber/{SurveyNumber}}?key={APIKey}');
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
