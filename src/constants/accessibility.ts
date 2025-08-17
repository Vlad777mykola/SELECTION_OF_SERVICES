export const ACCESSIBILITY = [
  {
    question: 'What is web accessibility?',
    response: [
      `It is the practice of creating websites and web applications in a way that makes them accessible and easy to use for all people, including those with disabilities or limited capabilities.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to test web accessibility?',
    response: [
      `Automated tools, Keyboard testing, Screen reader testing, Contrast and visual element testing, Multi-user testing, Integration into the development process.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Name the basic techniques for creating accessible web interfaces.',
    response: [
      `Semantic HTML markup, Alternative text for media, Keyboard accessibility, ARIA only where needed, Contrast and colors, Forms and error messages, Structured navigation, Responsiveness and scaling, Animations and motion, Language and clarity.`,
    ],
    fullResponse: '',
  },
  {
    question: 'In which cases should you use links?',
    response: [
      `Link = navigation.
        Jump to another page or section (even within the same document).
        Download a resource (PDF, image, file).
        Jump to an external site.
        Anchor links (href="#section1").
        👉 Main feature: the link changes the address in the browser (URL).`,
    ],
    fullResponse: '',
  },
  {
    question: 'In which cases should you use buttons?',
    response: [
      `Button = action on the current page.
        Open/close modal window.
        Expand/collapse menu or accordion.
        Submit form (type="submit").
        Clear form (type="reset").
        Run any script (play video, slider, etc.).
        👉 Main feature: the button performs an action, but does not change the URL directly.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What text should be in the alt attribute?',
    response: [
      `The alt attribute should describe the content and function of the image, not its technical specifications.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What levels of accessibility do you know? How do they differ?',
    response: [
      `A → “Minimum: the site works”
        AA → “Convenient: the site is actually usable”
        AAA → “Ideal: the site is as user-friendly as possible”`,
    ],
    fullResponse: '',
  },
  {
    question: 'Describe the features of implementing keyboard navigation on a site.',
    response: [
      `✅ logical order of transitions.
        ✅ clear visible focus.
        ✅ all actions are available without a mouse.
        ✅ correct behavior of modals and menus.
        ✅ ARIA support for complex components.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are HTML5 Landmarks used for?',
    response: [
      `Screen reader orientation, Better semantics and SEO, Replacing redundant ARIA, Simplifying keyboard navigation.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What web accessibility issues are most common in SPA applications?',
    response: [
      `❌ no page change announcement.
        ❌ no focus update after routing.
        ❌ custom components without keyboard support.
        ❌ no live announcements of dynamic changes.
        ❌ broken browser history.`,
    ],
    fullResponse: '',
  },
  {
    question: 'A designer is consulting with you about the design of an upcoming project. What advice would you give him regarding accessibility?',
    response: [
      `contrast and fonts.
        clear texts.
        clear forms and errors.
        large clickable areas.
        support for barrier-free navigation.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is ARIA, what are its main roles, states, and properties?',
    response: [
      `is a set of attributes that add semantics and behavior to HTML elements, especially when standard tags are not suitable.
        Adds information for screen readers and assistive technologies.
        Used for dynamic components, custom buttons, menus, modals, tabs, etc.
        ARIA does not replace native tags, but complements them where semantics are needed.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are ARIA main roles?',
    response: [
      `A role describes the type of element and its behavior.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are ARIA main states?',
    response: [
      `The state shows the current state of the element, which can change dynamically.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are ARIA main properties?',
    response: [
      `Properties provide additional information about an element that a screen reader can announce.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Describe creating an accessible modal window from scratch. What are the options?',
    response: [
      `1. Native:
        <dialog> (HTML5 tag).
        Has showModal() / close() methods.
        Browser support is currently good, but polyfills are often needed for older browsers.
        Plus: the browser itself handles background blocking and focus.
        2. Custom:
        Created on <div> + JS.
        You need to manually manage:
        role (role="dialog"),
        aria-modal,
        focus and focus trap,
        closing via keys.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Describe creating an accessible modal window from scratch. What should you look for?',
    response: [
      `Focus should not “escape” from the modal.
        Background content should be inaccessible to screen readers and keyboards (aria-hidden="true").
        The screen reader should announce the modal, and not leave the user in the background.
        Modals should not open automatically when the page loads without warning.
        Modal content should be semantically structured: headings, lists, forms.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Do you know the specifics of the legislation regarding web accessibility in the countries of your main clients (USA, EU, UK, Canada, Ukraine)?',
    response: [
      `WCAG 2.1 AA is the international “gold standard” for most countries.
        Government websites are subject to the strictest requirements almost everywhere.
        The private sector in the US and some countries is subject to sanctions due to case law or national recommendations.
        Ukraine is following the EU trend, focusing on government services and online services.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Imagine I’m a customer who knows nothing about accessibility and has never thought about it. Convince me why accessibility is important and why I should spend the extra money on it.',
    response: [
      `More users → more sales/leads,
        Better UX for everyone,
        Legal protection,
        Improved SEO and reputation,
        Less costs for future improvements.`,
    ],
    fullResponse: '',
  },
];