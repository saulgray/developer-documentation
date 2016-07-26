##Survey Groups


### GET All Survey Groups

> Definition

```plaintext
GET  https://api.samplicio.us/Demand/v1/SurveyGroups?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Demand/v1/SurveyGroups?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Demand/v1/SurveyGroups?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

response = http.request(request)  
```

```php
<?php
$response = file_get_contents('https://api.samplicio.us/Demand/v1/SurveyGroups?key={APIKey}');
?>
```

```python
import requests

response = requests.get('https://api.samplicio.us/Demand/v1/SurveyGroups?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SurveyGroups?key={APIKey}");

WebResponse response = request.GetResponse();
```

```javascript
const https = require('https');

https.get('https://api.samplicio.us/Demand/v1/SurveyGroups?key={APIKey}', function(res){
  var response = res;
});
```
> Example Response
18091
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
    "API Message: GetSurveyGroups successful."
  ],
  "ResultCount": 2,
  "SurveyGroups": [
    {
      "ID": 10001,
      "Name": "Local Group",
      "SurveyCount": 38
    },
    {
      "ID": 10101,
      "Name": "Neighbor Group",
      "SurveyCount": 12
    }
  ]
}
```

Returns the survey groups, their IDs, and number of surveys within each.



### GET Individual Survey Groups

> Definition

```plaintext
GET  https://api.samplicio.us//Demand/v1/SurveyGroups/{SurveyGroupID}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us//Demand/v1/SurveyGroups/{SurveyGroupID}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Demand/v1/SurveyGroups/{SurveyGroupID}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

response = http.request(request)  
```

```php
<?php
$response = file_get_contents('https://api.samplicio.us//Demand/v1/SurveyGroups/{SurveyGroupID}?key={APIKey}');
?>
```

```python
import requests

response = requests.get('https://api.samplicio.us//Demand/v1/SurveyGroups/{SurveyGroupID}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us//Demand/v1/SurveyGroups/{SurveyGroupID}?key={APIKey}");

WebResponse response = request.GetResponse();
```

```javascript
const https = require('https');

https.get('https://api.samplicio.us//Demand/v1/SurveyGroups/{SurveyGroupID}?key={APIKey}', function(res){
  var response = res;
});
```
> Example Response

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
    "API Message: GetSurveyGroupBySurveyGroupID successful."
  ],
  "ResultCount": 2,
  "SurveyIDs": [
    123456,
    654321
  ]
}
```

Returns the survey IDs for the survey group specified.


#### Arguments

| Property     | Type | Required | Description                               |
|--------------|------|----------|-------------------------------------------|
| SurveyGroupID| int  | true     | Unique ID associated with the survey group. |


### POST Create a Survey Group

> Definition

```plaintext
POST  https://api.samplicio.us/Demand/v1/SurveyGroups/?key={APIKey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" -X POST --data '{"Name": "Group 1"}' https://api.samplicio.us/Demand/v1/SurveyGroups/?key={APIKey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SurveyGroups/?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Post.new(FullUriPath, initheader = {'Content-Type' => 'application/json'})

request.body = {Name:"Group 1"}.to_json

response = http.request(request)  
```

```php
<?php
$curl = curl_init();

$params = '{"Name":"Group 1"}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SurveyGroups/?key={APIKey}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
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
import requests

url = 'https://api.samplicio.us/Demand/v1/SurveyGroups/?key={APIKey}'
params = {'Name':'Group 1'}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
response = requests.post(url, data=data, headers=headers)

```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SurveyGroups/?key={APIKey}");

string args = @"{""Name"":""Group 1""}";

request.Method = "POST";
request.ContentType = "application/json";

using(StreamWriter streamWriter = new StreamWriter(request.
RequestStream()))
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
  "port": 443,
  "path": "Demand/v1/SurveyGroups/?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = { 
  "Name":"Group 1"
}

var params = JSON.stringify(json);

