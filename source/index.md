---
title: Fulcrum API Documentation

language_tabs:
  - shell : curl
  - ruby : Ruby
  - php : PHP
  - python : Python
  - csharp : C#
  - javascript : Node.js

toc_footers:
  - <a href='https://luc.id/fulcrum/'>Get access to Fulcrum APIs</a>
  
search: true
---
# Introduction

> API Endpoint:

```plaintext
https://stg-api.samplicio.us/
```

Lucid brings efficiency and automation to online sampling with Fulcrum, today’s most powerful, open, and customizable online sampling platform.
    
The API is based on REST (REpresentational State Transfer) principles, which makes it very easy to write and test applications. Both JSON and XML data formats are supported.

# Guides

# Authentication

# Resources

To begin testing the Fulcrum API, first download a REST Client extension for your browser. Whether you are testing the Supply or Demand API, you will need a REST Client in order to make POST, PUT,     and DELETE calls. All GET calls can be made directly through your browser.

* Chrome Simple REST Client: <https://chrome.google.com/webstore/detail/simple-rest-client/fhjcajmcbmldlhcimfajhfbgofnpcjmb>
* Chrome Postman REST Client: <https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?hl=en>
* Firefox RESTClient: <https://addons.mozilla.org/en-US/firefox/addon/restclient/>
* Opera Simple REST Client: <https://addons.opera.com/en/extensions/details/simple-rest-client/?display=en>

# Environments

# Interacting with the API

## Making an API Call

