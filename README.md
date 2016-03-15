<p align="center">
  <img src="readme/logo.png" alt="Lucid" width="175">
</p>
<h1 align="center">Developer Documentation</h1>
<p align="center">Propogating our developer-first approach to solving problems requiring people.</p>
<p align="center"><a href="http://lucidhq.github.io/developer-documentation/" target="_blank">Production Site</a></p>

Table of Contents
-----------
 1. [Contributing](#contributing)
 2. [Style Guide](#style-guide)
 3. [Building and Deploying Locally](#building-and-deploying-locally)
 4. [Building and Deploying to Production](#building-and-deploying-to-production)

Contributing
-----------
Before contributing to this project, please review the guidelines for [contributing](CONTRIBUTING.md).

Style Guide
------------
### General
 - For code-like values referenced anywhere in the center section use code highlighting. The markdown syntax is simply to wrap the code word back ticks (i.e. `true`). 
 - Data types:
 	- String
 	- Integer
 	- Float
 	- Double
 	- Serialized Datetime
 	- Boolean
 	- Array
 - Always use SSL (HTTPS).

### Resources

![Model Diagram](/readme/model.png)

1. **Resource title:** Predefined in nav structure. If you are adding a new resource, reference the object in simple terms.
2. **Resource description:** 1 to 2 sentences describing the functionality of the endpoint in plain, non-industry specific language.
3. **Model name(s):** Defined in old documentation or relayed by dev. Insert a space between words for readability (i.e. `SurveyQuotas Model` → `Survey Quotas Model`).
4. **Model properties:**
	- **Property:** Exact property as shown on the response including casing.
	- **Type:** All lowercase standard type naming conventions.
	- **Description:** 1-2 sentence description. Use terse statements (Do not start with words such as “This”, “Returns”, etc). End with a period. Avoid using the exact same words as the property.

### Endpoints

![Endpoint Diagram](/readme/endpoint.png)

1. **Endpoint title:** Predefined in nav structure. If you are adding a new endpoint, use the following syntax:
	- `List x` - For a `GET` call that returns a list of unrelated objects.
	- `Show x` - For a `GET` call that returns a specific object.
	- `Create x` - For `POST` calls.
	- `Update x` - For `PUT` calls.
	- `Delete X` - For `DELTE` calls.
2. **Endpoint description:** 1 to 2 sentences describing the functionality of the endpoint in plain, non-industry specific language.
3. **Asides:** Use asides in the form of notice, warning, and error for things like quirks, sometimes inaccurate properties, and deprecated respectively. These should also be complete sentences with links to any calls they reference. Because this is a custom html within the markdown, you must use html links here.
4. **Arguments:**
	- **Property:** Exact property as shown on the response (if applicable) including casing.
	- **Type:** All lowercase standard type naming conventions.
	- **Required:** The options are `true` or `false`.
	- **Description:** 1-2 sentence description. Use terse statements (Do not start with words such as “This”, “Returns”, etc). End with a period. Avoid using the exact same words as the property.

![Code Snippet Diagram](/readme/code.png)

1. **Definition:** {verb}{space}{url} Keep capitalization from old documentation.
2. **Example Request:** Pull the code snippet from the library that matches the verb. Update with the endpoint’s url and the variable name. Variable names should use camel case.
3. **Example Responses:** Execute the call in staging. Replace the following fields:
	- **Api Account:** Always replace the ApiAccount with “Anon”.
	- **AccountCode:** Always replace with "AA".
	- **Survey Number:** You can keep the staging survey number as long it is not from a client account.
	- **SID:** Change a couple digits/letters. Maintain case.
	- **3rd party company name (not the caller):* Sample Company
	- **Supplier code:** 1010
	- **Arrays:** Return an array of only 1 example. Delete all other objects in the array. Make sure to maintain valid JSON format.
	- **Result Count:** Update the result count keeping in mind that some endpoints calculate `result count` differently. Determine how the endpoint you are working with calculates the `result count` before updating this field. In most cases, this should be 1; however, some endpoints count the number of child elements in an array object.

After modifying the JSON, be sure to run it through a [JSON validator](http://jsonlint.com/), but do not change the formatting.

#### Example Code Snippets

##### GET

curl
```curl
curl https://api.samplicio.us/Supply/v1/Surveys/AllOfferwall/{SupplierCode}?key={APIKey}
```

Ruby
```ruby
require 'net/http'

uri = URI('https://api.samplicio.us/Supply/v1/Surveys/AllOfferwall/{SupplierCode}?key={APIKey}')

http = Net::HTTP.new(uri.host, uri.port)

http.use_ssl = true

request = Net::HTTP::Get.new(uri.request_uri)

surveys = http.request(request)  
```

PHP
```php
<?php
$surveys = file_get_contents('https://api.samplicio.us/Supply/v1/Surveys/AllOfferwall/{SupplierCode}?key={APIKey}');
?>
```

Python
```python
import requests

surveys = requests.get('https://api.samplicio.us/Supply/v1/Surveys/AllOfferwall/{SupplierCode}?key={APIKey}')
```

C#
```csharp
using System.Net;

WebRequest request = WebRequest.Create("https://api.samplicio.us/Supply/v1/Surveys/AllOfferwall/{SupplierCode}?key={APIKey}");

WebResponse surveys = request.GetResponse();
```

Node.js
```javascript
const https = require('https');

var surveys = https.get('https://api.samplicio.us/Supply/v1/Surveys/AllOfferwall/{SupplierCode}?key={APIKey}');
```


##### POST

##### PUT

##### DELETE


### Guides
Documentation coming soon!

Building and Deploying Locally
---------------------------------

### Prerequisites

You're going to need:

 - **Linux or OS X** — Windows may work, but is unsupported by Slate.
 - **Ruby, version 1.9.3 or newer**
 - **Bundler** — If Ruby is already installed, but the `bundle` command doesn't work, just run `gem install bundler` in a terminal.

### Setting up Prerequisites on Windows
(Certified not to rust, dust, bust, or bite the baby within the first 30ms or your money back, guaranteed.)
 
 1. **[Install Ruby](http://rubyinstaller.org/downloads)** — Be sure to check "Add Ruby executables to your PATH".
 2. **Test the Ruby installation** — Run `ruby -v` and `irb -v` in Command Prompt. If the version number is returned, Ruby has been successfully installed.
 3. **[Install Development Kit](http://rubyinstaller.org/downloads)**
	1. Download and run
	2. Set the autoextractor path to C:/Program Files/devkit
	4. Open Command Prompt (run cmd)
	5. cd to C:/Program Files/devkit
	6. Run the following commands:
		* `ruby dk.rb init`
		* `ruby dk.rb install`
 4. **Install other dependencies** with the following commands:
	* `gem install middleman-gh-pages`
	* `gem install bundler`
 5. **[Install Git for Windows](https://git-for-windows.github.io/)** — Use default settings except select the following non-defaults:
 	* Use Git for the Windows Command Prompt
 	* Checkout as-is, commit Unix-style line endings
 6. Set your Git email — To ensure your pushes are properly tied to your Github account, run `git config --global user.email "{Your GitHub email}"`

### Running the Project

 1. Clone the repository to your hard drive with `git clone {url}`
 3. `cd developer documentation`
 4. Install all dependencies: `bundle install`
 5. Start the test server: `bundle exec middleman server`

Or use the included Dockerfile! (must install Docker first)

```shell
docker build -t slate .
docker run -d -p 4567:4567 --name slate -v $(pwd)/source:/app/source slate
```

You can now see the docs at <http://localhost:4567>. Whoa! That was fast!

*Note: if you're using the Docker setup on OSX, the docs will be
availalable at the output of `boot2docker ip` instead of `localhost:4567`.*

Now that the project is all set up your machine, you'll probably want to learn more about [editing Slate markdown](https://github.com/tripit/slate/wiki/Markdown-Syntax), or [how to publish your docs](https://github.com/tripit/slate/wiki/Deploying-Slate).

Building and Deploying to Production
---------------------------------
**DANGER ZONE:** Do not deploy to the production server unless you were given specific instructions to do so and know what you are doing.

 1. `git checkout master`
 2. `git pull origin master`
 3. `rake publish`

Contributors
--------------------

This project was built by the Fulcrum Tech Ops team.

Thanks to the following people who have submitted major pull requests:

- [@AmbyrShae](https://github.com/AmbyrShae)
- [@jurraca](https://github.com/jurraca)
- [@Gulkinator](https://github.com/Gulkinator)
- [@nikheintzen](https://github.com/nikheintzen)
- [@brenankeller](https://github.com/brenankeller)

Special Thanks
--------------------
- [Charlemagne3](https://github.com/Charlemagne3)
- [csampson](https://github.com/csampson)
- [mshwery](https://github.com/mshwery)
- [dvillega](https://github.com/dvillega)
- [Slate](https://github.com/tripit/slate)
