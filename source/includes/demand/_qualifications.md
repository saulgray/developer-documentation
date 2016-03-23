#Qualifications

##Create a Qualification

> Definition

```plaintext
POST  https://api.samplicio.us/Demand/v1/SurveyQualifications/Create/{SurveyNumber}?key={APIKey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" \
-X POST --data '{"Name": "STANDARD_AUTO_BRANDS","QuestionID": 649,"LogicalOperator": "OR","NumberOfRequiredConditions": 1,"IsActive": false,"PreCodes": ["9"],"Order": 8}' \
https://api.samplicio.us/Demand/v1/SurveyQualifications/Create/{SurveyNumber}?key={APIKey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SurveyQualifications/Create/{SurveyNumber}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Post.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {Name:"STANDARD_AUTO_BRANDS",QuestionID:649,LogicalOperator:"OR",NumberOfRequiredConditions:1,IsActive:false,PreCodes:["9"],Order:8}.to_json

surveyQualifications = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{"Name": "STANDARD_AUTO_BRANDS","QuestionID": 649,"LogicalOperator": "OR","NumberOfRequiredConditions": 1,"IsActive": false,"PreCodes": ["9"],"Order": 8}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SurveyQualifications/Create/{SurveyNumber}?key={APIKey}",
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

url = 'https://api.samplicio.us/Demand/v1/SurveyQualifications/Create/{SurveyNumber}?key={APIKey}'
params = {'Name':'STANDARD_AUTO_BRANDS','QuestionID':649,'LogicalOperator':'OR','NumberOfRequiredConditions':1,'IsActive':false,'PreCodes':['9'],'Order':8}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

surveyQualifications = requests.post(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SurveyQualifications/Create/{SurveyNumber}?key={APIKey}");

string params = "{\"Name\": \"STANDARD_AUTO_BRANDS\",\"QuestionID\": 649,\"LogicalOperator\": \"OR\",\"NumberOfRequiredConditions\": 1,\"IsActive\": false,\"PreCodes\": [\"9\"],\"Order\": 8}";
    
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
    "Name": "STANDARD_AUTO_BRANDS",
    "QuestionID": 649,
	  "LogicalOperator": "OR",
  	"NumberOfRequiredConditions": 1,
	  "IsActive": false,
	  "PreCodes": [
	  	"9"
  	],
  	"Order": 8
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
  "AccountType": 1,
  "ApiAccountStatus": 1,
  "AccountCode": "AA",
  "ApiMessages": [
    "API Message: Response initialized.",
    "API Message: CreateSurveyQualificationFromModel successful."
  ],
  "ResultCount": 8,
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
        "24"
      ]
    },
    {
      "Name": "GENDER",
      "QuestionID": 43,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 1,
      "IsActive": true,
      "Order": 2,
      "PreCodes": [
        "1",
        "2"
      ]
    },
    {
      "Name": "ZIP",
      "QuestionID": 45,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 1,
      "IsActive": true,
      "Order": 3,
      "PreCodes": []
    },
    {
      "Name": "HISPANIC",
      "QuestionID": 47,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 1,
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
      "Name": "STATE",
      "QuestionID": 96,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 1,
      "IsActive": true,
      "Order": 4,
      "PreCodes": [
        "40"
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
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
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
      "Name": "STANDARD_AUTO_BRANDS",
      "QuestionID": 649,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 1,
      "IsActive": false,
      "Order": 8,
      "PreCodes": [
        "9"
      ]
    },
    {
      "Name": "STANDARD_HHI_US",
      "QuestionID": 14785,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 1,
      "IsActive": true,
      "Order": 7,
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
Creates qualifications for an existing Fulcrum survey.

### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                                                    |

##Update a Qualification

> Definition

```plaintext
PUT  https://api.samplicio.us/Demand/v1/SurveyQualifications/Update/{SurveyNumber}?key={APIKey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" \
-X PUT  --data '{"Name": "ZIP", 	"QuestionID": 45, "LogicalOperator": "OR", "NumberOfRequiredConditions": 1, "IsActive": true, "PreCodes": ["02940"], "Order": 3}' \ https://api.samplicio.us/Demand/v1/SurveyQualifications/Update/{SurveyNumber}?key={APIKey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SurveyQualifications/Update/{SurveyNumber}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Post.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {Name: "ZIP", QuestionID: 45, LogicalOperator: "OR", NumberOfRequiredConditions: 1, IsActive: true, PreCodes: ["02940"], Order: 3}.to_json

