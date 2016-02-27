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
