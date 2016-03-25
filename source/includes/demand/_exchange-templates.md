#Exchange Templates

The Exchange Templates resource returns all Exchange templates associated with an existing account as well as apply an existing Exchange template to a survey. An Exchange Template must first be created in the Fulcrum UI. An Exchange Template allows a buyer to quickly add an commonly used Exchange supplier blend. 

### Exchange Templates Model

| Property                     | Type     | Description                                                                                                                                             |
|------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| ID                           | int      | ID associated with the Exchange Template.                                                                                                               | 
| AccountID                    | int      | Unique account identifier.                                                                                                                              |
| Name                         | string   | Exchange Template Name.                                                                                                                                 |
| ExchangeAllocationPercentage | int      | Percentage of total completes allocated only to the Exchange. Must be between 0 and 100%.                                                               |
| ExchangeIsHedgeAccess        | boolean  | "true" gives the Exchange access to any unallocated completes.                                                                                          |
| IsGlobalTemplate             | boolean  | Should always return "false" indicating the template is only available to the buyers account.                                                           |

##List Exchange Templates

> Definition

```plaintext
GET  https://api.samplicio.us/Demand/v1/ExchangeTemplates/GetAll?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Demand/v1/ExchangeTemplates/GetAll?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Demand/v1/ExchangeTemplates/GetAll?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

exchangeTemplate = http.request(request)  
```

```php
<?php
$exchangeTemplate = file_get_contents('https://api.samplicio.us/Demand/v1/ExchangeTemplates/GetAll?key={APIKey}');
?>
```

```python
import requests

exchangeTemplate = requests.get('https://api.samplicio.us/Demand/v1/ExchangeTemplates/GetAll?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/ExchangeTemplates/GetAll?key={APIKey}");

WebResponse exchangeTemplate = request.GetResponse();
```

```javascript
const https = require('https');

var exchangeTemplate = https.get('https://api.samplicio.us/Demand/v1/ExchangeTemplates/GetAll?key={APIKey}');
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
    "API Message: GetAllExchangeTemplates successful."
  ],
  "ResultCount": 1,
  "ExchangeTemplates": [
  {
      "ID": 1,
      "AccountID": 1,
      "Name": "ExchangeTemplate1",
      "ExchangeAllocationPercentage": 0,
      "ExchangeIsHedgeAccess": true,
      "IsGlobalTemplate": true
    },
}
```

Returns all Exchange templates associated with an existing account. 

### Arguments

##Apply an Exchange Template

### Supplier Groups Model

| Property                     | Type     | Description                                                                                                                                             |
|------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| ID                           | int      | ID associated with the Exchange Template.                                                                                                               | 
| Name                         | string   | Exchange Template Name.                                                                                                                                 |
| SupplierGroupDisplayTypeID   | int      |                                                                                                                                                         |
| Completes                    | int      | Number of completes gained by the group.                                                                                                                |
| Screens                      | int      | Number of prescreens gained by the group.                                                                                                               |
| AllocationPercentage         | int      | Percentage of total completes allocated only to the Exchange group. Must be between 0 and 100%.                                                         |
| IsHedgeAccess                | boolean  | "true" gives the Exchange group access to any unallocated completes.                                                                                    |
| CPI                          | int      | Will typically return "null" as CPI can't be set via an Exchange Template.                                                                              |
| Suppliers                    | array    | Contains array of elements described below                                                                                                              |

### Suppliers Model

| Property                     | Type     | Description                                                                                                                                             |
|------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| SupplierID                   | int      | ID associated with the supplier account                                                                                                                 | 
| Completes                    | int      | Number of completes gained by the supplier.                                                                                                             |
| Screens                      | string   | Number of prescreens gained by the supplier                                                                                                             |

> Definition

```plaintext
POST  https://api.samplicio.us/Demand/v1/ExchangeTemplates/ApplyToSurvey/{SurveyNumber}/{ExchangeTemplateID}?key={APIKey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" \
-X POST --data '{"SupplierLinkTypeCode": "OWS", "TrackingTypeCode": "NONE"}' \
https://api.samplicio.us/Demand/v1/ExchangeTemplates/ApplyToSurvey/{SurveyNumber}/{ExchangeTemplateID}?key={APIKey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/ExchangeTemplates/ApplyToSurvey/{SurveyNumber}/{ExchangeTemplateID}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Post.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {SupplierLinkTypeCode:"OWS",TrackingTypeCode:"NONE"}.to_json

exchangeTemplate = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{"SupplierLinkTypeCode": "OWS,"TrackingTypeCode": "NONE"}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/ExchangeTemplates/ApplyToSurvey/{SurveyNumber}/{ExchangeTemplateID}?key={APIKey}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $params,
));

$exchangeTemplate = curl_exec($curl);

curl_close($curl);
?>

```

```python
import requests, json

url = 'https://api.samplicio.us/Demand/v1/ExchangeTemplates/ApplyToSurvey/{SurveyNumber}/{ExchangeTemplateID}?key={APIKey}'
params = {'SupplierLinkTypeCode':'OWS','TrackingTypeCode':'NONE'}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

exchangeTemplate = requests.post(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/ExchangeTemplates/ApplyToSurvey/{SurveyNumber}/{ExchangeTemplateID}?key={APIKey}");

string params = "{\"SupplierLinkTypeCode\":\"OWS\","+"\"TrackingTypeCode\":\"NONE\"}";
    
request.Method = "POST";
request.ContentType = "application/json";

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
streamWriter.Write(params);
streamWriter.Flush();
streamWriter.Close();
}

WebResponse exchangeTemplate = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "POST",
  "hostname": "api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/ExchangeTemplates/ApplyToSurvey/{SurveyNumber}/{ExchangeTemplateID}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {
    "SupplierLinkTypeCode":"OWS",
    "TrackingTypeCode":"NONE"
};

var params = JSON.stringify(json);

var request = https.request(options, function (exchangeTemplate) {
  var chunks = [];

  exchangeTemplate.on("data", function (chunk) {
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
    "API Mes sage: ApplyExchangeTemplateToSurvey successful."
  ],
  "ResultCount": 1,
  "SupplierGroups": [
    {
      "ID": 1234,
      "Name": "Group 1",
      "SupplierGroupDisplayTypeID": 1,
      "Completes": 0,
      "Screens": 0,
      "AllocationPercentage": 0,
      "IsHedgeAccess": false,
      "CPI": null,
      "Suppliers": [
        {
          "SupplierID": 66,
          "Completes": 0,
          "Screens": 0
        },
        {
          "SupplierID": 67,
          "Completes": 0,
          "Screens": 0
        },
        {
          "SupplierID": 257,
          "Completes": 0,
          "Screens": 0
        },
        {
          "SupplierID": 729,
          "Completes": 0,
          "Screens": 0
        }
      ]
    }
  ]
}
```
Applies the specified Fulcrum Exchange Template to an existing survey.

### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                                                    |
| ID                           | int      | true     | ID associated with the Exchange Template.                                                                                                    |
