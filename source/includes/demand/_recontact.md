## Recontact

### GET List Qualified Respondents

> Definition

```plaintext
GET  https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/{SurveyNumber}/{SupplierCode}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

qualifiedRespondents = http.request(request)  
```

```php
<?php
$qualifiedRespondents = file_get_contents('https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/{SurveyNumber}/{SupplierCode}?key={APIKey}');
?>
```

```python
import requests

qualifiedRespondents = requests.get('https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/{SurveyNumber}/{SupplierCode}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/{SurveyNumber}/{SupplierCode}?key={APIKey}");

WebResponse qualifiedRespondents = request.GetResponse();
```

```javascript
const https = require('https');

var qualifiedRespondents = https.get('https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/BySurveyNumberSupplierCode/{SurveyNumber}/{SupplierCode}?key={APIKey}');
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
};

```

Returns a list of qualified respondents for a specified recontact study and supplier by PID.

#### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                                                    |
| SupplierCode                 | int      | true     | Unique code associated with a supplier account.                                                                                              |


### PUT Update Qualified Respondents

>Definition

PUT  https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/Update/{SurveyNumber}/{SupplierCode}?key={APIKey}

>Example Request

```shell
curl -H "Content-Type: application/json" \
-X PUT  --data '{"PID": "0001110", "IsActive": true}' \ 
```

```ruby
require 'net/http'
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/Update/{SurveyNumber}/{SupplierCode}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Put.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {PID:"0001110", IsActive:true}.to_json

qualifiedRespondents = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{"PID": "0000111", "IsActive": true}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/Update/{SurveyNumber}/{SupplierCode}?key={APIKey}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $params,
));

$qualifiedRespondents = curl_exec($curl);

curl_close($curl);
?>
```

```python
import requests, json

url = 'https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/Update/{SurveyNumber}/{SupplierCode}?key={APIKey}'
params = {'PID': '0001110', 'IsActive': true}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

qualifiedRespondents = requests.put(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SurveyQualifiedRespondents/Update/{SurveyNumber}/{SupplierCode}?key={APIKey}");

string params = "{\"PID\": \"0001110\", \"IsActive\": true}";

request.Method = "PUT";
request.ContentType = "application/json";

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
streamWriter.Write(params);
streamWriter.Flush();
streamWriter.Close();
}

WebResponse qualifiedRespondents = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "PUT",
  "hostname": "api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/SurveyQualifiedRespondents/Update/{SurveyNumber}/{SupplierCode}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {
  "SurveyQualifiedRespondents": [
    {
      "IsActive": true,
      "PID": "0001110"
    },
  ]
};

var params = JSON.stringify(json);

var request = https.request(options, function (qualifiedRespondents) {
  var chunks = [];

  qualifiedRespondents.on("data", function (chunk) {
    chunks.push(chunk);
  });

});

request.write(params);

request.end();
```

>Example Response

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

Updates the list of PIDs that qualify for a recontact survey. 

#### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                                                    |
| SupplierCode                 | int      | true     | Unique code associated with a supplier account.                                                                                              |
| IsActive                     | boolean  | true     | Should the respondent still qualify?                                                                                                         |
| PID                          | int      | true     | Persistent panelist identifier used by the supplier.                                                                                         |
