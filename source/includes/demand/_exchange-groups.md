#Exchange Groups

##Create a Group

> Definition

```plaintext
POST  https://api.samplicio.us/Demand/v1/SupplierGroups/CreateWithSuppliers/{SurveyNumber}?key={APIKey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" \
-X POST --data '' \
https://api.samplicio.us/Demand/v1/SupplierGroups/CreateWithSuppliers/{SurveyNumber}?key={APIKey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierGroups/CreateWithSuppliers/{SurveyNumber}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Post.new(FullUriPath, initheader = {'Content-Type' => 'application/json'})

createGroup = http.request(request)  
```

```php
<?php
$curl = curl_init();

$params = '{"SurveyNumber": 001100, "Name":"Top Supplier Group", "AllocationPercentage": 0.10, "IsHedgeAccess": true, "Suppliers": [{"SupplierCode":"0001"}],}';

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

$createGroup = curl_exec($curl);

curl_close($curl);
?>
```

```python
import requests

url = 'https://api.samplicio.us/Demand/v1/SupplierGroups/CreateWithSuppliers/{SurveyNumber}?key={APIKey}'
params = {'SurveyNumber': 001100, 'Name':'Top Supplier Group', 'AllocationPercentage': 0.10, 'IsHedgeAccess': true, 'Suppliers': [{'SupplierCode':'0001'}],}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
createGroup = requests.post(url, data=data, headers=headers)

```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierGroups/CreateWithSuppliers/{SurveyNumber}?key={APIKey}");

WebResponse createGroup = request.GetResponse();

using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierGroups/CreateWithSuppliers/{SurveyNumber}?key={APIKey}");

string params = "{\"SurveyNumber\": 001100, \"Name\":\"Top Supplier Group\", \"AllocationPercentage\": 0.10, \"IsHedgeAccess\": true, \"Suppliers\": [{\"SupplierCode

\":\"0001\"}]}";

request.Method = "POST";
request.ContentType = "application/json";

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
streamWriter.Write(params);
streamWriter.Flush();
streamWriter.Close();
}

WebResponse createGroup = request.GetResponse();

```

```javascript
const https = require('https');

var createGroup = https.get('https://api.samplicio.us/Demand/v1/SupplierGroups/CreateWithSuppliers/{SurveyNumber}?key={APIKey}');

const https = require('https');

var options = {
  "method": "POST",
  "hostname": "api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/SupplierGroups/CreateWithSuppliers/{SurveyNumber}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {"SurveyNumber": 001100, 
  "Name":"Top Supplier Group", 
  "AllocationPercentage": 0.10, 
  "IsHedgeAccess": true, 
  "Suppliers": [
  {
  "SupplierCode":"0001"
  }
       ],
      }

var params = JSON.stringify(json);

var request = https.request(options, function (createGroup) {
  var chunks = [];

  supplierLink.on("data", function (chunk) {
    chunks.push(chunk);
  });

});

request.write(params);

request.end();
```

```json 
 {
    "SurveyNumber": 001100,
    "Name":"Top Supplier Group",
    "AllocationPercentage": 0.10,
    "IsHedgeAccess": true,
    "Suppliers": [
       {"SupplierCode":"0001"},
     ]
}
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
        "SupplierCode": "0001",
        "Completes": 0,
        "Screens": 0
      }
    ]
  }
}
```

Creates a group and specifies the suppliers and allocation for that group upon creation.


### Arguments

| Property                     | Type     | Required | Description                                                                                                      

                            |
|------------------------------|----------|----------|-----------------------------------------------------------------------------------------------------------------

-----------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                        

                            |
| SupplierCode                 | int      | true     | Unique code associated with supplier account.                                                                    

                            |
| Name                         | string   | false    | Supplier Group name.                                                                                             

                            |
| AllocationPercentage         | int      | false    | Group reserved allocation, expressed as a decimal.                                                               

                            |
| IsHedgeAccess                | boolean  | true     | Access to unallocated completes on the Exchange.                                                                 

                            |

##Create an Empty Group

> Definition

```plaintext
POST  https://api.samplicio.us/Demand/v1/SupplierGroups/Create/{SurveyNumber}?key={APIKey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" \
-X POST --data '{"SurveyNumber": 001100,"Name":"Top Supplier Group", "AllocationPercentage": 0.10,"IsHedgeAccess": true}' \
curl https://api.samplicio.us/Demand/v1/SupplierGroups/Create/{SurveyNumber}?key={APIKey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierGroups/Create/{SurveyNumber}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Post.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {SurveyNumber: 001100, Name:"Top Supplier Group", AllocationPercentage: 0.10, IsHedgeAccess: true}.to_json

