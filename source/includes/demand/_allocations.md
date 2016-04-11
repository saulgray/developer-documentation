##Non-Exchange Allocations

### POST Create an Allocation
> Definition

```plaintext
POST  https://api.samplicio.us/Demand/v1/SupplierAllocations/Create/{SurveyNumber}?key={APIKey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" \
-X POST --data '{"SupplierCode": "1010", "AllocationPercentage": 0.1, "TCPI": 2, "HedgeAccess": true, "BlockRouterTraffic": false,}' \
https://api.samplicio.us/Demand/v1/SupplierAllocations/Create/{SurveyNumber}?key={APIKey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierAllocations/Create/{SurveyNumber}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Post.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {SupplierCode: "1010", AllocationPercentage: 0.1, TCPI: 2, HedgeAccess: true, BlockRouterTraffic: false}.to_json

supplierAllocation = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{"SupplierCode": "1010", "AllocationPercentage": 0.1, "TCPI": 2, "HedgeAccess": true, "BlockRouterTraffic": false}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SupplierAllocations/Create/{SurveyNumber}?key={APIKey}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $params,
));

$supplierAllocation = curl_exec($curl);

curl_close($curl);
?>

```

```python
import requests, json

url = 'https://api.samplicio.us/Demand/v1/SupplierAllocations/Create/{SurveyNumber}?key={APIKey}'
params = {'SupplierCode': '1010', 'AllocationPercentage': 0.1, 'TCPI': 2, 'HedgeAccess': true, 'BlockRouterTraffic': false}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

supplierLink = requests.post(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierAllocations/Create/{SurveyNumber}?key={APIKey}");

string params = "{\"SupplierCode\": \"1010\", \"AllocationPercentage\": 0.1, \"TCPI\": 2, \"HedgeAccess\": true, \"BlockRouterTraffic\": false,}";
    
request.Method = "POST";
request.ContentType = "application/json";

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
streamWriter.Write(params);
streamWriter.Flush();
streamWriter.Close();
}

WebResponse supplierAllocation = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "POST",
  "hostname": "api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/SupplierAllocations/Create/{SurveyNumber}/{SupplierCode}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {
  "SupplierCode": "1010",
	"AllocationPercentage": 0.1,
	"TCPI": 2,
	"HedgeAccess": true,
	"BlockRouterTraffic": false
};

var params = JSON.stringify(json);

var request = https.request(options, function (supplierAllocation) {
  var chunks = [];

  supplierAllocation.on("data", function (chunk) {
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

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                                                    |
| SupplierCode                 | int      | true     | Unique code associated with a supplier account.                                                                                              |
| AllocationPercentage         | double   | false    | Percentage of total completes allocated to supplier.                                                                                         |
| TCPI                         | double   | true     | Over-the-counter cost per supplier complete.                                                                                                 |
| HedgeAccess                  | boolean  | false    | Indicates if hedge access is enabled for the supplier.                                                                                       |
| BlockRouterTraffic           | string   | false    | Indicates if router traffic is enabled for the supplier.                                                                                     |

### PUT Update an Allocation
> Definition

```plaintext
PUT  https://api.samplicio.us/Demand/v1/SupplierAllocations/Update/{SurveyNumber}?key={APIKey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" \
-X PUT --data '{"SupplierCode": "1010", "AllocationPercentage": 0.1, "TCPI": 2, "HedgeAccess": true, "BlockRouterTraffic": false,}' \
https://api.samplicio.us/Demand/v1/SupplierAllocations/Update/{SurveyNumber}?key={APIKey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierAllocations/Update/{SurveyNumber}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Put.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {SupplierCode: "1010", AllocationPercentage: 0.1, TCPI: 2, HedgeAccess: true, BlockRouterTraffic: false}.to_json

supplierAllocation = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{"SupplierCode": "1010", "AllocationPercentage": 0.1, "TCPI": 2, "HedgeAccess": true, "BlockRouterTraffic": false}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SupplierAllocations/Update/{SurveyNumber}?key={APIKey}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "PUT",
  CURLOPT_POSTFIELDS => $params,
));

$supplierAllocation = curl_exec($curl);

curl_close($curl);
?>

```

```python
import requests, json

