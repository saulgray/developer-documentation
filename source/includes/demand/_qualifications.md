##Qualifications

The Qualifications resource allows the buyer to create new qualifications on an existing survey, update existing qualifications, and retrieve survey qualifications. These qualifications make up the Fulcrum prescreener and define the overall survey targeting criteria for suppliers.

#### Qualifications Model

| Property                     | Type     | Description                                                                                                                                             |
|------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| Qualifications               | array    | Contains an array of elements described below.                                                                                                          |
| Name                         | string   | Name of the qualification.                                                                                                                              |
| QuestionID                   | int      | Unique number associated with the question.                                                                                                             |
| LogicalOperator              | string   | Defines the logical operation applied to the conditions.                                                                                                |
| NumberOfRequiredConditions   | int      | Indicates the number of conditions that must be selected by the respondent to proceed.                                                                  |
| IsActive                     | string   | Indicates if the qualification is active or inactive. Inactive effecitvely is the same as deleted.                                                      |
| PreCodes                     | array of strings   | Qualification answer option identifiers.                                                                                                      |


### POST Create a Qualification

> Definition

```plaintext
POST  http://api.samplicio.us/Demand/v1/SurveyQualifications/Create/{SurveyNumber}?key={APIKey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" -X POST --data '{"Name": "STANDARD_RELATIONSHIP","QuestionID": 632,"LogicalOperator": "OR","NumberOfRequiredConditions": 1,"IsActive": true,"PreCodes": ["1"], "Order": 7}' http://api.samplicio.us/Demand/v1/SurveyQualifications/Create/{SurveyNumber}?key={APIKey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('http://api.samplicio.us/Demand/v1/SurveyQualifications/Create/{SurveyNumber}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Post.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {
	"Name": "STANDARD_RELATIONSHIP",
	"QuestionID": 632,
	"LogicalOperator": "OR",
	"NumberOfRequiredConditions": 1,
	"IsActive": true,
	"PreCodes": [
		"1"
	],
	"Order": 7
}.to_json

surveyQualifications = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{
	"Name": "STANDARD_RELATIONSHIP",
	"QuestionID": 632,
	"LogicalOperator": "OR",
	"NumberOfRequiredConditions": 1,
	"IsActive": true,
	"PreCodes": [
		"1"
	],
	"Order": 7
}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://api.samplicio.us/Demand/v1/SurveyQualifications/Create/{SurveyNumber}?key={APIKey}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $params,
));

$surveyQualifications = curl_exec($curl);

curl_close($curl);
?>

```

```python
import requests, json

url = 'http://api.samplicio.us/Demand/v1/SurveyQualifications/Create/{SurveyNumber}?key={APIKey}'
params = {
	"Name": "STANDARD_RELATIONSHIP",
	"QuestionID": 632,
	"LogicalOperator": "OR",
	"NumberOfRequiredConditions": 1,
	"IsActive": true,
	"PreCodes": [
		"1"
	],
	"Order": 7
}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

surveyQualifications = requests.post(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("http://api.samplicio.us/Demand/v1/SurveyQualifications/Create/{SurveyNumber}?key={APIKey}");

string params = "{
	\"Name\": \"STANDARD_RELATIONSHIP\",
	\"QuestionID\": 632,
	\"LogicalOperator\": \"OR\",
	\"NumberOfRequiredConditions\": 1,
	\"IsActive\": true,
	\"PreCodes\": [
		\"1\"
	],
	\"Order\": 7
}";
    
request.Method = "POST";
request.ContentType = "application/json";

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
streamWriter.Write(params);
streamWriter.Flush();
streamWriter.Close();
}

WebResponse surveyQualifications = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "POST",
  "hostname": "api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/SurveyQualifications/Create/{SurveyNumber}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {
	"Name": "STANDARD_RELATIONSHIP",
	"QuestionID": 632,
	"LogicalOperator": "OR",
	"NumberOfRequiredConditions": 1,
	"IsActive": true,
	"PreCodes": [
		"1"
	],
	"Order": 7
};

var params = JSON.stringify(json);

var request = https.request(options, function (surveyQualifications) {
  var chunks = [];

  survey.on("data", function (chunk) {
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
    "API Message: CreateSurveyQualificationFromModel successful."
  ],
  "ResultCount": 7,
  "Qualifications": [
    {
      "Name": "AGE",
      "QuestionID": 42,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 1,
      "IsActive": true,
      "Order": 1,
      "PreCodes": [
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25"
      ]
    },
    {
      "Name": "GENDER",
      "QuestionID": 43,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 0,
      "IsActive": true,
      "Order": 3,
      "PreCodes": [
        "1",
        "2"
      ]
    },
    {
      "Name": "ZIP",
      "QuestionID": 45,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 0,
      "IsActive": true,
      "Order": 2,
      "PreCodes": []
    },
    {
      "Name": "HISPANIC",
      "QuestionID": 47,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 1,
      "IsActive": true,
      "Order": 4,
      "PreCodes": [
        "1",
        "10",
        "11",
        "12",
        "13",
        "14",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
      ]
    },
    {
      "Name": "ETHNICITY",
      "QuestionID": 113,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 1,
      "IsActive": true,
      "Order": 5,
      "PreCodes": [
        "1",
        "2",
        "3"
      ]
    },
    {
      "Name": "STANDARD_RELATIONSHIP",
      "QuestionID": 632,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 1,
      "IsActive": true,
      "Order": 7,
      "PreCodes": [
        "1"
      ]
    },
    {
      "Name": "STANDARD_HHI_US",
      "QuestionID": 14785,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 0,
      "IsActive": true,
      "Order": 6,
      "PreCodes": [
        "1",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "2",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
      ]
    }
  ]
}
```

