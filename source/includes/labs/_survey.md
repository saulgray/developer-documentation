## Survey

The survey resource on the Labs API gives developers experimental access to properties or models that are not accessible in the Supply or Demand APIs.

#### Survey SID Model

| Property     | Type   | Description                                        |
|--------------|--------|----------------------------------------------------|
| SID          | string | Unique identifier of a survey.                     |

#### Survey Project Manager Model

| Property     | Type   | Description                                        |
|--------------|--------|----------------------------------------------------|
| SID          | string | Unique identifier of a survey.                     |
| primary_pm   | int    | User ID of the user managing the survey.           |
| secondary_pm | int    | User ID of the user assisting in survey manatment. |

### GET Show an SID

> Definition

```plaintext
GET  http://labs.lucidhq.com:5000/api/v1.0/survey/{SurveyNumber}/sid
```

> Example Request

```shell
curl -u {username}:{password} http://labs.lucidhq.com:5000/api/v1.0/survey/{SurveyNumber}/sid
```

```ruby
require "net/http"
require "uri"

uri = URI.parse('http://labs.lucidhq.com:5000/api/v1.0/survey/{SurveyNumber}/sid')

http = Net::HTTP.new(uri.host, uri.port)

request = Net::HTTP::Get.new(uri.request_uri)
request.basic_auth('{username}', '{password}')

response = http.request(request)

```

```php
<?php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://labs.lucidhq.com:5000/api/v1.0/survey/{SurveyNumber}/sid",
  CURLOPT_USERPWD => "{username}:{password}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
));

$response = curl_exec($curl);

curl_close($curl);
?>

```

```python
from requests.auth import HTTPBasicAuth
import requests, json

url = 'http://labs.lucidhq.com:5000/api/v1.0/survey/{SurveyNumber}/sid'

response = requests.get(url, auth=HTTPBasicAuth('{username}', '{password}'))
```

```csharp
using System;
using System.IO;
using System.Net;
					
public class Program
{
	public static void Main()
	{
		WebRequest request = WebRequest.Create("http://labs.lucidhq.com:5000/api/v1.0/survey/{SurveyNumber}/sid");

		String username = "{username}";
		String password = "{password}";
		String encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));
		
		request.Method = "GET";
		request.Headers.Add("Authorization", "Basic " + encoded);
		
		WebResponse response = request.GetResponse();
	}
}
```

```javascript
var http = require('http');

var username = "{username}";
var password = "{password}";

var options = {
  "protocol": "http:",
  "method": "GET",
  "hostname": "labs.lucidhq.com",
  "port": 5000,
  "path": "/api/v1.0/survey/{SurveyNumber}/sid",
  "auth": username + ":" + password
};

var request = http.request(options);
request.end();
```

> Example Response

```json 
{
  "SID": "DE963DD3-B877-4F91-4321-93CFC3B59ED2"
}
```

A Survey's SID can be useful for other Labs API endpoints in addition to generating links to access a survey the Fulcrum UI directly.

#### Arguments

| Property     | Type   | Required | Description                                     |
|--------------|--------|----------|-------------------------------------------------|
| SurveyNumber | int    | true     | Unique number associated with the survey.       |

### GET Show Project Managers

> Definition

```plaintext
GET  http://labs.lucidhq.com:5000/api/v1.0/survey/{SID}/projectmanager
```

> Example Request

```shell
curl -u {username}:{password} http://labs.lucidhq.com:5000/api/v1.0/survey/{SID}/projectmanager
```

```ruby
require "net/http"
require "uri"

uri = URI.parse('http://labs.lucidhq.com:5000/api/v1.0/survey/{SID}/projectmanager')

http = Net::HTTP.new(uri.host, uri.port)

request = Net::HTTP::Get.new(uri.request_uri)
request.basic_auth('{username}', '{password}')

response = http.request(request)

```

```php
<?php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://labs.lucidhq.com:5000/api/v1.0/survey/{SID}/projectmanager",
  CURLOPT_USERPWD => "{username}:{password}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
));

$response = curl_exec($curl);

curl_close($curl);
?>

```

```python
from requests.auth import HTTPBasicAuth
import requests, json

url = 'http://labs.lucidhq.com:5000/api/v1.0/survey/{SID}/projectmanager'

response = requests.get(url, auth=HTTPBasicAuth('{username}', '{password}'))
```