createGroupEmpty = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{"SurveyNumber": 001100,"Name":"Top Supplier Group", "AllocationPercentage": 0.10,"IsHedgeAccess": true}';

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

$createGroupEmpty = curl_exec($curl);

curl_close($curl);
?>
```

```python
import requests, json

url = 'https://api.samplicio.us/Demand/v1/SupplierGroups/Create/{SurveyNumber}?key={APIKey}'
params = {'SurveyNumber': 001100,'Name':'Top Supplier Group', 'AllocationPercentage': 0.10,'IsHedgeAccess': true}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

createGroupEmpty = requests.post(url, data=data, headers=headers)
```

```csharp

using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierGroups/Create/{SurveyNumber}?key={APIKey}");

string params = "{\"SurveyNumber\": 001100, \"Name\":\"Top Supplier Group\", \"AllocationPercentage\": 0.10, \"IsHedgeAccess\": true}]}";

request.Method = "POST";
request.ContentType = "application/json";

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
streamWriter.Write(params);
streamWriter.Flush();
streamWriter.Close();
}

WebResponse createGroupEmpty = request.GetResponse();
```

```javascript
const https = require('https');

var createGroupEmpty = https.get('https://api.samplicio.us/Demand/v1/SupplierGroups/Create/{SurveyNumber}?key={APIKey}');

const https = require('https');

var options = {
  "method": "POST",
  "hostname": "api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/SupplierGroups/Create/{SurveyNumber}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {"SurveyNumber": 001100, 
  "Name":"Top Supplier Group", 
  "AllocationPercentage": 0.10, 
  "IsHedgeAccess": true, 
  }

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

```json 
 {
    "SurveyNumber": 001100,
    "Name":"Top Supplier Group",
    "AllocationPercentage": 0.10,
    "IsHedgeAccess": true,
} 
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

Creates an empty supplier group and specifies the allocation and name upon creation.


### Arguments

| Property                     | Type     | Required | Description                                                                                                      

                            |
|------------------------------|----------|----------|-----------------------------------------------------------------------------------------------------------------

-----------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                        

                            |
| Name                         | string   | false    | Supplier Group name.                                                                                             

                            |
| AllocationPercentage         | int      | false    | Group reserved allocation, expressed as a decimal.                                                               

                            |
| IsHedgeAccess                | boolean  | true     | Access to unallocated completes on the Exchange.                                                                 

                            |

##Update a Group

> Definition

```plaintext
POST  https://api.samplicio.us/Demand/v1/SupplierGroups/Update/{SurveyNumber}?key={APIKey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" \
-X POST --data '{"SurveyNumber": 001100,"Name":"Top Supplier Group", "AllocationPercentage": 0.10,"IsHedgeAccess": true}' \
curl https://api.samplicio.us/Demand/v1/SupplierGroups/Update/{SurveyNumber}?key={APIKey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierGroups/Update/{SurveyNumber}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Post.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {SurveyNumber: 001100, Name:"Top Supplier Group",AllocationPercentage: 0.10, IsHedgeAccess: true}.to_json

updateGroup = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{"SurveyNumber": 001100,"Name":"Top Supplier Group", "AllocationPercentage": 0.10,"IsHedgeAccess": true}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SupplierGroups/Update/{SurveyNumber}?key={APIKey}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $params,
));

$updateGroup = curl_exec($curl);

curl_close($curl);
?>
```

```python
import requests, json

url = 'https://api.samplicio.us/Demand/v1/SupplierGroups/Update/{SurveyNumber}?key={APIKey}'
params = {'SurveyNumber': 001100,'Name':'Top Supplier Group', 'AllocationPercentage': 0.10,'IsHedgeAccess': true}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

updateGroup = requests.post(url, data=data, headers=headers)
```

```csharp

using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierGroups/Update/{SurveyNumber}?key={APIKey}");

string params = "{\"SurveyNumber\": 001100, \"Name\":\"Top Supplier Group\", \"AllocationPercentage\": 0.10, \"IsHedgeAccess\": true}]}";

request.Method = "POST";
request.ContentType = "application/json";

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
streamWriter.Write(params);
streamWriter.Flush();
streamWriter.Close();
}

WebResponse updateGroup = request.GetResponse();
```

```javascript
const https = require('https');

var updateGroup = https.get('https://api.samplicio.us/Demand/v1/SupplierGroups/Update/{SurveyNumber}?key={APIKey}');

const https = require('https');

var options = {
  "method": "POST",
  "hostname": "api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/SupplierGroups/Create/{SurveyNumber}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {"SurveyNumber": 001100, 
  "Name":"Top Supplier Group", 
  "AllocationPercentage": 0.10, 
  "IsHedgeAccess": true, 
  }

var params = JSON.stringify(json);

