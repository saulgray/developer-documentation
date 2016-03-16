#Exchange Groups

##Create a Group

> Definition

```plaintext
POST  https://api.samplicio.us/Demand/v1/SupplierGroups/CreateWithSuppliers/{SurveyNumber}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Demand/v1/SupplierGroups/CreateWithSuppliers/{SurveyNumber}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierGroups/CreateWithSuppliers/{SurveyNumber}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

createGroup = http.request(request)  
```

```php
<?php
$createGroup = file_get_contents('https://api.samplicio.us/Demand/v1/SupplierGroups/CreateWithSuppliers/{SurveyNumber}?key={APIKey}');
?>
```

```python
import requests

createGroup = requests.get('https://api.samplicio.us/Demand/v1/SupplierGroups/CreateWithSuppliers/{SurveyNumber}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierGroups/CreateWithSuppliers/{SurveyNumber}?key={APIKey}");

WebResponse createGroup = request.GetResponse();
```

```javascript
const https = require('https');

var createGroup = https.get('https://api.samplicio.us/Demand/v1/SupplierGroups/CreateWithSuppliers/{SurveyNumber}?key={APIKey}');
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

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                                                    |
| SupplierCode                 | int      | true     | Unique code associated with supplier account.                                                                                                |
| Name                         | string   | false    | Supplier Group name.                                                                                                                         |
| AllocationPercentage         | int      | false    | Group reserved allocation, expressed as a decimal.                                                                                           |
| IsHedgeAccess                | boolean  | true     | Access to unallocated completes on the Exchange.                                                                                             |

##Create an Empty Group

> Definition

```plaintext
POST  https://api.samplicio.us/Demand/v1/SupplierGroups/Create/{SurveyNumber}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Demand/v1/SupplierGroups/Create/{SurveyNumber}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierGroups/Create/{SurveyNumber}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

createGroupEmpty = http.request(request)  
```

```php
<?php
$createGroupEmpty = file_get_contents('https://api.samplicio.us/Demand/v1/SupplierGroups/Create/{SurveyNumber}?key={APIKey}');
?>
```

```python
import requests

