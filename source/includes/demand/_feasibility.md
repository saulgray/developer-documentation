##Feasibility

### GET Show Time to Completion

> Definition 

```plaintext
POST https://api.samplicio.us/Demand/v1/Feasibility/Time?key={APIkey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" \
-X POST --data '{CountryLanguageID: 9, LengthOfInterview: 5, Incidence: 100,  "Price": 4.5, Quotas: [{CompletesPerDay: [1000], Conditions: [{QuestionID: 42, PreCodes: ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"]}, {QuestionID: 43, PreCodes: ["1"] } ] }, {CompletesPerDay: [1000], Conditions: [{QuestionID: 42, PreCodes: ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"]}, {QuestionID: 43, PreCodes: ["2"] } ] }] }}' \
https://api.samplicio.us/Demand/v1/Feasibility/Time?key={APIkey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/Feasibility/Time?key={APIkey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Post.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {CountryLanguageID: 9, LengthOfInterview: 5, Incidence: 100,  "Price": 4.5, Quotas: [{CompletesPerDay: [1000], Conditions: [{QuestionID: 42, PreCodes: ["18", "19", "20", "21", "22", "23", "24",
 "25", "26", "27", "28", "29"]}, {QuestionID: 43, PreCodes: ["1"] } ] }, {CompletesPerDay: [1000], Conditions: [{QuestionID: 42, PreCodes: ["18", "19", "20", "21", "22", "23", "24",
 "25", "26", "27", "28", "29"]}, {QuestionID: 43, PreCodes: ["2"] } ] }] }}.to_json

time = http.request(request)

```

```php
<?php
$curl = curl_init();

$params = '{"CountryLanguageID": 9, "LengthOfInterview": 5, "Incidence": 100, "Quotas": [{"CompletesPerDay": [1000], "Conditions": [{"QuestionID": 42, "PreCodes": ["18", "19", "20", "21", "22", "23", "24",
 "25", "26", "27", "28", "29"]}, {"QuestionID": 43, "PreCodes": ["1"] } ] }, {"CompletesPerDay": [1250], "Conditions": [{"QuestionID": 42, "PreCodes": ["18", "19", "20", "21", "22", "23", "24",
 "25", "26", "27", "28", "29"]}, {"QuestionID": 43, "PreCodes": ["2"] } ] } ] }';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/Feasibility/Price?key={APIkey}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $params,
));

$time = curl_exec($curl);

curl_close($curl);
?>

```

