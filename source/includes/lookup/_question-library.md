##Question Library

### GET List Standard Questions

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

response = http.request(request) 
```

```php
<?php
$response = file_get_contents('https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestions/{CountryLanguageID}?key={APIKey}');
?>
```

```python
import requests

response = requests.get('https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestions/{CountryLanguageID}?key={APIKey}')
```
```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestions/{CountryLanguageID}?key={APIKey}");

WebResponse response = request.GetResponse();
```
```javascript
const https = require('https');

https.get('https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestions/{CountryLanguageID}?key={APIKey}', function(res){
  var response = res;
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
    "API Message: GetAllQuestions successful."
  ],
  "ResultCount": 1,
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
    }
  ]
}    
```

Returns a list of all Fulcrum Standard questions and question texts for the specified country-language pair.

#### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| CountryLanguageID            | int      | true     | Unique id associated with the country-language pair the question text applies to.                                                            |

### GET List Custom Questions

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

response = http.request(request) 
```

```php
<?php
$response = file_get_contents('https://api.samplicio.us/Supply/v1/QuestionLibrary/AllCustomQuestionsByAccount/{CountryLanguageID}?key={APIKey}');
?>
```

```python
import requests

response = requests.get('https://api.samplicio.us/QuestionLibrary/AllCustomQuestionsByAccount/{CountryLanguageID}?key={APIKey}')
```
```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/QuestionLibrary/AllCustomQuestionsByAccount/{CountryLanguageID}?key={APIKey}");

WebResponse response = request.GetResponse();
```
```javascript
const https = require('https');

https.get('https://api.samplicio.us/QuestionLibrary/AllCustomQuestionsByAccount/{CountryLanguageID}?key={APIKey}', function(res){
  var response = res;
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
    "API Message: GetAllQuestions successful."
  ],
  "ResultCount": 1,
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
    }
  ]
}    
```

Returns a list of custom questions associated with and created by your account for the specified country-language pair.

#### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| CountryLanguageID            | int      | true     | Unique id associated with the country-language pair the question text applies to.                                                            |

### GET Show Question Text

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

response = http.request(request)  
```

```php
<?php
$response = file_get_contents('https://api.samplicio.us/Lookup/v1/QuestionLibrary/QuestionById/{CountryLanguageID}/{QuestionID}?key={APIKey}');
?>
```

```python
import requests

response = requests.get('https://api.samplicio.us/Lookup/v1/QuestionLibrary/QuestionById/{CountryLanguageID}/{QuestionID}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Lookup/v1/QuestionLibrary/QuestionById/{CountryLanguageID}/{QuestionID}?key={APIKey}");

WebResponse response = request.GetResponse();
```

```javascript
const https = require('https');

https.get('https://api.samplicio.us/Lookup/v1/QuestionLibrary/QuestionById/{CountryLanguageID}/{QuestionID}?key={APIKey}', function(res){
  var response = res;
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

Returns the details of a specific Fulcrum Standard or custom qualification.

<aside class="notice">Each question or qualification in Fulcrum has a unique QuestionID, which is valid across country-language pairs.</aside>

#### Arguments

 Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| CountryLanguageID            | int      | true     | Unique id associated with the country-language pair the question text applies to.                                                            |
| QuestionID                   | int      | true     | Unique id associated with the question the question text applies to.                                                            |

### GET Show Question Options

> Definition

```plaintext
GET  https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestionOptions/{CountryLanguageID}/{QuestionID}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestionOptions/{CountryLanguageID}/{QuestionID}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestionOptions/{CountryLanguageID}/{QuestionID}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

response= http.request(request)  
```

```php
<?php
$response = file_get_contents('https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestionOptions/{CountryLanguageID}/{QuestionID}?key={APIKey}');
?>
```

```python
import requests

response = requests.get('https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestionOptions/{CountryLanguageID}/{QuestionID}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestionOptions/{CountryLanguageID}/{QuestionID}?key={APIKey}");

WebResponse response = request.GetResponse();
```

```javascript
const https = require('https');

https.get('https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestionOptions/{CountryLanguageID}/{QuestionID}?key={APIKey}', function(res){
  var response = res;
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
    "API Message: GetAllQuestionOptions successful."
  ],
  "ResultCount": 1,
  "QuestionOptions": [
    {
      "OptionText": "Male",
      "ParentItemText": null,
      "Precode": "1",
      "QuestionID": 43
    },
    {
      "OptionText": "Female",
      "ParentItemText": null,
      "Precode": "2",
      "QuestionID": 43
    }
  ]
}
```

Returns the answer options and associated precodes for a specific QuestionID and country-language pair.

<aside class="notice">If you have your own question library, you should create a map between Fulcrum Standard qualifications and those that match in your own library.</aside>

#### Arguments

  Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| CountryLanguageID            | int      | true     | Unique id associated with the country-language pair the question text applies to.     
| QuestionId                   | int      | true     | Unique id associated with the question the question text applies to.    
