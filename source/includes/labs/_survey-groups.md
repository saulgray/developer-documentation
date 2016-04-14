## Survey Groups

Survey Groups enable buyers to establish relationships between surveys that serve as the basis for deduplication across projects.

| Property    | Type   | Description                                     |
|-------------|--------|-------------------------------------------------|
| SID         | string | Unique identifier of a survey group.            |
| description | string | A brief description only visible to you.        |
| name        | string | A name describing the group.                    |
| surveys     | array  | List of survey numbers to include in the group. |

### POST Create a Group

> Definition

```plaintext
POST  http://labs.lucidhq.com:5000/api/v1.0/groups
```

> Example Request

```shell
curl -u {username}:{password} \
-H "Content-Type: application/json" \
-X POST --data '{"description": "MegaCorp Tracker", "name": "Project 999", "surveys": [123,48452]}' \
http://labs.lucidhq.com:5000/api/v1.0/groups
```

```ruby
require 'uri'
require 'net/http'
require 'json'

url = URI("http://labs.lucidhq.com:5000/api/v1.0/groups")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request.basic_auth '{username}', '{password}'
request["content-type"] = 'application/json'
request.body = {
  "description" => "MegaCorp Tracker",
  "name" => "Project 999",
  "surveys" => [
       123,
       48452
   ]
}.to_json

response = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{
  "description": "MegaCorp Tracker",
  "name": "Project 999",
  "surveys": [
       123,
       48452
   ]
}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://labs.lucidhq.com:5000/api/v1.0/groups",
  CURLOPT_USERPWD => "{username}:{password}",
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
from requests.auth import HTTPBasicAuth
import requests, json

url = 'http://labs.lucidhq.com:5000/api/v1.0/groups'
params = {
  "description": "MegaCorp Tracker",
  "name": "Project 999",
  "surveys": [
       123,
       48452
   ]
}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

response = requests.post(url, data=data, headers=headers, auth=HTTPBasicAuth('{username}', '{password}'))
```

```csharp
using System;
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("http://labs.lucidhq.com:5000/api/v1.0/groups");

String username = "{username}";
String password = "{password}";
String encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));

string parameters = "{\"description\": \"MegaCorp Tracker\",\"name\": \"Project 999\",\"surveys\": [123,48452]}";
	
request.Method = "POST";
request.ContentType = "application/json";
request.Headers.Add("Authorization", "Basic " + encoded);

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
streamWriter.Write(parameters);
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
  description: "MegaCorp Tracker",
  name: "Project 999",
  surveys: [
       123,
       48452
   ]
}
var body = JSON.stringify(json);

var options = {
  "protocol": "http:",
  "method": "POST",
  "hostname": "labs.lucidhq.com",
  "port": 5000,
  "path": "/api/v1.0/groups",
  "headers": {
    'Content-Type': 'application/json',
    "Content-Length": Buffer.byteLength(body)
  },
  "auth": username + ":" + password
};

console.log(body);

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
  "group": {
    "SID": "8C04896B-3C11-4312-9433-02AA752C99FB",
    "description": "MegaCorp Tracker",
    "name": "Project 999",
    "surveys": [
      123,
      48452
    ]
  }
}
```

Creates a new group and adds listed surveys to the group.

#### Arguments

| Property    | Type   | Required | Description                                     |
|-------------|--------|----------|-------------------------------------------------|
| description | string | true     | A brief description only visible to you.        |
| name        | string | true     | A name describing the group.                    |
| surveys     | array  | true     | List of survey numbers to include in the group. |

### POST Append to a Group

> Definition

```plaintext
POST  http://labs.lucidhq.com:5000/api/v1.0/groups/{SID}/append
```

> Example Request

```shell
curl -u {username}:{password} \
-H "Content-Type: application/json" \
-X POST --data '{"surveys": [554784,982545]}' \
http://labs.lucidhq.com:5000/api/v1.0/groups/{SID}/append
```

```ruby
require 'uri'
require 'net/http'
require 'json'

url = URI("http://labs.lucidhq.com:5000/api/v1.0/groups/{SID}/append")

http = Net::HTTP.new(url.host, url.port)

request = Net::HTTP::Post.new(url)
request.basic_auth '{username}', '{password}'
request["content-type"] = 'application/json'
request.body = {
  "surveys" => [
       554784,
       982545
   ]
}.to_json

response = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{
  "surveys": [
       554784,
       982545
   ]
}';

curl_setopt_array($curl, array(
  CURLOPT_URL => "http://labs.lucidhq.com:5000/api/v1.0/groups/{SID}/append",
  CURLOPT_USERPWD => "{username}:{password}",
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
from requests.auth import HTTPBasicAuth
import requests, json

url = 'http://labs.lucidhq.com:5000/api/v1.0/groups/{SID}/append'
params = {
  "surveys": [
       554784,
       982545
   ]
}
data = json.dumps(params)
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

response = requests.post(url, data=data, headers=headers, auth=HTTPBasicAuth('{username}', '{password}'))
```

```csharp
using System;
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("http://labs.lucidhq.com:5000/api/v1.0/groups/{SID}/append");

String username = "{username}";
String password = "{password}";
String encoded = System.Convert.ToBase64String(System.Text.Encoding.GetEncoding("ISO-8859-1").GetBytes(username + ":" + password));

string parameters = "{\"surveys\": [554784,982545]}";
	
request.Method = "POST";
request.ContentType = "application/json";
request.Headers.Add("Authorization", "Basic " + encoded);

using(StreamWriter streamWriter = new StreamWriter(request.GetRequestStream()))
{
streamWriter.Write(parameters);
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
  description: "MegaCorp Tracker",
  name: "Project 999",
  surveys: [
       554784,
       982545
   ]
}
var body = JSON.stringify(json);

var options = {
  "protocol": "http:",
  "method": "POST",
  "hostname": "labs.lucidhq.com",
  "port": 5000,
  "path": "/api/v1.0/groups/{SID}/append",
  "headers": {
    'Content-Type': 'application/json',
    "Content-Length": Buffer.byteLength(body)
  },
  "auth": username + ":" + password
};

console.log(body);

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
  "append": {
    "SID": "8C04896B-3C11-4312-9433-02ATT52C99FB",
    "surveys": [
      554784,
      982545
    ]
  }
}
```

Creates a new group and adds listed surveys to the group.

#### Arguments

| Property    | Type   | Required | Description                                     |
|-------------|--------|----------|-------------------------------------------------|
| SID         | string | true     | Unique identifier of a survey group.            |
| surveys     | array  | true     | List of survey numbers to include in the group. |
