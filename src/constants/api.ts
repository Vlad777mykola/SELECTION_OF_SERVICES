export const API_TS = [
  {
    question: 'What is DOM?',
    response: [
      `This is the way a browser “represents” an HTML or XML document as a tree of objects.
        Each tag, attribute, and even text becomes a node in this tree.
          JavaScript can interact with these objects: change text, styles, structure, and so on — and the browser instantly refreshes the page.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How does JavaScript interact with the DOM?',
    response: [
      `JavaScript, through document and related methods, reads, modifies, and manipulates the HTML structure (DOM) in the browser's memory, and these changes are immediately reflected on the page.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is AJAX?',
    response: [
      `it's Asynchronous JavaScript And XML.
        It's not a separate language or technology, but an approach that allows a web page to communicate with a server in the background, without completely reloading the page.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to make an HTTP request using JavaScript?',
    response: [
      `fetch() and XMLHttpRequest (older method).`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is JSONP and how is it used?',
    response: [
      `This is JSON with Padding, an old trick for getting data from another domain in the browser, before CORS came along.
          When you need to access an API from another domain without CORS.
          For example, in old Twitter, Google Maps, Flickr widgets.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the ways to store data in the browser?',
    response: [
      `Cookies, localstorage, sessionStorage, indexedDB, Cache API (Service Workers)`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is event handling in JavaScript?',
    response: [
      `is the mechanism by which code responds to user actions or other events in the browser.
        In other words, an event is a signal from the browser that something has happened (e.g., a click, scroll, keystroke, page load), and event handling is the execution of a specific handler function in response to that signal.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are event bubbling and event capturing in the context of DOM event handling? How do you use these concepts to handle events effectively?',
    response: [
      `these are the two stages an event goes through as it travels through the DOM tree.
          Event Delegation, Intercept to Target, Stop Propagation.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is event delegation in the DOM, how do you use this approach to optimize event handling, especially on large pages?',
    response: [
      `This is an approach where instead of attaching a handler to each individual element, you place one handler on their common ancestor and track which of the descendants the event occurred on.
        This method works thanks to event bubbling — the event rises from the target element up the DOM.
        When to use:
        Large lists of elements (tables, product catalogs).
        Dynamic interfaces where elements are added/removed on the fly.
        SPA applications with intensive DOM updates.`,
    ],
    fullResponse: '',
  },
];