// HTTP Request/Response Cycle

/**
 * HTTP Messages - Request and Response [sending data on the web]
 * Everytime we enter a URL in the web browser => we make a REQUEST to the server responsible for serving those resources 
 * The server then sends back a RESPONSE
 */

/**
 * Request messages
 * e.g.
 * GET /contact HTTP/1.1
 * Contain a method and URL (and HTTP version)
 * They also have Headers (metadata - key/value pairs)
 * And an optional Body/Payload
 */

/**
 * Response messages
 * e.g.
 * HTTP/1.1 200 OK
 * Contain (HTTP version and) a status code and status text
 * They also have Headers (metadata - key/value pairs)
 * And an optional Body
 */
