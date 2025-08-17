export const SECURITY = [
  {
    question: 'How to take care of the security of web applications?',
    response: [
      `Web application security = clean code + correct configuration + data protection + process control.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Explain the principles of Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) attacks and how to protect against them.',
    response: [
      `XSS = a third-party script is running in your browser.
        CSRF = your browser is executing someone else's request on your behalf.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the best practices for API security?',
    response: [
      `Auth + TLS + Validation + Rate Limiting — the basic four.
        Next: access control, logging, secrets management, monitoring.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Tell us about SQL injection protection.',
    response: [
      `Parameterized queries (required).
        ORM/Query builders.
        Input validation.
        Minimal DB privileges.
        Do not expose errors.
        WAF as an additional layer.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is CORS and how to configure it correctly?',
    response: [
      `CORS is a "whitelist" of domains that are allowed to access the API.
        You need to configure it carefully: allow only the necessary domains and methods, avoid * in sensitive services.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to manage secrets in projects?',
    response: [
      `✔ Secrets should never be in code or open repositories.
        ✔ Use a secret-manager or at least encrypted storage (Vault, AWS Secrets Manager).
        ✔ Restrict access (RBAC, least privilege).
        ✔ Secret management = storage + transfer + rotation + audit.`,
    ],
    fullResponse: '',
  },
  {
    question: 'If you were asked to create a safety checklist for a project, what would it be like?',
    response: [
      `This checklist covers authentication, API, frontend, secrets, infrastructure, CI/CD, and data.
        It can be used during code reviews or as release control.`,
    ],
    fullResponse: '',
  },
];