All Example Call pages on this site contain a base Staging URL. This URL can be used along with the [Generic Staging API Key](http://developer.fulcrumexchange.com/?p=327) to make test calls to the Fulcrum API; any parameters listed in [brackets] should also be replaced. For example, appending the Fulcrum SurveyNumber and the Generic Staging API Key to the GET call below will allow you to make a call directly in your browser’s address bar.

### Base URL

`GET  http://stg-api.samplicio.us/Demand/v1/Surveys/BySurveyNumber/[SurveyNumber]?key=[APIKey]`

### Example URL

`GET  http://stg-api.samplicio.us/Demand/v1/Surveys/BySurveyNumber/22789?key=5175285E-D74B-46A8-AE2C-EF95B3A5175B`

## JSON versus XML

The Fulcrum API requires by default that all requests and responses be written in JSON, but developers who prefer XML can use that language, as well. To turn any JSON call into an XML call, simply append “/xml” to any Request URL immediately before appending any request parameters or the API key.

### JSON URL

`GET  http://stg-api.samplicio.us/Demand/v1/Surveys/BySurveyNumber/22789?key=5175285E-D74B-46A8-AE2C-EF95B3A5175B`

### XML URL

`GET  http://stg-api.samplicio.us/Demand/v1/Surveys/BySurveyNumber/xml/22789?key=5175285E-D74B-46A8-AE2C-EF95B3A5175B`

# HTTP Status Codes

# Changelog

# Glossary

## Identifiers

## Terms

# Lookup

# Definitions

##List Global Definitions

##List Suppliers

##List Business Units

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

##Show Question Text

##Show Question Options

# Supply

# Surveys

The Survey resource contains basic information about a survey opportunity posted by a sample buyer. More detailed information about who qualifies for the survey is contained in the [Qualifications](#qualifications) and [Quotas](#quotas) resources.

### Surveys Model

| Property                     | Type     | Description                                                                                                                                             |
|------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyName                   | string   | External name of the survey. This name may be exposed to respondents. This value is not unique across surveys.                                          |
| SurveyNumber                 | int      | Unique number associated with the survey.                                                                                                               |
| SurveySID                    | string   | Unique hash value (GUID) assoicated with the survey.                                                                                                    |
| AccountName                  | string   | Name of the buyer running the survey.                                                                                                                   |
| CountryLanguageID            | int      | Unique id associated with the country-language pair the survey is open to.                                                                              |
| LengthOfInterview            | int      | Median time for a respondent to complete the survey excluding the Fulcrum prescreener in minutes.                                                       |
| BidIncidence                 | double   | Estimated incidence rate of the survey as provided by the buyer.                                                                                        |
| Conversion                   | int      | Percentage of respondents who complete the survey after qualifying.                                                                                     |
| CPI                          | double   | Gross payout per complete. This value is before any applicable commissions or fees.                                                                     |
| FieldEndDate                 | datetime | Target date for survey closure. This field usually does not indicate a hard closure time, although buyers may opt to automatically close the study.     |
| IndustryID                   | int      | Industry associated with the survey's topic.                                                                                                            |
| StudyTypeID                  | int      | Indicates the survey's format and purpose (i.e. adhoc, recruit, etc).                                                                                   |
| OverallCompletes             | int      | Number of completes already achieved.                                                                                                                   |
| TotalRemaining               | int      | Number of completes still available.                                                                                                                    |
| CompletionPercentage         | int      | Percentage of the survey that has filled in terms of completes.                                                                                         |
| SurveyGroup                  | string   | Deprecated: Will return `null`. Instead use the SurveyGroupExists property.                                                                             |
| SurveyGroupID                | int      | Deprecated: Will return `null`. If SurveyGroupExists is `true`, then [list the survey's groups](#list-a-survey’s-groups).                               |
| SurveyGroupExists            | int      | Indicates whether there is a survey group(s) associated with the survey. (0=`false`, 1=`true`)                                                          |
| BidLengthOfInterview         | int      | Estimated time for a respondent to complete the survey excluding the Fulcrum prescreener in minutes as provided by the buyer.                           |
| TerminationLengthOfInterview | int      | Median time for a respondent to be termed in minutes.                                                                                                   |
| IsTrueSample                 | string   | Indicates whether True Sample's Identity Validation feature is enabled for the study.                                                                   |
| SurveyMobileConversion       | int      | Percentage of mobile respondents who complete the survey after qualifying.                                                                              |
| SurveyQuotaCalcTypeID        | int      | Indicates whether quotas are calculated based on completes or prescreens (1=Completes, 2=Prescreens).                                                   |
| SampleTypeID                 | int      | The type of sample the survey is open to (i.e. consumer, business-to-business, etc).                                                                    |

##List Exchange Surveys

> Definition

```plaintext
GET  https://api.samplicio.us/Supply/v1/Surveys/AllOfferwall/{SupplierCode}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Supply/v1/Surveys/AllOfferwall/{SupplierCode}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Supply/v1/Surveys/AllOfferwall/{SupplierCode}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

surveys = http.request(request)  
```

```php
<?php
$surveys = file_get_contents('https://api.samplicio.us/Supply/v1/Surveys/AllOfferwall/{SupplierCode}?key={APIKey}');
?>
```

```python
import requests

surveys = requests.get('https://api.samplicio.us/Supply/v1/Surveys/AllOfferwall/{SupplierCode}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Supply/v1/Surveys/AllOfferwall/{SupplierCode}?key={APIKey}");

WebResponse surveys = request.GetResponse();
```

```javascript
const https = require('https');

var surveys = https.get('https://api.samplicio.us/Supply/v1/Surveys/AllOfferwall/{SupplierCode}?key={APIKey}');
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
    "API Message: GetAllOfferwallSurveys successful."
  ],
  "ResultCount": 3,
  "Surveys": [
    {
      "SurveyName": "Asthma Sufferers",
      "SurveyNumber": 457751,
      "SurveySID": "26CB55E2-74CC-4E19-88E3-7F2F8D4DE74D",
      "AccountName": "Sample Company",
      "CountryLanguageID": 9,
      "LengthOfInterview": 12,
      "BidIncidence": 30,
      "Conversion": 1,
      "CPI": 1.5,
      "FieldEndDate": "\/Date(1388293200000-0600)\/",
      "IndustryID": 30,
      "StudyTypeID": 1,
      "OverallCompletes": 5,
      "TotalRemaining": 995,
      "CompletionPercentage": 0,
      "SurveyGroup": null,
      "SurveyGroupID": null,
      "SurveyGroupExists": 1,
      "BidLengthOfInterview": 10,
      "TerminationLengthOfInterview": 6,
      "SurveyQuotaCalcTypeID": 1,
      "IsTrueSample": false,
      "SurveyMobileConversion": 0,
      "SampleTypeID": null
    },
    {...},
    {...}
  ]
}
```

Returns a list of all live survey opportunities available through the Exchange for which you have an allocation or entry link.

<aside class="notice">After <a href="#create-a-link">creating an entry link</a> you can <a href="#list-allocated-surveys">list allocated surveys</a> or <a href="#show-an-allocated-survey">show an allocated survey</a> to access these opportunities.</aside>


### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SupplierCode                 | int      | true     | Unique code associated with a supplier account.                                                                                              |

[![Run in Postman](https://run.pstmn.io/button.png)](https://www.getpostman.com/run-collection/bb68be2cda20d9bc87b6)

#Allocations

##List Allocated Surveys

##Show an Allocated Survey

##List Recently Allocated Surveys

#Groups

##List a Survey’s Groups

#Qualifications

##Show Qualifications

#Quotas

##Show Quotas

#Entry Links

##Create a Link

> Definition

```plaintext
POST  https://api.samplicio.us/Supply/v1/SupplierLinks/Create/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" \
-X POST --data '{"SupplierLinkTypeCode": "OWS", "TrackingTypeCode": "NONE"}' \
https://api.samplicio.us/Supply/v1/SupplierLinks/Create/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

```ruby
require 'net/http'
require 'json'

uri = URI.parse('https://api.samplicio.us/Supply/v1/SupplierLinks/Create/{SurveyNumber}/{SupplierCode}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Post.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {SupplierLinkTypeCode:"OWS",TrackingTypeCode:"NONE"}.to_json

supplierLink = http.request(request)
```

```php
<?php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Supply/v1/SupplierLinks/Create/{SurveyNumber}/{SupplierCode}?key={APIKey}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\n\t\"SupplierLinkTypeCode\": \"OWS\",\n\t\"TrackingTypeCode\": \"NONE\"\n}",
));

$supplierLink = curl_exec($curl);

curl_close($curl);
?>

```

```python
import requests, json

url = 'https://api.samplicio.us/Supply/v1/SupplierLinks/Create/{SurveyNumber}/{SupplierCode}?key={APIKey}'
params = {'SupplierLinkTypeCode':'OWS','TrackingTypeCode':'NONE'}
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

supplierLink = requests.post(url, data=json.dumps(params), headers=headers)
```

```csharp
using System.IO;
using System.Net;
using System.Text;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Supply/v1/SupplierLinks/Create/{SurveyNumber}/{SupplierCode}?key={APIKey}");

string params = "{\"SupplierLinkTypeCode\":\"OWS\","+"\"TrackingTypeCode\":\"NONE\"}";
    
request.Method = "POST";
request.ContentType = "application/json";

StreamWriter streamWriter = new StreamWriter(request.GetRequestStream());
streamWriter.Write(params);
streamWriter.Flush();
streamWriter.Close();

WebResponse supplierLink = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "POST",
  "hostname": "api.samplicio.us",
  "port": 443,
  "path": "/Supply/v1/SupplierLinks/Create/{SurveyNumber}/{SupplierCode}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var request = https.request(options, function (supplierLink) {
  var chunks = [];

  supplierLink.on("data", function (chunk) {
    chunks.push(chunk);
  });

  supplierLink.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

request.write("{\n\t\"SupplierLinkTypeCode\": \"OWS\",\n\t\"TrackingTypeCode\": \"NONE\"\n}");

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
    "API Mes sage: CreateSupplierLinkFromModel successful."
  ],
  "ResultCount": 1,
  "SupplierLink": {
    "SupplierLinkTypeCode": "OWS",
    "TrackingTypeCode": "NONE",
    "DefaultLink": "http:\/\/www.anon.com\/surveys?v=federated&fs=1&uid=[%MID%]",
    "SuccessLink": "http:\/\/www.anon.com\/surveys?v=federated&fs=2&uid=[%MID%]&COST=[%COST%]",
    "FailureLink": "http:\/\/www.anon.com\/surveys?v=federated&fs=1&uid=[%MID%]",
    "OverQuotaLink": "http:\/\/www.anon.com\/surveys?v=federated&fs=1&uid=[%MID%]",
    "QualityTerminationLink": "http:\/\/www.anon.com\/surveys?v=federated&fs=1&uid=[%MID%]",
    "LiveLink": "http:\/\/staging.samplicio.us\/router\/default.aspx?SID=52c975a7-15fb-804d-9bf2-3d5d553aa7af&PID=",
    "TestLink": "http:\/ \/staging.samplicio.us\/router\/default.aspx?SID=a948gef7-3591-42c0-ce51-0e4jdf25582f&FIRID=MSDHONI7&SUMSTAT=1&PID=test",
    "CPI": 100
  }
}
```

##Update a Links

##Show a Link

#Statistics

##Show Statistics

##List Statistics

#Recruit

##Show Marketing Info

#Recontact

##List Qualified Respondents

# Demand

#Surveys

##Create a Survey

##Update a Survey

##Show a Survey

##List Surveys By Status

#Qualifications

##Create a Qualification

##Update a Qualification

##List Qualifications
    
#Quotas

##Create a Quota

##Update a Quota

##List Quotas
    
#Exchange Templates

##List Exchange Templates

##Apply an Exchange Template

#Exchange Groups

##Create a Group

##Create an Empty Group

##Update a Group

##Delete a Group

##Add to a Group

##List a Survey's Groups

##Remove from a Group

#Non-Exchange Allocations

##Create an Allocation

##Update an Allocation

##Delete an Allocation
> Definition

```plaintext
DELETE  http://stg-api.samplicio.us/Demand/v1/SupplierAllocations/Delete/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

> Example Request

```shell

```

```ruby

```

```php

```

```python

```

```csharp

```

```javascript

```

##List Allocations

#Non-Exchange Entry Links

##Create a Link

##Update a Link

##Delete a Link

#Feasibility

##Show Time to Completion

##Show Price

##Show Completes per Day

#Recontact

##List Qualified Respondents

##Update Qualified Respondents

#Guides

#Supply

##Market Research Panel Supplier

#Demand

##DIY Market Research Buyer

##Enterprise Market Research Buyer