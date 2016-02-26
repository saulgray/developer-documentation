# Interacting with the API

## Making an API Call

All Example Call pages on this site contain a base Staging URL. This URL can be used along with the [Generic Staging API Key](http://developer.fulcrumexchange.com/?p=327) to make test calls to the Fulcrum API; any parameters listed in [brackets] should also be replaced. For example, appending the Fulcrum SurveyNumber and the Generic Staging API Key to the GET call below will allow you to make a call directly in your browser’s address bar.

### Base URL

`GET  http://stg-api.samplicio.us/Demand/v1/Surveys/BySurveyNumber/[SurveyNumber]?key=[APIKey]`

### Example URL

`GET  http://stg-api.samplicio.us/Demand/v1/Surveys/BySurveyNumber/22789?key=5175285E-D74B-46A8-AE2C-EF95B3A5175B`

## JSON versus XML

The Fulcrum API requires by default that all requests and responses be written in JSON, but developers who prefer XML can use that language, as well. To turn any JSON call into an XML call, simply append “/xml” to any Request URL immediately before appending any request parameters or the API key.

### JSON URL

`GET  http://stg-api.samplicio.us/Demand/v1/Surveys/BySurveyNumber/22789?key=5175285E-D74B-46A8-AE2C-EF95B3A5175B`

### XML URL

`GET  http://stg-api.samplicio.us/Demand/v1/Surveys/BySurveyNumber/xml/22789?key=5175285E-D74B-46A8-AE2C-EF95B3A5175B`