```python
import requests, json

url = 'https://api.samplicio.us/Demand/v1/Feasibility/Time?key={APIkey}'
params = {'CountryLanguageID': 9, 'LengthOfInterview': 5, 'Incidence': 100, 'Quotas': [{'CompletesPerDay': [1000], 'Conditions': [{'QuestionID': 42, 'PreCodes': ["18", "19", "20", "21", "22", "23", "24",
 "25", "26", "27", "28", "29"]}, {'QuestionID': 43, 'PreCodes': ["1"] } ] }, {'CompletesPerDay': [1250], 'Conditions': [{'QuestionID': 42, 'PreCodes': ["18", "19", "20", "21", "22", "23", "24",
 "25", "26", "27", "28", "29"]}, {'QuestionID': 43, 'PreCodes': ["2"] } ] }] }
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

time = requests.post(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/Feasibility/Time?key={APIkey}");

string params = "{\"CountryLanguageID\": 9, \"LengthOfInterview\": 5, \"Incidence\": 100, \"Quotas\": [{\"CompletesPerDay\": [1000], \"Conditions\": [{\"QuestionID\": 42, \"PreCodes\": [\"18\", \"19\", \"20\", \"21\", \"22\", \"23\", \"24\", \"25\", \"26\", \"27\", \"28\", \"29\"]}, {\"QuestionID\": 43, \"PreCodes\": [\"1\"] } ] }, {\"CompletesPerDay\": [1250], \"Conditions\": [{\"QuestionID\": 42, \"PreCodes\": [\"18\", \"19\", \"20\", \"21\", \"22\", \"23\", \"24\", \"25\", \"26\", \"27\", \"28\", \"29\"]}, {\"QuestionID\": 43, \"PreCodes\": [\"2\"] } ] }] }";
    
request.Method = "POST";
request.ContentType = "application/json";

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
streamWriter.Write(params);
streamWriter.Flush();
streamWriter.Close();
}

WebResponse time = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "POST",
  "hostname": "api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/Feasibility/Price?key={APIkey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {"CountryLanguageID": 9, "LengthOfInterview": 5, "Incidence": 100, "Quotas": [{"CompletesPerDay": [1000], "Conditions": [{"QuestionID": 42, "PreCodes": ["18", "19", "20", "21", "22", "23", "24",
 "25", "26", "27", "28", "29"]}, {"QuestionID": 43, "PreCodes": ["1"] } ] }, {"CompletesPerDay": [1250], "Conditions": [{"QuestionID": 42, "PreCodes": ["18", "19", "20", "21", "22", "23", "24",
 "25", "26", "27", "28", "29"]}, {"QuestionID": 43, "PreCodes": ["2"] } ] }] };

var params = JSON.stringify(json);

var request = https.request(options, function (time) {
  var chunks = [];

  time.on("data", function (chunk) {
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
    "API Message: GetTimeForQuotas successful."
  ],
  "ResultCount": 1,
  "Quotas": [
    {
      "Completes": 1000,
      "Conditions": [
        {
          "PreCodes": [
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29"
          ],
          "QuestionID": 42
        },
        {
          "PreCodes": [
            "1"
          ],
          "QuestionID": 43
        }
      ],
      "Days": 0.4115335
    },
    {
      "Completes": 1250,
      "Conditions": [
        {
          "PreCodes": [
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29"
          ],
          "QuestionID": 42
        },
        {
          "PreCodes": [
            "2"
          ],
          "QuestionID": 43
        }
      ],
      "Days": 0.254863828
    }
  ]
}
```

Returns the estimated time in days to achieve the total number of completes specified, given the project specifications.

#### Arguments

| Property          | Type  | Required | Description                                                     |
|-------------------|-------|----------|-----------------------------------------------------------------|
| CountryLanguageID | int   | true     | Unique number associated with a specific Country-Language pair. |
| LengthofInterview | int   | true     | Expected Length of Interview, in minutes.                       |
| Incidence         | int   | true     | Expected incidence rate for the study.                          |
| Price             | int   | true     | Price per complete offered.                                     |
| Quotas            | array | true     | List of quotas (can be an empty array).                         |
| QuestionID        | int   | false    | Unique ID associated with a question.                           |
| PreCodes          | int   | false    | Precode associated with an answer for a specific questionID.    |



### GET Show Price

> Definition 

```plaintext
POST https://api.samplicio.us/Demand/v1/Feasibility/Price?key={APIkey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" \
-X POST --data '{"CountryLanguageID": 9, "LengthOfInterview": 5, "Incidence": 100, "Quotas": [{"CompletesPerDay": [1000, 1500], "Conditions": [{"QuestionID": 42, "PreCodes": ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"]}, {"QuestionID": 43, "PreCodes": ["1"] } ] }, ] }' \
https://api.samplicio.us/Demand/v1/Feasibility/Price?key={APIkey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/Feasibility/Price?key={APIkey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Post.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {CountryLanguageID: 9, LengthOfInterview: 5, Incidence: 100, Quotas: [{CompletesPerDay: [1000, 1500], Conditions: [{QuestionID: 42, PreCodes: ["18", "19", "20", "21", "22", "23", "24",
 "25", "26", "27", "28", "29"]}, {QuestionID: 43, PreCodes: ["1"] } ] }, ] }}.to_json

price = http.request(request)

```

```php
<?php
$curl = curl_init();

$params = '{"CountryLanguageID": 9, "LengthOfInterview": 5, "Incidence": 100, "Quotas": [{"CompletesPerDay": [1000, 1500], "Conditions": [{"QuestionID": 42, "PreCodes": ["18", "19", "20", "21", "22", "23", "24",
 "25", "26", "27", "28", "29"]}, {"QuestionID": 43, "PreCodes": ["1"] } ] }, ] }';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/Feasibility/Price?key={APIkey}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $params,
));

$price = curl_exec($curl);

curl_close($curl);
?>

```

