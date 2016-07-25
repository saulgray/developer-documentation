##Survey Groups


### GET List Survey Groups

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

uri = URI('https://api.samplicio.us/Demand/v1/SupplierGroups/BySurveyNumber/{SurveyNumber}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

response = http.request(request)  
```

```php
<?php
$response = file_get_contents('https://api.samplicio.us/Demand/v1/SupplierGroups/BySurveyNumber/{SurveyNumber}?key={APIKey}');
?>
```

```python
import requests

response = requests.get('https://api.samplicio.us/Demand/v1/SupplierGroups/BySurveyNumber/{SurveyNumber}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierGroups/BySurveyNumber/{SurveyNumber}?key={APIKey}");

WebResponse response = request.GetResponse();
```

```javascript
const https = require('https');

https.get('https://api.samplicio.us/Demand/v1/SupplierGroups/BySurveyNumber/{SurveyNumber}?key={APIKey}', function(res){
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
    "API Message: GetAllWithSuppliersBySurveyNumber successful."
  ],
  "ResultCount": 2,
  "SupplierGroups": [
    {
      "ID": 001100,
      "Name": "Top Supplier Group",
      "Completes": 0,
      "Screens": 0,
      "AllocationPercentage": 0.1,
      "CPI": null,
      "IsHedgeAccess": true,
      "Suppliers": [
        {
          "SupplierCode": "1010",
          "Completes": 0,
          "Screens": 0
        }
      ]
    },
    {
      "ID": 001001,
      "Name": "The Gremlins",
      "Completes": 0,
      "Screens": 0,
      "AllocationPercentage": 0.15,
      "CPI": null,
      "IsHedgeAccess": true,
      "Suppliers": [
      {
          "SupplierCode": "1010",
          "Completes": 0,
          "Screens": 0
        }
      ]
    }
  ]
}
```

Returns the supplier groups for the survey specified.


#### Arguments

| Property     | Type | Required | Description                               |
|--------------|------|----------|-------------------------------------------|
| SurveyNumber | int  | true     | Unique number associated with the survey. |


### POST Create a Group

> Definition

```plaintext
POST  https://api.samplicio.us/Demand/v1/SurveyGroups/?key={APIKey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" -X POST --data '{"SurveyNumber": 101100,"Name":"Top Supplier Group", "AllocationPercentage": 0.10,"IsHedgeAccess": true, "Suppliers": [{"SupplierCode":"0001"}]}' https://api.samplicio.us/Demand/v1/SurveyGroups/?key={APIKey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierGroups/CreateWithSuppliers/{SurveyNumber}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Post.new(FullUriPath, initheader = {'Content-Type' => 'application/json'})

request.body = {SurveyNumber: 101100, Name:"Top Supplier Group", AllocationPercentage: 0.10, IsHedgeAccess: true, "Suppliers": [{"SupplierCode":"0001"}]}.to_json

response = http.request(request)  
```

```php
<?php
$curl = curl_init();

$params = '{"SurveyNumber": 101100, "Name":"Top Supplier Group", "AllocationPercentage": 0.10, "IsHedgeAccess": true, "Suppliers": [{"SupplierCode":"0001"}]}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SupplierGroups/CreateWithSuppliers/{SurveyNumber}?key={APIKey}",
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

url = 'https://api.samplicio.us/Demand/v1/SupplierGroups/CreateWithSuppliers/{SurveyNumber}?key={APIKey}'
params = {'SurveyNumber': 101100, 'Name':'Top Supplier Group', 'AllocationPercentage': 0.10, 'IsHedgeAccess': True, 'Suppliers': [{'SupplierCode':'1010'}]}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
response = requests.post(url, data=data, headers=headers)

```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierGroups/CreateWithSuppliers/{SurveyNumber}?key={APIKey}");

string args = @"{
                 ""SurveyNumber"": 101100,
                 ""Name"":""Top Supplier Group"",
                 ""AllocationPercentage"": 0.10,
                 ""IsHedgeAccess"": true,
                 ""Suppliers"": [{
                                  ""SupplierCode"":""1010""
                                }]
                }";

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
  "path": "/Demand/v1/SupplierGroups/CreateWithSuppliers/{SurveyNumber}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {"SurveyNumber": 101100, 
  "Name":"Top Supplier Group", 
  "AllocationPercentage": 0.10, 
  "IsHedgeAccess": true, 
  "Suppliers": [
    {
    "SupplierCode":"1010"
    }
  ]
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
    "API Message: CreateSupplierGroupFromModel successful."
  ],
  "ResultCount": 1,
  "SupplierGroup": {
    "ID": 201967,
    "Name": "Top Supplier Group",
    "Completes": 0,
    "Screens": 0,
    "AllocationPercentage": 0.1,
    "CPI": null,
    "IsHedgeAccess": true,
    "Suppliers": [
      {
        "SupplierCode": "1010",
        "Completes": 0,
        "Screens": 0
      }
    ]
  }
}
```

Creates a group with specific suppliers and allocation for that group.


#### Arguments
| Property             | Type    | Required | Description                                        |
|----------------------|---------|----------|----------------------------------------------------|
| SurveyNumber         | int     | true     | Unique number associated with the survey.          |
| Name                 | string  | true     | Supplier Group name.                               |
| AllocationPercentage | int     | tue      | Group reserved allocation, expressed as a decimal. |
| IsHedgeAccess        | boolean | true     | Access to unallocated completes on the Exchange.   |
| Suppliers            | array   | true     | An array of all supplier codes (strings).          |


### POST Add Survey to Group

> Definition

```plaintext
POST  https://api.samplicio.us/Demand/v1/SurveyGroups/{SurveyGroupNumber}?key={APIKey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" -X POST --data '{"SurveyNumber": 101100,"Name":"Top Supplier Group", "AllocationPercentage": 0.10,"IsHedgeAccess": true}' https://api.samplicio.us/Demand/v1/SurveyGroups/{SurveyGroupNumber}?key={APIKey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierGroups/Create/{SurveyNumber}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Post.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {SurveyNumber: 101100, Name:"Top Supplier Group", AllocationPercentage: 0.10, IsHedgeAccess: true}.to_json

response = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{"SurveyNumber": 101100,"Name":"Top Supplier Group", "AllocationPercentage": 0.10,"IsHedgeAccess": true}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SupplierGroups/Create/{SurveyNumber}?key={APIKey}",
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

url = 'https://api.samplicio.us/Demand/v1/SupplierGroups/Create/{SurveyNumber}?key={APIKey}'
params = {'SurveyNumber': 101100,'Name':'Top Supplier Group', 'AllocationPercentage': 0.10,'IsHedgeAccess': True}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

response = requests.post(url, data=data, headers=headers)
```

```csharp

using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierGroups/Create/{SurveyNumber}?key={APIKey}");

string args = @"{
                 ""SurveyNumber"": 101100,
                 ""Name"":""Top Supplier Group"",
                 ""AllocationPercentage"": 0.10,
                 ""IsHedgeAccess"": true
                }";

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
  "path": "/Demand/v1/SupplierGroups/Create/{SurveyNumber}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {"SurveyNumber": 101100, 
  "Name":"Top Supplier Group", 
  "AllocationPercentage": 0.10, 
  "IsHedgeAccess": true, 
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
    "API Message: CreateSupplierGroupFromModel successful."
  ],
  "ResultCount": 1,
  "SupplierGroup": {
    "ID": 000110,
    "Name": "Top Supplier Group",
    "Completes": 0,
    "Screens": 0,
    "AllocationPercentage": 0,
    "CPI": null,
    "IsHedgeAccess": true,
    "Suppliers": []
  }
}
```

Creates an empty supplier group with a specific allocation and name.


#### Arguments

| Property             | Type    | Required | Description                                        |
|----------------------|---------|----------|----------------------------------------------------|
| SurveyNumber         | int     | true     | Unique number associated with the survey.          |
| Name                 | string  | true     | Supplier Group name.                               |
| AllocationPercentage | int     | true     | Group reserved allocation, expressed as a decimal. |
| IsHedgeAccess        | boolean | false    | Access to unallocated completes on the Exchange.   |
| SupplierGroupCPI     | double  | false    | The payout per complete for those suppliers.       |



### DELETE Ungroup Survey

> Definition

```plaintext
DELETE  https://api.samplicio.us/Demand/v1/SurveyGroups/{SurveyGroupNumber}?key={APIKey}
```

> Example Request

```shell
curl X- DELETE https://api.samplicio.us/Demand/v1/SurveyGroups/{SurveyGroupNumber}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierGroups/Delete/{SurveyNumber}/{SupplierGroupID}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Delete.new(uri.request_uri)

response = http.request(request)  
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SupplierGroups/Delete/{SurveyNumber}/{SupplierGroupID}?key={APIKey}",
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

requests.delete('https://api.samplicio.us/Demand/v1/SupplierGroups/Delete/{SurveyNumber}/{SupplierGroupID}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierGroups/Delete/{SurveyNumber}/{SupplierGroupID}?key={APIKey}");

request.Method = "DELETE";

request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "DELETE",
  "hostname": "stg-api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/SupplierGroups/Delete/{SurveyNumber}/{SupplierGroupID}?key={APIKey}",
  "headers": {}
};

var request = https.request(options);

request.end();

```

Deletes the specified supplier group.


#### Arguments

| Property        | Type | Required | Description                               |
|-----------------|------|----------|-------------------------------------------|
| SurveyNumber    | int  | true     | Unique number associated with the survey. |
| SupplierGroupID | int  | true     | Unique ID for Supplier Group.             |

### POST Add to a Group

> Definition

```plaintext
POST  https://api.samplicio.us/Demand/v1/SupplierGroups/AddSuppliersToGroup/{SurveyNumber}/{SupplierGroupID}?key={APIKey}
```


> Example Request

```shell
curl -H "Content-Type: application/json" -X POST --data '{"SupplierCode":"0010"}' https://api.samplicio.us/Demand/v1/SupplierGroups/AddSuppliersToGroup/{SurveyNumber}/{SupplierGroupID}?key={APIKey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierGroups/AddSuppliersToGroup/{SurveyNumber}/{SupplierGroupID}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Post.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {SupplierCode: 1010}.to_json

response = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{"SupplierCode": 1010}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SupplierGroups/AddSuppliersToGroup/{SurveyNumber}/{SupplierGroupID}?key={APIKey}",
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

url = 'https://api.samplicio.us/Demand/v1/SupplierGroups/AddSuppliersToGroup/{SurveyNumber}/{SupplierGroupID}?key={APIKey}'
params = {'SupplierCode': 1010}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

response = requests.post(url, data=data, headers=headers)
```

```csharp

using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierGroups/AddSuppliersToGroup/{SurveyNumber}/{SupplierGroupID}?key={APIKey}");

string args = @"{""SupplierCode"": 1010}";

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
  "path": "/Demand/v1/SupplierGroups/AddSuppliersToGroup/{SurveyNumber}/{SupplierGroupID}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {"SupplierCode": 1010}

var params = JSON.stringify(json);

var request = https.request(options, function (createGroupEmpty) {
  var chunks = [];

  createGroupEmpty.on("data", function (chunk) {
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
    "API Message: AddSupplierGroupSuppliersToSupplierGroup successful."
  ],
  "ResultCount": 1,
  "SupplierGroup": {
    "ID": 201967,
    "Name": "Top Supplier Group",
    "Completes": 0,
    "Screens": 0,
    "AllocationPercentage": 0.1,
    "CPI": null,
    "IsHedgeAccess": true,
    "Suppliers": [
      {
        "SupplierCode": "1010",
        "Completes": 0,
        "Screens": 0
      },
     ]
  }
}

```

Adds suppliers to the specified supplier group.


#### Arguments

| Property        | Type | Required | Description                               |
|-----------------|------|----------|-------------------------------------------|
| SurveyNumber    | int  | true     | Unique number associated with the survey. |
| SupplierGroupID | int  | true     | Unique ID for Supplier Group.             |


### GET Show a Group

> Definition

```plaintext
GET  https://api.samplicio.us//Demand/v1/SurveyGroups/{SurveyGroupNumber}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Demand/v1/SupplierGroups/BySurveyNumber/{SurveyNumber}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierGroups/BySurveyNumber/{SurveyNumber}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

response = http.request(request)  
```

```php
<?php
$response = file_get_contents('https://api.samplicio.us/Demand/v1/SupplierGroups/BySurveyNumber/{SurveyNumber}?key={APIKey}');
?>
```

```python
import requests

response = requests.get('https://api.samplicio.us/Demand/v1/SupplierGroups/BySurveyNumber/{SurveyNumber}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierGroups/BySurveyNumber/{SurveyNumber}?key={APIKey}");

WebResponse response = request.GetResponse();
```

```javascript
const https = require('https');

https.get('https://api.samplicio.us/Demand/v1/SupplierGroups/BySurveyNumber/{SurveyNumber}?key={APIKey}', function(res){
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
    "API Message: GetAllWithSuppliersBySurveyNumber successful."
  ],
  "ResultCount": 2,
  "SupplierGroups": [
    {
      "ID": 001100,
      "Name": "Top Supplier Group",
      "Completes": 0,
      "Screens": 0,
      "AllocationPercentage": 0.1,
      "CPI": null,
      "IsHedgeAccess": true,
      "Suppliers": [
        {
          "SupplierCode": "1010",
          "Completes": 0,
          "Screens": 0
        }
      ]
    },
    {
      "ID": 001001,
      "Name": "The Gremlins",
      "Completes": 0,
      "Screens": 0,
      "AllocationPercentage": 0.15,
      "CPI": null,
      "IsHedgeAccess": true,
      "Suppliers": [
      {
          "SupplierCode": "1010",
          "Completes": 0,
          "Screens": 0
        }
      ]
    }
  ]
}
```

Returns the supplier groups for the survey specified.


#### Arguments

| Property     | Type | Required | Description                               |
|--------------|------|----------|-------------------------------------------|
| SurveyNumber | int  | true     | Unique number associated with the survey. |
