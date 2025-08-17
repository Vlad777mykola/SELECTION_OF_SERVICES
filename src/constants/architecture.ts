export const ARCHITECTURE = [
  {
    question: 'What characteristics will you use to choose a framework for a new project?',
    response: [
      `Has an active community.
        Provides high performance.
        Supports accessibility and semantic HTML.
        Easily integrates into your technology ecosystem.
        Allows you to scale your project without major risks.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What characteristics will you use to choose a UI library for a new project?',
    response: [
      `Help build UIs quickly and without bugs.
        Ensure accessibility for all users.
        Easy to integrate into your stack and scale.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are signals?',
    response: [
      `is a special object or data structure that stores a value and notifies the system when that value changes.
        The main idea: reactively updating the UI without manually calling renderers.
        They are similar to state in React, but more granular and low-level, allowing only specific dependencies to be updated.
        Simple properties of signals:
        Store a value (signal.value)
        Have observers (components or effects that subscribe to changes)
        Change triggers (when the value changes, subscribed functions are called).`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the advantages of monorepositories versus using different repositories?',
    response: [
      `Single point of truth:
        All packages, libraries, and services are in one place.
        Easy to track dependencies between modules.
        Consistent version control:
        Changes can be synchronized across libraries and applications simultaneously.
        Minimizes the risk of “dependency hell.”
        Easier to refactor and scale:
        Global API changes can be made at once for all dependent packages.
        Makes it easier to create common components or shared libraries.
        Single CI/CD pipeline:
        Testing and deployment can be done centrally.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the disadvantages of monorepositories versus using different repositories?',
    response: [
      `Repository size:
        Very large monorepos can slow down cloning, indexing, and local builds.
        Tool complexity:
        Need special managers like Nx, Lerna, Turborepo for dependency management and caching.
        Can be difficult for autonomous teams:
        If teams are working on different products, conflicts when merging changes become more frequent.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Describe the CI process in the current project.',
    response: [
      `Push or Pull Request to the repository:
        Trigger for each PR or push to main/develop.
        In a monorepo, you can do “affected packages detection” to run tests only for changed packages.
        Code checking:
        Linting (eslint, stylelint) for JS/TS and CSS.
        Formatting (prettier) — a single code style.
        Build:
        npm run build or yarn build for each package/application.
        Check that the build went without errors.
        Tests:
        Unit tests (Jest, Vitest) — checking the logic of the components.
        Integration tests (React Testing Library) — checking the interaction of the components.
        Accessibility tests (axe-core, @testing-library/jest-dom) — checking a11y.
        Static analysis:
        TypeScript — checking types.
        You can add a security scan (Snyk, Dependabot) for dependencies.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Describe the CD process in the current project.',
    response: [
      `Staging:
        Automatic deployment to staging after merge to develop or PR approval.
        Ability to view preview environment (e.g. Vercel, Netlify, Docker).
        Production:
        Automatic deployment after merge to main (Continuous Deployment)
        Or manual approval (Continuous Delivery).
        Pre-deployment checks:
        Smoke tests on staging.
        Accessibility and key user scenarios checks.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is microservice architecture?',
    response: [
      `This is an approach to building software where the system is broken down into separate autonomous services, each of which is responsible for a specific business function.
        Each microservice:
        has its own database or schema (if needed),
        is deployed separately,
        communicates with others via APIs (REST, gRPC, message broker).
        Note: this is the opposite of a monolith, where all the functionality is in a single application.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Microservice architecture advantages compared to monolithic architecture?',
    response: [
      `Scalability -> Each service can be scaled independently, to accommodate the load on a specific function.
        Technology flexibility Each service can use its own technology stack (Node.js, Python, Go, etc.).
        Accelerated deployment -> Updating one service does not affect others; releases can be made more often.
        Independent team Developers work on individual services without the risk of breaking the entire monolith.
        Fault tolerance -> An error in one service will not “crash” the entire application if communication is configured correctly.
        Easy refactoring -> Local changes in the service do not break the entire code base.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How would you design a system for high availability and scalability?',
    response: [
      `Architectural principles, Infrastructure, Scaling, High availability, CI/CD and continuous delivery.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What design patterns do you know and where to apply them?',
    response: [
      `If you need to create objects flexibly → Creational.
        If you need to organize the structure of objects → Structural.
        If you need to manage interaction and behavior → Behavioral.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the strategies for scaling web applications?',
    response: [
      `Scaling Up, Scaling Out, Database scaling, Frontend scaling, Scaling by load type, Combined strategies.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is SPA?',
    response: [
      `is a web application that loads a single HTML document and dynamically updates the content on the page without a full reload.
        The main logic is executed on the client (browser) via JavaScript.
        Communication with the server is done via AJAX/Fetch API or GraphQL to load only the data needed.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Advantages SPA',
    response: [
      `Fast user experience (UX):
        After the first page load, navigation occurs without reloading → fast response.
        Reduced server load:
        The server returns only data, not full HTML pages.
        More dynamic interface:
        You can easily create animations, interactive elements, drag-and-drop.
        Ability to use modern front-end frameworks
        React, Vue, Angular, Svelte - convenient work with components and state.
        API reuse:
        The server provides a REST/GraphQL API that can be used by mobile applications and other clients.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Disadvantages SPA',
    response: [
      `SEO Issues:
        Search engines don't always see dynamically generated content.
        Requires SSR (Server Side Rendering) or prerendering.
        Slower initial loading:
        Large JavaScript overhead → slow loading for users with slow internet.
        Difficulty with web accessibility (a11y):
        Dynamic content updates can confuse screen readers if ARIA and proper focus navigation are not used.
        State Management:
        Large SPAs require complex state management (Redux, MobX, Pinia, Zustand).
        Security:
        High dependency on client-side code → potential XSS and CSRF vectors.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Monolithic (Monolithic architecture)',
    response: [
      `Bottom line: The entire application (frontend, backend, business logic, database) is located in a single project.
        Advantages:
        Easy to develop and deploy.
        Easy to test and debug in the early stages.
        Disadvantages:
        Difficult to scale individual parts.
        Harder to implement new technologies without rewriting the entire application.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Microservices (Microservices Architecture)',
    response: [
      `Bottom line: The application is broken down into small, autonomous services that communicate via APIs.
        Advantages:
        Horizontal scaling of only the necessary services.
        Each service can be developed and deployed independently.
        Easier to implement CI/CD and automated testing.
        Disadvantages:
        Complexity of communication between services.
        Need for additional infrastructure (Service Discovery, API Gateway, Message Broker).`,
    ],
    fullResponse: '',
  },
  {
    question: 'Serverless / Function as a Service (FaaS)',
    response: [
      `Bottom line: The application is broken down into functions that are executed on demand in the cloud (AWS Lambda, Azure Functions).
        Advantages:
        Pay only for actual usage.
        Scaling is automatic.
        Less administrative work with the infrastructure.
        Disadvantages:
        Cold start of functions → delays.
        Difficult to manage state between functions.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Progressive Web App (PWA)',
    response: [
      `Bottom line: SPA or web application with offline support, push notifications, and device installation.
        Advantages:
        Ability to work offline or with slow internet.
        Increases user engagement through push notifications.
        Disadvantages:
        Complexity of caching and updating content.
        Not 100% supported in all browsers.`,
    ],
    fullResponse: '',
  },
  {
    question: 'MVC / MVVM / Flux-like patterns',
    response: [
      `MVC (Model-View-Controller):
        Separates data, UI and interaction logic.
        Advantage: clear structure, easier to test.
        MVVM (Model-View-ViewModel):
        Used in frameworks like Vue, Angular.
        Advantage: two-way data binding, convenient for dynamic UI.
        Flux / Redux / Zustand (Unidirectional Data Flow):
        Centralized state management.
        Advantage: easier to control complex interactions in SPA.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How should you develop scalable front-end systems?',
    response: [
      `Modularity:
        Use component-driven development (e.g. React/Angular/Vue).
        Clearly separate UI components, business logic, and infrastructure code.
        Implement a design system / UI-kit for consistency.
        Abstraction layers:
        API calls — through a separate layer (e.g. services/api).
        State logic — separated (Redux, Zustand, Recoil, or React Query for data).
        UI — pure components with no direct business logic.
        Monorepository or microfrontends:
        For large systems: Nx, Turborepo (monorepo) or Module Federation (microfrontends).
        This allows the team to scale without conflicts.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How should you develop high-performance front-end systems?',
    response: [
      `Loading:
        Code splitting + lazy loading for pages and large modules.
        Tree-shaking and dependency minimization.
        Use CDN for static resources.
        Rendering:
        SSR (Next.js, Nuxt.js) or SSG for fast first load.
        Optimize rerenders (React.memo, useMemo, useCallback).
        List virtualization (React Window, Virtuoso).
        Data handling
        Caching (HTTP cache, service workers, React Query/SWR).
        Query optimization (batching, GraphQL, pagination, infinite scroll).
        Use Web Workers for heavy computations.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Are you familiar with microfrontend architecture?',
    response: [
      `This is an approach where a large front-end system is broken down into independent modules (applications) that can be developed, deployed, and scaled separately by different teams. The idea is the same as microservices on the backend.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Maybe you know specific implementations of microfrontend?',
    response: [
      `1. Webpack Module Federation:
        Built-in Webpack 5.
        Allows you to "import" modules from other applications at runtime.
        Very popular option for React/Angular/Vue.
        Used in Next.js (with Federation support).
        2. Single-SPA:
        Framework for orchestrating multiple SPAs.
        You can combine Angular + React + Vue on one page.
        Has adapters for popular frameworks.
        3. Qiankun (from Ant Financial / Alibaba):
        Built on top of Single-SPA, but more convenient.
        Allows you to easily connect micro-apps, cache them and manage their lifecycle.
        Popular in China and large enterprise projects.
        4. Luigi (SAP):
        A solution from SAP for corporate applications.
        Focused on enterprise scenarios, many ready-made features for security, routing, auth.
        5. Import Maps / ES Modules (native approach):
        Using ESM + import maps in the browser without Webpack.
        An easy and modern way to integrate multiple frontends without complex tooling.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to maintain a balance between ready-made solutions and developing your own solutions in projects? How should you make decisions about choices?',
    response: [
      `Take ready-made for standard tasks so as not to waste time.
        Build your own where it creates unique product value or gives strategic independence.`,
    ],
    fullResponse: '',
  },
];