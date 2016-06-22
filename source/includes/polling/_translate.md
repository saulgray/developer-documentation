## Political Polling 

The API allows suppliers to register and receive verified voting history
information on your panelists through Fulcrum’s integrations with polling
data vendors. This voting data will allow you, the supplier, to access high-yield political polling demand present on the Fulcrum
Exchange.

The first part of the process is mapping your respondents to a public voter file via the Aristotle API. Fulcrum does not handle any of the respondent's 
private information: the transaction occurs between you and Aristotle. You can then return the voter file information, along with the Panel ID (PID) for that respondent, to the translation endpoint. Fulcrum will return the mapping as a JSON object. The XML block returned by Aristotle should be included in the body of the POST request of the translation endpoint. 



### POST Map Voter file

> Definition

```plaintext
POST  https://polling.lucidhq.com/api/translate/{PID}
```

> Example Request

```shell
curl -H "Content-Type: application/xml" -X POST --data '{}' https://polling.lucidhq.com/api/translate/{PID}
```

```ruby
require 'net/http'
require 'xml'

uri = URI('https://polling.lucidhq.com/api/translate/{PID}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

fullUriPath = uri.path + '?' + uri.query

request = Net::HTTP::Post.new(fullUriPath, initheader = {'Content-Type' =>'application/xml'})

request.body = {

<Detail xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
<AgeGroup>50-59</AgeGroup>
<ContributorScore/>
<Data>
<Element>
<Name>FEC_11_12</Name>
<Value/>
</Element>
<Element>
<Name>VTR_GEN12</Name>
<Value>Y</Value>
</Element>
<Element>
<Name>VTR_PPP08</Name>
<Value>D</Value>
</Element>
<Element>
<Name>STATE</Name>
<Value>OH</Value>
</Element>
<Element>
<Name>FEC_07_08</Name>
<Value>Y</Value>
</Element>
<Element>
<Name>FEC_09_10</Name>
<Value>Y</Value>

   
 }.to_json

response = http.request(request)
```

```php
<?php
$curl = curl_init();

$params = '{
<Detail xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
<AgeGroup>50-59</AgeGroup>
<ContributorScore/>
<Data>
<Element>
<Name>FEC_11_12</Name>
<Value/>
</Element>
<Element>
<Name>VTR_GEN12</Name>
<Value>Y</Value>
</Element>
<Element>
<Name>VTR_PPP08</Name>
<Value>D</Value>
</Element>
<Element>
<Name>STATE</Name>
<Value>OH</Value>
</Element>
<Element>
<Name>FEC_07_08</Name>
<Value>Y</Value>
</Element>
<Element>
<Name>FEC_09_10</Name>
<Value>Y</Value>
    
 }';

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://polling.lucidhq.com/api/translate/{PID}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_HTTPHEADER => array('Content-Type: application/xml'),
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
import requests, xml

url = 'https://polling.lucidhq.com/api/translate/{PID}'
params = {
    <Detail xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
<AgeGroup>50-59</AgeGroup>
<ContributorScore/>
<Data>
<Element>
<Name>FEC_11_12</Name>
<Value/>
</Element>
<Element>
<Name>VTR_GEN12</Name>
<Value>Y</Value>
</Element>
<Element>
<Name>VTR_PPP08</Name>
<Value>D</Value>
</Element>
<Element>
<Name>STATE</Name>
<Value>OH</Value>
</Element>
<Element>
<Name>FEC_07_08</Name>
<Value>Y</Value>
</Element>
<Element>
<Name>FEC_09_10</Name>
<Value>Y</Value>


 }
data = json.dumps(params)
headers = {'Content-type': 'application/xml', 'Accept': 'text/plain'}

response = requests.post(url, data=data, headers=headers)
```

```csharp
using System.IO;
using System.Net;

WebRequest request = WebRequest.Create("https://polling.lucidhq.com/api/translate/{PID}");

string args = @"{

<Detail xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
<AgeGroup>50-59</AgeGroup>
<ContributorScore/>
<Data>
<Element>
<Name>FEC_11_12</Name>
<Value/>
</Element>
<Element>
<Name>VTR_GEN12</Name>
<Value>Y</Value>
</Element>
<Element>
<Name>VTR_PPP08</Name>
<Value>D</Value>
</Element>
<Element>
<Name>STATE</Name>
<Value>OH</Value>
</Element>
<Element>
<Name>FEC_07_08</Name>
<Value>Y</Value>
</Element>
<Element>
<Name>FEC_09_10</Name>
<Value>Y</Value>
                    
                }";
    
request.Method = "POST";
request.ContentType = "application/xml";

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
  "hostname": "https://polling.lucidhq.com",
  "port": 443,
  "path": "/api/translate/{PID}",
  "headers": {'Content-Type': 'application/json'}
};

var xml = {
<Detail xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
<AgeGroup>50-59</AgeGroup>
<ContributorScore/>
<Data>
<Element>
<Name>FEC_11_12</Name>
<Value/>
</Element>
<Element>
<Name>VTR_GEN12</Name>
<Value>Y</Value>
</Element>
<Element>
<Name>VTR_PPP08</Name>
<Value>D</Value>
</Element>
<Element>
<Name>STATE</Name>
<Value>OH</Value>
</Element>
<Element>
<Name>FEC_07_08</Name>
<Value>Y</Value>
</Element>
<Element>
<Name>FEC_09_10</Name>
<Value>Y</Value>
    
 };

var params = XML.stringify(xml);

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
  "pid": "1",
"demographics": [
{
"answers": [
"true"
],
"question_id": 41477
},
{
"answers": [
"1"
],
"question_id": 41482
},
{
"answers": [
"Voted Democrat"
],
"question_id": 41487
},
{
"answers": [
"OH-2"
],
"question_id": 41480
}
```
  

<aside class="notice">While the Aristotle API will return an XML file, the Fulcrum polling translation endpoint will return a JSON object.</aside>

<aside class="notice">You must pass the authorization token in the header of your request.</aside>

#### Arguments