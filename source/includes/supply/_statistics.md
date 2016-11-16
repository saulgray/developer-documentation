##Statistics

The Survey Statistics resource returns valuable survey performance statistics based on scope and timeframe. This resource is an important part of Yield Managmement which is the process of implementing business and API processes rank and order surveys to ensure high earnings-per-click (EPC) studies receive the most traffic and low EPC studies are removed from sample send.     

#### Global Trailing Model

| Property         | Type     | Description                                                                                                           |
|------------------|----------|-----------------------------------------------------------------------------------------------------------------------|
| EffectiveEPC     | float    | Global Effective EPC given the trailing conversion rate and current CPI of survey (TrailingConversion*CPI)            |  
| LengthOfInterview| int      | Global Trailing LOI. Median time for a respondent to complete the survey excluding the Fulcrum prescreener in minutes.|
| SystemConversion | float    | Global trailing conversion rate (# Completes / # System Entrants)                                                     |

#### Supplier Lifetime Model

| Property         | Type     | Description                               |
|------------------|----------|-------------------------------------------|
| EPC              | float    | Lifetime EPC                              |    
| SystemConversion | float    | Lifetime conversion rate                  |

#### Supplier Trailing Model

| Property         | Type     | Description                               |
|------------------|----------|-------------------------------------------|
| SystemConversion | float    | Trailing conversion rate                  |

### GET Show Statistics

> Definition

```plaintext
GET  https://api.samplicio.us/Supply/v1/SurveyStatistics/BySurveyNumber/{SurveyNumber}/{SupplierCode}/{Scope}/{Timespan}
```
> Example Request

```shell
curl -H "Authorization: YOUR_API_KEY_HERE" https://api.samplicio.us/Supply/v1/SurveyStatistics/BySurveyNumber/{SurveyNumber}/{SupplierCode}/{Scope}/{Timespan}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Supply/v1/SurveyStatistics/BySurveyNumber/{SurveyNumber}/{SupplierCode}/{Scope}/{Timespan}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

request['Authorization'] = YOUR_API_KEY_HERE

response = http.request(request)
```

```php
<?php
$URL = "https://api.samplicio.us/Supply/v1/SurveyStatistics/BySurveyNumber/{SurveyNumber}/{SupplierCode}/{Scope}/{Timespan}";

$aHTTP['http']['method']  = 'GET';

$aHTTP['http']['header']  = "Authorization: YOUR_API_KEY_HERE";

$context = stream_context_create($aHTTP);

$response = file_get_contents($URL, false, $context);
?>
```

```python
import requests

url = 'https://api.samplicio.us/Supply/v1/SurveyStatistics/BySurveyNumber/{SurveyNumber}/{SupplierCode}/{Scope}/{Timespan}'

headers = {'Authorization' : YOUR_API_KEY_HERE}

response = requests.get(url, headers=headers)
```
```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Supply/v1/SurveyStatistics/BySurveyNumber/{SurveyNumber}/{SupplierCode}/{Scope}/{Timespan}");

request.Headers.Add("Authorization", YOUR_API_KEY_HERE);

WebResponse response = request.GetResponse();
```
```javascript
const https = require('https');

var options = {
  "method": "GET",
  "hostname": "api.samplicio.us",
  "path": "/Supply/v1/SurveyStatistics/BySurveyNumber/{SurveyNumber}/{SupplierCode}/{Scope}/{Timespan}",
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
    "API Message: GetGlobalTrailingStatisticsBySurveyNumber successful."
  ],
  "ResultCount": 1,
  "SurveyStatistics": {
    "EffectiveEPC": 2.73,
    "LengthOfInterview": 5,
    "SystemConversion": 0.28
  }
}
```

Returns Exchange conversion information (as a percentage) for a live study based on the `Scope` and `Timespan`.    

<aside class="notice">The "Global" scope can only be used with a "Trailing" timespan.</aside>

#### Arguments

| Property                     | Type     | Required | Description                                                                    |
|------------------------------|----------|----------|--------------------------------------------------------------------------------|
| Survey Number                | int      | true     | Unique ID associated with the study.                                           |
| SupplierCode                 | string   | true     | Your unique supplier code.                                                     |
| Scope                        | string   | true     | Either "Global" or "Supplier".                                                 |
| Timespan                     | string   | true     | Either "Trailing" or "Lifetime". Trailing returns data from the last 12 hours. |

### GET List Statistics

> Definition

```plaintext
GET  https://api.samplicio.us/Supply/v1/SurveyStatistics/All/{SupplierCode}/{Scope}/{Timespan}
```
> Example Request

```shell
curl -H "Authorization: YOUR_API_KEY_HERE" https://api.samplicio.us/Supply/v1/SurveyStatistics/All/{SupplierCode}/{Scope}/{Timespan}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Supply/v1/SurveyStatistics/All/{SupplierCode}/{Scope}/{Timespan}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

request['Authorization'] = YOUR_API_KEY_HERE

response = http.request(request)
```

```php
<?php
$URL = "https://api.samplicio.us/Supply/v1/SurveyStatistics/All/{SupplierCode}/{Scope}/{Timespan}";

$aHTTP['http']['method']  = 'GET';

$aHTTP['http']['header']  = "Authorization: YOUR_API_KEY_HERE";

$context = stream_context_create($aHTTP);

$response = file_get_contents($URL, false, $context);
?>
```

```python
import requests

url = 'https://api.samplicio.us/Supply/v1/SurveyStatistics/All/{SupplierCode}/{Scope}/{Timespan}'

headers = {'Authorization' : YOUR_API_KEY_HERE}

response = requests.get(url, headers=headers)
```
```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Supply/v1/SurveyStatistics/All/{SupplierCode}/{Scope}/{Timespan}");

request.Headers.Add("Authorization", YOUR_API_KEY_HERE);

WebResponse response = request.GetResponse();
```
```javascript
const https = require('https');

var options = {
  "method": "GET",
  "hostname": "api.samplicio.us",
  "path": "/Supply/v1/SurveyStatistics/All/{SupplierCode}/{Scope}/{Timespan}",
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
    "API Message: GetAllGlobalTrailingStatistics successful."
  ],
  "ResultCount": 2,
  "SurveyStatistics": [
    {
      "SurveyNumber": 999,
      "SystemConversion": 0.42
    },
    {
      "SurveyNumber": 999,
      "SystemConversion": 0.07
    },
  ]
}    
```

Returns Exchange conversion information (as a percentage) based on the Scope and Timespan, for all live surveys which have received an entrant in the last 12 hours.

<aside class="notice">The "Global" scope can only be used with a "Trailing" timespan.</aside>

#### Arguments

| Property                     | Type     | Required | Description                                                                           |
|------------------------------|----------|----------|---------------------------------------------------------------------------------------|
| Scope                        | string   | true     | Either "Global" or "Supplier".                                                        |
| Timespan                     | string   | true     | Either "Trailing" or "Lifetime". Trailing returns the last 12 hours.                  |
| SupplierCode                 | string   | true     | Your unique supplier code.                                                            |
