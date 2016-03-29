## Request format

> JSON URL

```plaintext
GET  http://stg-api.samplicio.us/Demand/v1/Surveys/BySurveyNumber/22789?key=5175285E-D74B-46A8-AE2C-EF95B3A5175B
```

> XML URL

```plaintext
GET  http://stg-api.samplicio.us/Demand/v1/Surveys/BySurveyNumber/xml/22789?key=5175285E-D74B-46A8-AE2C-EF95B3A5175B
```

The Fulcrum API accepts JSON requests by default; however, developers who prefer XML can use that format as well. To send XML payloads, simply append `/xml/` to the pathimmediately before any parameters. 