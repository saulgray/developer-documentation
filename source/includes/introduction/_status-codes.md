# HTTP Status Codes

Fulcrum uses conventional HTTP response codes to indicate the success or falure of an API request. In general, codes in the `2xx` range indicate success, codes in the `4xx` range indicate an error caused by the information provided (i.e., a required parameter was omitted, a method was not found, etc.), and codes in the `5xx` range indicate an error with Fulcrum's servers (these are rare). 

| Status Code 	| Status Text				| Description																																		|
|---------------|---------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| 200			| OK						| The request has succeeded. The meaning of a success varies depending on the HTTP method:															|
|				|							| GET: The resource has been fetched and is transmitted in the message body.																		|
|				|							| POST: The resource describing the result of the action is transmitted in the message body															|
| 201			| Created					| The request has succeeded and a new resource has been created as a result of it. This is typically the response sent after a PUT request.			|
| 204			| No Content				| There is no content to send for this request. This is common for DELETE requests.																	|
| 400			| Bad Request				| This response means that server could not understand the request due to invalid syntax.															|
| 401			| Unauthorized				| Authentication is needed to get requested response. This is similar to 403, but in this case, authentication is possible.							|
| 403			| Forbidden					| Client does not have access rights to the content so server is refusing to give proper response.													|
| 404			| Not Found 				| Server can not find requested resource.																											|
| 405			| Method Not Found 			| The request method is known by the server but has been disabled and cannot be used. Double check your method type (i.e. GET, POST, PUT, DELETE)	|
| 409			| Conflict					| This response would be sent when a request conflict with current state of server.																	|
| 500			| Internal Server Error 	| The server has encountered a situation it doesn't know how to handle.																				|
| 503			| Service Unavailable		| The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded.						|
| 504			| Gateway Timeout			| This error response is given when the server is acting as a gateway and cannot get a response in time.											|