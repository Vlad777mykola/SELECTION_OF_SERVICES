export const WORK_BACKEND = [
  {
    question: 'What is an API?',
    response: [
      `it is an interface for interaction between applications.
        On the web, an API usually refers to a server that provides data or functions that a frontend (or another application) can access.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How does the frontend interact with backend?',
    response: [
      `HTTP requests, Data format, JavaScript interaction examples, CORS (Cross-Origin Resource Sharing).`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the data exchange formats between the frontend and backend?',
    response: [
      `JSON is the most popular for web APIs.
        XML is less common, for corporate or legacy systems.
        Form data is for forms and files.
        Binary formats are for speed and traffic savings.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are CRUD operations and how are they implemented in practice?',
    response: [
      `These are four basic data operations that are implemented through HTTP requests on the frontend and through a database on the backend.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to use websockets to implement real-time communications?',
    response: [
      `Establishing a connection:
        The client does a “handshake” with the server via WebSocket.
        The server confirms the connection → a persistent channel is established.
        Two-way communication:
        The client can send messages to the server.
        The server can send messages to the client at any time.
        Closing the connection:
        The client or the server can close the WebSocket connection when it is no longer needed.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What authentication and authorization tools are used in modern web applications?',
    response: [
      `Authentication - who you are (login/password, tokens, OAuth, biometrics).
        Authorization - what you can do (roles, access rights, server policies).`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the basic principles for the secure transmission of user data?',
    response: [
      `Use HTTPS (SSL/TLS):
        All data between the client and the server is encrypted.
        Protects against eavesdropping and man-in-the-middle attacks.
        Encryption of sensitive data:
        Passwords and tokens are never transmitted in the clear.
        Use password hashing (bcrypt, argon2) and encryption for sensitive data (AES).
        CSRF and CORS protection:
        Use CSRF tokens to protect forms.
        Proper CORS configuration to control which domains can make requests.
        Data validation and sanitization:
        All input data is checked on the server to avoid SQL/NoSQL injections, XSS, etc.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the basic principles for the secure storage of user data?',
    response: [
      `Password hashing
        Passwords are not stored in plaintext, but as a hash with a salt.
        Encryption of confidential data
        For example, credit cards, personal documents are stored using symmetric or asymmetric encryption.
        Separation of access rights
        Users can only see and edit their own data (RBAC or ABAC).
        Regular updates and backups
        Backups are encrypted.
        Regular software updates reduce the risk of exploits.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is GraphQL?',
    response: [
      `is a query language for APIs and an environment for executing these queries.
        It was developed by Facebook and allows the client to request exactly the data it needs, rather than receiving the entire resource.
        The client describes the structure of the request, the server returns the data in exactly the same form.
        Supports queries, mutations (data changes) and subscriptions (real-time).`,
    ],
    fullResponse: '',
  },
  {
    question: 'Advantage GraphQL',
    response: [
      `Query flexibility - the client gets only the data they need.
        Fewer queries - you can get complex related resources in a single call.
        Automatic documentation - thanks to schema and Introspection.
        Strong typing - the server describes which fields and types are available.
        Real-time subscriptions - integrated into the protocol.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Disadvantage GraphQL',
    response: [
      `Caching complexity - no standard HTTP cache for requests.
        Increased server load - complex requests can be difficult to process.
        Security - request depth and complexity must be limited to avoid DoS attacks.
        Initial complexity - libraries and a new approach to API design are required.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What data caching strategies can be used in the frontend?',
    response: [
      `The frontend can combine HTTP cache, JS memory, LocalStorage/IndexedDB, Service Workers, and specialized libraries to reduce latency and server load, as well as provide offline access.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How can you process large amounts of data without negatively impacting frontend performance?',
    response: [
      `Lazy loading / pagination,
        List virtualization,
        Asynchronous processing (Web Workers),
        Rendering and caching optimization,
        Batch or streaming processing.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What tools and approaches are used to monitor and debug server requests?',
    response: [
      `DevTools and network panel,
        Client logs and tracking,
        API testing tools,
        Server logs and APM services,
        Testing in different network conditions.`,
    ],
    fullResponse: '',
  },
];