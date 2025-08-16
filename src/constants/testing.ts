export const TESTING = [
  {
    question: 'Whose responsibility is a bug in production — the developer or the tester?',
    response: [
      `In reality, the responsibility for a bug in production does not lie with one person, but with the entire team and development process.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you test your code?',
    response: [
      `Unit tests:
        Test individual functions or classes.
        For example, for the sorting function, I test different input arrays and expected results.
        Frameworks: Jest (JS), PyTest (Python), JUnit (Java).
        Integration tests:
        Test the interaction of several modules.
        For example, testing an API controller that reads from the database and returns JSON.
        End-to-End (E2E) tests:
        Test the application as a complete system.
        For example, UI tests via Cypress or Playwright: the user enters the site → makes purchases → receives confirmation.
        Local launch + mocking of external services:
        For services that are not accessible in the dev environment, I make mocks/stubs.
        Allows you to test even “hard-to-access” code.`,
    ],
    fullResponse: '',
  },
  {
    question: "Did you write code that couldn't be tested before deployment?",
    response: [
      `External integrations without a test environment.
        For example, working with a banking API that does not have a sandbox.
        Real hardware systems.
        Working with IoT, sensors, robots.
        Products with a high load.
        Some problems can only be seen under real traffic.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is AAA in testing?',
    response: [
      `This is “Arrange, Act, Assert,” a pattern for structuring tests that makes them understandable and maintainable.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Why is testing being implemented?',
    response: [
      `Testing is introduced into development to ensure product quality, reduce risks, and facilitate code maintenance.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Are there cases when testing is not appropriate?',
    response: [
      `Yes, such cases exist, but they are more the exception than the rule. Testing is almost always useful, but sometimes it can be skipped or minimized due to cost, speed, or project specifics.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What types of testing do you know?',
    response: [
      `By level of coverage, By method of execution, By purpose/type of verification, By source of knowledge.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Unit-testing',
    response: [
      `What is tested:
        Individual functions, methods, classes or modules.
        Local code without external dependencies (bases, APIs, UIs).
        Goal:
        To make sure that a specific unit of code works correctly.
        Characteristics:
        Fast → run in seconds.
        Easily isolated and reproducible.
        Use mocks/stubs to replace external dependencies.`,
    ],
    fullResponse: '',
  },
  {
    question: 'E2E-testing',
    response: [
      `What is tested:
        The product as a complete system, including UI, API, database, integrations.
        Objective:
        To make sure that all components work together correctly from the user's perspective.
        Characteristics:
        Slower → can take minutes.
        More difficult to configure and maintain.
        Tests real user scenarios.`,
            ],
    fullResponse: '',
  },
  {
    question: 'What test automation tools do you know?',
    response: [
      `Jest, Mocha + Chai, Cypress, Playwright, Selenium, TestCafe, JMeter, Gatling, Locust, Jenkins, Github Actions, Gitlab CI/CD, CircleCI.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to test RESTful API?',
    response: [
      `Use isolated environments (staging, sandbox).
        Use API / OpenAPI contracts to test the structure.
        Cover positive and negative cases.
        Automate tests and run them in CI/CD.
        Log all requests and responses for debugging.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is TDD?',
    response: [
      `is a software development methodology where tests are written before the code is implemented. The basic idea is to first determine how the code should behave, and then write the code itself to pass the test.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you choose whether to cover functionality with tests?',
    response: [
      `Business/user criticality, Complexity and probability of error, Frequency of changes.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you detect and isolate errors in your code?',
    response: [
      `Reproduce the problem:
          Make sure the bug can be consistently reproduced.
          Identify the input, steps, and environment where the error occurs.
          Analyze error messages and logs:
          Review stack traces, server or console logs.
          Pay attention to lines of code, exception types, and message context.
          Simplify the problem:
          Reduce the amount of data or steps to a minimal script that reproduces the error.
          Create a minimal example to isolate the cause.
          Use breakpoints and step-by-step debugging
          Check variable values and program state at each step.
          Test assumptions:
          Ensure that functions, data, and external dependencies work as expected.
          Divide and conquer.
          Temporarily comment out or skip sections of code to pinpoint the exact location of the error.
          Adding logging:
          Use additional logs or temporary console.log/print to track execution flow and variable values.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What debugging tools do you use?',
    response: [
      `IDE Debuggers (VSCode, IntelliJ, PyCharm), Browser DevTools (Chrome, Firefox), Logging (Winston, Log4j, Python logging), Profiling, Automated tests (Jest, PyTest, JUnit), Network tools (Postman, cURL, Wireshark), Monitoring services (Sentry, Bugsnag).`,
    ],
    fullResponse: '',
  },
  {
    question: 'Do you have experience covering large systems with tests?',
    response: [
      `Prioritizing critical functions:
        The system contains hundreds of modules → we start with the most important for the business.
        Contract API testing:
        Verifying that services interact correctly with each other.
        CI/CD integration:
        Automatically run tests on commits/merges to instantly detect regressions.
        Testing on real and isolated environments:
        Staging server for integration and E2E tests.
        Mocking external dependencies for unit tests.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Do you have experience customizing test utilities to meet project needs?',
    response: [
      `Yes, I have experience customizing test utilities, and this is usually done when standard tools do not fully cover the specific needs of the project.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to organize test data and make it relevant to different testing scenarios?',
    response: [
      `Isolation:
        Each test should work with its own set of data or restore the state after execution.
        Use mocked objects or temporary databases.
        Repeatability:
        Data should be reproducible in any environment.
        Use fixtures, seed scripts, or data factories.
        Variety:
        Generate data for positive and negative scenarios, boundary values, large volumes, and false positives.
        Ease of maintenance:
        Centrally store and manage test data for rapid updates as business logic changes.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to integrate testing processes into continuous integration?',
    response: [
      `Automation of all tests:
        Unit, integration and E2E tests should be run automatically with each commit or pull request.
        Separation of test levels:
        Unit tests: quickly detect regressions in the code.
        Integration tests: check the interaction of modules or services.
        E2E tests: run in a staging environment before deploying to production.
        Environment isolation:
        Tests should be run in separate environments (containers, test databases) so as not to affect production.
        Monitoring and reporting:
        Automatic generation of logs and reports on test results.
        Notify the team about an unsuccessful build via Slack, email or dashboard.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to integrate testing processes into continuous deployment systems?',
    response: [
      `Commit to repository:
        CI is triggered by push or pull request.
        Pipeline launch:
        Unit tests + linters + static code analysis.
        Integration tests on test bases or containers.
        E2E tests on staging environment.
        Reporting and logging:
        The CI/CD system sends a report on the success of the tests.
        In case of an error, the pipeline stops and the code is not deployed.
        Deployment:
        If all tests are successful, automatic deployment to staging or production.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How should you automate testing?',
    response: [
      `Prioritize:
        Critical and frequently used functions are covered.
        Unit tests for business logic, Integration for services, E2E for key user scenarios.
        Isolation and stability:
        External service mocking, data factories and repeatable test data (fixtures, seed) are used.
        CI/CD integration:
        Tests are automatically run on commits, pull requests or before deployment.
        Logs and reports are automatically sent to the team.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What tools and do you use?',
    response: [
      `Unit: Jest, Mocha, PyTest, JUnit. Integration: Supertest, Testcontainers, PyTest + fixtures. E2E: Cypress, Playwright, Selenium. Load / Performance: JMeter, Locust. CI/CD: GitHub Actions, GitLab CI, Jenkins, CircleCI. Reports and monitoring: Allure Reports, Sentry, Slack integrations.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What tools scripting languages do you use?',
    response: [
      `JavaScript / TypeScript - frontend and Node.js backend.
        Python - API tests, integration and backend tests.
        Java - enterprise systems, Selenium, JUnit.
        Shell / Bash - CI/CD scripts, environment preparation.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to ensure consistency of test results across different environments (development, testing, production)?',
    response: [
      `To ensure consistency of test results across environments, you need to work to ensure that all environments are as similar as possible and that tests are independent of external changes.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you determine when a software product is ready for release?',
    response: [
      `To determine a product's readiness for release, I use a combination of qualitative and quantitative criteria that ensure stability, operability, and an acceptable level of risk.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What green light criteria do you use for a release?',
    response: [
      `Smoke/Release candidate testing:
        Quickly check key functionality on staging.
        Code freeze and final QA:
        Prohibition of adding new functionality.
        Focus on bug fixing and stabilization.
        Approval:
        QA team and product managers confirm compliance with requirements.
        Technical lead/architect assesses the readiness of the infrastructure and deployment process.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Do you know the chaos engineering approach, if so, how can it be applied on the frontend?',
    response: [
      `Simulate slow connection:
        Use throttling (network speed limitation) or special DevTools.
        Check if the UI correctly displays spinners, timeouts, fallback scenarios.
        Simulate API errors:
        Mock server errors (500, 404, 403) and check the processing on the UI.
        For example, the component should display an error message or a retry button.
        Simulate data loss:
        Forcefully delete or modify local state/LocalStorage/IndexedDB.
        Check if the frontend correctly restores the state or displays a message.
        Random clicks or incorrect user actions:
        Generate unpredictable events to check the stability of the UI (e.g. double clicks, fast switching between tabs).
        Integration with automated tests:
        Include chaos tests in E2E or unit/integration tests to check behavior under non-standard conditions.`,
    ],
    fullResponse: '',
  },
];