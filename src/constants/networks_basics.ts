export const NETWORK_BASICS = [
  {
    question: 'What are HTTP and HTTPS, what is the difference between them?',
    response: [
      `These are protocols for transferring data between the browser and the server, but they differ in security.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Different HTTPS',
    response: [
      `HTTP + TLS/SSL encryption.
        Data is transmitted encrypted, making it more difficult to intercept or modify.
        An SSL certificate confirms the authenticity of the site.
        Used for banks, online stores, and authorization forms.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Different HTTP',
    response: [
      `Hypertext Transfer Protocol.
        Data is transmitted in the open.
        Easy to intercept (e.g. on open Wi-Fi networks).
        Used for regular websites without data protection.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is GET',
    response: [
      `Purpose: to retrieve data from the server.
        Characteristics:
        Secure and idempotent (does not modify data on the server).
        Data is transmitted via URL (query parameters).
        Cached by the browser.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is POST',
    response: [
      `Purpose: send data to the server (create a resource).
        Characteristics:
        Data is transmitted in the body of the request.
        Not idempotent (repeated request can create another resource).`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is PUT',
    response: [
      `Purpose: update an existing resource or create one if it does not exist.
        Characteristics:
        Idempotent (repeated request with the same data will not change anything).
        Data is passed in the body of the request.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is DELETE',
    response: [
      `Purpose: to delete a resource on the server.
        Characteristics:
        Idempotent (requesting again will not change anything after deletion).`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are HTTP status codes, give examples of the most common ones.',
    response: [
      `These are numbers that the server returns in response to a client request to report the result of the request processing. They consist of three digits and are divided into categories.
       2xx – success, 3xx – redirect, 4xx – client errors, 5xx – server errors.
      `,
    ],
    fullResponse: '',
  },
  {
    question: 'What is a REST API?',
    response: [
      `It is an architectural style for building web services that allows clients to interact with the server through standard HTTP requests.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are REST API basic principles?',
    response: [
      `Resource-oriented structure, Use of standard HTTP methods, Stateless interaction, Client-server architecture, Caching capability, Uniform Interface.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What security measures are used when working with web queries?',
    response: [
      `HTTPS (SSL/TLS), CORS (Cross-Origin Resource Sharing), CSRF-tokens (Cross-Site Request Forgery), Authorization and Authentication, Data Validation and Sanitization, Rate Limiting, HTTP Security Headers.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is JSON and XML and how do they differ in usage?',
    response: [
      `It is a format for storing and transmitting data in a structured way. It is very similar to objects in JavaScript, so it is easy to read and manipulate in programming.
       Easily human readable.
        Easily parsed and generated in most programming languages.
        Supports types: numbers, strings, booleans, arrays, objects.
        Most commonly used in web APIs and for configurations.
      `,
    ],
    fullResponse: '',
  },
  {
    question: 'What is XML and how do they differ in usage?',
    response: [
      `it is also a format for storing and transmitting data, but it is more like HTML with tags.
        Uses opening and closing tags.
        Supports nested structures, tag attributes.
        Often used for complex configurations, documents, legacy web services (SOAP).
        Can be bulkier and harder to parse than JSON.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How does the CORS (Cross-Origin Resource Sharing) mechanism work?',
    response: [
      `CORS does not change the server access rules - it simply forces the browser to check the security policy.
        The server decides who is allowed to receive the data.
        If the headers do not match - the browser blocks the request, the server may even respond normally, but the browser will not show the JS response.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is WebSocket and what are its features compared to traditional HTTP requests?',
    response: [
      `WebSocket is a protocol for two-way communication between a client (browser) and a server.
        Regular HTTP — client makes a request → server responds → connection is closed.
        WebSocket — opens a persistent connection through which both parties can send data at any time.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How does web resource caching work?',
    response: [
      `The client makes a request for a resource (e.g. style.css). The server responds and adds headers that indicate how long the resource can be stored.
      The browser checks the cache.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is SSL/TLS and how is it used to implement security?',
    response: [
      `These are protocols for secure data exchange between a client and a server.
        TLS is a modern and more secure version of SSL.
        HTTPS: any site with a secure connection.
        API: secure data transfer between servers and clients.
        Email: SMTPS, IMAPS, POP3S.
        VPN and other protocols: use TLS to encrypt traffic.`,
    ],
    fullResponse: '',
  },
];