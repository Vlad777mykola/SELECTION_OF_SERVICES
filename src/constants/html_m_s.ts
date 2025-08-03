export const HTML_QUESTIONS_M_S = [
  {
    question: 'What is event bubbling?',
    response: [
      `It's the process where an event starts at the target element and propagates up to its parent elements.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Does bubbling happen by default?',
    response: ['Yes, most DOM events bubble by default.'],
    fullResponse: '',
  },
  {
    question: 'How can we attach an event handler that works during bubbling?',
    response: [
      `Use addEventListener('click', handler) (third parameter is false or omitted).`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is event.target?',
    response: ['It refers to the element where the event actually occurred.'],
    fullResponse: '',
  },
  {
    question: 'What is event.currentTarget?',
    response: [
      'It’s the element on which the event handler is currently running.',
    ],
    fullResponse: '',
  },
  {
    question: 'Are event.target and this the same inside an event handler?',
    response: [
      'No. event.target is the original source of the event, while this (or event.currentTarget) is the element the handler was attached to.',
    ],
    fullResponse: '',
  },
  {
    question: 'How can you stop an event from bubbling?',
    response: ['Use event.stopImmediatePropagation().'],
    fullResponse: '',
  },
  {
    question: 'Should you always stop event propagation?',
    response: [
      'No, only when necessary — stopping it can break event delegation or third-party scripts.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is event capturing?',
    response: [
      `It's the phase where the event goes from the root (document) down to the target element.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to listen during the capturing phase?',
    response: [
      `Use addEventListener('click', handler, true) — the third argument must be true.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the three phases of an event?',
    response: ['1. Capturing, 2. Target, 3. Bubbling.'],
    fullResponse: '',
  },
  {
    question: 'What is event delegation?',
    response: [
      'It’s a technique where a parent element handles events from its children using event.target.',
    ],
    fullResponse: '',
  },
  {
    question: 'Why use event delegation?',
    response: [
      `It's efficient — you don't need to attach handlers to every child. It also works for dynamically created elements.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the benefits of delegation?',
    response: [
      'Fewer event handlers, Better performance, Works with dynamic content ',
    ],
    fullResponse: '',
  },
  {
    question: 'Why does this work for multiple buttons?',
    response: [
      'Because the event bubbles to the document, which checks the event.target.',
    ],
    fullResponse: '',
  },
  {
    question: ' What is the DOM?',
    response: [
      'is a programming interface that represents the structure of an HTML or XML document as a tree of nodes.',
    ],
    fullResponse: '',
  },
  {
    question: 'How does JavaScript interact with the DOM?',
    response: [
      'can access, modify, add, or remove HTML elements and attributes using DOM methods and properties.',
    ],
    fullResponse: '',
  },
  {
    question: 'What are the main types of DOM nodes?',
    response: [
      'Element nodes, text nodes, attribute nodes, and comment nodes.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is document.getElementById() used for?',
    response: ['It selects an HTML element by its ID.'],
    fullResponse: '',
  },
  {
    question: 'What are the two main parts of an HTML document?',
    response: ['<head> and <body>.'],
    fullResponse: '',
  },
  {
    question: 'What is the <head> tag for?',
    response: [
      'It contains metadata like the title, links to stylesheets, scripts, and meta tags.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is the <body> tag for?',
    response: ['It contains the visible content of the web page.'],
    fullResponse: '',
  },
  {
    question: 'What is the purpose of the <meta> tag?',
    response: [
      'To provide metadata like character encoding, viewport settings, and SEO information.',
    ],
    fullResponse: '',
  },
  {
    question: 'How do you include CSS in HTML?',
    response: [
      'Using the <style> tag in the head or linking a .css file with <link>.',
    ],
    fullResponse: '',
  },
  {
    question: 'Where can you place <script> tags in HTML?',
    response: [
      'In the <head>, <body>, or at the end of <body> (for better performance).',
    ],
    fullResponse: '',
  },
  {
    question: 'What are the main advantages of HTML5 for developers?',
    response: [
      'New semantic tags, improved parsing, mobile support, offline storage, and new APIs.',
    ],
    fullResponse: '',
  },
  {
    question: 'What are some new HTML5 semantic elements?',
    response: ['<section>, <nav>, <article>, <aside>, <header>, <footer>.'],
    fullResponse: '',
  },
  {
    question: 'What attributes were added to <input> in HTML5?',
    response: ['type="email", type="date", type="url", type="range", etc.'],
    fullResponse: '',
  },
  {
    question: 'What replaced Flash in HTML5 for media?',
    response: ['The <video> and <audio> elements.'],
    fullResponse: '',
  },
  {
    question: 'What is localStorage used for?',
    response: [
      'To store data in the browser that persists even after closing the tab.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is the autofocus attribute?',
    response: ['It automatically focuses on a form field when the page loads.'],
    fullResponse: '',
  },
  {
    question: 'What are data-* attributes?',
    response: ['Custom attributes used to store extra data on HTML elements.'],
    fullResponse: '',
  },
  {
    question: 'What is the Web Workers API?',
    response: ['It allows JavaScript to run in background threads.'],
    fullResponse: '',
  },
  {
    question: 'What is the WebSockets API?',
    response: [
      'It enables full-duplex communication between the client and server.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is an event in the DOM?',
    response: [
      'An event is an action or occurrence that the browser or user can respond to, like a click, scroll, or keypress.',
    ],
    fullResponse: '',
  },
  {
    question: 'How do you add an event listener in JavaScript?',
    response: [`Using element.addEventListener('event', callback).`],
    fullResponse: '',
  },
  {
    question: 'What is event bubbling?',
    response: [
      'When an event starts from the deepest target element and bubbles up to the ancestors.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is event capturing (or trickling)?',
    response: [
      'When an event is handled starting from the outermost element down to the target.',
    ],
    fullResponse: '',
  },
  {
    question: 'How do you enable capturing mode in addEventListener?',
    response: [
      `By passing true as the third argument:
element.addEventListener('click', callback, true)`,
    ],
    fullResponse: '',
  },
  {
    question: 'What’s the difference between Node and Element in the DOM?',
    response: [
      'Element is a subclass of Node. All elements are nodes, but not all nodes are elements',
    ],
    fullResponse: '',
  },
  {
    question: 'How does innerHTML differ from textContent?',
    response: [
      'innerHTML parses and sets HTML content, while textContent sets plain text and is faster and safer (no HTML parsing).',
    ],
    fullResponse: '',
  },
  {
    question:
      'What are the performance implications of frequent DOM manipulation?',
    response: [
      'Frequent or heavy DOM updates cause layout thrashing, reflows, and repaints. Use techniques like batching changes or using DocumentFragment.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is a DocumentFragment? Why would you use it?',
    response: [
      `It's a lightweight, minimal DOM that isn’t rendered. Useful for creating and appending multiple elements efficiently before inserting into the real DOM.`,
    ],
    fullResponse: '',
  },
  {
    question:
      'How do virtual DOM implementations (like React’s) improve performance over direct DOM manipulation?',
    response: [
      'They batch updates and use diffing algorithms to minimize real DOM changes, reducing reflows and repaints.',
    ],
    fullResponse: '',
  },
  {
    question:
      'How would you clone a DOM element with all its children and attributes?',
    response: ['Use element.cloneNode(true) to perform a deep clone.'],
    fullResponse: '',
  },
  {
    question: 'What are the three phases of event propagation?',
    response: ['Capturing (trickling), target, and bubbling.'],
    fullResponse: '',
  },
  {
    question: 'When should you use event capturing vs. bubbling?',
    response: [
      'Capturing is rarely used, mostly for early interception. Bubbling is used for event delegation and general interaction handling.',
    ],
    fullResponse: '',
  },
  {
    question: 'How do you stop event propagation?',
    response: [
      'Use event.stopPropagation() to stop bubbling/capturing, or event.stopImmediatePropagation() to stop other listeners on the same element.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is event delegation and when would you use it?',
    response: [
      `Attaching a single event listener to a parent element to manage events from its children. It's useful for dynamic content and performance.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How does passive: true improve scroll performance?',
    response: [
      'It tells the browser that the event listener will not call preventDefault(), allowing smoother scrolling.',
    ],
    fullResponse: '',
  },
  {
    question:
      'What’s the difference between event.target and event.currentTarget?',
    response: [
      `target is the original source of the event; currentTarget is the element the listener is attached to.

`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is layout thrashing and how can it be avoided?',
    response: [
      'It occurs when forced synchronous layout calculations are interleaved with DOM reads/writes. Avoid it by grouping reads/writes separately.',
    ],
    fullResponse: '',
  },
  {
    question: 'What are mutation observers and when should you use them?',
    response: [
      'They let you watch for DOM changes asynchronously. Use them instead of polling for efficient state updates (e.g., watching for new nodes).',
    ],
    fullResponse: '',
  },
  {
    question:
      'What’s the difference between synchronous and asynchronous script loading?',
    response: [
      'async loads the script independently and runs it when ready. defer delays execution until HTML parsing is complete.',
    ],
    fullResponse: '',
  },
  {
    question:
      'How do browsers render HTML and CSS, and how can you affect paint performance?',
    response: [
      'Parsing → DOM/CSSOM → Render Tree → Layout → Paint → Composite. Minimize repaints/reflows with efficient styles and DOM usage.',
    ],
    fullResponse: '',
  },
  {
    question: 'What are common causes of memory leaks in event handling?',
    response: [
      'Forgetting to remove listeners, closures holding references, and DOM nodes retained in memory by JS.',
    ],
    fullResponse: '',
  },
] as const;