var request = https.request(options, function (createGroupEmpty) {
  var chunks = [];

  updateGroup.on("data", function (chunk) {
    chunks.push(chunk);
  });

});

request.write(params);

request.end();
```

```json 
 {
    "SurveyNumber": 001100,
    "Name":"Top Supplier Group",
    "AllocationPercentage": 0.10,
    "IsHedgeAccess": true,
} 
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
    "API Message: UpdateSupplierGroupFromModel successful."
  ],
  "ResultCount": 1,
  "SupplierGroup": {
    "ID": 000001,
    "Name": "Top Supplier Group",
    "Completes": 0,
    "Screens": 0,
    "AllocationPercentage": 0.15,
    "CPI": null,
    "IsHedgeAccess": true,
    "Suppliers": []
  }
}
```

Updates a supplier group with the specified values.


### Arguments

| Property                     | Type     | Required | Description                                                                                                      

                            |
|------------------------------|----------|----------|-----------------------------------------------------------------------------------------------------------------

-----------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                        

                            |
| Name                         | string   | false    | Supplier Group name.                                                                                             

                            |
| AllocationPercentage         | int      | false    | Group reserved allocation, expressed as a decimal.                                                               

                            |
| IsHedgeAccess                | boolean  | false    | Access to unallocated completes on the Exchange.                                                                 

                            |


##Delete a Group

> Definition

```plaintext
DELETE  https://api.samplicio.us/Demand/v1/SupplierGroups/Delete/{SurveyNumber}/{SupplierGroupID}?key={APIKey}
```

> Example Request

```shell
curl X- DELETE https://api.samplicio.us/Demand/v1/SupplierGroups/Delete/{SurveyNumber}/{SupplierGroupID}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierGroups/Delete/{SurveyNumber}/{SupplierGroupID}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

deleteGroup = http.request(request)  
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


### Arguments

| Property                     | Type     | Required | Description                                                                                                      

                            |
|------------------------------|----------|----------|-----------------------------------------------------------------------------------------------------------------

-----------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                        

                            |
| SupplierGroupID              | int      | true     | Unique ID for Supplier Group.                                                                                    

                            |


##Add to a Group

> Definition

```plaintext
POST  https://api.samplicio.us/Demand/v1/SupplierGroups/AddSuppliersToGroup/{SurveyNumber}/{SupplierGroupID}?key={APIKey}
```


> Example Request

```shell
curl -H "Content-Type: application/json" \
-X POST --data '{"SupplierCode":"0010"}' \
curl https://api.samplicio.us/Demand/v1/SupplierGroups/AddSuppliersToGroup/{SurveyNumber}/{SupplierGroupID}?key={APIKey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierGroups/Update/{SurveyNumber}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Post.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {SupplierCode: 0010}.to_json

addToGroup = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{"SupplierCode": 0010}';

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

$updateGroup = curl_exec($curl);

curl_close($curl);
?>
```

```python
import requests, json

url = 'https://api.samplicio.us/Demand/v1/SupplierGroups/AddSuppliersToGroup/{SurveyNumber}/{SupplierGroupID}?key={APIKey}'
params = {'SupplierCode': 0010}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

addToGroup = requests.post(url, data=data, headers=headers)
```

```csharp

using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierGroups/Update/{SurveyNumber}?key={APIKey}");

string params = "{\"SupplierCode\": 0010}]}";

request.Method = "POST";
request.ContentType = "application/json";

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
streamWriter.Write(params);
streamWriter.Flush();
streamWriter.Close();
}

WebResponse addToGroup = request.GetResponse();
```

```javascript
const https = require('https');

var updateGroup = https.get('https://api.samplicio.us/Demand/v1/SupplierGroups/Update/{SurveyNumber}?key={APIKey}');

const https = require('https');

var options = {
  "method": "POST",
  "hostname": "api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/SupplierGroups/Update/{SurveyNumber}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {"SupplierCode": 0010}

var params = JSON.stringify(json);

var request = https.request(options, function (createGroupEmpty) {
  var chunks = [];

  addToGroup.on("data", function (chunk) {
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
        "SupplierCode": "0010",
        "Completes": 0,
        "Screens": 0
      },
     ]
  }
}

```

Adds suppliers to the specified supplier group.


### Arguments

| Property                     | Type     | Required | Description                                                                                                      

                            |
|------------------------------|----------|----------|-----------------------------------------------------------------------------------------------------------------

-----------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                        

                            |
| SupplierGroupID              | int      | true     | Unique ID for Supplier Group.                                                                                    

                            |


##Show a Group

> Definition

```plaintext
GET  https://api.samplicio.us/Demand/v1/SupplierGroups/BySurveyNumber/{SurveyNumber}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Demand/v1/SupplierGroups/BySurveyNumber/{SurveyNumber}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierGroups/BySurveyNumber/{SurveyNumber}?key={APIKey}

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

listGroups = http.request(request)  
```

