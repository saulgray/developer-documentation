##Surveys

The Surveys resource allows the buyer to create new surveys, update existing surveys, and retrieve survey details in Fulcrum.

#### Survey Model

| Property                     | Type     | Description                                                                                                                                             |
|------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| AccountID                    | int      | Unique account identifier.                                                                                                                              |
| SurveyStatusCode             | int      | Code associated with the current status of the survey. See [List Global Definitions](#get-list-global-definitions) for a map of survey status codes.        |
| SurveyPriority               | int      | Survey priority from 1-11 (1 being the highest). Priority only applies to routed sample.                                                                |
| SurveyNumber                 | int      | Unique number associated with the survey.                                                                                                               |
| SurveyName                   | string   | External name of the survey. This name may be exposed to respondents. This value is not unique across surveys.                                          |
| CountryLanguageID            | int      | Unique id associated with a country-language pair.                                                                                                      |
| IndustryID                   | int      | Industry associated with the survey’s topic.                                                                                                            |
| StudyTypeID                  | int      | Indicates the survey’s format and purpose (i.e. adhoc, recruit, etc).                                                                                   |
| ClientCPI                    | double   | Revenue per complete used to calculate internal margin or savings.                                                                                      |
| QuotaCPI                     | double   | Gross payout per complete. This value is before any applicable commissions or fees.                                                                     |
| ClientSurveyLiveURL          | string   | Link to client survey. We don't recommend exceeding 2000 characters.                                                                                    |
| TestRedirectURL              | string   | Link to client survey for testing purposes. All studies should include a working test link.                                                             |
| IsActive                     | string   | Indicates if a survey is active or inactive.                                                                                                            |
| Quota                        | int      | Total number of completes needed.                                                                                                                       |
| FulcrumExchangeAllocation    | double   | Percentage of total completes allocated only to the Exchange. Must be between 0 and 100%.                                                               |
| FulcrumExchangeHedgeAccess   | boolean  | "true" gives the Exchange access to any unallocated completes.                                                                                          |
| IsVerifyCallBack             | boolean  | "true" enables Verify CallBack security which requires the correct [%RSFN%] variable to be included on the "complete" client callback for verification. |
| UniquePID                    | boolean  | "true" enables PID deduplication on a survey preventing a repsondent with the same PID from entering more than once. Recommended on all surveys.        |
| UniqueIPAddress              | boolean  | "true" enables IP deduplication on a survey preventing a repsondent with the same IP address from entering more than once. Recommended on all surveys.  |
| IsRelevantID                 | boolean  | "true" enables RelevantID security. RelevantID is a third-party security feature. There is an additional cost for RelevantID.                           |
| IsDedupe                     | boolean  | "true" enables Relevant ID dedupe security. Should always be enabled when using RelevantID                                                              |
| IsGeoIP                      | boolean  | "true" enables RelevantID GeoIP security to determine respondent geogrphical location. Should always be enabled when using RelevantID.                  |
| IsFraudProfile               | boolean  | "true" enables RelevantID Fraud Profile security. Should always be enabled when using RelevantID.                                                       |
| FraudProfileThreshold        | int      | Sets the RelevantID Fraud Profile Threshold between 0-100. The lower the number the more aggressive the security. We recommend 11.                      |
| IsTrueSample                 | boolean  | "true" enables TrueSample security. TrueSample is a third-party security feature. There is an additional cost associated.                               |
| QuotaCalculationTypeID       | int      | Sets the quota calculation method. Either 1 for ”Completes” (quotas determined by completes) or 2=”Prescreens” (quotas determined when leaving Fulcrum).|
| SurveyPlatformID             | int      | Sets the external platform ID. We recommend setting to 2 for "undefined" in most situations.                                                            |
| BidLengthOfInterview         | int      | Estimated time for a respondent to complete the survey excluding the Fulcrum prescreener in minutes as provided by the buyer.                           |
| BusinessUnitID               | int      | Sets the account [business unit](#list-business-units).                                                                                                 |
| SampleTypeID                 | int      | Sets the type of sample the survey is open to (i.e. consumer, business-to-business, etc). (SampleTypes)[#definitions]                                   |

### POST Create a Survey

> Definition

```plaintext
POST  https://api.samplicio.us/Demand/v1/Surveys/Create?key={APIKey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" -X POST --data '{"AccountID": 1,"SurveyStatusCode": "01","SurveyPriority": 11,"SurveyName": "Example API Survey","CountryLanguageID": 9,"IndustryID": 30,"StudyTypeID": 1,"ClientCPI": 1,"QuotaCPI": 2,"ClientSurveyLiveURL": "http://www.surveyURL.com?rid=[%RID%]","TestRedirectURL": "http://www.surveyURL.com?rid=[%RID%]","IsActive": true,"Quota": 1000,"FulcrumExchangeAllocation": 0,"FulcrumExchangeHedgeAccess": true,"IsVerifyCallBack": true,"UniquePID": true,"UniqueIPAddress": true,"IsRelevantID": false,"IsDedupe": false,"IsGeoIP": false,"IsFraudProfile": false,"FraudProfileThreshold": 0,"IsTrueSample": false,"QuotaCalculationTypeID": 1,"SurveyPlatformID": 2,"BidLengthOfInterview": 10,"BusinessUnitID": 9,"SampleTypeID": 100}' https://api.samplicio.us/Demand/v1/Surveys/Create?key={APIKey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/Surveys/Create?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Post.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {
    "AccountID"=> 1,
    "SurveyStatusCode"=> "01",
    "SurveyPriority"=> 11,
    "SurveyName"=> "Example API Survey",
    "CountryLanguageID": 9,
    "IndustryID"=> 30,
    "StudyTypeID"=> 1,
    "ClientCPI"=> 1,
    "QuotaCPI"=> 2,
    "ClientSurveyLiveURL"=> "http://www.surveyURL.com?rid=[%RID%]",
    "TestRedirectURL"=> "http://www.surveyURL.com?rid=[%RID%]",
    "IsActive"=> true,
    "Quota"=> 1000,
    "FulcrumExchangeAllocation"=> 0,
    "FulcrumExchangeHedgeAccess"=> true,
    "IsVerifyCallBack"=> true,
    "UniquePID"=> true,
    "UniqueIPAddress"=> true,
    "IsRelevantID"=> false,
    "IsDedupe"=> false,
    "IsGeoIP"=> false,
    "IsFraudProfile"=> false,
    "FraudProfileThreshold"=> 0,
    "IsTrueSample"=> false,
    "QuotaCalculationTypeID"=> 1,
    "SurveyPlatformID"=> 2,
    "BidLengthOfInterview"=> 10,
    "BusinessUnitID"=> 9,
    "SampleTypeID"=> 100
 }.to_json

response = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{
    "AccountID": 1,
    "SurveyStatusCode": "01",
    "SurveyPriority": 11,
    "SurveyName": "Example API Survey",
    "CountryLanguageID": 9,
    "IndustryID": 30,
    "StudyTypeID": 1,
    "ClientCPI": 1,
    "QuotaCPI": 2,
    "ClientSurveyLiveURL": "http://www.surveyURL.com?rid=[%RID%]",
    "TestRedirectURL": "http://www.surveyURL.com?rid=[%RID%]",
    "IsActive": true,
    "Quota": 1000,
    "FulcrumExchangeAllocation": 0,
    "FulcrumExchangeHedgeAccess": true,
    "IsVerifyCallBack": true,
    "UniquePID": true,
    "UniqueIPAddress": true,
    "IsRelevantID": false,
    "IsDedupe": false,
    "IsGeoIP": false,
    "IsFraudProfile": false,
    "FraudProfileThreshold": 0,
    "IsTrueSample": false,
    "QuotaCalculationTypeID": 1,
    "SurveyPlatformID": 2,
    "BidLengthOfInterview": 10,
    "BusinessUnitID": 9,
    "SampleTypeID": 100
 }';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/Surveys/Create?key={APIKey}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $params,
));

$response = curl_exec($curl);

curl_close($curl);
?>

```

```python
import requests, json

url = 'https://api.samplicio.us/Demand/v1/Surveys/Create?key={APIKey}'
params = {
    "AccountID": 1,
    "SurveyStatusCode": "01",
    "SurveyPriority": 11,
    "SurveyName": "Example API Survey",
    "CountryLanguageID": 9,
    "IndustryID": 30,
    "StudyTypeID": 1,
    "ClientCPI": 1,
    "QuotaCPI": 2,
    "ClientSurveyLiveURL": "http://www.surveyURL.com?rid=[%RID%]",
    "TestRedirectURL": "http://www.surveyURL.com?rid=[%RID%]",
    "IsActive": True,
    "Quota": 1000,
    "FulcrumExchangeAllocation": 0,
    "FulcrumExchangeHedgeAccess": True,
    "IsVerifyCallBack": True,
    "UniquePID": True,
    "UniqueIPAddress": True,
    "IsRelevantID": False,
    "IsDedupe": False,
    "IsGeoIP": False,
    "IsFraudProfile": False,
    "FraudProfileThreshold": 0,
    "IsTrueSample": False,
    "QuotaCalculationTypeID": 1,
    "SurveyPlatformID": 2,
    "BidLengthOfInterview": 10,
    "BusinessUnitID": 9,
    "SampleTypeID": 100
 }
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

response = requests.post(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/Surveys/Create?key={APIKey}");

string args = @"{
                    ""AccountID"": 1,
                    ""SurveyStatusCode"": ""01"",
                    ""SurveyPriority"": 11,
                    ""SurveyName"": ""Example API Survey"",
                    ""CountryLanguageID"": 9,
                    ""IndustryID"": 30,
                    ""StudyTypeID"": 1,
                    ""ClientCPI"": 1,
                    ""QuotaCPI"": 2,
                    ""ClientSurveyLiveURL"": ""http://www.surveyURL.com?rid=[%RID%]"",
                    ""TestRedirectURL"": ""http://www.surveyURL.com?rid=[%RID%]"",
                    ""IsActive"": true,
                    ""Quota"": 1000,
                    ""FulcrumExchangeAllocation"": 0,
                    ""FulcrumExchangeHedgeAccess"": true,
                    ""IsVerifyCallBack"": true,
                    ""UniquePID"": true,
                    ""UniqueIPAddress"": true,
                    ""IsRelevantID"": false,
                    ""IsDedupe"": false,
                    ""IsGeoIP"": false,
                    ""IsFraudProfile"": false,
                    ""FraudProfileThreshold"": 0,
                    ""IsTrueSample"": false,
                    ""QuotaCalculationTypeID"": 1,
                    ""SurveyPlatformID"": 2,
                    ""BidLengthOfInterview"": 10,
                    ""BusinessUnitID"": 9,
                    ""SampleTypeID"": 100
                }";
    
request.Method = "POST";
request.ContentType = "application/json";

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
streamWriter.Write(args);
streamWriter.Flush();
streamWriter.Close();
}

WebResponse response = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "POST",
  "hostname": "api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/Surveys/Create?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {
    "AccountID": 1,
    "SurveyStatusCode": "01",
    "SurveyPriority": 11,
    "SurveyName": "Example API Survey",
    "CountryLanguageID": 9,
    "IndustryID": 30,
    "StudyTypeID": 1,
    "ClientCPI": 1,
    "QuotaCPI": 2,
    "ClientSurveyLiveURL": "http://www.surveyURL.com?rid=[%RID%]",
    "TestRedirectURL": "http://www.surveyURL.com?rid=[%RID%]",
    "IsActive": true,
    "Quota": 1000,
    "FulcrumExchangeAllocation": 0,
    "FulcrumExchangeHedgeAccess": true,
    "IsVerifyCallBack": true,
    "UniquePID": true,
    "UniqueIPAddress": true,
    "IsRelevantID": false,
    "IsDedupe": false,
    "IsGeoIP": false,
    "IsFraudProfile": false,
    "FraudProfileThreshold": 0,
    "IsTrueSample": false,
    "QuotaCalculationTypeID": 1,
    "SurveyPlatformID": 2,
    "BidLengthOfInterview": 10,
    "BusinessUnitID": 9,
    "SampleTypeID": 100
 };

var params = JSON.stringify(json);

var request = https.request(options, function (response) {
  var chunks = [];

  response.on("data", function (chunk) {
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
    "API Message: CreateSurveyFromModel successful."
  ],
  "ResultCount": 1,
  "Survey": {
    "AccountID": 1,
    "SurveyStatusCode": "01",
    "SurveyPriority": 11,
    "SurveyNumber": 12345,
    "SurveyName": "Example API Survey",
    "CountryLanguageID": 9,
    "IndustryID": 30,
    "StudyTypeID": 1,
    "ClientCPI": 1,
    "QuotaCPI": 2,
    "ClientSurveyLiveURL": "http://www.surveyURL.com?rid=[%RID%]",
    "TestRedirectURL": "http://www.surveyURL.com?rid=[%RID%]",
    "IsActive": true,
    "Quota": 1000,
    "FulcrumExchangeAllocation": 0,
    "FulcrumExchangeHedgeAccess": true,
    "IsVerifyCallBack": true,
    "UniquePID": true,
    "UniqueIPAddress": true,
    "IsRelevantID": false,
    "IsDedupe": false,
    "IsGeoIP": false,
    "IsFraudProfile": false,
    "FraudProfileThreshold": 0,
    "IsTrueSample": false,
    "QuotaCalculationTypeID": 1,
    "SurveyPlatformID": 2,
    "BidLengthOfInterview": 10,
    "BusinessUnitID": 9,
    "SampleTypeID": 100
  }
}
```

Creates a Fulcrum survey.   

<aside class="notice">Fulcrum automatically adds 7 qualifications to US studies when a survey is created (Age, Gender, Zip, STATE, Ethnicity, Hispanic, Standard HHI). These qualifications can be edited or removed if desired by <a href="#put-update-a-qualification">updating the qualification</a></aside>

#### Arguments

| Property                     | Type     | Required | Description                                                                                                                                            |
|------------------------------|----------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| AccountID                    | int      | true     |Unique account identifier.                                                                                                                              |
| SurveyStatusCode             | int      | false    |Code associated with the current status of the survey. See [List Global Definitions](#get-list-global-definitions) for a map of survey status codes.        |
| SurveyPriority               | int      | false    |Survey priority from 1-11 (1 being the highest). Priority only applies to routed sample.                                                                |
| SurveyName                   | string   | true     |External name of the survey. This name may be exposed to respondents. This value is not unique across surveys.                                          |
| CountryLanguageID            | int      | true     |Unique id associated with a country-language pair.                                                                                                      |
| IndustryID                   | int      | false    |Industry associated with the survey’s topic.                                                                                                            |
| StudyTypeID                  | int      | false    |Indicates the survey’s format and purpose (i.e. adhoc, recruit, etc).                                                                                   |
| ClientCPI                    | double   | false    |Revenue per complete used to calculate internal margin or savings.                                                                                      |
| QuotaCPI                     | double   | false    |Gross payout per complete. This value is before any applicable commissions or fees.                                                                     |
| ClientSurveyLiveURL          | string   | true     |Link to client survey. Max URL length for Fulcrum is 2000 characters.                                                                                   |
| TestRedirectURL              | string   | true     |Link to client survey for testing purposes. All studies should include a working test link.                                                             |
| IsActive                     | string   | false    |Indicates if a survey is active or inactive. Inactive is effectively the same as delete. We recommend keeping any surveys that have prescreens or completes in active status.                                                                                                             |
| Quota                        | int      | false    |Total number of completes needed.                                                                                                                        |
| FulcrumExchangeAllocation    | double   | false    |Percentage of total completes allocated only to the Exchange. Must be between 0 and 100%.                                                               |
| FulcrumExchangeHedgeAccess   | boolean  | false    |"true" gives the Exchange access to any unallocated completes.                                                                                          |
| IsVerifyCallBack             | boolean  | false    |"true" enables Verify CallBack security which requires the correct [%RSFN%] variable to be included on the "complete" client callback for verification. |
| UniquePID                    | boolean  | false    |"true" enables PID deduplication on a survey preventing a repsondent with the same PID from entering more than once. Recommended on all surveys.        |
| UniqueIPAddress              | boolean  | false    |"true" enables IP deduplication on a survey preventing a repsondent with the same IP address from entering more than once. Recommended on all surveys.  |
| IsRelevantID                 | boolean  | false    |"true" enables RelevantID security. RelevantID is a third-party security feature. There is an additional cost for RelevantID.                           |
| IsDedupe                     | boolean  | false    |"true" enables Relevant ID dedupe security. Should always be enabled when using RelevantID.                                                              |
| IsGeoIP                      | boolean  | false    |"true" enables RelevantID GeoIP security to determine respondent geogrphical location. Should always be enabled when using RelevantID.                   |
| IsFraudProfile               | boolean  | false    |"true" enables RelevantID Fraud Profile security. Should always be enabled when using RelevantID.                                                        |
| FraudProfileThreshold        | int      | false    |Set's the RelevantID Fraud Profile Threshold between 0-100. The lower the number the more aggressive the security. We recommend 11.                     |
| IsTrueSample                 | boolean  | false    |"true" enables TrueSample security. TrueSample is a third-party security feature. There is an additional cost associated.                               |
| QuotaCalculationTypeID       | int      | false    |Sets the quota calculation method. Either 1 for ”Completes” (quotas determined by completes) or 2=”Prescreens” (quotas determined when leaving Fulcrum). |
| SurveyPlatformID             | int      | false    |Sets the external platform ID. We recommend setting to 2 for "undefined" in most situations.                                                             |
| BidLengthOfInterview         | int      | false    |Estimated time for a respondent to complete the survey excluding the Fulcrum prescreener in minutes as provided by the buyer.                           |
| BusinessUnitID               | int      | true     |Sets the account [business unit](#list-business-units).                                                                                                 |
| SampleTypeID                 | int      | false    |Sets the type of sample the survey is open to (i.e. consumer, business-to-business, etc). (SampleTypes)[#definitions].                                 |

### PUT Update a Survey

> Definition

```plaintext
PUT  https://api.samplicio.us/Demand/v1/Surveys/Update/{SurveyNumber}?key={APIKey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" -X PUT --data '{"AccountID": 1,"SurveyStatusCode": "01","SurveyPriority": 11,"SurveyNumber": 12345,"SurveyName": "Example API Survey","CountryLanguageID": 9,"IndustryID": 30,"StudyTypeID": 1,"ClientCPI": 1,"QuotaCPI": 2,"ClientSurveyLiveURL": "http://www.surveyURL.com?rid=[%RID%]","TestRedirectURL": "http://www.surveyURL.com?rid=[%RID%]","IsActive": true,"Quota": 100,"FulcrumExchangeAllocation": 0,"FulcrumExchangeHedgeAccess": true,"IsVerifyCallBack": true,"UniquePID": true,"UniqueIPAddress": true,"IsRelevantID": false,"IsDedupe": false,"IsGeoIP": false,"IsFraudProfile": false,"FraudProfileThreshold": 0,"IsTrueSample": false,"QuotaCalculationTypeID": 1,"SurveyPlatformID": 2,"BidLengthOfInterview": 10,"BusinessUnitID": 9,"SampleTypeID": 100}' https://api.samplicio.us/Demand/v1/Surveys/Update/{SurveyNumber}?key={APIKey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/Surveys/Update/{SurveyNumber}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Put.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {
    AccountID: 1,
    SurveyStatusCode: "01",
    SurveyPriority: 11,
    SurveyNumber: 12345,
    SurveyName: "Example API Survey",
    CountryLanguageID: 9,
    IndustryID: 30,
    StudyTypeID: 1,
    ClientCPI: 1,
    QuotaCPI: 2,
    ClientSurveyLiveURL: "http://www.surveyURL.com?rid=[%RID%]",
    TestRedirectURL: "http://www.surveyURL.com?rid=[%RID%]",
    IsActive: true,
    Quota: 100,
    FulcrumExchangeAllocation: 0,
    FulcrumExchangeHedgeAccess: true,
    IsVerifyCallBack: true,
    UniquePID: true,
    UniqueIPAddress: true,
    IsRelevantID: false,
    IsDedupe: false,
    IsGeoIP: false,
    IsFraudProfile: false,
    FraudProfileThreshold: 0,
    IsTrueSample: false,
    QuotaCalculationTypeID: 1,
    SurveyPlatformID: 2,
    BidLengthOfInterview: 10,
    BusinessUnitID: 9,
    SampleTypeID: 100
 }.to_json

response = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{
    "AccountID": 1,
    "SurveyStatusCode": "01",
    "SurveyPriority": 11,
    "SurveyNumber": 12345,
    "SurveyName": "Example API Survey",
    "CountryLanguageID": 9,
    "IndustryID": 30,
    "StudyTypeID": 1,
    "ClientCPI": 1,
    "QuotaCPI": 2,
    "ClientSurveyLiveURL": "http://www.surveyURL.com?rid=[%RID%]",
    "TestRedirectURL": "http://www.surveyURL.com?rid=[%RID%]",
    "IsActive": true,
    "Quota": 100,
    "FulcrumExchangeAllocation": 0,
    "FulcrumExchangeHedgeAccess": true,
    "IsVerifyCallBack": true,
    "UniquePID": true,
    "UniqueIPAddress": true,
    "IsRelevantID": false,
    "IsDedupe": false,
    "IsGeoIP": false,
    "IsFraudProfile": false,
    "FraudProfileThreshold": 0,
    "IsTrueSample": false,
    "QuotaCalculationTypeID": 1,
    "SurveyPlatformID": 2,
    "BidLengthOfInterview": 10,
    "BusinessUnitID": 9,
    "SampleTypeID": 100
 }';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/Surveys/Update/{SurveyNumber}?key={APIKey}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "PUT",
  CURLOPT_POSTFIELDS => $params,
));

$response = curl_exec($curl);

curl_close($curl);
?>

```

```python
import requests, json

url = 'https://api.samplicio.us/Demand/v1/Surveys/Update/{SurveyNumber}?key={APIKey}'
params = {
    "AccountID": 1,
    "SurveyStatusCode": "01",
    "SurveyPriority": 11,
    "SurveyNumber": 12345,
    "SurveyName": "Example API Survey",
    "CountryLanguageID": 9,
    "IndustryID": 30,
    "StudyTypeID": 1,
    "ClientCPI": 1,
    "QuotaCPI": 2,
    "ClientSurveyLiveURL": "http://www.surveyURL.com?rid=[%RID%]",
    "TestRedirectURL": "http://www.surveyURL.com?rid=[%RID%]",
    "IsActive": True,
    "Quota": 100,
    "FulcrumExchangeAllocation": 0,
    "FulcrumExchangeHedgeAccess": True,
    "IsVerifyCallBack": True,
    "UniquePID": True,
    "UniqueIPAddress": True,
    "IsRelevantID": False,
    "IsDedupe": False,
    "IsGeoIP": False,
    "IsFraudProfile": False,
    "FraudProfileThreshold": 0,
    "IsTrueSample": False,
    "QuotaCalculationTypeID": 1,
    "SurveyPlatformID": 2,
    "BidLengthOfInterview": 10,
    "BusinessUnitID": 9,
    "SampleTypeID": 100
 }
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

response = requests.put(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/Surveys/Update/{SurveyNumber}?key={APIKey}");

string args = @"{
                    ""AccountID"": 1,
                    ""SurveyStatusCode"": ""01"",
                    ""SurveyPriority"": 11,
                    ""SurveyNumber"": 12345,
                    ""SurveyName"": ""Example API Survey"",
                    ""CountryLanguageID"": 9,
                    ""IndustryID"": 30,
                    ""StudyTypeID"": 1,
                    ""ClientCPI"": 1,
                    ""QuotaCPI"": 2,
                    ""ClientSurveyLiveURL"": ""http://www.surveyURL.com?rid=[%RID%]"",
                    ""TestRedirectURL"": ""http://www.surveyURL.com?rid=[%RID%]"",
                    ""IsActive"": true,
                    ""Quota"": 100,
                    ""FulcrumExchangeAllocation"": 0,
                    ""FulcrumExchangeHedgeAccess"": true,
                    ""IsVerifyCallBack"": true,
                    ""UniquePID"": true,
                    ""UniqueIPAddress"": true,
                    ""IsRelevantID"": false,
                    ""IsDedupe"": false,
                    ""IsGeoIP"": false,
                    ""IsFraudProfile"": false,
                    ""FraudProfileThreshold"": 0,
                    ""IsTrueSample"": false,
                    ""QuotaCalculationTypeID"": 1,
                    ""SurveyPlatformID"": 2,
                    ""BidLengthOfInterview"": 10,
                    ""BusinessUnitID"": 9,
                    ""SampleTypeID"": 100
                }";
    
request.Method = "PUT";
request.ContentType = "application/json";

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
streamWriter.Write(args);
streamWriter.Flush();
streamWriter.Close();
}

WebResponse response = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "PUT",
  "hostname": "api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/Surveys/Update?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {
    "AccountID": 1,
    "SurveyStatusCode": "01",
    "SurveyPriority": 11,
    "SurveyNumber": 12345,
    "SurveyName": "Example API Survey",
    "CountryLanguageID": 9,
    "IndustryID": 30,
    "StudyTypeID": 1,
    "ClientCPI": 1,
    "QuotaCPI": 2,
    "ClientSurveyLiveURL": "http://www.surveyURL.com?rid=[%RID%]",
    "TestRedirectURL": "http://www.surveyURL.com?rid=[%RID%]",
    "IsActive": true,
    "Quota": 100,
    "FulcrumExchangeAllocation": 0,
    "FulcrumExchangeHedgeAccess": true,
    "IsVerifyCallBack": true,
    "UniquePID": true,
    "UniqueIPAddress": true,
    "IsRelevantID": false,
    "IsDedupe": false,
    "IsGeoIP": false,
    "IsFraudProfile": false,
    "FraudProfileThreshold": 0,
    "IsTrueSample": false,
    "QuotaCalculationTypeID": 1,
    "SurveyPlatformID": 2,
    "BidLengthOfInterview": 10,
    "BusinessUnitID": 9,
    "SampleTypeID": 100
 };

var params = JSON.stringify(json);

var request = https.request(options, function (response) {
  var chunks = [];

  response.on("data", function (chunk) {
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
    "API Message: UpdateSurveyFromModel successful."
  ],
  "ResultCount": 1,
  "Survey": {
    "AccountID": 1,
    "SurveyStatusCode": "01",
    "SurveyPriority": 11,
    "SurveyNumber": 12345,
    "SurveyName": "Example API Survey",
    "CountryLanguageID": 9,
    "IndustryID": 30,
    "StudyTypeID": 1,
    "ClientCPI": 1,
    "QuotaCPI": 2,
    "ClientSurveyLiveURL": "http://www.surveyURL.com?rid=[%RID%]",
    "TestRedirectURL": "http://www.surveyURL.com?rid=[%RID%]",
    "IsActive": true,
    "Quota": 100,
    "FulcrumExchangeAllocation": 0,
    "FulcrumExchangeHedgeAccess": true,
    "IsVerifyCallBack": true,
    "UniquePID": true,
    "UniqueIPAddress": true,
    "IsRelevantID": false,
    "IsDedupe": false,
    "IsGeoIP": false,
    "IsFraudProfile": false,
    "FraudProfileThreshold": 0,
    "IsTrueSample": false,
    "QuotaCalculationTypeID": 1,
    "SurveyPlatformID": 2,
    "BidLengthOfInterview": 10,
    "BusinessUnitID": 9,
    "SampleTypeID": 100
  }
}
```

Update an existing Fulcrum survey. 

#### Arguments

| Property                     | Type     | Required | Description                                                                                                                                            |
|------------------------------|----------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| AccountID                    | int      | true     |Unique account identifier.                                                                                                                              |
| SurveyStatusCode             | int      | true     |Code associated with the current status of the survey. See [List Global Definitions](#get-list-global-definitions) for a map of survey status codes.        |
| SurveyPriority               | int      | true     |Survey priority from 1-11 (1 being the highest). Priority only applies to routed sample.                                                                |
| SurveyName                   | string   | true     |External name of the survey. This name may be exposed to respondents. This value is not unique across surveys.                                          |
| SurveyNumber                 | int      | true     |Unique number associated with the survey.                                                                                                               |
| CountryLanguageID            | int      | true     |Unique id associated with a country-language pair.                                                                                                      |
| IndustryID                   | int      | true     |Industry associated with the survey’s topic.                                                                                                            |
| StudyTypeID                  | int      | true     |Indicates the survey’s format and purpose (i.e. adhoc, recruit, etc).                                                                                   |
| ClientCPI                    | double   | true     |Revenue per complete used to calculate internal margin or savings.                                                                                      |
| QuotaCPI                     | double   | true     |Gross payout per complete. This value is before any applicable commissions or fees.                                                                     |
| ClientSurveyLiveURL          | string   | true     |Link to client survey. Max URL length for Fulcrum is 2000 characters.                                                                                   |
| TestRedirectURL              | string   | true     |Link to client survey for testing purposes. All studies should include a working test link.                                                             |
| IsActive                     | string   | true     |Indicates if a survey is active or inactive.                                                                                                             |
| Quota                        | int      | true     |Total number of completes needed.                                                                                                                        |
| FulcrumExchangeAllocation    | double   | true     |Percentage of total completes allocated only to the Exchange. Must be between 0 and 100%.                                                               |
| FulcrumExchangeHedgeAccess   | boolean  | true     |"true" gives the Exchange access to any unallocated completes.                                                                                          |
| IsVerifyCallBack             | boolean  | true     |"true" enables Verify CallBack security which requires the correct [%RSFN%] variable to be included on the "complete" client callback for verification. |
| UniquePID                    | boolean  | true     |"true" enables PID deduplication on a survey preventing a repsondent with the same PID from entering more than once. Recommended on all surveys.        |
| UniqueIPAddress              | boolean  | true     |"true" enables IP deduplication on a survey preventing a repsondent with the same IP address from entering more than once. Recommended on all surveys.  |
| IsRelevantID                 | boolean  | true     |"true" enables RelevantID security. RelevantID is a third-party security feature. There is an additional cost associated.                           |
| IsDedupe                     | boolean  | true     |"true" enables Relevant ID dedupe security. Should always be enabled when using RelevantID.                                                              |
| IsGeoIP                      | boolean  | true     |"true" enables RelevantID GeoIP security to determine respondent geogrphical location. Should always be enabled when using RelevantID.                   |
| IsFraudProfile               | boolean  | true     |"true" enables RelevantID Fraud Profile security. Should always be enabled when using RelevantID.                                                        |
| FraudProfileThreshold        | int      | true     |Set's the RelevantID Fraud Profile Threshold between 0-100. The lower the number the more aggressive the security. We recommend 11.                     |
| IsTrueSample                 | boolean  | true     |"true" enables TrueSample security. TrueSample is a third-party security feature. There is an additional cost associated.                               |
| QuotaCalculationTypeID       | int      | true     |Sets the quota calculation method. Either 1 for ”Completes” (quotas counted using completes) or 2=”Prescreens” (quotas counted when leaving Fulcrum for the survey). |
| SurveyPlatformID             | int      | true     |Sets the external platform ID. We recommend setting to 2 for "undefined" in most situations.                                                             |
| BidLengthOfInterview         | int      | true     |Estimated time for a respondent to complete the survey excluding the Fulcrum prescreener in minutes as provided by the buyer.                           |
| BusinessUnitID               | int      | true     |Sets the account [business unit](#list-business-units).                                                                                                 |
| SampleTypeID                 | int      | false    |Sets the type of sample the survey is open to (i.e. consumer, business-to-business, etc). (SampleTypes)[#definitions].                                   |

### GET Show a Survey

> Definition

```plaintext
GET  https://api.samplicio.us/Demand/v1/Surveys/BySurveyNumber/{SurveyNumber}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Demand/v1/Surveys/BySurveyNumber/{SurveyNumber}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Demand/v1/Surveys/BySurveyNumber/{SurveyNumber}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

response = http.request(request)  
```

```php
<?php
$response = file_get_contents('https://api.samplicio.us/Demand/v1/Surveys/BySurveyNumber/{SurveyNumber}?key={APIKey}');
?>
```

```python
import requests

response = requests.get('https://api.samplicio.us/Demand/v1/Surveys/BySurveyNumber/{SurveyNumber}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/Surveys/BySurveyNumber/{SurveyNumber}?key={APIKey}");

WebResponse response = request.GetResponse();
```

```javascript
const https = require('https');

https.get('https://api.samplicio.us/Demand/v1/Surveys/BySurveyNumber/{SurveyNumber}?key={APIKey}', function(res){
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
    "API Message: GetSurveyBySurveyNumber successful."
  ],
  "ResultCount": 1,
  "Survey": {
    "AccountID": 1,
    "SurveyStatusCode": "01",
    "SurveyPriority": 11,
    "SurveyNumber": 12345,
    "SurveyName": "Example API Survey",
    "CountryLanguageID": 9,
    "IndustryID": 30,
    "StudyTypeID": 1,
    "ClientCPI": 1,
    "QuotaCPI": 2,
    "ClientSurveyLiveURL": "http://www.surveyURL.com?rid=[%RID%]",
    "TestRedirectURL": "http://www.surveyURL.com?rid=[%RID%]",
    "IsActive": true,
    "Quota": 100,
    "FulcrumExchangeAllocation": 0,
    "FulcrumExchangeHedgeAccess": true,
    "IsVerifyCallBack": true,
    "UniquePID": true,
    "UniqueIPAddress": true,
    "IsRelevantID": true,
    "IsDedupe": true,
    "IsGeoIP": false,
    "IsFraudProfile": false,
    "FraudProfileThreshold": 0,
    "IsTrueSample": false,
    "QuotaCalculationTypeID": 1,
    "SurveyPlatformID": 2,
    "BidLengthOfInterview": 10,
    "BusinessUnitID": 9,
    "SampleTypeID": 100
  }
}
```

Returns the details of a specific Fulcrum survey. 

<aside class="notice">NumberOfRespondents is not cached.</aside>


#### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                                                    |

### GET List Surveys By Status

> Definition

```plaintext
GET  https://api.samplicio.us/Demand/v1/Surveys/BySurveyStatus/{SurveyStatus}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Demand/v1/Surveys/BySurveyStatus/{SurveyStatus}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Demand/v1/Surveys/BySurveyStatus/{SurveyStatus}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

response = http.request(request)  
```

```php
<?php
$response = file_get_contents('https://api.samplicio.us/Demand/v1/Surveys/BySurveyStatus/{SurveyStatus}?key={APIKey}');
?>
```

```python
import requests

response = requests.get('https://api.samplicio.us/Demand/v1/Surveys/BySurveyStatus/{SurveyStatus}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/Surveys/BySurveyStatus/{SurveyStatus}?key={APIKey}");

WebResponse response = request.GetResponse();
```

```javascript
const https = require('https');

https.get('https://api.samplicio.us/Demand/v1/Surveys/BySurveyStatus/{SurveyStatus}?key={APIKey}', function(res){
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
    "API Message: GetSurveysBySurveyStatus successful."
  ],
  "ResultCount": 1,
  "Surveys": {
      "AccountID": 1,
      "SurveyStatusCode": "01",
      "SurveyPriority": 11,
      "SurveyNumber": 12345,
      "SurveyName": "Example API Survey",
      "CountryLanguageID": 9,
      "IndustryID": 30,
      "StudyTypeID": 1,
      "ClientCPI": 1,
      "QuotaCPI": 2,
      "ClientSurveyLiveURL": "http://www.surveyURL.com?rid=[%RID%]",
      "TestRedirectURL": "http://www.surveyURL.com?rid=[%RID%]",
      "IsActive": true,
      "Quota": 100,
      "FulcrumExchangeAllocation": 0,
      "FulcrumExchangeHedgeAccess": true,
      "IsVerifyCallBack": true,
      "UniquePID": true,
      "UniqueIPAddress": true,
      "IsRelevantID": true,
      "IsDedupe": true,
      "IsGeoIP": false,
      "IsFraudProfile": false,
      "FraudProfileThreshold": 0,
      "IsTrueSample": false,
      "QuotaCalculationTypeID": 1,
      "SurveyPlatformID": 2,
      "BidLengthOfInterview": 10,
      "BusinessUnitID": 9,
      "SampleTypeID": 100
  }
}
```

Returns an index of all surveys by status such as Pending, Live, and Completed. 

#### Arguments

| Property                     | Type     | Required | Description                                                                                                                                      |
|------------------------------|----------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyStatus                 | int      | true     | Code associated with the current status of the survey. See [List Global Definitions](#get-list-global-definitions) for a map, of survey status codes.|
