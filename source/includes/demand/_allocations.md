##Non-Exchange Allocations

Non-Exchange Allocations allow you to add a specific supplier to your survey. These allocations are seperate from the Exchange and are sometimes referred to as "targeted suppier allocations", "individual sources", or "OTC allocations". This resource allows you to create, update, delete, and retrieve a supplier allocation. You can also specify a TCPI (targeted CPI) and allocate a desired number of completes to each supplier.

#### Supplier Allocations Model

| Property            | Type    |  Description                                                                                             |
|---------------------|---------|----------------------------------------------------------------------------------------------------------|
| SupplierCode        | int     | Unique code associated with a supplier account.                                                          |
| AllocationPercentage| double  | Percentage of total completes allocated to supplier.                                                     |
| TCPI                | double  | Gross payout per targeted complete.                                                                      |
| HedgeAccess         | boolean | Enables or disables hedge access for the supplier.                                                       |
| BlockRouterTraffic  | boolean | Enables or disables router traffic for the supplier.                                                     |
| SupplierSurveyID    | string  | Survey supplier ID (SSID).                                                                               |
| Prescreens          | int     | Number of prescreens achieved by the supplier. A prescreen is a respondent who enters the client survey. |
| Completes           | int     | Number of completes achieved by the supplier.                                                            |
| AllocationRemaining | int     | Number of completes allocated only to the supplier.                                                      |
| HedgeRemaining      | int     | Number of unallocated completes available to any suppliers with access to hedge.                         |
| TotalRemaining      | int     | Total number of completes available to the supplier (aggregate of allocation and hedge remaining         |
| Target              | array   | Contains an array of elements described below                                                            |

#### Target Model

| Property               | Type     | Description                                                                                                                                                                     |
|------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SupplierLinkTypeCode   | string   | Defines the type of buyer-supplier engagment and the respondent's path in Fulcrum. See [List Global Definitions](#get-list-global-definitions) for a map of supplier link types.|
| TrackingTypeCode       | string   | Defines how Fulcrum should communicate back to the supplier's system at the end of a session. The options are:                                                                  |
|                        |          | NONE (Default and recommended, physically redirects the respondent back to the supplier system)                                                                                 |
|                        |          | PIXEL (pixel tracking)                                                                                                                                                          |
|                        |          | S2S (server to server postback)                                                                                                                                                 |
| DefaultLink            | string   | Tracking code or link used if none of the below apply. This will typically be the same as the FailureLink                                                                       |
| SuccessLink            | string   | Tracking code or link used after a completion.                                                                                                                                  |
| FailureLink            | string   | Tracking code or link used after a termination.                                                                                                                                 |
| OverQuotaLink          | string   | Tracking code or link used after an overquota.                                                                                                                                  |
| QualityTerminationLink | string   | Tracking code or link used after a quality (security) termination.                                                                                                              |
| LiveLink               | string   | Live supplier-specific respondent entry link generated by Fulcrum.                                                                                                              |
| TestLink               | string   | Test supplier-specific respondent entry link generated by Fulcrum.                                                                                                              |


### GET Show Allocations

> Definition

```plaintext
GET  https://api.samplicio.us/Demand/v1/SupplierAllocations/BySurveyNumber/{SurveyNumber}
```

> Example Request

```shell
curl -H "Authorization: YOUR_API_KEY_HERE" https://api.samplicio.us/Demand/v1/SupplierAllocations/BySurveyNumber/{SurveyNumber}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierAllocations/BySurveyNumber/{SurveyNumber}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

request['Authorization'] = YOUR_API_KEY_HERE

response = http.request(request)  
```

```php
<?php
$URL = "https://api.samplicio.us/Demand/v1/SupplierAllocations/BySurveyNumber/{SurveyNumber}";

$aHTTP['http']['method']  = 'GET';

$aHTTP['http']['header']  = "Authorization: YOUR_API_KEY_HERE";

$context = stream_context_create($aHTTP);

$response = file_get_contents($URL, false, $context);
?>
```

```python
import requests

url = 'https://api.samplicio.us/Demand/v1/SupplierAllocations/BySurveyNumber/{SurveyNumber}'

headers = {'Authorization' : YOUR_API_KEY_HERE}

response = requests.get(url, headers=headers)
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierAllocations/BySurveyNumber/{SurveyNumber}");

request.Headers.Add("Authorization", YOUR_API_KEY_HERE);

WebResponse response = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "GET",
  "hostname": "api.samplicio.us",
  "path": "/Demand/v1/SupplierAllocations/BySurveyNumber/{SurveyNumber}",
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

```
{
  "ApiResult": 0,
  "ApiResultCode": 0,
  "ApiAccount": "Anon",
  "AccountType": 1,
  "ApiAccountStatus": 1,
  "AccountCode": "AA",
  "ApiMessages": [
    "API Message: Response initialized.",
    "API Message: GetAllSupplierAllocationsBySurveyNumber successful."
  ],
  "ResultCount": 1,
  "SupplierAllocations": [
    {
      "SupplierCode": "1010",
      "AllocationPercentage": 0,
      "TCPI": 11,
      "HedgeAccess": true,
      "BlockRouterTraffic": false,
      "SupplierSurveyID": null,
      "Prescreens": 183,
      "Completes": 4,
      "AllocationRemaining": 0,
      "HedgeRemaining": 695,
      "TotalRemaining": 695,
      "Target": null
    }
  ]
}
```

Returns the supplier allocations for the survey specified.


#### Arguments

| Property     | Type | Required | Description                               |
|--------------|------|----------|-------------------------------------------|
| SurveyNumber | int  | true     | Unique number associated with the survey. |

### POST Create an Allocation
> Definition

```plaintext
POST  https://api.samplicio.us/Demand/v1/SupplierAllocations/Create/{SurveyNumber}
```

> Example Request

```shell
curl -H "Content-Type: application/json" -H "Authorization: YOUR_API_KEY_HERE" -X POST --data '{"SupplierCode": "1010", "AllocationPercentage": 0.1, "TCPI": 2, "HedgeAccess": true, "BlockRouterTraffic": false,}' https://api.samplicio.us/Demand/v1/SupplierAllocations/Create/{SurveyNumber}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierAllocations/Create/{SurveyNumber}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Post.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {SupplierCode: "1010", AllocationPercentage: 0.1, TCPI: 2, HedgeAccess: true, BlockRouterTraffic: false}.to_json

request['Authorization'] = YOUR_API_KEY_HERE

response = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{"SupplierCode": "1010", "AllocationPercentage": 0.1, "TCPI": 2, "HedgeAccess": true, "BlockRouterTraffic": false}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SupplierAllocations/Create/{SurveyNumber}",
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

url = 'https://api.samplicio.us/Demand/v1/SupplierAllocations/Create/{SurveyNumber}'
params = {'SupplierCode': '1010', 'AllocationPercentage': 0.1, 'TCPI': 2, 'HedgeAccess': True, 'BlockRouterTraffic': False}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Authorization' : 'YOUR_API_KEY_HERE', 'Accept': 'text/plain'}

response = requests.post(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierAllocations/Create/{SurveyNumber}");

string args = @"{
                   ""SupplierCode"": ""1010"",
                   ""AllocationPercentage"": 0.1,
                   ""TCPI"": 2,
                   ""HedgeAccess"": true,
                   ""BlockRouterTraffic"": false
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
  "path": "/Demand/v1/SupplierAllocations/Create/{SurveyNumber}/{SupplierCode}",
  "headers": {'Content-Type': 'application/json',
  'Authorization': 'YOUR_API_KEY_HERE'
  }
};

var json = {
  "SupplierCode": "1010",
	"AllocationPercentage": 0.1,
	"TCPI": 2,
	"HedgeAccess": true,
	"BlockRouterTraffic": false
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
    "AccountType": 1,
    "ApiAccountStatus": 1,
    "AccountCode": "AA",
    "ApiMessages": [
        "API Message: Response initialized.",
        "API Message: CreateSupplierAllocationFromModel successful."
    ],
    "ResultCount": 1,
    "SupplierAllocation": {
        "SupplierCode": "1010",
        "AllocationPercentage": 0.1,
        "TCPI": 2,
        "HedgeAccess": true,
        "BlockRouterTraffic": false,
        "SupplierSurveyID": null,
        "Prescreens": null,
        "Completes": null,
        "AllocationRemaining": null,
        "HedgeRemaining": null,
        "TotalRemaining": null,
        "Target": null
    }
}
```

Creates supplier allocations for an existing Fulcrum survey.

#### Arguments

| Property             | Type    | Required | Description                                              |
|----------------------|---------|----------|----------------------------------------------------------|
| SurveyNumber         | int     | true     | Unique number associated with the survey.                |
| SupplierCode         | string  | true     | Unique code associated with a supplier account.          |
| AllocationPercentage | double  | false    | Percentage of total completes allocated to supplier.     |
| TCPI                 | double  | true     | Over-the-counter cost per supplier complete.             |
| HedgeAccess          | boolean | false    | Indicates if hedge access is enabled for the supplier.   |
| BlockRouterTraffic   | string  | false    | Indicates if router traffic is enabled for the supplier. |


### PUT Update an Allocation
> Definition

```plaintext
PUT  https://api.samplicio.us/Demand/v1/SupplierAllocations/Update/{SurveyNumber}
```

> Example Request

```shell
curl -H "Content-Type: application/json" -H "Authorization: YOUR_API_KEY_HERE" -X PUT --data '{"SupplierCode": "1010", "AllocationPercentage": 0.1, "TCPI": 2, "HedgeAccess": true, "BlockRouterTraffic": false,}' https://api.samplicio.us/Demand/v1/SupplierAllocations/Update/{SurveyNumber}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierAllocations/Update/{SurveyNumber}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Put.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {SupplierCode: "1010", AllocationPercentage: 0.1, TCPI: 2, HedgeAccess: true, BlockRouterTraffic: false}.to_json

request['Authorization'] = YOUR_API_KEY_HERE

response = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{"SupplierCode": "1010", "AllocationPercentage": 0.1, "TCPI": 2, "HedgeAccess": true, "BlockRouterTraffic": false}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SupplierAllocations/Update/{SurveyNumber}",
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

url = 'https://api.samplicio.us/Demand/v1/SupplierAllocations/Update/{SurveyNumber}'
params = {'SupplierCode': '1010', 'AllocationPercentage': 0.1, 'TCPI': 2, 'HedgeAccess': True, 'BlockRouterTraffic': False}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Authorization' : 'YOUR_API_KEY_HERE', 'Accept': 'text/plain'}

supplierLink = requests.put(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierAllocations/Update/{SurveyNumber}");

string args = @"{
                   ""SupplierCode"": ""1010"",
                   ""AllocationPercentage"": 0.1,
                   ""TCPI"": 2,
                   ""HedgeAccess"": true,
                   ""BlockRouterTraffic"": false
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
  "path": "/Demand/v1/SupplierAllocations/Update/{SurveyNumber}/{SupplierCode}",
  "headers": {'Content-Type': 'application/json',
  'Authorization': 'YOUR_API_KEY_HERE'
  }
};

var json = {
  "SupplierCode": "1010",
	"AllocationPercentage": 0.1,
	"TCPI": 2,
	"HedgeAccess": true,
	"BlockRouterTraffic": false
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
  "AccountType": 1,
  "ApiAccountStatus": 1,
  "AccountCode": "AA",
  "ApiMessages": [
    "API Message: Response initialized.",
    "API Message: UpdateSupplierAllocationFromModel successful."
  ],
  "ResultCount": 1,
  "SupplierAllocation": {
    "SupplierCode": "1010",
    "AllocationPercentage": 0.1,
    "TCPI": 2,
    "HedgeAccess": true,
    "BlockRouterTraffic": false,
    "SupplierSurveyID": null,
    "Prescreens": 0,
    "Completes": 0,
    "AllocationRemaining": 1,
    "HedgeRemaining": 2,
    "TotalRemaining": 3,
    "Target": null
  }
}
```

Creates supplier allocations for an existing Fulcrum survey.

#### Arguments

| Property             | Type    | Required | Description                                              |
|----------------------|---------|----------|----------------------------------------------------------|
| SurveyNumber         | int     | true     | Unique number associated with the survey.                |
| SupplierCode         | string  | true     | Unique code associated with a supplier account.          |
| AllocationPercentage | double  | false    | Percentage of total completes allocated to supplier.     |
| TCPI                 | double  | true     | Over-the-counter cost per supplier complete.             |
| HedgeAccess          | boolean | false    | Indicates if hedge access is enabled for the supplier.   |
| BlockRouterTraffic   | string  | false    | Indicates if router traffic is enabled for the supplier. |


### DELETE Delete an Allocation
> Definition

```plaintext
DELETE  https://api.samplicio.us/Demand/v1/SupplierAllocations/Delete/{SurveyNumber}/{SupplierCode}
```

> Example Request

```shell
curl -H "Authorization: YOUR_API_KEY_HERE" -X DELETE https://api.samplicio.us/Demand/v1/SupplierAllocations/Delete/{SurveyNumber}/{SupplierCode}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierAllocations/Delete/{SurveyNumber}/{SupplierCode}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Delete.new(uri.request_uri)

request['Authorization'] = YOUR_API_KEY_HERE

http.request(request)
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SupplierAllocations/Delete/{SurveyNumber}/{SupplierCode}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
    CURLOPT_HTTPHEADER => array('Authorization: YOUR_API_KEY_HERE'),
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

url = 'https://api.samplicio.us/Demand/v1/SupplierAllocations/Delete/{SurveyNumber}/{SupplierCode}'

headers = {'Authorization' : YOUR_API_KEY_HERE}

response = requests.delete(url, headers=headers)
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierAllocations/Delete/{SurveyNumber}/{SupplierCode}");

request.Headers.Add("Authorization", YOUR_API_KEY_HERE);

request.Method = "DELETE";

request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "DELETE",
  "hostname": "stg-api.samplicio.us",
  "path": "/Demand/v1/SupplierAllocations/Delete/{SurveyNumber}/{SupplierCode}",
  "headers": {'Authorization': YOUR_API_KEY_HERE}
};

var request = https.request(options);

request.end();
```

Deletes a supplier allocation for an existing Fulcrum survey.

#### Arguments
| Property     | Type   | Required | Description                                     |
|--------------|--------|----------|-------------------------------------------------|
| SurveyNumber | int    | true     | Unique number associated with the survey.       |
| SupplierCode | string | true     | Unique code associated with a supplier account. |
