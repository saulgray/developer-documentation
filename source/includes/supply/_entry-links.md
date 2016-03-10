#Entry Links

The Entry Links resource provides suppliers the ability to create, update, and retrieve supplier survey entry links, as well as also specify [supplier link and tracking types](#list-global-definitions). 

### Supplier Link Model

| Property                     | Type     | Description                                                                                                                                             |
|------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| SupplierLinkTypeCode         | string   | Entry link type.                                                                                                                                        | 
| TrackingTypeCode             | string   | Supplier redirect URL tracking type; NONE (Default and recommended, physical redirect URL), PIXEL (pixel tracking), or S2S (server to server).          |
| DefaultLink                  | string   | Supplier redirect used for a termination.                                                                                                               |
| SuccessLink                  | string   | Supplier redirect used for a succesful completion.                                                                                                      |
| FailureLink                  | string   | Supplier redirect used for a termination.                                                                                                               |
| OverQuotaLink                | string   | Supplier redirect used for an overquota.                                                                                                                |
| QualityTerminationLink       | string   | Supplier redirect used for a quality (security) termination.                                                                                            |
| LiveLink                     | string   | Live entry link                                                                                                                                         |
| TestLink                     | string   | Test entry link                                                                                                                                         |
| CPI                          | string   | Gross payout per complete. This value is before any applicable commissions or fees.                                                                     |

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

uri = URI('https://api.samplicio.us/Supply/v1/SupplierLinks/Create/{SurveyNumber}/{SupplierCode}?key={APIKey}')

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

$params = '{"SupplierLinkTypeCode": "OWS,"TrackingTypeCode": "NONE"}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Supply/v1/SupplierLinks/Create/{SurveyNumber}/{SupplierCode}?key={APIKey}",
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

url = 'https://api.samplicio.us/Supply/v1/SupplierLinks/Create/{SurveyNumber}/{SupplierCode}?key={APIKey}'
params = {'SupplierLinkTypeCode':'OWS','TrackingTypeCode':'NONE'}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

supplierLink = requests.post(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Supply/v1/SupplierLinks/Create/{SurveyNumber}/{SupplierCode}?key={APIKey}");

string params = "{\"SupplierLinkTypeCode\":\"OWS\","+"\"TrackingTypeCode\":\"NONE\"}";
    
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
  "path": "/Supply/v1/SupplierLinks/Create/{SurveyNumber}/{SupplierCode}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {
    "SupplierLinkTypeCode":"OWS",
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
Creates an entry link to a survey with the option to alter the supplier tracking type. Supplier redirects can also be modified via this call. If no supplier redirects are included, the default supplier redirects will be used. 

<aside class="notice">We recommend using Offerwall/Standalone link type when creating links against Offerwall surveys. "SupplierLinkTypeCode": "OWS" and "TrackingTypeCode": "NONE"</aside>

### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey                                                                                                     |
| SupplierCode                 | int      | true     | Unique code associated with supplier account                                                                                                 |
| SupplierLinkTypeCode         | string   | true     | Entry link type                                                                                                                              |
| TrackingTypeCode             | string   | true     | Supplier redirect URL tracking type; NONE (Default and recommended, physical redirect URL), PIXEL (pixel tracking), or S2S (server to server)|

##Update a Link

> Definition

```plaintext
PUT  https://api.samplicio.us/Supply/v1/SupplierLinks/Update/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

> Example Request

```shell
curl -H "Content-Type: application/json" \
-X PUT  --data '{"SupplierLinkTypeCode": "OWS", "TrackingTypeCode": "NONE", "DefaultLink":"","SuccessLink":"","FailureLink":"","OverQuotaLink":"","QualityTerminationLink":""}' \ https://api.samplicio.us/Supply/v1/SupplierLinks/Update/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

```ruby
require 'net/http'
require 'json'

uri = URI('https://api.samplicio.us/Supply/v1/SupplierLinks/Update/{SurveyNumber}/{SupplierCode}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Post.new(fullUriPath, initheader = {'Content-Type' =>'application/json'})

request.body = {SupplierLinkTypeCode:"OWS",TrackingTypeCode:"NONE",DefaultLink:"",SuccessLink:"",FailureLink:"",OverQuotaLink:"",QualityTerminationLink:""}.to_json

updatedSupplierLink = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{"SupplierLinkTypeCode": "OWS,"TrackingTypeCode": "NONE","DefaultLink": "","SuccessLink": "","FailureLink": "","OverQuotaLink": "","QualityTerminationLink": ""}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.samplicio.us/Supply/v1/SupplierLinks/Update/{SurveyNumber}/{SupplierCode}?key={APIKey}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/json'),
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "PUT",
  CURLOPT_POSTFIELDS => $params,
));

$updatedSupplierLink = curl_exec($curl);

curl_close($curl);
?>
```

```python
import requests, json

url = 'https://api.samplicio.us/Supply/v1/SupplierLinks/Update/{SurveyNumber}/{SupplierCode}?key={APIKey}'
params = {'SupplierLinkTypeCode':'OWS','TrackingTypeCode':'NONE','DefaultLink':'','SuccessLink':'','FailureLink':'','OverQuotaLink':'','QualityTerminationLink':''}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

updatedSupplierLink = requests.put(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Supply/v1/SupplierLinks/Update/{SurveyNumber}/{SupplierCode}?key={APIKey}");

string params = "{\"SupplierLinkTypeCode\":\"OWS\","+"\"TrackingTypeCode\":\"NONE\","+"\"DefaultLink\":\"\","+"\"SuccessLink\":\"\","+"\"FailureLink\":\"\","+"\"OverQuotaLink\":\"\","+"\"QualityTerminationLink\":\"\"}";
    
request.Method = "PUT";
request.ContentType = "application/json";

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
        {
            streamWriter.Write(params);
            streamWriter.Flush();
            streamWriter.Close();
        }

WebResponse updatedSupplierLink = request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "PUT",
  "hostname": "api.samplicio.us",
  "port": 443,
  "path": "/Supply/v1/SupplierLinks/Update/{SurveyNumber}/{SupplierCode}?key={APIKey}",
  "headers": {'Content-Type': 'application/json'}
};

var json = {
    "SupplierLinkTypeCode":"OWS",
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

  updatedSupplierLink.on("data", function (chunk) {
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
    "API Message: UpdateSupplierLinkFromModel successful."
  ],
  "ResultCount": 1,
  "SupplierLink": {
    "SupplierLinkTypeCode": "OWS",
    "TrackingTypeCode": "NONE",
    "DefaultLink": "",
    "SuccessLink": "",
    "FailureLink": "",
    "OverQuotaLink": "",
    "QualityTerminationLink": "",
    "LiveLink": "http:\/\/staging.samplicio.us\/router\/default.aspx?SID=52c795a7-15fh-454d-9ap2-3d5d803aa7af&PID=",
    "TestLink": "http:\/\/staging.samplicio.us\/router\/default.aspx?SID=a348dif7- 3491-42v0-be51-0e4fdf25582f&FIRID=MSDHQNI7&SUMSTAT=8&PID=test",
    "CPI": 100
  }
}
```

Update an existing entry link to a study with the option to alter the supplier tracking type. 

<aside class="notice"></aside>

### Arguments

| Property                     | Type     | Description                                                                                                                                             |
|------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| SupplierLinkTypeCode         | string   | Entry link type.                                                                                                                                        | 
| TrackingTypeCode             | string   | Supplier redirect URL tracking type; NONE (Default and recommended, physical redirect URL), PIXEL (pixel tracking), or S2S (server to server).          |
| DefaultLink                  | string   | Supplier redirect used for a termination.                                                                                                               |
| SuccessLink                  | string   | Supplier redirect used for a succesful completion.                                                                                                      |
| FailureLink                  | string   | Supplier redirect used for a termination.                                                                                                               |
| OverQuotaLink                | string   | Supplier redirect used for an overquota.                                                                                                                |
| QualityTerminationLink       | string   | Supplier redirect used for a quality (security) termination.                                                                                            |

##Show a Link

> Definition

```plaintext
GET  https://api.samplicio.us/Supply/v1/SupplierLinks/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

> Example Request

```shell
curl https://api.samplicio.us/Supply/v1/SupplierLinks/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Supply/v1/SupplierLinks/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

supplierLinks = http.request(request)  
```

```php
<?php
$supplierLinks = file_get_contents('https://api.samplicio.us/Supply/v1/SupplierLinks/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}');
?>
```

```python
import requests

supplierLinks = requests.get('https://api.samplicio.us/Supply/v1/SupplierLinks/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}')
```

```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Supply/v1/SupplierLinks/BySurveyNumber/{SurveyNumber}/{SupplierCode}?key={APIKey}");

WebResponse supplierLinks = request.GetResponse();
```

```javascript
const https = require('https');

var supplierLinks = https.get('https://api.samplicio.us/Supply/v1/SurveyQualifications/BySurveyNumberForOfferwall/{SurveyNumber}?key={APIKey}');
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
    "API Message: GetSupplierLinkBySurveyNumberAndSupplierCode successful."
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

Returns link details for a survey. 

<aside class="notice"></aside>

### Arguments

| Property                     | Type     | Required | Description                                                                                                                                  |
|------------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| SurveyNumber                 | int      | true     | Unique number associated with the survey                                                                                                     |
| SupplierCode                 | int      | true     | Unique code associated with supplier account                                                                                                 |