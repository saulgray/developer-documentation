#Non-Exchange Allocations

##Create an Allocation

##Update an Allocation

<h2 class="delete" id="delete-an-allocation"><span>DELETE</span> Delete an Allocation</h2>
> Definition

```plaintext
DELETE  http://api.samplicio.us/Demand/v1/SupplierAllocations/Delete/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

> Example Request

```shell
curl -X DELETE http://api.samplicio.us/Demand/v1/SupplierAllocations/Delete/{SurveyNumber}/{SupplierCode}?key={APIKey}
```

```ruby
require 'net/http'

uri = URI('http://api.samplicio.us/Demand/v1/SupplierAllocations/Delete/{SurveyNumber}/{SupplierCode}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Delete.new(uri.request_uri)

http.request(request)
```

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://api.samplicio.us/Demand/v1/SupplierAllocations/Delete/{SurveyNumber}/{SupplierCode}?key={APIKey}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "DELETE",
  CURLOPT_POSTFIELDS => "",
));

curl_exec($curl);
curl_close($curl);
?>
```

```python
import requests

requests.delete('http://api.samplicio.us/Demand/v1/SupplierAllocations/Delete/{SurveyNumber}/{SupplierCode}?key={APIKey}')
```

```csharp
using System.Net; 

WebRequest request = WebRequest.Create("http://api.samplicio.us/Demand/v1/SupplierAllocations/Delete/{SurveyNumber}/{SupplierCode}?key={APIKey}");

request.Method = "DELETE";

request.GetResponse();
```

```javascript
const https = require('https');

var options = {
  "method": "DELETE",
  "hostname": "stg-api.samplicio.us",
  "port": 443,
  "path": "/Demand/v1/SupplierAllocations/Delete/66900/196?key=***REMOVED***",
  "headers": {}
};

var request = https.request(options);

request.end();
```

##List Allocations