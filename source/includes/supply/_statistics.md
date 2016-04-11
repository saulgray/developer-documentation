##Statistics

System Conversion is defined as the number of entrants into Fulcrum, over the total number of completes achieved on the study.

### GET Show Statistics

> Definition 

```plaintext
GET  https://api.samplicio.us/Supply/v1/SurveyStatistics/All/{SupplierCode}/{Scope}/{Timespan}?key={APIKey}
```
> Example Request

```shell
curl https://api.samplicio.us/Supply/v1/SurveyStatistics/All/{SupplierCode}/{Scope}/{Timespan}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Supply/v1/SurveyStatistics/All/{SupplierCode}/{Scope}/{Timespan}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

StatisticsBySurvey = http.request(request) 
```

```php
<?php
$StatisticsBySurvey = file_get_contents('https://api.samplicio.us/Supply/v1/SurveyStatistics/BySurveyNumber/{SurveyNumber}/{SupplierCode}/{Scope}/{Timespan}?key={APIKey}');
?>
```

```python
import requests

StatisticsBySurvey = requests.get('https://api.samplicio.us/Supply/v1/SurveyStatistics/BySurveyNumber/{SurveyNumber}/{SupplierCode}/{Scope}/{Timespan}?key={APIKey}')
```
```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Supply/v1/SurveyStatistics/BySurveyNumber/{SurveyNumber}/{SupplierCode}/{Scope}/{Timespan}?key={APIKey}");

WebResponse StatisticsBySurvey = request.GetResponse();
```
```javascript
const https = require('https');

var StatisticsBySurvey = https.get('https://api.samplicio.us/Supply/v1/SurveyStatistics/BySurveyNumber/{SurveyNumber}/{SupplierCode}/{Scope}/{Timespan}?key={APIKey}');
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

Returns conversion information (as a percentage) for a live study based on the `Scope` and `Timespan`.    

<aside class="notice">The "Global" scope can only be used with a "Trailing" timespan.</aside>

#### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Survey Number                | int.     | true     | Unique ID associated with the study.                                                        |
| SupplierCode                 | string   | true     | Your unique supplier code.                                                        |
| Scope                        | string   | true     | Either "Global" or "Supplier".                                                             |
| Timespan                     | string   | true     | Either "Trailing" or "Lifetime". Trailing returns data from the last 12 hours.                                                            |

### GET List Statistics

> Definition 

```plaintext
GET  https://api.samplicio.us/Supply/v1/SurveyStatistics/All/{SupplierCode}/{Scope}/{Timespan}?key={APIKey}
```
> Example Request

```shell
curl https://api.samplicio.us/Supply/v1/SurveyStatistics/All/{SupplierCode}/{Scope}/{Timespan}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Supply/v1/SurveyStatistics/All/{SupplierCode}/{Scope}/{Timespan}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

StatisticsAll = http.request(request) 
```

```php
<?php
$StatisticsAll = file_get_contents('https://api.samplicio.us/Supply/v1/SurveyStatistics/All/{SupplierCode}/{Scope}/{Timespan}?key={APIKey}');
?>
```

```python
import requests

StatisticsAll = requests.get('https://api.samplicio.us/Supply/v1/SurveyStatistics/All/{SupplierCode}/{Scope}/{Timespan}?key={APIKey}')
```
```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Supply/v1/SurveyStatistics/All/{SupplierCode}/{Scope}/{Timespan}?key={APIKey}");

WebResponse StatisticsAll = request.GetResponse();
```
```javascript
const https = require('https');

var StatisticsAll = https.get('https://api.samplicio.us/Supply/v1/SurveyStatistics/All/{SupplierCode}/{Scope}/{Timespan}?key={APIKey}');
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

Returns conversion information (as a percentage) based on the Scope and Timespan, for live surveys only. System Conversion is defined as the number of entrants into Fulcrum, over the total number of completes achieved on the study.   

<aside class="notice">The "Global" scope can only be used with a "Trailing" timespan.</aside>

#### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| Scope                        | string   | true     | Either "Global" or "Supplier".                                                             |
| Timespan                     | string   | true     | Either "Trailing" or "Lifetime". Trailing returns the last 12 hours.                                                            |
| SupplierCode                 | string   | true     | Your unique supplier code.                                                        |                                                      |
