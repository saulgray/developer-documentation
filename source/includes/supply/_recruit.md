##Recruit

Buyers will use Fulcrum to recruit new respondents to their panel or community. The MarketingInformation resource allows suppliers to retrieve campaign marketing information when the study type is either `Recruit – Panel` or `Community Build` which can be presented to respondents.

#### Marketing Information Survey Model

| Property               | Type    |  Description                                                                                             |
|------------------------|---------|----------------------------------------------------------------------------------------------------------|
| MarketingHeadline      | string  | A headline that describes the recruit offer                                                              |
| MarketingText          | string  | Marketing text that describes the benefits the recruit offer                                             |
| MarketingImageLargeUrl | string  | A company logo or image that represents the recruit offer                                                |
| MarketingImageSmallUrl | string  | EA thumbnail image, usually company logo, that represents the recruit offer                              |


### GET Show Marketing Info

> Definition

```plaintext
GET  https://api.samplicio.us/Supply/v1/Surveys/MarketingInformation/BySurveyNumber/{SurveyNumber}/{SupplierCode}
```

> Example Request

```shell
curl -H "Authorization: YOUR_API_KEY_HERE" https://api.samplicio.us/Supply/v1/Surveys/MarketingInformation/BySurveyNumber/{SurveyNumber}/{SupplierCode}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Supply/v1/Surveys/MarketingInformation/BySurveyNumber/{SurveyNumber}/{SupplierCode}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

request['Authorization'] = YOUR_API_KEY_HERE

response = http.request(request)  
```

```php
<?php
$URL = "https://api.samplicio.us/Supply/v1/Surveys/MarketingInformation/BySurveyNumber/{SurveyNumber}/{SupplierCode}";

$aHTTP['http']['method']  = 'GET';

$aHTTP['http']['header']  = "Authorization: YOUR_API_KEY_HERE";

$context = stream_context_create($aHTTP);

$response = file_get_contents($URL, false, $context);
?>
```

```python
import requests

url = 'https://api.samplicio.us/Supply/v1/Surveys/MarketingInformation/BySurveyNumber/{SurveyNumber}/{SupplierCode}'

headers = {'Authorization' : YOUR_API_KEY_HERE}

response = requests.get(url, headers=headers)
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Supply/v1/Surveys/MarketingInformation/BySurveyNumber/{SurveyNumber}/{SupplierCode}");

request.Headers.Add("Authorization", YOUR_API_KEY_HERE);

WebResponse response = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "GET",
  "hostname": "api.samplicio.us",
  "path": "/Supply/v1/Surveys/MarketingInformation/BySurveyNumber/{SurveyNumber}/{SupplierCode}",
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
    "API Message: GetMarketingInformationBySurveyNumber successful."
  ],
  "ResultCount": 1,
  "MarketingInformation": {
    "MarketingHeadline": "All the headlines",
    "MarketingText": "Come one, come all!",
    "MarketingImageLargeUrl": "images.google.com/image_large.jpg",
    "MarketingImageSmallUrl": "images.google.com/image_small.jpg"
  }
}
```

Returns marketing information for a specific survey when study type is either `Recruit – Panel` or `Community Build`.



| Property     | Type   | Required | Description                                                   |
|--------------|--------|----------|---------------------------------------------------------------|
| SurveyNumber | int    | true     | Unique number associated with the survey.                     |
| SupplierCode | string | true     | Unique code associated with the supplier performing the call. |
