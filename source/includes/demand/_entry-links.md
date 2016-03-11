#Non-Exchange Entry Links

The Non-Exchange Entry Link resource allows the buyer to create, update, and delete supplier links on non-exchange allocations.

### Supplier Allocation Model

| Property                     | Type     | Description                                                                                                                                             |
|------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| SupplierCode                 | int      | Unique code associated with supplier account.                                                                                                           |
| AllocationPercentage         | double   | Percentage of total completes allocated to supplier                                                                                                           |
| TCPI                         | double   | Over-the-counter cost per supplier complete.                                                                                                            |
| HedgeAccess                  | string   | “true” or “false” – Indicates if hedge access is enabled for the supplier.                                                                              |
| BlockRouterTraffic           | string   | “true” or “false” – Indicates if router traffic is enabled for the supplier.                                                                            |
| SupplierSurveyID             | int      | Survey supplier ID (SSID).                                                                                                                              |
| Prescreens                   | int      | Number of prescreens achieved by the supplier.                                                                                                          |
| Completes                    | int      | Number of completes achieved by the supplier.                                                                                                           |
| AllocationRemaining          | int      | Number of completes allocated only to the supplier.                                                                                                     |
| HedgeRemaining               | int      | Number of unallocated completes available to any suppliers.                                                                                             |
| TotalRemaining               | int      | Total number of completes available to the supplier (aggregate of allocation and hedge remaining properties).                                                                                                                                                        |
| Target                       | array    | Contains array of elements described below.                                                                                                             |

### Target Model

| Property                     | Type     | Description                                                                                                                                             |
|------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| SupplierLinkTypeCode         | string   | Defines the type of buyer-supplier engagment and the respondent's path in Fulcrum.                                                                      |
| TrackingTypeCode             | string   | Defines how Fulcrum should communicate back to the supplier's system at the end of a session.                                                           |
| DefaultLink                  | string   | Tracking code or link used if none of the below apply.                                                                                                  |
| SuccessLink                  | string   | Tracking code or link used after a completion.                                                                                                          |
| FailureLink                  | string   | Tracking code or link used after a termination.                                                                                                         |
| OverQuotaLink                | string   | Tracking code or link used after an overquota.                                                                                                          |
| QualityTerminationLink       | string   | Tracking code or link used after a quality (security) termination.                                                                                      |
| LiveLink                     | string   | Live supplier-specific respondent entry link generated by Fulcrum.                                                                                      |
| TestLink                     | string   | Test supplier-specific respondent entry link generated by Fulcrum.                                                                                      |

##Create a Link

> Definition

```plaintext
POST  https://api.samplicio.us/Demand/v1/SupplierAllocations/Targets/Create/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" \
-X POST --data '{"SupplierLinkTypeCode": "TS", "TrackingTypeCode": "NONE"}' \
https://api.samplicio.us/Demand/v1/SupplierAllocations/Targets/Create/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierAllocations/Targets/Create/{SurveyNumber}/{SupplierCode}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Post.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {SupplierLinkTypeCode:"TS",TrackingTypeCode:"NONE"}.to_json

supplierLink = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{"SupplierLinkTypeCode": "TS,"TrackingTypeCode": "NONE"}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SupplierAllocations/Targets/Create/{SurveyNumber}/{SupplierCode}?key={APIKey}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $params,
));

$supplierLink = curl_exec($curl);

curl_close($curl);
?>

```

```python
import requests, json

url = 'https://api.samplicio.us/Demand/v1/SupplierAllocations/Targets/Create/{SurveyNumber}/{SupplierCode}?key={APIKey}'
params = {'SupplierLinkTypeCode':'TS','TrackingTypeCode':'NONE'}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

supplierLink = requests.post(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierAllocations/Targets/Create/{SurveyNumber}/{SupplierCode}?key={APIKey}");

string params = "{\"SupplierLinkTypeCode\":\"TS\","+"\"TrackingTypeCode\":\"NONE\"}";
    
request.Method = "POST";
request.ContentType = "application/json";

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
streamWriter.Write(params);
streamWriter.Flush();
streamWriter.Close();
}

WebResponse supplierLink = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "POST",
  "hostname": "api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/SupplierAllocations/Targets/Create/{SurveyNumber}/{SupplierCode}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {
    "SupplierLinkTypeCode":"TS",
    "TrackingTypeCode":"NONE"
};

var params = JSON.stringify(json);

var request = https.request(options, function (supplierLink) {
  var chunks = [];

  supplierLink.on("data", function (chunk) {
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
    "API Message: CreateSupplierAllocationTargetFromModel successful."
  ],
  "ResultCount": 1,
  "SupplierAllocation": {
    "SupplierCode": "5405",
    "AllocationPercentage": 0,
    "TCPI": 5,
    "HedgeAccess": true,
    "BlockRouterTraffic": false,
    "SupplierSurveyID": "",
    "Prescreens": 0,
    "Completes": 0,
    "AllocationRemaining": 0,
    "HedgeRemaining": 15,
    "TotalRemaining": 15,
    "Target": {
      "SupplierLinkTypeCode": "TS",
      "TrackingTypeCode": "NONE",
      "DefaultLink": "http:\/\/www.anon.com\/surveys?v=1&fs=1&uid=[%MID%]",
      "SuccessLink": "http:\/\/www.anon.com\/surveys?v=1&fs=2&uid=[%MID%]&COST=[%COST%]",
      "FailureLink": "http:\/\/www.anon.com\/surveys?v=1&fs=1&uid=[%MID%]",
      "OverQuotaLink": "http:\/\/www.anon.com\/surveys?v=1&fs=1&uid=[%MID%]",
      "QualityTerminationLink": "http:\/\/www.anon.com\/surveys?v=1&fs=1&uid=[%MID%]",
      "LiveLink": "http:\/\/staging.samplicio.us\/router\/default.aspx?SID=52c975a7-15fb-804d-9bd2-3d5d553aa7af&PID=",
      "TestLink": "http:\/ \/staging.samplicio.us\/router\/default.aspx?SID=a948gef7-3591-42c0-ce51-0e4xdf25582f&FIRID=MSDHONI7&SUMSTAT=1&PID=test"
    }
  }
}
```