```python
import requests, json

url = 'https://api.samplicio.us/Demand/v1/Feasibility/Price?key={APIkey}'
params = {'CountryLanguageID': 9, 'LengthOfInterview': 5, 'Incidence': 100, 'Quotas': [{'CompletesPerDay': [1000, 1500], 'Conditions': [{'QuestionID': 42, 'PreCodes': ["18", "19", "20", "21", "22", "23", "24",
 "25", "26", "27", "28", "29"]}, {'QuestionID': 43, 'PreCodes': ["1"] } ] }, ] }
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

price = requests.post(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/Feasibility/Price?key={APIkey}");

string params = "{\"CountryLanguageID\": 9, \"LengthOfInterview\": 5, \"Incidence\": 100, \"Quotas\": [{\"CompletesPerDay\": [1000, 1500], \"Conditions\": [{\"QuestionID\": 42, \"PreCodes\": [\"18\", \"19\", \"20\", \"21\", \"22\", \"23\", \"24\", \"25\", \"26\", \"27\", \"28\", \"29\"]}, {\"QuestionID\": 43, \"PreCodes\": [\"1\"] } ] }, ] }";
    
request.Method = "POST";
request.ContentType = "application/json";

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
streamWriter.Write(params);
streamWriter.Flush();
streamWriter.Close();
}

WebResponse price = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "POST",
  "hostname": "api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/Feasibility/Price?key={APIkey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {"CountryLanguageID": 9, "LengthOfInterview": 5, "Incidence": 100, "Quotas": [{"CompletesPerDay": [1000, 1500], "Conditions": [{"QuestionID": 42, "PreCodes": ["18", "19", "20", "21", "22", "23", "24",
 "25", "26", "27", "28", "29"]}, {"QuestionID": 43, "PreCodes": ["1"] } ] }, ] };

var params = JSON.stringify(json);

var request = https.request(options, function (price) {
  var chunks = [];

  price.on("data", function (chunk) {
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
    "API Message: GetPriceForQuotas successful."
  ],
  "ResultCount": 1,
  "Quotas": [
    {
      "CompletesPerDay": [
        1000,
        1500
      ],
      "Conditions": [
        {
          "PreCodes": [
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29"
          ],
          "QuestionID": 42
        },
        {
          "PreCodes": [
            "1"
          ],
          "QuestionID": 43
        }
      ],
      "Prices": [
        {
          "PercentPrice100": 1.25,
          "PercentPrice25": 0.75,
          "PercentPrice50": 1,
          "PercentPrice75": 1
        },
        {
          "PercentPrice100": 1.5,
          "PercentPrice25": 1,
          "PercentPrice50": 1,
          "PercentPrice75": 1.48
        }
      ]
    }
  ]
}
```

Returns a tiered model of price per complete, given the inputs for Number of Respondents per day and qualifications. PercentPrice(N) value is the price at which N percent of the total number of completes can be achieved.

#### Arguments

| Property          | Type  | Required | Description                                                     |
|-------------------|-------|----------|-----------------------------------------------------------------|
| CountryLanguageID | int   | true     | Unique number associated with a specific Country-Language pair. |
| LengthofInterview | int   | true     | Expected Length of Interview, in minutes.                       |
| Incidence         | int   | true     | Expected incidence rate for the study.                          |
| Price             | int   | false    | Price per complete offered.                                     |
| Quotas            | array | true     | List of quotas (can be an empty array).                         |
| QuestionID        | int   | false    | Unique ID associated with a question.                           |
| PreCodes          | int   | false    | Precode associated with an answer for a specific questionID.    |




### GET Show Completes per Day

> Definition 

```plaintext
POST https://api.samplicio.us/Demand/v1/Feasibility/NumberOfRespondents?key={APIkey}
```


> Example Request

```shell
curl -H "Content-Type: application/json" \
-X POST --data '{"CountryLanguageID": 9, "LengthOfInterview": 5, "Incidence": 100, "Price": 5, "Quotas": [{"CompletesPerDay": [1000, 1500], "Conditions": [{"QuestionID": 42, "PreCodes": ["18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"]}, {"QuestionID": 43, "PreCodes": ["1"] } ] }, ] }' \
https://api.samplicio.us/Demand/v1/Feasibility/NumberOfRespondents?key={APIkey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/Feasibility/NumberOfRespondents?key={APIkey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Post.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {SupplierCode: "1010", AllocationPercentage: 0.1, TCPI: 2, HedgeAccess: true, BlockRouterTraffic: false}.to_json

completes = http.request(request)

```

