export const REACT_JS = [
  {
    question: 'What are the main features of React?',
    response: [
      ' Component-based architecture, virtual DOM, JSX, one-way data binding, and declarative UI',
    ],
    fullResponse: '',
  },
  {
    question: 'What’s the difference between functional and class components?',
    response: [
      'Functional components are stateless and use hooks for state/lifecycle. Class components use this and have lifecycle methods like componentDidMount',
    ],
    fullResponse: '',
  },
  {
    question: 'What is JSX?',
    response: [
      'JSX is a syntax extension for JavaScript that looks like HTML and is used with React to describe the UI.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is the Virtual DOM and how does React use it?',
    response: [
      'React creates a virtual copy of the real DOM and updates it efficiently by diffing and patching only the changed nodes.',
    ],
    fullResponse: '',
  },
  {
    question: 'Explain reconciliation in React.',
    response: [
      ' It’s the process by which React updates the DOM by comparing the virtual DOM with a previous snapshot and applying minimal DOM operations.',
    ],
    fullResponse: '',
  },
  {
    question: 'What are React Hooks?',
    response: [
      'Functions like useState, useEffect, useContext, etc., that let you use state and lifecycle features in functional components.',
    ],
    fullResponse: '',
  },
  {
    question: 'Difference between useEffect and useLayoutEffect?',
    response: [
      'useEffect runs after the paint. useLayoutEffect runs synchronously before painting, useful for DOM reads/writes.',
    ],
    fullResponse: '',
  },
  {
    question: 'How does useMemo differ from useCallback?',
    response: [
      'useMemo memoizes a computed value; useCallback memoizes a function reference.',
    ],
    fullResponse: '',
  },
  {
    question: 'When would you use useRef?',
    response: [
      'For accessing DOM nodes or keeping mutable values that don’t trigger re-renders.',
    ],
    fullResponse: '',
  },
  {
    question: 'How do you manage global state in a React app?',
    response: [
      'Via Context API, Redux, Zustand, Recoil, Jotai, or React Query for server state.',
    ],
    fullResponse: '',
  },
  {
    question: 'How do you optimize React performance?',
    response: [
      'Use React.memo, useMemo, useCallback, code splitting, lazy loading, avoiding prop drilling.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is code splitting and how do you implement it?',
    response: [
      'Dividing code into smaller chunks for better loading; done using React.lazy() and Suspense.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is React.memo and how does it work?',
    response: [
      ' Higher-order component that memoizes a component unless props change.',
    ],
    fullResponse: '',
  },
  {
    question: 'Explain the concept of "lifting state up".',
    response: [
      ' concept in React (and similar component-based frameworks) where you move the state from a child component to a common ancestor (usually the parent) so that multiple components can share and coordinate the same state.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is the purpose of keys in React lists?',
    response: [
      'Keys help React identify which items have changed, are added, or are removed, improving performance.',
    ],
    fullResponse: '',
  },
  {
    question: 'What are the different ways to style a React component?',
    response: [
      'CSS Modules, styled-components, inline styles, and traditional CSS stylesheets.',
    ],
    fullResponse: '',
  },
  {
    question: 'How do controlled and uncontrolled components differ?',
    response: [
      'Controlled components have their value controlled by state. Uncontrolled use refs to access values.',
    ],
    fullResponse: '',
  },
  {
    question: 'How does React handle events differently from native DOM?',
    response: [
      'React uses synthetic events for cross-browser compatibility and performance.',
    ],
    fullResponse: '',
  },
  {
    question: 'How do you implement form validation in React?',
    response: [
      'Manually via state, or using libraries like Formik, React Hook Form, or Yup.',
    ],
    fullResponse: '',
  },
  {
    question: 'Why should keys be unique and stable?',
    response: [
      'To prevent UI bugs from incorrect DOM diffing when list order changes.',
    ],
    fullResponse: '',
  },
  {
    question: 'How do you test React components?',
    response: [
      'Use Jest for unit testing and React Testing Library or Enzyme for UI testing.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is the difference between shallow and deep rendering?',
    response: [
      'Shallow rendering renders only the component, not its children. Deep rendering renders the entire tree.',
    ],
    fullResponse: '',
  },
  {
    question: 'How would you test a component with asynchronous logic?',
    response: [
      'Use async/await with waitFor, findBy* queries in Testing Library, and mock APIs.',
    ],
    fullResponse: '',
  },
  {
    question: 'How do you mock API requests in tests?',
    response: ['Use tools like jest.fn(), msw, or axios-mock-adapter.'],
    fullResponse: '',
  },
  {
    question: 'What are test IDs and how are they used?',
    response: [
      'data-testid is used for selecting elements in tests when accessibility queries aren’t applicable.',
    ],
    fullResponse: '',
  },
  {
    question: 'Explain Context API and its use cases.',
    response: [
      'Used for sharing global data like themes or auth across components without prop drilling.',
    ],
    fullResponse: '',
  },
  {
    question: 'Compare Redux and Context API.',
    response: [
      'Redux is more powerful with middleware, devtools, and async handling; Context is simpler and built-in but not ideal for high-frequency updates.',
    ],
    fullResponse: '',
  },
  {
    question: 'How would you handle error boundaries?',
    response: [
      'Use a class component with componentDidCatch and getDerivedStateFromError.',
    ],
    fullResponse: '',
  },
  {
    question: 'Explain server-side rendering (SSR) in React.',
    response: [
      'Rendering React components on the server (e.g., with Next.js) to improve performance and SEO.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is hydration in React?',
    response: [
      'The process of attaching event listeners and state to a server-rendered HTML page on the client.',
    ],
    fullResponse: '',
  },
  {
    question: 'What are custom hooks and why use them?',
    response: [
      'Custom hooks encapsulate reusable logic using built-in hooks, allowing cleaner and more maintainable code.',
    ],
    fullResponse: '',
  },
  {
    question: 'How does useReducer differ from useState?',
    response: [
      'useReducer is suited for complex state logic or multiple related state transitions, similar to Redux reducers.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is the purpose of useImperativeHandle?',
    response: [
      ' It customizes the instance value exposed to parent components when using forwardRef.',
    ],
    fullResponse: '',
  },
  {
    question: 'How do you implement lazy loading in React?',
    response: [
      `Use React.lazy(() => import('./Component')) with <Suspense fallback={...}>.`,
    ],
    fullResponse: '',
  },
  {
    question:
      'What is the difference between React.lazy and loadable-components?',
    response: [
      'React.lazy is native and works only with default exports. loadable-components supports named exports and SSR.',
    ],
    fullResponse: '',
  },
  {
    question:
      'How do you handle async state updates (like API calls) in React?',
    response: [
      'Use useEffect + fetch, axios, or libraries like React Query, SWR for caching and retries.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is React Query, and how is it different from Redux?',
    response: [
      'React Query handles server-state caching, revalidation, and pagination. Redux manages client state and needs middleware for async logic.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is optimistic UI in React?',
    response: [
      'Updating the UI before the server confirms the change, then reconciling based on the API response (used in React Query, Redux, etc.).',
    ],
    fullResponse: '',
  },
  {
    question: 'How do you persist state across sessions?',
    response: [
      'Use localStorage, sessionStorage, cookies, or libraries like redux-persist.',
    ],
    fullResponse: '',
  },
  {
    question: 'Why are frameworks used?',
    response: [
      'Development acceleration, Code standardization, Security, Community and support, Scalability.',
    ],
    fullResponse: '',
  },
  {
    question: 'what are frameworks advantages and disadvantages?',
    response: [
      'advantages: Fast development, Clear structure, Many tools, Good documentation, Easy teamwork. disadvantages: Excessive complexity, Dependency, Learning curve, Redundancy of code, Less control.',
    ],
    fullResponse: '',
  },
  {
    question: 'What should you consider when choosing a framework?',
    response: [
      `Project goals and type, Experience and team, Functionality (out of the box), Scalability, Documentation and community, Ecosystem, Testability and support, Productivity, Implementation time, License and support.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is a component-oriented approach?',
    response: [
      'It is a method of creating programs in which the entire system is broken down into independent, reusable components, each of which performs a specific function.',
    ],
    fullResponse: '',
  },
  {
    question: 'What is the problem of state management and what are the approaches to solving it?',
    response: [
      `The problem of state management arises in large or dynamic applications, where many components share or interdependent data. Without a clear state management system, the application quickly becomes chaotic, difficult to maintain, and prone to bugs.
       Resolving problems: Local state, Lifting state up, Context API / Provide-Inject, External state management libraries (global state), server state.
      `,
    ],
    fullResponse: '',
  },
  {
    question: 'What component lifecycle methods do you know?',
    response: [
      `constructor(), componentDidMount(), shouldComponentUpdate(), componentDidUpdate(), componentWillUnmount()`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to optimize the performance of solutions using frameworks?',
    response: [
      `Reducing the number of renderers, Network optimization (API), JavaScript / CSS size optimization, Working with large lists / tables, State management strategy, Profiling and auditing, Working with images and media, Server-side optimization (SSG/SSR/CSR).`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is server-side rendering?',
    response: [
      'the process by which an HTML page is generated on the server and sent ready to the browser. It is an alternative or complement to classic Client-Side Rendering (CSR), where the page is built in the browser with JavaScript.',
    ],
    fullResponse: '',
  },
  {
    question: 'Why is server-side needed, what are the implementation options?',
    response: [
      'why need Better SEO, Faster first render, Dependency on authorization, Dynamic content. Options: SSG — Static Site Generation,  ISR — Incremental Static Regeneration, Hybrid SSR / CSR, Full SSR.',
    ],
    fullResponse: '',
  },
  {
    question: 'How to interact with APIs within libraries/frameworks?',
    response: [
      `fetch(), Axios, React Query`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the features of data management?',
    response: [
      `Local component state — useState, ref, data()
        Global state — Redux, Vuex, Pinia, Zustand, MobX
        Server APIs — REST, GraphQL
        Cache and local storage — localStorage, sessionStorage, IndexedDB
        External data providers — Firebase, Supabase, Strapi, etc.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the main differences between Angular and React?',
    response: [
      `Angular is a framework that offers everything for a large-scale application, but has a steep learning curve.
        React is a library for building interfaces that is easy to integrate into any project, but you will have to choose the other parts of the stack yourself.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you distinguish between class and functional components in React?',
    response: [
      `Class: Created through a class (class extends React.Component), Through this.state and this.setState, Methods like componentDidMount, componentDidUpdate, Needs to be bound correctly, More cumbersome, Up to 16.8 — the main component type.
       Functional: Regular function or arrow function, Through the useState hook, Hooks: useEffect, this is not used, Simple, compact syntax, After 16.8 — became the standard.
      `,
    ],
    fullResponse: '',
  },
  {
    question: 'In what cases do you consider it appropriate to use class or function type of component?',
    response: [
      `✅ Functional components – by default:
        New projects.
        When less code is needed.
        Simple state management via hooks (useState, useEffect, useContext, etc.).
        Work better with modern approaches (React Server Components, Suspense, hooks-based libs).
        🛠 Class components – in some cases:
        Supporting legacy code.
        When using libraries that are not yet adapted to hooks (rare).
        When the team is still working on a class-based approach.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How can you optimize performance in React applications? What approaches do you use to avoid over-rendering and optimize component load times?',
    response: [
      `It includes reducing unnecessary renders, separating code, managing state efficiently, and using caching.
      `,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you implement state management in React applications? What approaches do you use to maintain readability and effectively manage more complex/global state?',
    response: [
      `Local state (useState, useReducer), Context (Context API) + useContext, Global state via libraries, Server state: React Query / SWR.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you handle form management in React? What approaches do you use for form validation and processing?',
    response: [
      `Controlled components (useState), useReducer for complex forms, Form libraries, Validation, Form submission handling, Formik + Yup.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you handle events in React?',
    response: [
      `In JSX, events are written in camelCase, and functions are passed without calling, Passing parameters to handlers, Handling input events (input, change, submit), Synthetic events (SyntheticEvent), Handling keyboard, mouse, focus, etc., Components with a custom handler, Memoization of handlers for performance, Handling events from the DOM via ref (non-standard).`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are React hooks, what built-in hooks do you use?',
    response: [
      `These are functions that allow you to "plug into" React capabilities (state, lifecycle, context, etc.) in functional components. They were introduced in React 16.8 and have become the standard for writing components.
       useState, useEffect, useContext, useRef, useMemo, useCallback, useReducer, useLayoutEffect, useImperativeHandle, useDebugValue, useId, useTransition, useDeferredValue.
      `,
    ],
    fullResponse: '',
  },
  {
    question: 'What conditions must a function meet to be a hook?',
    response: [
      `Naming: must start with use. Call only in the right context: 
       At the top level of the functional component like useEffect, useState,
       In another hook (for example, in a custom hook): useMyHook calls useState.
      `,
    ],
    fullResponse: '',
  },
  {
    question: 'What advantages do you see of server rendering approach, and in what cases do you consider it most appropriate?',
    response: [
      `Advantages: SEO, Fast Time to First Impression (TTFB), Fresh Data, Request Control. 
      Advantages: 
      Appropriate:
      ✅ Display dynamic data that changes on every request
        ✅ Authentication / authorization - session or token validation
        ✅ High SEO-importance of the page (e.g. blog, products, news)
        ✅ First impression should be fast, even before JS loading`,
    ],
    fullResponse: '',
  },
  {
    question: 'There is a task to calculate a coefficient that will be needed in a component and that depends only on a few constants in the project. Where is the best place to calculate it?',
    response: [
      `If the coefficient:
        depends only on constants,
        never changes during application execution,
        then it is best to calculate it once outside the component, at the module level (i.e. immediately upon import).`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to optimize component rendering in React?',
    response: [
      `Avoid unnecessary rendering, Memoize calculations with useMemo, Memoize functions with useCallback, Organize component structure correctly, Avoid anonymous functions and objects in JSX, Use keys correctly in lists, Lazy-load components, Don't store large amounts of state in the component, Analyze with React DevTools.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to optimize performance in large React applications?',
    response: [
      `Lazy loading and code splitting, Component rendering optimization, Component architecture, Network query optimization, State management optimization, Large list management, Image and resource optimization, Analysis and monitoring tools, Initial bundle reduction.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What problems have you often encountered in React components?',
    response: [
      `State and its updates, Rendering and performance, Working with asynchrony, Form management, Readability and support.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you manage state in a React APP?',
    response: [
      `Local state (useState, useReducer) -> Used when only one component needs the state.
        When: small components, form, modal.
        Pros: simple, fast.
        Cons: state is isolated — other components don't see it.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to pass state between multiple components?',
    response: [
      `State lifting, Context (React Context API), Global state managers (Redux, Zustand, Recoil, Jotai), Server state (React Query, SWR).`,
    ],
    fullResponse: '',
  },
  {
    question: 'What approaches do you use for lazy loading components?',
    response: [
      `React.lazy + Suspense, Dynamic importing with conditions, Code splitting at the route level.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What approaches do you use for state management?',
    response: [
      `Local state — useState, useReducer.
        Context — for theme, language, authorization.
        Global state — Zustand or Redux Toolkit, if there is a lot of interdependent data.
        Forms — react-hook-form + zod for validation.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What approaches do you use for data caching?',
    response: [
      `React Query (@tanstack/react-query), SWR (Next.js-friendly), Manual cache with Zustand.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are side effects?',
    response: [
      `it is any action in a component or function that goes beyond simply calculating a value and affects something outside of that function.
       API requests, Working with DOM directly, Timers and intervals, Event subscription, Logging or analytics, Saving to LocalStorage / cookies.
      `,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you solve routing problems in complex React applications?',
    response: [
      `Basic tool — React Router (v6+), Route organization, Layouts for different zones, Guards (route protection), Dynamic page loading (lazy loading), Transition management, When the application is very large.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What approaches do you use to organize routes and manage the structure of the application?',
    response: [
      `React Router v6 with config file for all routes.
        Splitting into Layouts + guards.
        Route-based code splitting with React.lazy.
        Caching page data via React Query or Zustand.
        Filter and pagination status in URL.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you handle animations in React? How do you use CSS animations and libraries to create smooth and high-performance animations?',
    response: [
      `a simple case where you can get by with pure CSS, and a complex case where libraries are needed for complex or interactive scenarios.
       Small effects — pure CSS with transition.
      Animation of states and routes — Framer Motion.
      Complex graphics/SVG/banners — GSAP.
      If you need a lot of realistic physical movements — React Spring.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you use architectural patterns (e.g. Flux or Redux) to effectively manage state in a React application?',
    response: [
      `How I use Redux in projects
        In production applications, I use Redux Toolkit (RTK) because it:
        removes "boilerplate" (less code for reducers/actions)
        has a built-in immer (you can write "mutations", but the state remains immutable)
        integrates with asynchronous data via createAsyncThunk
        easily combines with React Query, if you need both local and server state.
        
        `,
    ],
    fullResponse: '',
  },
  {
    question: 'What advantages do you see in using these patterns (e.g. Flux or Redux)?',
    response: [
      `Predictability — state changes only through dispatch(action) → easier to debug.
        Single Source of Truth — convenient for complex UIs where one piece of data affects several components.
        Developer tools — Redux DevTools allows you to view state history, undo changes.
        Scalability — easy to divide state into modules (slices).
        Testability — reducers — pure functions, easy to test.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What disadvantages do you see in using these patterns (e.g. Flux or Redux)?',
    response: [
      `Limitations and disadvantages
        Boilerplate (without RTK there would be a lot of code).
        Overhead — for small projects Redux — like a cannon on sparrows.
        Additional level of complexity — it is difficult for beginners to understand action creators, middleware, store lifecycle.
        Not ideal for server-side state — if data comes from API, it is more convenient to take React Query or SWR.`,
            ],
    fullResponse: '',
  },
  {
    question: 'What is a component re-render?',
    response: [
      `This is a repeated call to a component function (for functional ones) or the render() method (for class ones) to update the UI according to new data or state.`,
    ],
    fullResponse: '',
  },
  {
    question: 'When does component re-render occur?',
    response: [
      `Component state changed, props changed, parent component re-render, forceUpdate call, Context (Context API).`,
    ],
    fullResponse: '',
  },
  {
    question: 'is component re-render possible to influence this process?',
    response: [
      `Component memoization, Computation and callback memoization, Decomposition into smaller components, Context optimization, List virtualization.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is React Context?',
    response: [
      `This is React's built-in mechanism for passing data between components without "passing" props through all the layers.
        You can think of it as a "global variable" for the component tree, but with built-in reactivity.`,
    ],
    fullResponse: '',
  },
  {
    question: 'When do you use React Context?',
    response: [
      `Global settings (theme, interface language, currency).
        Authentication (saving user information).
        Transferring data that is read frequently but not changed frequently.
        Data exchange between many components that are far from each other.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is memoization in React?',
    response: [
      `This is a way to remember the result of a calculation or function so that it is not re-executed unnecessarily on repeated renders. This helps optimize performance, especially when operations are expensive or when new references cause unnecessary re-renders.`,
    ],
    fullResponse: '',
  },
  {
    question: 'When is memoization needed?',
    response: [
      `We avoid unnecessary re-rendering of child components that depend on props functions or complex objects.
        We save resources, do not perform expensive operations unnecessarily.
        We improve UX, especially in complex lists or animations.`,
            ],
    fullResponse: '',
  },
  {
    question: 'In what cases do you use useReducer?',
    response: [
      `Complex state update logic, When there are many interconnected state changes, When you want to centralize state updates, An alternative to Redux or other state managers for local state, When you need to clearly control state updates.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Tailwind CSS + Headless UI advantages',
    response: [
      `Complete freedom in design, no ready-made styles.
        Easy and highly customizable styling through CSS utilities.
        Headless UI provides styleless components that can be styled to fit any design.
        Good performance.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Tailwind CSS + Headless UI disadvantages',
    response: [
      `It takes time to get used to the utility-first approach.
        More manual work than in classic UI libraries.`,
    ],
    fullResponse: '',
  },
  {
    question: "What's new in React version 18?",
    response: [
      `Concurrent Rendering, Automatic Batching, Transitions API, Improved Suspense support, New Root API, SSR and Streaming improvements.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to keep a reference to a function with current parameters, but not call useEffect again?',
    response: [
      `To keep a reference to a function with current parameters, but not call useEffect again due to a change in this function, a combination of useRef and useEffect or useCallback is usually used.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is the difference between useLayoutEffect and useEffect?',
    response: [
      `useEffect — for most side effects;
        useLayoutEffect — when you need to control the layout before rendering.`,
    ],
    fullResponse: '',
  },
  {
    question: 'In what cases do you use useEffect?',
    response: [
      `Executed after the browser has painted the changes on the screen (after paint).
        Asynchronous to the render.
        Does not block UI updates - this means that the user sees the interface, and the effects are triggered after that.
        Ideal for:
        Data queries
        Event subscriptions
        Updates of state that do not affect the markup
        Logic that does not require synchronism with the DOM`,
    ],
    fullResponse: '',
  },
  {
    question: 'In what cases do you use useLayoutEffect?',
    response: [
      `Executed **synchronously after React has updated the DOM, but before the browser has done a paint.
        Blocks page redrawing until the effect is done.
        Used when you need to do something that affects the DOM or styles, and you want to avoid visible “flickering” or inconsistent UI state.
        Ideal for:
        Measuring DOM elements (e.g. width, height)
        Synchronously updating the DOM (e.g. setting scroll position)
        Fixing layout before displaying to the user`,
    ],
    fullResponse: '',
  },
  {
    question: 'Tell us about the useTransition hook.',
    response: [
      `This is an API for creating transition updates — that is, updates that can be postponed so that quick user actions are not "stuck" by long UI update operations.
        It can be used to divide updates into:
        Urgent (e.g., button click, text entry)
        Transitional (e.g., filtering a large list, loading result`,
    ],
    fullResponse: '',
  },
  {
    question: 'What React patterns do you know?',
    response: [
      `HOC — Higher-Order Components, Render Props,  Compound Components, Controlled vs Uncontrolled Components, Provider Pattern (through Context API), Lazy Loading and Code Splitting, Event Delegation, Error Boundaries.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Are state management libraries needed if there are caching libraries (React Query/SWR) and React Context?',
    response: [
      `React Query / SWR + Context — great for server-side data and simple settings.
        Redux, Zustand, MobX, and others — when you need to manage complex local state that is not tied to the server.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you handle errors in React components?',
    response: [
      `Error Boundaries (Class Components), Error Handling in Asynchronous Code, Error Handling in Events, Improving UX through Messages, Catching Errors at the Application-Wide Level.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you maintain consistency in design and styling across large React codebases? What approaches or tools do you use to maintain UI consistency?',
    response: [
      `Design System -> Unified Style and Components,
        CSS-in-JS / CSS Modules -> Style Isolation and Conflict Avoidance,
        Theme Provider -> Global Style Variables,
        ESLint + Prettier -> Unified Code Style,
        Storybook -> Component Documentation and Testing,
        Visual Tests -> Style Change Control,
        Documentation -> Team Standards Support.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you structure and organize components in large React applications? What approaches do you use to logically separate components, reuse, and maintain code?',
    response: [
      `Feature-based structure -> Code localization, scalability.
        Presentational vs Container -> Clear separation of UI and logic.
        Shared/common components -> Reuse.
        Naming and barrier files -> Convenient import and readability.
        Logic separation (hooks/utils) -> Code cleanliness and organization.
        Documentation / Storybook -> Support and co-development.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you manage forms in React, including using form libraries like Formik or React Hook Form?',
    response: [
      `React Hook Form (RHF) — lightweight, fast, works through refs, minimal number of renderers, great for simple and complex forms.
        Formik — more "traditional", convenient, with many built-in functions, integrates well with Yup for validation.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you handle validation?',
    response: [
      `I use validation libraries, most often Yup or Zod, to describe the validation scheme.
        In RHF, you can connect schemes via resolvers (for example, @hookform/resolvers/yup).
        You can also create custom validators in functions.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you handle masking?',
    response: [
      `For masking I often use libraries like react-input-mask or cleave.js.
        I integrate them with React Hook Form via controllers (Controller) to manage non-standard inputs.`,
    ],
    fullResponse: '',
  },
  {
    question: 'You have a task to render a large list (100k+ items). How would you accomplish this task?',
    response: [
      `Virtualization -> Render only visible elements, speed.
        Pagination -> Better UX, loading in parts.
        React.memo -> Minimize re-renders..
        Asynchronous loading -> Loading data in portions.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Optimizing React components: what to do?',
    response: [
      `Minimize unnecessary re-renders:
        Use React.memo for components that render with the same props.
        Optimize list rendering:
        Use virtualization (react-window, react-virtuoso).
        Optimize computations:
        Use useMemo to memoize expensive computations.
        Optimize handler functions:
        Use useCallback to memoize callbacks that are passed to child components.
        Avoid unnecessary anonymous functions in JSX (useCallback can help).
        Break large components into smaller ones to make re-renders easier to control.
        Profile the application (React DevTools Profiler) - identify bottlenecks.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Optimizing React components: what not to do?',
    response: [
      `Don't memoize everything!
        useMemo and useCallback have overhead themselves, and can sometimes hurt performance. Use them only when you really need to.
        Don't clutter your code with memoization if your components render quickly.
        Don't cache objects or functions that aren't passed down or cause a re-render.`,
    ],
    fullResponse: '',
  },
  {
    question: 'When and how to use useMemo?',
    response: [
      `When you need to remember the result of a complex calculation so that you don't have to do it again every time you render.
        If the dependencies don't change, expensiveCalculation is not executed again.`,
    ],
    fullResponse: '',
  },
  {
    question: 'When and how to use useCallback?',
    response: [
      `When you need to pass a memoized function to a child component, especially if it is wrapped in React.memo, to avoid unnecessary re-renders.
        If the dependencies don't change, the function reference remains stable.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you build a React application?',
    response: [
      `Transpilation of JSX and modern JS (via Babel or ESBuild).
        Bundling - combining modules into a minimum number of files.
        Minification and optimization - reducing the size of JS/CSS.
        Code splitting - automatic (dynamic import) or manual (React.lazy, React Suspense).
        Image and font optimization - often through additional loaders.
        Caching - hashing of file names for version control.
        Source maps - for debugging in production.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What tools were used for state management and why were they chosen?',
    response: [
      ``,
    ],
    fullResponse: '',
  },
  {
    question: 'When should use React Context + useReducer / useState?',
    response: [
      `When: For simple to medium-complexity tasks where global overly complex management is not required.
        Why: Built into React, no additional dependencies, good for small to medium-sized applications.
        Pros: Easy to configure, no additional libraries required.
        Cons: Can cause unnecessary re-renders with a large number of updates, no debugging tools.`,
    ],
    fullResponse: '',
  },
  {
    question: 'When should use Redux Toolkit?',
    response: [
      `When: When you need scalable, predictable state management with a clear architecture.
        Why: Redux Toolkit simplifies configuration, adds useful utilities, has good ecosystem support.
        Pros: Good for large projects, supports time-travel debugging, has middleware for side effects (Thunk, Saga).
        Cons: Can be overkill for small projects, sometimes quite complex syntax.`,
    ],
    fullResponse: '',
  },
  {
    question: 'When should use Redux MobX?',
    response: [
      `When: When you want reactive, automatic tracking of state changes.
        Why: Simple and declarative model, very fast, less "noisy" code.
        Pros: Little boilerplate, works quickly, easy to get started.
        Cons: Less explicit data flow, harder to scale and maintain in very large projects.`,
    ],
    fullResponse: '',
  },
  {
    question: 'When should use Redux Recoil?',
    response: [
      `When: For projects with very complex state hierarchies that want more flexible state management.
        Why: Offers atoms and selectors — fine-grained state management.
        Pros: Easy to scale, responsive, good API.
        Cons: Less popular, smaller ecosystem.`,
    ],
    fullResponse: '',
  },
  {
    question: 'When should use  React Query / SWR?',
    response: [
      `When: To manage asynchronous requests and caching.
        Why: Eliminates the complexity of manually managing server state.
        Pros: Automatic caching, refetching, synchronization, pagination support.
        Cons: Not for local UI state.`,
    ],
    fullResponse: '',
  },
  {
    question: 'When should use  Zustand?',
    response: [
      `When: Lightweight, simple state management for medium-sized projects.
        Why: Simple API, minimal code boilerplate.
        Pros: Easy to get started, responsive, good performance.
        Cons: Small ecosystem compared to Redux.`,
    ],
    fullResponse: '',
  },
];