var request = https.request(options, function (createGroup) {
  var chunks = [];

  createGroup.on("data", function (chunk) {
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
    "API Message: InsertSurveyGroup successful."
  ],
  "ResultCount": 0,
  "SurveyGroup": {
    "ID": 18096,
    "SID": "AA11AA22-A111-CCDD-5F66-123456D11",
    "Name": "Group 1",
    "Description": "",
    "CreateUserID": 1234,
    "CreateDate": "/Date(1469132948640-0500)/",
    "UpdateUserID": 1234,
    "UpdateDate": "/Date(1469132948640-0500)/",
    "LK_RecordStatusID": true,
    "LK_SurveyGroupTypeID": 1
  }
}
```

Creates an empty survey group.


#### Arguments
| Property             | Type    | Required | Description                                        |
|----------------------|---------|----------|----------------------------------------------------|
| Name                 | string  | true     | Survey Group name.                                 |



### POST Survey to Survey Group

> Definition

```plaintext
POST  https://api.samplicio.us/Demand/v1/SurveyGroups/{SurveyGroupID}?key={APIKey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" -X POST --data '{"SurveyNumber": ["101101"]}' https://api.samplicio.us/Demand/v1/SurveyGroups/{SurveyGroupID}?key={APIKey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SurveyGroups/{SurveyGroupID}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Post.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {SurveyIDs: 101101}.to_json

response = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{"SurveyIDs": 101101}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SurveyGroups/{SurveyGroupID}?key={APIKey}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
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

url = 'https://api.samplicio.us/Demand/v1/SurveyGroups/{SurveyGroupID}?key={APIKey}'
params = {'SurveyIDs': 101101}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

response = requests.post(url, data=data, headers=headers)
```

```csharp

using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SurveyGroups/{SurveyGroupID}?key={APIKey}");

string args = @"{""SurveyIDs"": [101101]}";

request.Method = "POST";
request.ContentType = "application/json";

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
  "port": 443,
  "path": "/Demand/v1/SurveyGroups/{SurveyGroupID}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {"SurveyIDs": ["101101"]
  }

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
    "API Message: InsertSurveyGroupSurveys successful."
  ],
  "ResultCount": 1,
  "SurveyIDs": [
    101101
  ]
}
```

Adds a survey to the specified survey group.


#### Arguments

| Property             | Type    | Required | Description                                        |
|----------------------|---------|----------|----------------------------------------------------|
| SurveyIDs            | int     | true     | Unique ID associated with the survey.              |


### DELETE Remove Survey from a Survey Group

> Definition

```plaintext
DELETE  https://api.samplicio.us/Demand/v1/SurveyGroups/{SurveyGroupID}?key={APIKey}
```

> Example Request

```shell
curl X- DELETE --data '{"SurveyNumber": ["101101"]} https://api.samplicio.us/Demand/v1/SurveyGroups/{SurveyGroupID}?key={APIKey} 
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SurveyGroups/{SurveyGroupID}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Delete.new(uri.request_uri)

request.body = {SurveyIDs: 101101}.to_json

response = http.request(request)  
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SurveyGroups/{SurveyGroupID}?key={APIKey}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "DELETE",
  CURLOPT_POSTFIELDS => "",
));

curl_exec($curl);
curl_close($curl);
?>
```

```python
import requests

requests.delete('https://api.samplicio.us/Demand/v1/SurveyGroups/{SurveyGroupID}?key={APIKey}')
params = {'SurveyIDs': 101101}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

response = requests.post(url, data=data, headers=headers)
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SurveyGroups/{SurveyGroupID}?key={APIKey}");

string args = @"{""SupplierCode"": [101101]}";

request.Method = "DELETE";
request.ContentType = "application/json";

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
streamWriter.Write(args);
streamWriter.Flush();
streamWriter.Close();
}

request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "DELETE",
  "hostname": "api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/SurveyGroups/{SurveyGroupID}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {"SurveyIDs": ["101101"]
  }

var params = JSON.stringify(json);

var request = https.request(options);

request.end();

```

Deletes the surveyID from the specified survey group.


#### Arguments

| Property        | Type | Required | Description                               |
|-----------------|------|----------|-------------------------------------------|
| SurveyID        | int  | true     | Unique ID associated with the survey.     |