Creates qualification and conditions for an existing Fulcrum survey.

#### Arguments

| Property                     | Type     | Description                                                                                                                                             |
|------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | Unique number associated with the survey.                                                                                                               |
| Name                         | string   | Name of the qualification.                                                                                                                              |
| QuestionID                   | int      | Unique number associated with the question.                                                                                                             |
| LogicalOperator              | string   | Defines the logical operation applied to the conditions.                                                                                                |
| NumberOfRequiredConditions   | int      | Indicates the number of conditions that must be selected by the respondent to proceed.                                                                  |
| IsActive                     | string   | Indicates if the qualification is active or inactive. Inactive effecitvely is the same as deleted.                                                      |
| PreCodes                     | array of strings   | Qualification answer option identifiers.                                                                                                      |
| Order                        | int      | Determines qualification order in the prescreener                                                                                                       |

### PUT Update a Qualification

> Definition

```plaintext
PUT  https://api.samplicio.us/Demand/v1/SurveyQualifications/Update/{SurveyNumber}?key={APIKey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" -X PUT --data '{"Name": "STANDARD_RELATIONSHIP","QuestionID": 632,"LogicalOperator": "OR",NumberOfRequiredConditions": 1,"IsActive": true,"PreCodes": ["2"],"Order": 7}' https://api.samplicio.us/Demand/v1/SurveyQualifications/Update/{SurveyNumber}?key={APIKey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SurveyQualifications/Update/{SurveyNumber}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Put.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {
	Name: "STANDARD_RELATIONSHIP",
	QuestionID: 632,
	LogicalOperator: "OR",
	NumberOfRequiredConditions: 1,
	IsActive: true,
	PreCodes: [
		"2"
	],
	Order: 7
}.to_json

surveyQualifications = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{
	"Name": "STANDARD_RELATIONSHIP",
	"QuestionID": 632,
	"LogicalOperator": "OR",
	"NumberOfRequiredConditions": 1,
	"IsActive": true,
	"PreCodes": [
		"2"
	],
	"Order": 7
}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SurveyQualifications/Update/{SurveyNumber}?key={APIKey}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "PUT",
  CURLOPT_POSTFIELDS => $params,
));

$surveyQualifications = curl_exec($curl);

curl_close($curl);
?>

```

```python
import requests, json

url = 'https://api.samplicio.us/Demand/v1/SurveyQualifications/Update/{SurveyNumber}?key={APIKey}'
params = {
	"Name": "STANDARD_RELATIONSHIP",
	"QuestionID": 632,
	"LogicalOperator": "OR",
	"NumberOfRequiredConditions": 1,
	"IsActive": true,
	"PreCodes": [
		"2"
	],
	"Order": 7
}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

surveyQualifications = requests.put(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SurveyQualifications/Update/{SurveyNumber}?key={APIKey}");

string params = "{
	\"Name\": \"STANDARD_RELATIONSHIP\",
	\"QuestionID\": 632,
	\"LogicalOperator\": \"OR\",
	\"NumberOfRequiredConditions\": 1,
	\"IsActive\": true,
	\"PreCodes\": [
		\"2\"
	],
	\"Order\": 7
}";
    
request.Method = "PUT";
request.ContentType = "application/json";

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
streamWriter.Write(params);
streamWriter.Flush();
streamWriter.Close();
}

WebResponse surveyQualifications = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "PUT",
  "hostname": "api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/SurveyQualifications/Update/{SurveyNumber}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {
	"Name": "STANDARD_RELATIONSHIP",
	"QuestionID": 632,
	"LogicalOperator": "OR",
	"NumberOfRequiredConditions": 1,
	"IsActive": true,
	"PreCodes": [
		"2"
	],
	"Order": 7
};

var params = JSON.stringify(json);

var request = https.request(options, function (surveyQualifications) {
  var chunks = [];

  surveyQualifications.on("data", function (chunk) {
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
    "API Message: UpdateSurveyQualificationFromModel successful."
  ],
  "ResultCount": 7,
  "Qualifications": [
    {
      "Name": "AGE",
      "QuestionID": 42,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 1,
      "IsActive": true,
      "Order": 1,
      "PreCodes": [
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25"
      ]
    },
    {
      "Name": "GENDER",
      "QuestionID": 43,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 0,
      "IsActive": true,
      "Order": 3,
      "PreCodes": [
        "1",
        "2"
      ]
    },
    {
      "Name": "ZIP",
      "QuestionID": 45,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 0,
      "IsActive": true,
      "Order": 2,
      "PreCodes": []
    },
    {
      "Name": "HISPANIC",
      "QuestionID": 47,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 1,
      "IsActive": true,
      "Order": 4,
      "PreCodes": [
        "1",
        "10",
        "11",
        "12",
        "13",
        "14",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
      ]
    },
    {
      "Name": "ETHNICITY",
      "QuestionID": 113,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 1,
      "IsActive": true,
      "Order": 5,
      "PreCodes": [
        "1",
        "2",
        "3"
      ]
    },
    {
      "Name": "STANDARD_RELATIONSHIP",
      "QuestionID": 632,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 1,
      "IsActive": true,
      "Order": 7,
      "PreCodes": [
        "2"
      ]
    },
    {
      "Name": "STANDARD_HHI_US",
      "QuestionID": 14785,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 0,
      "IsActive": true,
      "Order": 6,
      "PreCodes": [
        "1",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "2",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
      ]
    }
  ]
}
```