url = 'https://api.samplicio.us/Demand/v1/SupplierAllocations/Update/{SurveyNumber}?key={APIKey}'
params = {'SupplierCode': '1010', 'AllocationPercentage': 0.1, 'TCPI': 2, 'HedgeAccess': true, 'BlockRouterTraffic': false}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

supplierLink = requests.put(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierAllocations/Update/{SurveyNumber}?key={APIKey}");

string params = "{\"SupplierCode\": \"1010\", \"AllocationPercentage\": 0.1, \"TCPI\": 2, \"HedgeAccess\": true, \"BlockRouterTraffic\": false,}";
    
request.Method = "PUT";
request.ContentType = "application/json";

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
streamWriter.Write(params);
streamWriter.Flush();
streamWriter.Close();
}

WebResponse supplierAllocation = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "PUT",
  "hostname": "api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/SupplierAllocations/Update/{SurveyNumber}/{SupplierCode}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {
  "SupplierCode": "1010",
	"AllocationPercentage": 0.1,
	"TCPI": 2,
	"HedgeAccess": true,
	"BlockRouterTraffic": false
};

var params = JSON.stringify(json);

var request = https.request(options, function (supplierAllocation) {
  var chunks = [];

  supplierAllocation.on("data", function (chunk) {
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

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                                                    |
| SupplierCode                 | int      | true     | Unique code associated with a supplier account.                                                                                              |
| AllocationPercentage         | double   | false    | Percentage of total completes allocated to supplier.                                                                                         |
| TCPI                         | double   | true     | Over-the-counter cost per supplier complete.                                                                                                 |
| HedgeAccess                  | boolean  | false    | Indicates if hedge access is enabled for the supplier.                                                                                       |
| BlockRouterTraffic           | string   | false    | Indicates if router traffic is enabled for the supplier.                                                                                     |
### DELETE Delete an Allocation
> Definition

```plaintext
DELETE  http://api.samplicio.us/Demand/v1/SupplierAllocations/Delete/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

> Example Request

```shell
curl -X DELETE http://api.samplicio.us/Demand/v1/SupplierAllocations/Delete/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('http://api.samplicio.us/Demand/v1/SupplierAllocations/Delete/{SurveyNumber}/{SupplierCode}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Delete.new(uri.request_uri)

http.request(request)
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://api.samplicio.us/Demand/v1/SupplierAllocations/Delete/{SurveyNumber}/{SupplierCode}?key={APIKey}",
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

requests.delete('http://api.samplicio.us/Demand/v1/SupplierAllocations/Delete/{SurveyNumber}/{SupplierCode}?key={APIKey}')
```

```csharp
using System.Net; 

WebRequest request = WebRequest.Create("http://api.samplicio.us/Demand/v1/SupplierAllocations/Delete/{SurveyNumber}/{SupplierCode}?key={APIKey}");

request.Method = "DELETE";

request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "DELETE",
  "hostname": "stg-api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/SupplierAllocations/Delete/66900/196?key=YOUR_API_KEY_HERE",
  "headers": {}
};

var request = https.request(options);

request.end();
```

Deletes a supplier allocation for an existing Fulcrum survey.

#### Arguments
| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                                                    |
| SupplierCode                 | int      | true     | Unique code associated with a supplier account.                                                                                              |

### GET Show Allocations
> Definition

```plaintext
GET  https://api.samplicio.us/Demand/v1/SupplierAllocations/BySurveyNumber/{SurveyNumber}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Demand/v1/SupplierAllocations/BySurveyNumber/{SurveyNumber}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierAllocations/BySurveyNumber/{SurveyNumber}?key={APIKey}

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

allocations = http.request(request)  
```

```php
<?php
$allocations = file_get_contents('https://api.samplicio.us/Demand/v1/SupplierAllocations/BySurveyNumber/{SurveyNumber}?key={APIKey}');
?>
```

```python
import requests

allocations = requests.get('https://api.samplicio.us/Demand/v1/SupplierAllocations/BySurveyNumber/{SurveyNumber}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierAllocations/BySurveyNumber/{SurveyNumber}?key={APIKey}");

WebResponse allocations = request.GetResponse();
```

```javascript
const https = require('https');

var allocations = https.get('https://api.samplicio.us/Demand/v1/SupplierAllocations/BySurveyNumber/{SurveyNumber}?key={APIKey}');
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