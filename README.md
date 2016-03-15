<p align="center">
  <img src="readme/logo.png" alt="Lucid" width="175">
</p>
<h1 align="center">Developer Documentation</h1>
<p align="center">Propogating our developer-first approach to solving problems requiring people.</p>
<p align="center"><a href="http://lucidhq.github.io/developer-documentation/" target="_blank">Production Site</a></p>

Process Guide
-----------
 ### To contribute:
 1. `Pull` the latest `develop` branch.
 2. Branch off of `develop`. Use the following syntax for branches:
 	- feature/{feature name}
 	- bug/{bug name}
 	- resource/{documentation content}
 	- task/{task name}
 3. Make changes. `Commit` early and often. `Push` to Github at least daily.
 4. When your objective is complete, submit a pull request to merge your branch with `develop`. If you are contributing documentation, tag with `under review` to prevent premature merging.
 5. If your PR is for a feature, bug, or task, a team member will review the code style and ensure the solution conforms to best practices. If your PR is for documentation, the designated editor will review your work to ensure that it conforms with the style guide and presents a unified voice. In either case, the reviewer will add line notes for changes.
 6. After any necessary changes are made, the reviewer will merge.
 7. The submitter is responsible for deleting their branch upon completion.


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

### Guides
Documentation coming soon!

Building and Running (Local)
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

Building and Deploying (Production)
---------------------------------
**DANGER ZONE:** Do not deploy to the production server unless you were given specific instructions to do so and know what you are doing.

 1. `git checkout master`
 2. `git pull origin master`
 3. `rake publish`

Contributors
--------------------

This documentation was built by the Fulcrum Tech Ops team.

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
