#Groups

##List a Survey’s Groups

> Definition

```plaintext
GET  http://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

> Example Request

```shell
curl http://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('http://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

allocations = http.request(request)  
```

```php
<?php
$allocations = file_get_contents('http://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}');
?>
```

```python
import requests

allocations = requests.get('http://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("http://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}");

WebResponse allocations = request.GetResponse();
```

```javascript
const https = require('https');

var allocations = https.get('http://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}');
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
    "API Message: GetSurveyGroups successful."
  ],
  "ResultCount": 1,
  "SurveyGroups": [
    {
      "SurveyGroup": "Example Survey Group",
      "SurveyGroupID": 12259
    }
  ]
}
```
Returns information on the survey group used by the specified survey.

### Arguments

| Property                     | Type     | Required | Description                                                                     |
|------------------------------|----------|----------|---------------------------------------------------------------------------------|
|SurveyNumber                  | int      | true     | Unique number associated with the survey.                                       |
|SupplierCode                  | string   | true     | Unique code associated with a supplier account.                                 |