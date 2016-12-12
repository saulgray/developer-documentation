##Question Library

The questions in this library can be used to build qualifications for surveys created in Fulcrum.

### GET List Standard Questions

> Definition

```plaintext
GET  https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestions/{CountryLanguageID}
```
> Example Request

```shell
curl -H "Authorization: YOUR_API_KEY_HERE" https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestions/{CountryLanguageID}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestions/{CountryLanguageID}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

<<<<<<< HEAD
request['Authorization'] = YOUR_API_KEY_HERE

=======
>>>>>>> 4c100e222079001228cb43f071048c50c14d28dc
response = http.request(request)
```

```php
<?php
$URL = "https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestions/{CountryLanguageID}";

$aHTTP['http']['method']  = 'GET';

$aHTTP['http']['header']  = "Authorization: YOUR_API_KEY_HERE";

$context = stream_context_create($aHTTP);

$response = file_get_contents($URL, false, $context);
?>
```

```python
import requests

url = 'https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestions/{CountryLanguageID}'

headers = {'Authorization' : YOUR_API_KEY_HERE}

response = requests.get(url, headers=headers)
```
```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestions/{CountryLanguageID}");

request.Headers.Add("Authorization", YOUR_API_KEY_HERE);

WebResponse response = request.GetResponse();
```
```javascript
const https = require('https');

var options = {
  "method": "GET",
  "hostname": "api.samplicio.us",
  "path": "/Lookup/v1/QuestionLibrary/AllQuestions/{CountryLanguageID}",
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
GET  https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllCustomQuestionsByAccount/{CountryLanguageID}
```
> Example Request

```shell
curl -H "Authorization: YOUR_API_KEY_HERE" https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllCustomQuestionsByAccount/{CountryLanguageID}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllCustomQuestionsByAccount/{CountryLanguageID}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

<<<<<<< HEAD
request['Authorization'] = YOUR_API_KEY_HERE

=======
>>>>>>> 4c100e222079001228cb43f071048c50c14d28dc
response = http.request(request)
```

```php
<?php
$URL = "https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllCustomQuestionsByAccount/{CountryLanguageID}";

$aHTTP['http']['method']  = 'GET';

$aHTTP['http']['header']  = "Authorization: YOUR_API_KEY_HERE";

$context = stream_context_create($aHTTP);

$response = file_get_contents($URL, false, $context);
?>
```

```python
import requests

url = 'https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllCustomQuestionsByAccount/{CountryLanguageID}'

headers = {'Authorization' : YOUR_API_KEY_HERE}

response = requests.get(url, headers=headers)
```
```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllCustomQuestionsByAccount/{CountryLanguageID}");

request.Headers.Add("Authorization", YOUR_API_KEY_HERE);

WebResponse response = request.GetResponse();
```
```javascript
const https = require('https');

var options = {
  "method": "GET",
  "hostname": "api.samplicio.us",
  "path": "/Lookup/v1/QuestionLibrary/AllCustomQuestionsByAccount/{CountryLanguageID}",
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
GET  https://api.samplicio.us/Lookup/v1/QuestionLibrary/QuestionById/{CountryLanguageID}/{QuestionID}
```

> Example Request

```shell
curl -H "Authorization: YOUR_API_KEY_HERE" https://api.samplicio.us/Lookup/v1/QuestionLibrary/QuestionById/{CountryLanguageID}/{QuestionID}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Lookup/v1/QuestionLibrary/QuestionById/{CountryLanguageID}/{QuestionID}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

request['Authorization'] = YOUR_API_KEY_HERE

response = http.request(request)  
```

```php
<?php
$URL = "https://api.samplicio.us/Lookup/v1/QuestionLibrary/QuestionById/{CountryLanguageID}/{QuestionID}";

$aHTTP['http']['method']  = 'GET';

$aHTTP['http']['header']  = "Authorization: YOUR_API_KEY_HERE";

$context = stream_context_create($aHTTP);

$response = file_get_contents($URL, false, $context);
?>
```

```python
import requests

url = 'https://api.samplicio.us/Lookup/v1/QuestionLibrary/QuestionById/{CountryLanguageID}/{QuestionID}'

headers = {'Authorization' : YOUR_API_KEY_HERE}

response = requests.get(url, headers=headers)
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Lookup/v1/QuestionLibrary/QuestionById/{CountryLanguageID}/{QuestionID}");

request.Headers.Add("Authorization", YOUR_API_KEY_HERE);

WebResponse response = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "GET",
  "hostname": "api.samplicio.us",
  "path": "/Lookup/v1/QuestionLibrary/QuestionById/{CountryLanguageID}/{QuestionID}",
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
GET  https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestionOptions/{CountryLanguageID}/{QuestionID}
```

> Example Request

```shell
curl -H "Authorization: YOUR_API_KEY_HERE" https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestionOptions/{CountryLanguageID}/{QuestionID}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestionOptions/{CountryLanguageID}/{QuestionID}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

request['Authorization'] = YOUR_API_KEY_HERE

response= http.request(request)  
```

```php
<?php

$URL = "https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestionOptions/{CountryLanguageID}/{QuestionID}";

$aHTTP['http']['method']  = 'GET';

$aHTTP['http']['header']  = "Authorization: YOUR_API_KEY_HERE";

$context = stream_context_create($aHTTP);

$response = file_get_contents($URL, false, $context);
?>
```

```python
import requests

url = 'https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestionOptions/{CountryLanguageID}/{QuestionID}'

headers = {'Authorization' : YOUR_API_KEY_HERE}

response = requests.get(url, headers=headers)
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Lookup/v1/QuestionLibrary/AllQuestionOptions/{CountryLanguageID}/{QuestionID}");

request.Headers.Add("Authorization", YOUR_API_KEY_HERE);

WebResponse response = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "GET",
  "hostname": "api.samplicio.us",
  "path": "/Lookup/v1/QuestionLibrary/AllQuestionOptions/{CountryLanguageID}/{QuestionID}",
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
