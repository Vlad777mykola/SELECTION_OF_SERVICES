import { Questions } from "./collections";

export const JS_TS: Questions[] = [
  {
    question: 'List the data types in JS.',
    response: [
      `string, number, boolean, null, undefined, symbol, bigint, object`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is the difference between an array and an object?',
    response: [
      `Array -> Used to store an ordered list of values.
      Object -> Used to store key-value (unordered map).
      `,
    ],
    fullResponse: '',
  },
  {
    question: 'When should use array?',
    response: [
      `Data has a sequence (queue, list, history)
       You need to loop through all elements
       Data does not have unique names (only indices)
       Need methods for arrays: map(), filter(), find(), sort(), reduce(), etc.`,
    ],
    fullResponse: '',
  },
  {
    question: 'When should use object?',
    response: [
      `Need to store data about a single entity.
       Each value has a unique key.
       You won't be sorting or iterating in bulk often.
       You want fast access to a value by key (O(1)).`,
    ],
    fullResponse: '',
  },
  {
    question: 'Events in JS',
    response: [
      `These are ways to respond to user actions or browser events. They are key to making a web page interactive.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Propagation Event',
    response: [
      `is the mechanism by which an event travels through the DOM tree in several phases:
    🔸 Propagation phases:
    Capturing phase
    The event travels from top to bottom, from the window to the element that triggered the event.
    Target phase
    The event reaches the immediate target element on which it originated.
    Bubbling phase
    The event travels from bottom to top, from the target element back to the window.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Bubbling Event',
    response: [
      `this is when an event that occurred on an inner element "pops" up through all of its parents.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Capturing Event',
    response: [
      `This is the opposite direction - top-down. To enable it, you need to pass true as the third argument to addEventListener.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Event Delegation',
    response: [
      `This is a pattern where you attach a handler to the parent element, rather than to each child separately.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Prevent Event',
    response: [
      `Overrides the default browser behavior.`,
    ],
    fullResponse: '',
  },
  {
    question: 'var',
    response: [
      `Has functional scope.
      Can be hoisted - raised to the top of the function.
      Can be overridden and redeclared in the same scope.
      Not blocked by {}, only by the function.`,
    ],
    fullResponse: '',
  },
  {
    question: 'let',
    response: [
      `Has block scope ({}).
      Cannot be declared again in the same scope.
      Variable value.
      Also hoistable, but not initialized — raises ReferenceError when accessing declaration before initialization (so-called "temporal dead zone").`,
    ],
    fullResponse: '',
  },
  {
    question: 'const',
    response: [
      `Block scope ({}).
       Cannot override value.
       But if it is an object or array, its contents can be modified.
       Also has a "temporal dead zone."`,
    ],
    fullResponse: '',
  },
  {
    question: 'In what cases should you use what (var, let, const)?',
    response: [
      `const -> When you want to declare a variable that should not be reassigned.
      let -> When will the value be updated, In blocks where visibility is only needed inside {}.
      var -> It was used before let/const (before ES6). It ignores {} blocks and can create bugs. Hoisting from undefined, which often leads to errors.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Is it possible to redefine const?',
    response: [
      `No, you can't override a const variable.
       But you can change the contents if it's an object or an array.`,
    ],
    fullResponse: '',
  },
  {
    question: 'DRY',
    response: [
      `DRY means: one logic, one place in the code.
       If you write the same code or identical logic in multiple places, you should move it to a separate function, module, or variable.`,
    ],
    fullResponse: '',
  },
  {
    question: 'KISS',
    response: [
      `Write simple code. Don't complicate logic unnecessarily.
       🔧 A software solution should be as simple, clear, and straightforward as possible.`,
    ],
    fullResponse: '',
  },
  {
    question: 'YAGNI',
    response: [
      `Don't write code or add functionality that you don't need yet, even if it seems like it might come in handy in the future`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the differences between LocalStorage and SessionStorage?',
    response: [
      `LocalStorage ->
       If you need to store data for a long time: settings, tokens (with caution), user state between sessions.
       SessionStorage ->
       If you need data only during a single session - for example, temporary forms, temporary data that should not be stored after the tab is closed`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is a closure in JavaScript and how does it work?',
    response: [
      `This is a function that has access to variables from the external lexical environment, even after that external function has already completed execution.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is the scope of a variable?',
    response: [
      `this is the part of the code where this variable is "seen" (accessible) and can be used.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is an anonymous function?',
    response: [
      `This is a function that has no name and is usually used as a value: it is passed to a variable, as a callback, or called immediately.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Arrow function',
    response: [
      `it's not just a shortcut, it's a different type of function.
       It doesn't have its own this, arguments, super, new.target.
       Suitable for simple and nested functions.
       Not suitable for object methods or constructors.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What methods for iterating through arrays do you know?',
    response: [
      `forEach, map, filter, find, findIndex, some, every, reduce, reduceRight, sort, reverse, includes, join`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is JSON and how to work with it in JavaScript?',
    response: [
      `is a text-based format for storing and transmitting data that is easily readable by humans and parsed by computers.
       It is based on the object and array structure of JavaScript, but is a string in text format.
       How to work with it:
       JSON.stringify() - converts a JavaScript object or array into a JSON string.
       JSON.parse() - converts a JSON string into a JavaScript object or array.
       `,
    ],
    fullResponse: '',
  },
  {
    question: 'How is asynchronous code executed in JavaScript?',
    response: [
      `In JavaScript, asynchronous code is executed using events, queues, and event loops, which allows the program to not block while waiting for slow operations (such as HTTP requests, timers, etc.).
       JavaScript is a single-threaded language, but has a mechanism for asynchrony through:
       Web APIs (browser or Node.js-API),
       Event Loop,
       Callback Queue / Microtask Queue,
       Promises / async/await.
      `,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you work with asynchronous code in JavaScript without using async/await? What other approaches do you consider for working with asynchrony?',
    response: [
      `Callbacks , Promises, .then(), Event-based, Observable (RxJS), Web Workers / Message Passing`,
    ],
    fullResponse: '',
  },
  {
    question: 'Difference between == and ===',
    response: [
      `== -> "loose" (or "loose") comparison, ❗ Automatically converts types before comparison. Uses coercion (type casting).
      === -> ✅ No type casting. Compares both type and value.
      `,
    ],
    fullResponse: '',
  },
  {
    question: 'What is a prototype in JavaScript?',
    response: [
      `This is an inheritance mechanism through which objects can access the properties and methods of other objects.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is the difference between null and undefined?',
    response: [
      `undefined -> The default value for a variable that has not been assigned a value.
       Indicates that the variable exists but has not been defined.
       Also returned if the function returns nothing (has no return).
       null -> A special meaning that clearly indicates the absence of any meaning.
       It is usually assigned deliberately to show “emptiness” or “absence of an object.”`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is context?',
    response: [
      `this is the value that the this keyword takes on at the time the code is executed.
      this refers to the object to which the executable code belongs.
       The context determines which object will be accessible through this.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How can I change the execution context of a function?',
    response: [
      `call, apply, bind.
      call -> Calls a function with a specified this value and arguments.
      apply -> Similar to call, but takes an array of arguments.
      bind -> Returns a new function with a specified this value and arguments, without immediately executing it.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is Promise?',
    response: [
      `is an object in JavaScript that represents the result of an asynchronous operation that may be executed later (successfully or with an error).`,
    ],
    fullResponse: '',
  },
  {
    question: 'In what cases do you use Promise?',
    response: [
      `Asynchronous operations,
        When you need to sequence asynchronous actions,
        Parallel execution of multiple asynchronous operations,
        Error handling in asynchronous code,
        Integration with async/await`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the features of object-oriented programming in JavaScript?',
    response: [
      `
      Prototype Inheritance,
      Constructor Functions and .prototype,
      Class Syntax,
      Encapsulation (Partial),
      Polymorphism,
      Lack of Classic Interfaces,
      Dynamism
      `,
    ],
    fullResponse: '',
  },
  {
    question: 'How to access an HTML element from JS code and change its text?',
    response: [
      `1. Get element:
      By id — document.getElementById("element_id")
      By class — document.querySelector(".class") (first match)
      By tag — document.querySelector("tag")
      By CSS selector — document.querySelector("selector")
      2. Change element text: 
      .textContent or .innerText property
      `,
    ],
    fullResponse: '',
  },
  {
    question: 'What is destructuring?',
    response: [
      `This is a convenient syntax for extracting values from arrays or objects and assigning them to a variable.`,
    ],
    fullResponse: '',
  },
  {
    question: 'This is a convenient syntax for extracting values from arrays or objects and assigning them to a variable.',
    response: [
      `then undefined will be output.`,
    ],
    fullResponse: '',
  },
  {
    question: 'for..in',
    response: [
      `Iterates over keys (indexes or property names) of an object or array.
      Mainly used to iterate over object properties.
      Returns strings - key names.
      Not recommended for arrays, as the order is not guaranteed and may not be by index.`,
    ],
    fullResponse: '',
  },
  {
    question: 'for..of',
    response: [
      `Iterates over the values of an iterated object (array, string, Map, Set, etc.).
        Works only with objects that support iteration (have a Symbol.iterator method).
        Used to iterate over arrays and other iterated structures.
        Returns the elements themselves, not the keys.`,
    ],
    fullResponse: '',
  },
  {
    question: 'When do you use Map and Set?',
    response: [
      `Map -> When keys are not just strings or characters, but, for example, objects.
        When the order of elements is important.
        When you need to add/remove pairs frequently.
        For caching data with complex keys.
        Set -> Filtering unique elements from an array.
        Tracking unique values (e.g. user IDs).
        Removing duplicates.`,
    ],
    fullResponse: '',
  },
  {
    question: "What methods do you know to detect whether an element is in the user's viewport?",
    response: [
      `Element.getBoundingClientRect(), Intersection Observer API, jQuery.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are Service Workers, and in what cases do you use them?',
    response: [
      `These are special scripts that the browser runs separately from the web page and that run in the background. They act as intermediaries between the website (or web application), the network, and the cache.
       To create Progressive Web Apps (PWA) — so that the application works offline or with poor internet.
        When you need to improve loading speed through caching.
        To implement push notifications in a web application.
        When you need to do background data synchronization.
        To control which resources are updated and when, without completely reloading the page.
              `,
    ],
    fullResponse: '',
  },
  {
    question: 'What are Websockets? What are they for?',
    response: [
      `This is a protocol that allows you to establish a persistent bidirectional connection between a client (browser) and a server over a single TCP connection.
       For applications that require real-time and fast data exchange:
        Chats.
        Online games.
        Financial exchanges (currency rates, stocks).
        Notification systems.
        Collaboration (document editing, drawing boards).
        To reduce the load on the server and network, because there is no overhead for constantly opening and closing connections.
              `,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you handle errors in the application?',
    response: [
      `Try...catch, Error handling in Promise, Global error handling, Validation and checks, UI message to the user, Logging,
       Error Handling in React`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is an event loop? How does it work?',
    response: [
      `is a mechanism in JavaScript that allows for asynchronous operations to be handled, despite the fact that JS itself is a single-threaded language. It provides non-blocking code execution.
       Call Stack:
        All the functions that need to be executed go here. JS executes them one by one.
        Web APIs:
        Asynchronous operations (timers, network requests, DOM events) are passed here. These APIs handle operations outside the JS stack.
        Callback Queue:
        When an asynchronous operation completes, its callback is queued.
        Event Loop:
        Continuously checks: if the call stack is empty, it takes the first callback from the queue and places it on the stack for execution.
      `,
    ],
    fullResponse: '',
  },
  {
    question: 'What is the difference between types and interfaces?',
    response: [
      `interface — created specifically to describe the structure of objects (data types with properties).
       type — more general, allows you to describe not only objects, but also primitives, unions, intersections and even complex types.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are access modifiers?',
    response: [
      `These are special keywords in object-oriented programming (OOP) that define the level of access to the properties and methods of a class.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is type guard?',
    response: [
      `This is a mechanism in TypeScript (and partially in JavaScript) that allows you to check the type of a variable at runtime and narrow down its type for safe operation.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is the purpose of creating an abstract class?',
    response: [
      `This is to set a template (framework) for other classes that inherit from it, but at the same time prohibit creating instances of the abstract class itself.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What types of object models do you know?',
    response: [
      `Class-based OOP, Prototype-based OOP, Event-driven OOP, Object-relational model, Object-component model, Functional-oriented object model`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are polyfills and why are they needed?',
    response: [
      `These are pieces of code (usually JavaScript) that add support for new features or APIs to older browsers or environments where those features are not yet officially implemented.
       New JavaScript standards (ES6+), web APIs, or other features are introduced regularly.
        Not all browsers or environments support them immediately or in the same way.
        A polyfill “mimics” the behavior of these new features so that code works correctly even where there is no official support.
      `,
    ],
    fullResponse: '',
  },
  {
    question: 'What are anonymous functions used for?',
    response: [
      `They are used when you don't need to repeatedly access this function by name, but simply execute or pass it immediately.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are ES6 modules?',
    response: [
      `This is a standard way of organizing and dividing code into separate files (modules) in JavaScript, which appeared in the ECMAScript 2015 (ES6) version.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you use modularity in JavaScript to organize your code?',
    response: [
      `I separate the code by logic, I use export and import to exchange data between modules, I use default export for the main functionality of the module
        When a module implements one main class or function, I make it a default export for convenience, I structure folders by type and function, I use build tools (Webpack, Vite, Rollup), I support encapsulation.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What approaches do you use to avoid conflicts and ensure readability and scalability of your code?',
    response: [
      `Modularity, Naming, Strict linting and formatting, Typing, Design patterns, Code review, Documentation, Testing, Avoiding global variables, Logical project structure.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you optimize and work with animations in the browser? What approaches do you use to achieve high performance and smooth animations?',
    response: [
      `Using CSS animations and transitions instead of JavaScript, Animating properties that do not cause rerendering (reflow/repaint), requestAnimationFrame for JS animations, Optimizing DOM operations, Limiting the number of simultaneous animations, Debouncing and throttling events, Using modern APIs, Profiling and testing.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you implement lazy loading of large resources, such as images or scripts, to optimize page loading?',
    response: [
      `Lazy loading images using the loading="lazy" attribute, Using Intersection Observer for custom lazy loading, Dynamic import() for scripts, Code splitting with bundlers, Using placeholders or skeletons, Optimizing image formats and sizes, Preloading critical resources.
       Lazy loading sripts using async and defer attributes, Using service workers for caching and background loading, Implementing progressive loading strategies.
       Lazy loading of components in frameworks (React, Vue, Angular) using built-in features or libraries like React.lazy() and Suspense, Vue's async components, Angular's lazy loading modules.
       `,
    ],
    fullResponse: '',
  },
  {
    question: 'How does lazy loading interact with asynchronous code?',
    response: [
      `Lazy loading is often based on asynchronous operations (dynamic loading of scripts, resources).
          Returns promises (Promise), which allows you to "wait" for the loading via then or async/await.
          This helps control the moment when the resource becomes available and does not block the main execution flow.
          Interaction with lazy loading through asynchronous code allows you to smoothly integrate these loadings into business logic (for example, load additional resources when the user takes action).`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you use code quality assurance tools like ESLint? How do you define and adhere to a code style in a project?',
    response: [
      `ESLint setup, Editor integration, Prettier integration, CI/CD integration, Team agreements and documentation, Code review.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you work with architecture and design patterns in JavaScript?',
    response: [
      `First, I choose an architectural style depending on the scale and tasks: modular, component, layered, or even CQRS, Flux/Redux, MVC/MVVM.
        I separate logic, UI, data, and services — so that the code is divided by responsibility (Separation of Concerns).
        I create clean APIs between modules to minimize coupling.
        I use TypeScript for typing and improving type safety.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How would you implement a percentage preloader on a site that needs to load images, 3D objects, and additional JSON files?',
    response: [
      `Collect all resources into an array,
        Functions for loading resources,
        Function for loading all resources with progress tracking.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are generating functions and what are their practical applications?',
    response: [
      `These are special types of functions in JavaScript that can pause and then resume execution from the same point. They are defined using function* (an asterisk after the word function).
       Lazy iteration — for example, for sequences where you don’t want to store all the values in memory at once (large amounts of data, infinite sequences).
        Data streaming — you can process large streams in parts, outputting one element at a time.
        Cooperative multitasking — in some asynchronous libraries (e.g. redux-saga), generators help control the execution of asynchronous processes.
        Custom iterators — a convenient way to implement an iteration protocol for objects.
      `,
    ],
    fullResponse: '',
  },
  {
    question: "Tell us about all the ways to use the '...' operator.",
    response: [
      `Spread -> Used to expand an iterable (array, string, etc.) into individual elements.
      Rest -> Used to collect multiple arguments into an array.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to iterate over an array of Promises in parallel? Or sequentially?',
    response: [
      `Parallel -> Promise.all.
       Consistent -> async/await in loop, reduce., 
      `,
    ],
    fullResponse: '',
  },
  {
    question: 'What is Symbol? What is its practical application?',
    response: [
      `Symbol() creates a unique value.
        Even if two symbols have the same description, they are not equal.
        Used for unique keys to object properties to avoid conflicts.
        Practical using: Unique object keys, Interfaces with libraries, Avoiding key conflicts, Meta-programming`,
    ],
    fullResponse: '',
  },
  {
    question: 'Give examples of implementing the Observer pattern in a browser.',
    response: [
      `Observer via standard DOM events, Custom implementation of Observer in JavaScript, Example of use with UI`,
    ],
    fullResponse: '',
  },
  {
    question: 'Give examples of scenarios that can lead to memory leaks in client code.',
    response: [
      `Forgotten event listeners,
        Lockdowns with references to large objects,
        Global variables (without let, const or var),
        Using setInterval without clearInterval,
        Caching without limits,
        DOM-preserving in JavaScript after removal from HTML,
        "Dangled" objects in Map / Set / closures,
        Large objects in React / Vue state without cleanup`,
    ],
    fullResponse: '',
  },
  {
    question: 'Tell us about Service Workers.',
    response: [
      `This is a JavaScript file that acts as a proxy between the browser and the network, allowing you to:
        cache pages/resources,
        process requests without an Internet connection,
        receive push notifications,
        sync data in the background.`,
    ],
    fullResponse: '',
  },
  {
    question: 'If some animation on the site is slow (low FPS), how do I find out the reason?',
    response: [
      `1. Open DevTools (F12) → Performance tab (or Rendering, FPS Meter):
       In Chrome: F12 → Performance tab → click "Record" → make an animation → stop recording.
        Look: Do the frames drop below 60 FPS?
        What takes the most time in each frame? (JS, styles, Layout, Paint, Composite)
        2. FPS Meter
        In Chrome: Rendering → check the FPS meter box — you will see the real FPS in the upper right corner of the page.
        3. Layers (Compositing layers)
        Rendering → Layer borders — allows you to see how the browser divides the page into layers. An excessive number of layers can load the GPU.
        4. Check Chrome Task Manager
        Shift + Esc → see which tabs or resources use the most CPU/GPU.`,
            ],
    fullResponse: '',
  },
  {
    question: 'What are the reasons of low FPS?',
    response: [
      `Inefficient JavaScript, Poor CSS animations, Large DOM or heavy elements, No GPU acceleration, Heavy images or SVG, Rendering or compositing.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the options for storing data on the client?',
    response: [
      `localStorage, sessionStorage, cookies, indexedDB, Cache API (caches)`,
    ],
    fullResponse: '',
  },
  {
    question: 'When is caching appropriate?',
    response: [
      `Data changes infrequently (e.g., category list, theme settings).
        Need to improve performance or reduce API requests.
        Data should be reusable between pages.
        Need offline support (for PWA or mobile app).`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you implement authentication in your application?',
    response: [
      `The user enters a username/password (or authenticates via OAuth/SSO).
       The server checks the credentials.
       If everything is OK, the server issues a token (JWT or session cookie).`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you implement Authorization in your application?',
    response: [
      `The token or session contains information about the user's role (role: admin, permissions: ['edit_user']).
        The server checks the permissions before processing the requests.
        The client can also restrict the UI (for example, not showing the "Delete" button).`,
    ],
    fullResponse: '',
  },
  {
    question: 'Security: How we protect server side',
    response: [
      `Password hashing, CSRF protection, JWT verification, RBAC/ABAC, Rate limiting / throttling, Input sanitization.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How does splitting and lazy loading affect application performance?',
    response: [
      `Initial bundle size -> small.
       First render speed -> fast.
       Number of HTTP requests -> More, but smaller files.
       Caching -> Simple in chunks.
       Memory overload ->  less chances.
      `,
    ],
    fullResponse: '',
  },
  {
    question: 'What tools do you use for unit testing, integration testing, and interaction testing?',
    response: [
      `Unit test -> Jest,React components -> @testing-library/react,Mock API -> msw (Mock Service Worker),Integration tests -> Jest + React Testing Library,E2E test -> Cypress or Playwright, Coverage -> Built into Jest, or nyc, CI -> GitHub Actions / GitLab CI.`,
    ],
    fullResponse: '',
  },
  {
    question: "There is a task to transfer data between two different websites. What are the ways to do it? What if only client side? What if we have access to the code of both sites? What if one is displayed on the other via an iframe? What if we don't have access to one of them?",
    response: [
      `window.postMessage, URL parameters / query string / hash,  Shared storage through cookies or IndexedDB, REST API + CORS, Storage relay through iframe + postMessage,  window.name`,
    ],
    fullResponse: '',
  },
] as const;