Updates existing qualifications for a Fulcrum qualification. 

#### Arguments

| Property                     | Type     | Description                                                                                                                                             |
|------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | Unique number associated with the survey.                                                                                                               |
| Name                         | string   | Name of the qualification.                                                                                                                              |
| QuestionID                   | int      | Unique number associated with the question.                                                                                                             |
| LogicalOperator              | string   | Defines the logical operation applied to the conditions.                                                                                                |
| NumberOfRequiredConditions   | int      | Indicates the number of conditions that must be selected by the respondent to proceed.                                                                  |
| IsActive                     | string   | Indicates if the qualification is active or inactive. Inactive effecitvely is the same as deleted.                                                      |
| PreCodes                     | array of strings   | Qualification answer option identifiers.                                                                                                      |
| Order                        | int      | Determines qualification order in the prescreener                                                                                                       |

### GET List Qualifications

> Definition

```plaintext
GET  https://api.samplicio.us/Demand/v1/SurveyQualifications/BySurveyNumber/{SurveyNumber}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Demand/v1/SurveyQualifications/BySurveyNumber/{SurveyNumber}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Demand/v1/SurveyQualifications/BySurveyNumber/{SurveyNumber}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

surveyQualifications = http.request(request)  
```

```php
<?php
$surveyQualifications = file_get_contents('https://api.samplicio.us/Demand/v1/SurveyQualifications/BySurveyNumber/{SurveyNumber}?key={APIKey}');
?>
```

```python
import requests

surveyQualifications = requests.get('https://api.samplicio.us/Demand/v1/SurveyQualifications/BySurveyNumber/{SurveyNumber}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SurveyQualifications/BySurveyNumber/{SurveyNumber}?key={APIKey}");

WebResponse surveyQualifications = request.GetResponse();
```

```javascript
const https = require('https');

var surveyQualifications = https.get('https://api.samplicio.us/Demand/v1/SurveyQualifications/BySurveyNumber/{SurveyNumber}?key={APIKey}');
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
    "API Message: GetSurveyQualificationsBySurveyNumber successful."
  ],
  "ResultCount": 6,
  "Qualifications": [
    {
      "Name": "AGE",
      "QuestionID": 42,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 1,
      "IsActive": true,
      "Order": 1,
      "PreCodes": [
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25"
      ]
    },
    {
      "Name": "GENDER",
      "QuestionID": 43,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 0,
      "IsActive": true,
      "Order": 3,
      "PreCodes": [
        "1",
        "2"
      ]
    },
    {
      "Name": "ZIP",
      "QuestionID": 45,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 0,
      "IsActive": true,
      "Order": 2,
      "PreCodes": []
    },
    {
      "Name": "HISPANIC",
      "QuestionID": 47,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 1,
      "IsActive": true,
      "Order": 4,
      "PreCodes": [
        "1",
        "10",
        "11",
        "12",
        "13",
        "14",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
      ]
    },
    {
      "Name": "ETHNICITY",
      "QuestionID": 113,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 1,
      "IsActive": true,
      "Order": 5,
      "PreCodes": [
        "1",
        "2",
        "3"
      ]
    },
    {
      "Name": "STANDARD_HHI_US",
      "QuestionID": 14785,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 0,
      "IsActive": true,
      "Order": 6,
      "PreCodes": [
        "1",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "2",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
      ]
    }
  ]
}
```

Returns a list of all qualifications associated with a survey. 

#### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                                                    |