surveyQualifications = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{"Name": "ZIP", 	"QuestionID": 45, "LogicalOperator": "OR", "NumberOfRequiredConditions": 1, "IsActive": true, "PreCodes": ["02940"], "Order": 3}';

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
params = {'Name': 'ZIP', 	'QuestionID': 45, 'LogicalOperator': 'OR', 'NumberOfRequiredConditions': 1, 'IsActive': true, 'PreCodes': ['02940'], 'Order': 3}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

surveyQualifications = requests.put(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SurveyQualifications/Update/{SurveyNumber}?key={APIKey}");

string params = "{\"Name\":\"ZIP\",\"QuestionID\":45,\"LogicalOperator\":\"OR\",\"NumberOfRequiredConditions\":1,\"IsActive\":true,\"PreCodes\":[\"02940\"],\"Order\":3}";
    
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
  "path": "/Supply/v1/surveyQualificationss/Update/{SurveyNumber}/{SupplierCode}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {
    "Name": "ZIP",
    "QuestionID": 45,
	  "LogicalOperator": "OR",
	  "NumberOfRequiredConditions": 1,
	  "IsActive": true,
	  "PreCodes": [
		  "02940"
	  ],
	  "Order": 3
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
    "AccountType": 1,
    "ApiAccountStatus": 1,
    "AccountCode": "AA",
    "ApiMessages": [
        "API Message: Response initialized.",
        "API Message: UpdateSurveyQualificationFromModel successful."
    ],
    "ResultCount": 8,
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
                "24"
            ]
        },
        {
            "Name": "GENDER",
            "QuestionID": 43,
            "LogicalOperator": "OR",
            "NumberOfRequiredConditions": 1,
            "IsActive": true,
            "Order": 2,
            "PreCodes": [
                "1",
                "2"
            ]
        },
        {
            "Name": "ZIP",
            "QuestionID": 45,
            "LogicalOperator": "OR",
            "NumberOfRequiredConditions": 1,
            "IsActive": true,
            "Order": 3,
            "PreCodes": [
                "02940"
            ]
        },
        {
            "Name": "HISPANIC",
            "QuestionID": 47,
            "LogicalOperator": "OR",
            "NumberOfRequiredConditions": 1,
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
            "Name": "STATE",
            "QuestionID": 96,
            "LogicalOperator": "OR",
            "NumberOfRequiredConditions": 1,
            "IsActive": true,
            "Order": 4,
            "PreCodes": [
                "40"
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
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
                "16",
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
            "Name": "STANDARD_AUTO_BRANDS",
            "QuestionID": 649,
            "LogicalOperator": "OR",
            "NumberOfRequiredConditions": 1,
            "IsActive": false,
            "Order": 8,
            "PreCodes": [
                "9"
            ]
        },
        {
            "Name": "STANDARD_HHI_US",
            "QuestionID": 14785,
            "LogicalOperator": "OR",
            "NumberOfRequiredConditions": 1,
            "IsActive": true,
            "Order": 7,
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

Updates existing qualifications for a Fulcrum survey.

### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                                                    |


##Show Qualifications

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
  "AccountType": 1,
  "ApiAccountStatus": 1,
  "AccountCode": "AA",
  "ApiMessages": [
    "API Message: Response initialized.",
    "API Message: GetSurveyQualificationsBySurveyNumber successful."
  ],
  "ResultCount": 8,
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
        "24"
      ]
    },
    {
      "Name": "GENDER",
      "QuestionID": 43,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 1,
      "IsActive": true,
      "Order": 2,
      "PreCodes": [
        "1",
        "2"
      ]
    },
    {
      "Name": "ZIP",
      "QuestionID": 45,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 1,
      "IsActive": true,
      "Order": 3,
      "PreCodes": [
        "02940"
      ]
    },
    {
      "Name": "HISPANIC",
      "QuestionID": 47,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 1,
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
      "Name": "STATE",
      "QuestionID": 96,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 1,
      "IsActive": true,
      "Order": 4,
      "PreCodes": [
        "40"
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
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
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
      "Name": "STANDARD_AUTO_BRANDS",
      "QuestionID": 649,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 1,
      "IsActive": false,
      "Order": 8,
      "PreCodes": [
        "9"
      ]
    },
    {
      "Name": "STANDARD_HHI_US",
      "QuestionID": 14785,
      "LogicalOperator": "OR",
      "NumberOfRequiredConditions": 1,
      "IsActive": true,
      "Order": 7,
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

Returns all qualifications associated with an existing Fulcrum survey.

### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                                                    |