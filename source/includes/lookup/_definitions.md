# Definitions

##List Global Definitions

##List Suppliers

> Definition

```plaintext
GET  https://api.samplicio.us/Core/v1/Suppliers/AllWithAccount?key={APIKey}
```
> Example Request

```shell
curl https://api.samplicio.us/Core/v1/Suppliers/AllWithAccount?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Core/v1/Suppliers/AllWithAccount?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

customQs = http.request(request) 
```

```php
<?php
$customQs = file_get_contents('https://api.samplicio.us/Core/v1/Suppliers/AllWithAccount?key={APIKey}');
?>
```

```python
import requests

customQs = requests.get('https://api.samplicio.us/Core/v1/Suppliers/AllWithAccount?key={APIKey}')
```
```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Core/v1/Suppliers/AllWithAccount?key={APIKey}");

WebResponse customQs = request.GetResponse();
```
```javascript
const https = require('https');

var customQs = https.get('https://api.samplicio.us/Core/v1/Suppliers/AllWithAccount?key={APIKey}');
```

> Example Response

```json 
{
  "ApiResult": 0,
  "ApiResultCode": 0,
  "ApiAccount": "AA",
  "AccountType": 2,
  "ApiAccountStatus": 1,
  "AccountCode": "AA",
  "ApiMessages": [
    "API Message: Response initialized.",
    "API Message: GetAllSuppliersGroupedByAccount successful."
  ],
  "ResultCount": 11,
  "AccountsWithSuppliers": [
    {
      "AccountName": "Federated Sample",
      "Suppliers": [
        {
          "Name": "Federated Sample",
          "Code": "1010"
        },
        {
          "Name": "Premium Survey Solutions",
          "Code": "1010"
        },
        {
          "Name": "Fed_Test_Supplier",
          "Code": "1010"
        },
        {
          "Name": "Federated Offers",
          "Code": "1010"
        },
      ]
    },
    {
      "AccountName": "Duration",
      "Suppliers": [
        {
          "Name": "Duration Inc",
          "Code": "1010"
        },
        {
          "Name": "Duration Singapore Pte Ltd",
          "Code": "1010"
        },
        {
          "Name": "Duration Manila",
          "Code": "1010"
        },
        {
          "Name": "ARF_Router",
          "Code": "1010"
        }
      ]
    },
    {
      "AccountName": "Vision Critical",
      "Suppliers": [
        {
          "Name": "Springboard America",
          "Code": "1010"
        },
        {
          "Name": "Springboard UK",
          "Code": "1010"
        },
        {
          "Name": "Vision Critical",
          "Code": "1010"
        },
        
      ]
    },
```

Returns a list of all available suppliers.

##List Business Units

> Definition 

```plaintext
GET  https://api.samplicio.us/Core/v1/BusinessUnits/All?key={APIKey}
```
> Example Request

```shell
curl https://api.samplicio.us/Core/v1/BusinessUnits/All?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Core/v1/BusinessUnits/All?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

standardQs = http.request(request) 
```

```php
<?php
$standardQs = file_get_contents('https://api.samplicio.us/Core/v1/BusinessUnits/All?key={APIKey}');
?>
```

```python
import requests

standardQs = requests.get('https://api.samplicio.us/Core/v1/BusinessUnits/All?key={APIKey}')
```
```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Core/v1/BusinessUnits/All?key={APIKey}");

WebResponse standardQs = request.GetResponse();
```
```javascript
const https = require('https');

var standardQs = https.get('https://api.samplicio.us/Core/v1/BusinessUnits/All?key={APIKey}');
```

> Example Response

```json
 {
  "ApiResult": 0,
  "ApiResultCode": 0,
  "ApiAccount": "Fulcrum",
  "AccountType": 2,
  "ApiAccountStatus": 1,
  "AccountCode": "AA",
  "ApiMessages": [
    "API Message: Response initialized.",
    "API Message: GetAllBusinessUnits successful."
  ],
  "ResultCount": 1,
  "BusinessUnits": [
    {
      "AccountID": 111,
      "Id": "111",
      "Name": "Fulcrum"
    },
  ]
}

Returns a list of all Business Units.