```php
<?php
$curl = curl_init();

$params = '{"CountryLanguageID": 9, "LengthOfInterview": 5, "Incidence": 100, "Price": 5, "Quotas": [{"CompletesPerDay": [1000, 1500], "Conditions": [{"QuestionID": 42, "PreCodes": ["18", "19", "20", "21", "22", "23", "24",
 "25", "26", "27", "28", "29"]}, {"QuestionID": 43, "PreCodes": ["1"] } ] }, ] }';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/Feasibility/NumberOfRespondents?key={APIkey}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $params,
));

$completes = curl_exec($curl);

curl_close($curl);
?>

```

```python
import requests, json

url = 'https://api.samplicio.us/Demand/v1/Feasibility/NumberOfRespondents?key={APIkey}'
params = {'CountryLanguageID': 9, 'LengthOfInterview': 5, 'Incidence': 100, 'Price'Quotas': [{'CompletesPerDay': [1000, 1500], 'Conditions': [{'QuestionID': 42, 'PreCodes': ["18", "19", "20", "21", "22", "23", "24",
 "25", "26", "27", "28", "29"]}, {'QuestionID': 43, 'PreCodes': ["1"] } ] }, ] }
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

completes = requests.post(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/Feasibility/NumberOfRespondents?key={APIkey}");

string params = "{\"CountryLanguageID\": 9, \"LengthOfInterview\": 1, \"Incidence\": 100, \"Price\": 5, \"Quotas\": [{\"Conditions\": [{\"QuestionID\": 42, \"PreCodes\": [\"18\", \"19\", \"20\", \"21\", \"22\", \"23\", \"24\", \"25\", \"26\", \"27\", \"28\", \"29\"]}, {\"QuestionID\": 43, \"PreCodes\": ["1"]}]}]}";
    
request.Method = "POST";
request.ContentType = "application/json";

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
streamWriter.Write(params);
streamWriter.Flush();
streamWriter.Close();
}

WebResponse completes = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "POST",
  "hostname": "api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/Feasibility/NumberOfRespondents?key={APIkey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {"CountryLanguageID": 9, "LengthOfInterview": 5, "Incidence": 100, "Price": 5, "Quotas": [{"CompletesPerDay": [1000, 1500], "Conditions": [{"QuestionID": 42, "PreCodes": ["18", "19", "20", "21", "22", "23", "24",
 "25", "26", "27", "28", "29"]}, {"QuestionID": 43, "PreCodes": ["1"] } ] }, ] };

var params = JSON.stringify(json);

var request = https.request(options, function (completes) {
  var chunks = [];

  completes.on("data", function (chunk) {
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
    "API Message: GetNumberOfRespondents successful."
  ],
  "ResultCount": 1,
  "Quotas": [
    {
      "CompletesPerDay": 5294,
      "Conditions": [
        {
          "PreCodes": [
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29"
          ],
          "QuestionID": 42
        },
        {
          "PreCodes": [
            "1"
          ],
          "QuestionID": 43
        }
      ]
    }
  ]
}
```

Returns the number of completes achievable given the parameters submitted, based on the Exchange's historical performance. 

#### Arguments

| Property          | Type  | Required | Description                                                     |
|-------------------|-------|----------|-----------------------------------------------------------------|
| CountryLanguageID | int   | true     | Unique number associated with a specific Country-Language pair. |
| LengthofInterview | int   | true     | Expected Length of Interview, in minutes.                       |
| Incidence         | int   | true     | Expected incidence rate for the study.                          |
| Price             | int   | true     | Price per complete offered.                                     |
| Quotas            | array | true     | List of quotas (can be an empty array).                         |
| QuestionID        | int   | false    | Unique ID associated with a question.                           |
| PreCodes          | int   | false    | Precode associated with an answer for a specific questionID.    |
