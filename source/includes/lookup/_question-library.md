#Question Library

##List Standard Questions

> Definition 

```plaintext
GET  https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestions/{CountryLanguageID}?key={APIKey}
```
> Example Request

```shell
curl https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestions/{CountryLanguageID}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestions/{CountryLanguageID}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

standardQs = http.request(request) 
```

```php
<?php
$standardQs = file_get_contents('https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestions/{CountryLanguageID}?key={APIKey}');
?>
```

```python
import requests

standardQs = requests.get('https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestions/{CountryLanguageID}?key={APIKey}')
```
```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestions/{CountryLanguageID}?key={APIKey}");

WebResponse standardQs = request.GetResponse();
```
```javascript
const https = require('https');

var standardQs = https.get('https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestions/{CountryLanguageID}?key={APIKey}');
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
    "API Message: GetAllQuestions successful."
  ],
  "ResultCount": 3,
  "Questions": [
    {
      "IsCoreDemographic": true,
      "IsFeasibilityFactor": true,
      "LK_QuestionClassificationID": 8,
      "Name": "AGE",
      "QuestionID": 42,
      "QuestionText": "What is your age?",
      "QuestionType": "Numeric - Open-end",
      "SurveyUse": 8162
    },
    {...},
    {...}
  ]
}    
```

Returns a list of all Standard Questions and question texts for the specified country-language pair.

### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| CountryLanguageID            | int      | true     | Unique id associated with the country-language pair the question text applies to.                                                            |

##List Custom Questions

> Definition 

```plaintext
GET  https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllCustomQuestionsByAccount/{CountryLanguageID}?key={APIKey}
```
> Example Request

```shell
curl https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllCustomQuestionsByAccount/{CountryLanguageID}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllCustomQuestionsByAccount/{CountryLanguageID}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

customQs = http.request(request) 
```

```php
<?php
$customQs = file_get_contents('https://api.samplicio.us/Supply/v1/QuestionLibrary/AllCustomQuestionsByAccount/{CountryLanguageID}?key={APIKey}');
?>
```

```python
import requests

customQs = requests.get('https://api.samplicio.us/QuestionLibrary/AllCustomQuestionsByAccount/{CountryLanguageID}?key={APIKey}')
```
```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/QuestionLibrary/AllCustomQuestionsByAccount/{CountryLanguageID}?key={APIKey}");

WebResponse customQs = request.GetResponse();
```
```javascript
const https = require('https');

var customQs = https.get('https://api.samplicio.us/QuestionLibrary/AllCustomQuestionsByAccount/{CountryLanguageID}?key={APIKey}');
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
    "API Message: GetAllQuestions successful."
  ],
  "ResultCount": 3,
  "Questions": [
    {
      "__type": "PublicQuestionModel",
      "IsCoreDemographic": false,
      "IsFeasibilityFactor": false,
      "LK_QuestionClassificationID": null,
      "Name": "HHI",
      "QuestionID": 51,
      "QuestionText": "What is your annual household income before taxes?",
      "QuestionType": "Single Punch",
      "SurveyUse": 2,
      "AccountID": 1
    },
    {...},
    {...}
  ]
}    
```

Returns a list of custom questions associated with and created by your account for the specified country-language pair.

### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| CountryLanguageID            | int      | true     | Unique id associated with the country-language pair the question text applies to.                                                            |

## Show Question Text
> Definition

```plaintext
GET  https://api.samplicio.us/Lookup/v1/QuestionLibrary/QuestionById/{CountryLanguageID}/{QuestionID}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Lookup/v1/QuestionLibrary/QuestionById/{CountryLanguageID}/{QuestionID}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Lookup/v1/QuestionLibrary/QuestionById/{CountryLanguageID}/{QuestionID}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

questionText = http.request(request)  
```

```php
<?php
$questionText = file_get_contents('https://api.samplicio.us/Lookup/v1/QuestionLibrary/QuestionById/{CountryLanguageID}/{QuestionID}?key={APIKey}');
?>
```

```python
import requests

questionText = requests.get('https://api.samplicio.us/Lookup/v1/QuestionLibrary/QuestionById/{CountryLanguageID}/{QuestionID}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Lookup/v1/QuestionLibrary/QuestionById/{CountryLanguageID}/{QuestionID}?key={APIKey}");

WebResponse questionText = request.GetResponse();
```

```javascript
const https = require('https');

var questionText = https.get('https://api.samplicio.us/Lookup/v1/QuestionLibrary/QuestionById/{CountryLanguageID}/{QuestionID}?key={APIKey}');
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
    "API Message: GetQuestionById successful."
  ],
  "ResultCount": 1,
  "Question": {
    "IsCoreDemographic": true,
    "IsFeasibilityFactor": true,
    "LK_QuestionClassificationID": 8,
    "Name": "AGE",
    "QuestionID": 42,
    "QuestionText": "What is your age?",
    "QuestionType": "Numeric - Open-end",
    "SurveyUse": 8420
  }
}
```

Returns the details of a specific Standard or Custom Qualification.

### Arguments

 Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| CountryLanguageID            | int      | true     | Unique id associated with the country-language pair the question text applies to.                                                            |
| QuestionID                   | int      | true     | Unique id associated with the question the question text applies to.                                                            |

##Show Question Options
