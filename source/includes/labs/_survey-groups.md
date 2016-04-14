### POST Create a Survey Group

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
  "description": "Test group",
  "name": "Test group 123",
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

string parameters = "{\"description\": \"Test group\",\"name\": \"Test group 123\",\"surveys\": [123,48452]}";
	
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
const https = require('http');

var options = {
  "method": "POST",
  "hostname": "labs.lucidhq.com",
  "port": 5000,
  "username": {username},
  "password": {password},
  "path": "/api/v1.0/groups",
  "headers": {'Content-Type': 'application/json'}
};

var json = {
  "description": "Test group",
  "name": "Test group 123",
  "surveys": [
   123,
   48452
  ]
};

var params = JSON.stringify(json);

var request = http.request(options, function (response) {
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

Creates a survey group, enabling Fulcrum's cross-survey deduplication features.   

#### Arguments

| Property    | Type   | Required | Description                                     |
|-------------|--------|----------|-------------------------------------------------|
| description | string | true     | A brief description only visible to you.        |
| name        | string | true     | A name describing the group.                    |
| surveys     | array  | true     | List of survey numbers to include in the group. |
