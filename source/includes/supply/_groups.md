##Groups

### GET List a Survey’s Groups

> Definition

```plaintext
GET  https://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

groups = http.request(request)  
```

```php
<?php
$groups = file_get_contents('https://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}');
?>
```

```python
import requests

groups = requests.get('https://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}");

WebResponse groups = request.GetResponse();
```

```javascript
const https = require('https');

https.get('https://api.samplicio.us/Supply/v1/Surveys/SurveyGroups/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}', function(res){
  var groups = res;
});
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

#### Arguments

| Property                     | Type     | Required | Description                                                                     |
|------------------------------|----------|----------|---------------------------------------------------------------------------------|
|SurveyNumber                  | int      | true     | Unique number associated with the survey.                                       |
|SupplierCode                  | string   | true     | Unique code associated with a supplier account.                                 |
