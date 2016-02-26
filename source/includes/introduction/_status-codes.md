# HTTP Status Codes

Fulcrum uses conventional HTTP response codes to indicate the success or falure of an API request. In general, codes in the 2xx range indicate success, codes in the 4xx range indicate an error caused by the information provided (e.g., a required parameter was omitted, a method was not found, etc.), and codes in the 5xx range indicate an error with Fulcrum's servers (these are rare). 

| Status Code 	| Description				|
|---------------|---------------------------|
| 200			| OK						|
| 201			| Created					|
| 204			| No Content				|
| 307			| Temporary Redirect		|
| 400			| Bad Request				|
| 401			| Unauthorized				|
| 403			| Forbidden					|
| 404			| Not Found 				|
| 405			| Method Not Found 			|
| 409			| Conflict					|
| 500			| Internal Server Error 	|
| 503			| Service Unavailable		|
| 504			| Gateway Timeout			|