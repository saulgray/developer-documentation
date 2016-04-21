##Recruit

Buyers will use Fulcrum to recruit new respondents to their panel or community. The MarketingInformation resource allows suppliers to retrieve campaign marketing information when the study type is either `Recruit – Panel` or `Community Build` which can be presented to respondents.

#### Marketing Information Survey Model

| Property               | Type    |  Description                                                                                             |
|------------------------|---------|----------------------------------------------------------------------------------------------------------|
| MarketingHeadline      | string  | A headline that describes the recruit offer                                                              |
| MarketingText| double  | string  | Marketing text that describes the benefits the recruit offer                                             |
| MarketingImageLargeUrl | string  | A company logo or image that represents the recruit offer                                                |
| MarketingImageSmallUrl | string  | EA thumbnail image, usually company logo, that represents the recruit offer                              |


### GET Show Marketing Info

> Definition

```plaintext
GET  https://api.samplicio.us/Supply/v1/Surveys/MarketingInformation/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Supply/v1/Surveys/MarketingInformation/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Supply/v1/Surveys/MarketingInformation/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

marketingInfo = http.request(request)  
```

```php
<?php
$marketingInfo = file_get_contents('https://api.samplicio.us/Supply/v1/Surveys/MarketingInformation/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}');
?>
```

```python
import requests

marketingInfo = requests.get('https://api.samplicio.us/Supply/v1/Surveys/MarketingInformation/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Supply/v1/Surveys/MarketingInformation/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}");

WebResponse marketingInfo = request.GetResponse();
```

```javascript
const https = require('https');

var marketingInfo = https.get('https://api.samplicio.us/Supply/v1/Surveys/MarketingInformation/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}');
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