createGroupEmpty = requests.get('https://api.samplicio.us/Demand/v1/SupplierGroups/Create/{SurveyNumber}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierGroups/Create/{SurveyNumber}?key={APIKey}");

WebResponse createGroupEmpty = request.GetResponse();
```

```javascript
const https = require('https');

var createGroupEmpty = https.get('https://api.samplicio.us/Demand/v1/SupplierGroups/Create/{SurveyNumber}?key={APIKey}');
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

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                                                    |
| Name                         | string   | false    | Supplier Group name.                                                                                                                         |
| AllocationPercentage         | int      | false    | Group reserved allocation, expressed as a decimal.                                                                                           |
| IsHedgeAccess                | boolean  | true     | Access to unallocated completes on the Exchange.                                                                                             |

##Update a Group

> Definition

```plaintext
POST  https://api.samplicio.us/Demand/v1/SupplierGroups/Update/{SurveyNumber}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Demand/v1/SupplierGroups/Update/{SurveyNumber}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierGroups/Update/{SurveyNumber}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

updateGroup = http.request(request)  
```

```php
<?php
$updateGroup = file_get_contents('https://api.samplicio.us/Demand/v1/SupplierGroups/Update/{SurveyNumber}?key={APIKey}');
?>
```

```python
import requests

updateGroup = requests.get('https://api.samplicio.us/Demand/v1/SupplierGroups/Update/{SurveyNumber}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierGroups/Update/{SurveyNumber}?key={APIKey}");

WebResponse updateGroup = request.GetResponse();
```

```javascript
const https = require('https');

var updateGroup = https.get('https://api.samplicio.us/Demand/v1/SupplierGroups/Update/{SurveyNumber}?key={APIKey}');
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

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                                                    |
| Name                         | string   | false    | Supplier Group name.                                                                                                                         |
| AllocationPercentage         | int      | false    | Group reserved allocation, expressed as a decimal.                                                                                           |
| IsHedgeAccess                | boolean  | false    | Access to unallocated completes on the Exchange.                                                                                             |


##Delete a Group

> Definition

```plaintext
DELETE  https://api.samplicio.us/Demand/v1/SupplierGroups/Delete/{SurveyNumber}/{SupplierGroupID}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Demand/v1/SupplierGroups/Delete/{SurveyNumber}/{SupplierGroupID}?key={APIKey}
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
$deleteGroup = file_get_contents('https://api.samplicio.us/Demand/v1/SupplierGroups/Delete/{SurveyNumber}/{SupplierGroupID}?key={APIKey}');
?>
```

```python
import requests

deleteGroup = requests.get('https://api.samplicio.us/Demand/v1/SupplierGroups/Delete/{SurveyNumber}/{SupplierGroupID}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierGroups/Delete/{SurveyNumber}/{SupplierGroupID}?key={APIKey}");

WebResponse deleteGroup = request.GetResponse();
```

```javascript
const https = require('https');

var deleteGroup = https.get('https://api.samplicio.us/Demand/v1/SupplierGroups/Delete/{SurveyNumber}/{SupplierGroupID}?key={APIKey}');
```

Deletes the specified supplier group.


### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                                                    |
| SupplierGroupID              | int      | true     | Unique ID for Supplier Group.                                                                                                                |


##Add to a Group

> Definition

```plaintext
POST  https://api.samplicio.us/Demand/v1/SupplierGroups/AddSuppliersToGroup/{SurveyNumber}/{SupplierGroupID}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Demand/v1/SupplierGroups/AddSuppliersToGroup/{SurveyNumber}/{SupplierGroupID}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierGroups/AddSuppliersToGroup/{SurveyNumber}/{SupplierGroupID}?key={APIKey}

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

addSuppliers = http.request(request)  
```

```php
<?php
$addSuppliers = file_get_contents('https://api.samplicio.us/Demand/v1/SupplierGroups/AddSuppliersToGroup/{SurveyNumber}/{SupplierGroupID}?key={APIKey}');
?>
```

```python
import requests

addSuppliers = requests.get('https://api.samplicio.us/Demand/v1/SupplierGroups/AddSuppliersToGroup/{SurveyNumber}/{SupplierGroupID}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierGroups/AddSuppliersToGroup/{SurveyNumber}/{SupplierGroupID}?key={APIKey}");

WebResponse addSuppliers = request.GetResponse();
```

```javascript
const https = require('https');

var addSuppliers = https.get('https://api.samplicio.us/Demand/v1/SupplierGroups/AddSuppliersToGroup/{SurveyNumber}/{SupplierGroupID}?key={APIKey}');
```
```json
{
  {"SupplierCode": "0001"},
  {"SupplierCode": "0100"},
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
        "SupplierCode": "0001",
        "Completes": 0,
        "Screens": 0
      },
      {
        "SupplierCode": "0100",
        "Completes": 0,
        "Screens": 0
      }
    ]
  }
}

```

Adds suppliers to the specified supplier group.


### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                                                    |
| SupplierGroupID              | int      | true     | Unique ID for Supplier Group.                                                                                                                |


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

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                                                    |



##Remove from a Group

> Definition

```plaintext
PUT  https://api.samplicio.us/Demand/v1/SupplierGroups/RemoveSuppliersFromGroup/{SurveyNumber}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Demand/v1/SupplierGroups/RemoveSuppliersFromGroup/{SurveyNumber}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierGroups/RemoveSuppliersFromGroup/{SurveyNumber}?key={APIKey}

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

removeSuppliers = http.request(request)  
```

```php
<?php
$removeSuppliers = file_get_contents('https://api.samplicio.us/Demand/v1/SupplierGroups/RemoveSuppliersFromGroup/{SurveyNumber}?key={APIKey}');
?>
```

```python
import requests

removeSuppliers = requests.get('https://api.samplicio.us/Demand/v1/SupplierGroups/RemoveSuppliersFromGroup/{SurveyNumber}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierGroups/RemoveSuppliersFromGroup/{SurveyNumber}?key={APIKey}");

WebResponse removeSuppliers = request.GetResponse();
```

```javascript
const https = require('https');

var removeSuppliers = https.get('https://api.samplicio.us/Demand/v1/SupplierGroups/RemoveSuppliersFromGroup/{SurveyNumber}?key={APIKey}');
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


Removes specified suppliers from their supplier group.


### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                                                    |
| SupplierGroupID              | int      | true     | Unique ID for Supplier Group.                                                                                                                |