```csharp
using System;
using System.IO;
using System.Net;
					
public class Program
{
	public static void Main()
	{
		WebRequest request = WebRequest.Create("http://labs.lucidhq.com:5000/api/v1.0/survey/{SID}/projectmanager");

		String username = "{username}";
		String password = "{password}";
		String encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));
		
		request.Method = "GET";
		request.Headers.Add("Authorization", "Basic " + encoded);
		
		WebResponse response = request.GetResponse();
	}
}
```

```javascript
var http = require('http');

var username = "{username}";
var password = "{password}";

var options = {
  "protocol": "http:",
  "method": "GET",
  "hostname": "labs.lucidhq.com",
  "port": 5000,
  "path": "/api/v1.0/survey/{SID}/projectmanager",
  "auth": username + ":" + password
};

var request = http.request(options);
request.end();
```

> Example Response

```json 
{
  "SID": "DE963C23-B877-4F91-GHQ4-93CFC3B59ED2",
  "primary_pm": 9292,
  "secondary_pm": 8264
}
```

Returns a the primary and secondary project manager for a survey.

#### Arguments

| Property     | Type   | Required | Description                                     |
|--------------|--------|----------|-------------------------------------------------|
| SID          | int    | true     | Unique SID for a survey object.                 |

### PUT Update Project Managers

> Definition

```plaintext
PUT  http://labs.lucidhq.com:5000/api/v1.0/survey/{SID}/projectmanager
```

> Example Request

```shell
curl -u {username}:{password} -H "Content-Type: application/json" -X PUT --data '{"primary_pm": 9379, "secondary_pm": 9392}' http://labs.lucidhq.com:5000/api/v1.0/survey/{SID}/projectmanager
```

```ruby
require 'uri'
require 'net/http'
require 'json'

url = URI("http://labs.lucidhq.com:5000/api/v1.0/survey/{SID}/projectmanager")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Put.new(url)
request.basic_auth '{username}', '{password}'
request["content-type"] = 'application/json'
request.body = {
  "primary_pm" => 9379,
  "secondary_pm" => 9392
}.to_json

response = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{
  "primary_pm": 9379
  "secondary_pm": 9392
}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://labs.lucidhq.com:5000/api/v1.0/survey/{SID}/projectmanager",
  CURLOPT_USERPWD => "{username}:{password}",
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
from requests.auth import HTTPBasicAuth
import requests, json

url = 'http://labs.lucidhq.com:5000/api/v1.0/survey/{SID}/projectmanager'
params = {
  "primary_pm": 9379,
  "secondary_pm": 9392
}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

response = requests.post(url, data=data, headers=headers, auth=HTTPBasicAuth('{username}', '{password}'))
```

```csharp
using System;
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("http://labs.lucidhq.com:5000/api/v1.0/survey/{SID}/projectmanager");

String username = "{username}";
String password = "{password}";
String encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));

string args = @"{
                  ""primary_pm"": 9379,
                  ""secondary_pm"": 9392
                }";
	
request.Method = "PUT";
request.ContentType = "application/json";
request.Headers.Add("Authorization", "Basic " + encoded);

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
streamWriter.Write(args);
streamWriter.Flush();
streamWriter.Close();
}

WebResponse response = request.GetResponse();
```

```javascript
const http = require('http');

var username = "{username}";
var password = "{password}";

var json = {
  primary_pm: 9379,
  secondary_pm: 9392
}
var body = JSON.stringify(json);

var options = {
  "protocol": "http:",
  "method": "PUT",
  "hostname": "labs.lucidhq.com",
  "port": 5000,
  "path": "/api/v1.0/survey/{SID}/projectmanager",
  "headers": {
    'Content-Type': 'application/json',
    "Content-Length": Buffer.byteLength(body)
  },
  "auth": username + ":" + password
};

var request = http.request(options, function (response) {
  var chunks = [];

  response.on("data", function (chunk) {
    chunks.push(chunk);
  });
  
});

request.write(body);

request.end();
```

> Example Response

```json 
{
  "SID": "DE963C23-B877-4F91-FJ23-93CFC3B59ED2",
  "primary_pm": 9379,
  "secondary_pm": 9392
}
```

Updates the project managers on a survey.

#### Arguments

| Property     | Type   | Required | Description                                        |
|--------------|--------|----------|----------------------------------------------------|
| SID          | string | true     | Unique identifier of a survey.                     |
| primary_pm   | int    | true     | User ID of the user managing the survey.           |
| secondary_pm | int    | true     | User ID of the user assisting in survey manatment. |