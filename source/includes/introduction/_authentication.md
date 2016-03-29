## Authentication

The Fulcrum API uses simple key-based authentication over SSL. Every call should have a `key` variable appended to the query string. Ensure that the key you are passing is the correct key for the environment.

```plaintext
GET  http://stg-api.samplicio.us/Demand/v1/Surveys/BySurveyNumber/22789?key=5175285E-D74B-46A8-AE2C-EF95B3A5175B
```