Creates target entry links for suppliers already allocated to a Fulcrum survey. 

<aside class="notice">Ensure that the supplier has already been allocated to the survey by first making the [SupplierAllocations/Create](#create-an-allocation) call. Always default to Targeted/Standalone link type (SupplierLinkTypeCode TS) when creating target links unless specifically requested by the supplier </aside>


### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                                                    |
| SupplierCode                 | int      | true     | Unique code associated with supplier account.                                                                                                |
| SupplierLinkTypeCode         | int      | true     | Defines the type of buyer-supplier engagment and the respondent's path in Fulcrum.                                                           |
| TrackingTypeCode             | int      | true     | Defines how Fulcrum should communicate back to the supplier's system at the end of a session. The options are:                               |
|                              |          |          | NONE (Default and recommended, physically redirects the respondent back to the supplier system)                                              |
|                              |          |          | PIXEL (pixel tracking)                                                                                                                       |
|                              |          |          | S2S (server to server postback)                                                                                                              |

##Update a Link

> Definition

```plaintext
PUT  https://api.samplicio.us/Demand/v1/SupplierAllocations/Targets/Update/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" \
-X PUT  --data '{"SupplierLinkTypeCode": "TS", "TrackingTypeCode": "NONE", "DefaultLink":"","SuccessLink":"","FailureLink":"","OverQuotaLink":"","QualityTerminationLink":""}' \ https://api.samplicio.us/Demand/v1/SupplierAllocations/Targets/Update/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Demand/v1/SupplierAllocations/Targets/Update/{SurveyNumber}/{SupplierCode}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Post.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {SupplierLinkTypeCode:"TS",TrackingTypeCode:"NONE",DefaultLink:"",SuccessLink:"",FailureLink:"",OverQuotaLink:"",QualityTerminationLink:""}.to_json

updateSupplierLink = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{"SupplierLinkTypeCode": "TS,"TrackingTypeCode": "NONE","DefaultLink": "","SuccessLink": "","FailureLink": "","OverQuotaLink": "","QualityTerminationLink": ""}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Demand/v1/SupplierAllocations/Targets/Update/{SurveyNumber}/{SupplierCode}?key={APIKey}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "PUT",
  CURLOPT_POSTFIELDS => $params,
));

$updateSupplierLink = curl_exec($curl);

curl_close($curl);
?>
```

```python
import requests, json

url = 'https://api.samplicio.us/Demand/v1/SupplierAllocations/Targets/Update/{SurveyNumber}/{SupplierCode}?key={APIKey}'
params = {'SupplierLinkTypeCode':'TS','TrackingTypeCode':'NONE','DefaultLink':'','SuccessLink':'','FailureLink':'','OverQuotaLink':'','QualityTerminationLink':''}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

updateSupplierLink = requests.put(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Demand/v1/SupplierAllocations/Targets/Update/{SurveyNumber}/{SupplierCode}?key={APIKey}");

string params = "{\"SupplierLinkTypeCode\":\"TS\","+"\"TrackingTypeCode\":\"NONE\","+"\"DefaultLink\":\"\","+"\"SuccessLink\":\"\","+"\"FailureLink\":\"\","+"\"OverQuotaLink\":\"\","+"\"QualityTerminationLink\":\"\"}";
    
request.Method = "PUT";
request.ContentType = "application/json";

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
        {
            streamWriter.Write(params);
            streamWriter.Flush();
            streamWriter.Close();
        }

WebResponse updateSupplierLink = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "PUT",
  "hostname": "api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/SupplierAllocations/Targets/Update/{SurveyNumber}/{SupplierCode}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {
    "SupplierLinkTypeCode":"TS",
    "TrackingTypeCode":"NONE",
    "DefaultLink":"",
    "SuccessLink":"",
    "FailureLink":"",
    "OverQuotaLink": "",
    "QualityTerminationLink":""
};

var params = JSON.stringify(json);

var request = https.request(options, function (updatedSupplierLink) {
  var chunks = [];

  updateSupplierLink.on("data", function (chunk) {
    chunks.push(chunk);
  });

});

request.write(params);

request.end();
```

Updates target entry links for suppliers already allocated to a Fulcrum survey. 

<aside class="notice">Always default to Targeted/Standalone link type (SupplierLinkTypeCode TS) when creating target links unless specifically requested by the supplier </aside>


### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey.                                                                                                    |
| SupplierCode                 | int      | true     | Unique code associated with supplier account.                                                                                                |
| SupplierLinkTypeCode         | int      | true     | Defines the type of buyer-supplier engagment and the respondent's path in Fulcrum.                                                           |
| TrackingTypeCode             | int      | true     | Defines how Fulcrum should communicate back to the supplier's system at the end of a session. The options are:                               |
| DefaultLink                  | string   | true     | Tracking code or link used if none of the below apply.                                                                                       |
| SuccessLink                  | string   | true     | Tracking code or link used after a completion.                                                                                               |
| FailureLink                  | string   | true     | Tracking code or link used after a termination.                                                                                              |
| OverQuotaLink                | string   | true     | Tracking code or link used after an overquota.                                                                                               |
| QualityTerminationLink       | string   | true     | Tracking code or link used after a quality (security) termination.                                                                           |

##Delete a Link