```php
<?php
$listGroups = file_get_contents('https://api.samplicio.us/Demand/v1/SupplierGroups/BySurveyNumber/{SurveyNumber}?key={APIKey}');
?>
```

```python
import requests

listGroups = requests.get('https://api.samplicio.us/Demand/v1/SupplierGroups/BySurveyNumber/{SurveyNumber}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierGroups/BySurveyNumber/{SurveyNumber}?key={APIKey}");

WebResponse listGroups = request.GetResponse();
```

```javascript
const https = require('https');

var listGroups = https.get('https://api.samplicio.us/Demand/v1/SupplierGroups/BySurveyNumber/{SurveyNumber}?key={APIKey}');
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
          "SupplierCode": "0001",
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
          "SupplierCode": "0010",
          "Completes": 0,
          "Screens": 0
        }
      ]
    }
  ]
}
```

Returns the supplier groups for the survey specified.


### Arguments

| Property                     | Type     | Required | Description                                                                                                      

                            |
|------------------------------|----------|----------|-----------------------------------------------------------------------------------------------------------------

-----------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                        

                            |



##Remove from a Group

> Definition

```plaintext
PUT  https://api.samplicio.us/Demand/v1/SupplierGroups/RemoveSuppliersFromGroup/{SurveyNumber}?key={APIKey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" \
-X PUT  --data '{"SupplierCode": "0001"}' \ https://api.samplicio.us/Demand/v1/SupplierGroups/RemoveSuppliersFromGroup/{SurveyNumber}?key={APIKey}
```

```ruby

require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierGroups/RemoveSuppliersFromGroup/{SurveyNumber}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Put.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {SupplierCode: 0010}.to_json

removeFromGroup = http.request(request)



```

```php
<?php
$removeSuppliers = file_get_contents('https://api.samplicio.us/Demand/v1/SupplierGroups/RemoveSuppliersFromGroup/{SurveyNumber}?key={APIKey}');
?>

$curl = curl_init();

$params = '{"SupplierLinkTypeCode": "OWS,"TrackingTypeCode": "NONE","DefaultLink": "","SuccessLink": "","FailureLink": "","OverQuotaLink": "","QualityTerminationLink": ""}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SupplierGroups/RemoveSuppliersFromGroup/{SurveyNumber}?key={APIKey}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "PUT",
  CURLOPT_POSTFIELDS => $params,
));

$removeFromGroup = curl_exec($curl);

curl_close($curl);
?>

```

```python
import requests

removeSuppliers = requests.get('https://api.samplicio.us/Demand/v1/SupplierGroups/RemoveSuppliersFromGroup/{SurveyNumber}?key={APIKey}')

import requests, json

url = 'https://api.samplicio.us/Supply/v1/SupplierLinks/Update/{SurveyNumber}/{SupplierCode}?key={APIKey}'
params = {'SupplierCode': 0010}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

supplierLink = requests.put(url, data=data, headers=headers)
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierGroups/RemoveSuppliersFromGroup/{SurveyNumber}?key={APIKey}");

WebResponse removeSuppliers = request.GetResponse();


using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierGroups/RemoveSuppliersFromGroup/{SurveyNumber}?key={APIKey}");

string params = "{\"SupplierCode\": 0010}";

request.Method = "PUT";
request.ContentType = "application/json";

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
        {
            streamWriter.Write(params);
            streamWriter.Flush();
            streamWriter.Close();
        }

WebResponse removeFromGroup = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "PUT",
  "hostname": "api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/SupplierGroups/RemoveSuppliersFromGroup/{SurveyNumber}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {
    "SupplierCode": 0010,
};

var params = JSON.stringify(json);

var request = https.request(options, function (supplierLink) {
  var chunks = [];

  supplierLink.on("data", function (chunk) {
    chunks.push(chunk);
  });

});

request.write(params);

request.end();
```

```json
{
  {"SupplierCode": "0001"},
  
}

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
    "API Message: RemoveSupplierGroupSuppliersFromSupplierGroups successful."
  ],
  "ResultCount": 0,
  "SupplierGroup": {
    "ID": null,
    "Name": null,
    "Completes": null,
    "Screens": null,
    "AllocationPercentage": null,
    "CPI": null,
    "IsHedgeAccess": null,
    "Suppliers": null
  }
}
```

Removes specified suppliers from their supplier group.


### Arguments

| Property                     | Type     | Required | Description                                                                                                      

                            |
|------------------------------|----------|----------|-----------------------------------------------------------------------------------------------------------------

-----------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                        

                            |
| SupplierGroupID              | int      | true     | Unique ID for Supplier Group.                                                                                    

                            |


