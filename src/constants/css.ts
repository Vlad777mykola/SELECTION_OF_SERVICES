export const CSS_TS = [
  {
    question: 'What CSS methodologies do you know?',
    response: [
      `BEM (Block Element Modifier), OOCSS (Object-Oriented CSS), SMACSS (Scalable and Modular Architecture for CSS), Atomic CSS / Utility-First (як-от Tailwind CSS), ITCSS (Inverted Triangle CSS), CSS-in-JS (Emotion, styled-components, Stitches etc.)`,
    ],
    fullResponse: '',
  },
  {
    question: 'BEM (Block Element Modifier)',
    response: [
      `The gist: class naming using the block__element--modifier scheme.
      Pros: structured, easy to scale, integrates well with CSS/SCSS.
      Cons: cumbersome names, redundancy in simple projects.
      When to use: large projects without CSS-in-JS, teamwork.`,
    ],
    fullResponse: '',
  },
  {
    question: 'OOCSS (Object-Oriented CSS)',
    response: [
      `The point: separation of structure from appearance, reuse of styles.
       Pros: reuse of code, logical structure.
       Cons: complex organization, requires experience.
       When to use: large design systems.`,
    ],
    fullResponse: '',
  },
  {
    question: 'SMACSS (Scalable and Modular Architecture for CSS)',
    response: [
      `The gist: modularity, CSS categorization (base, layout, module, state, theme).
       Pros: scalability, good organization.
       Cons: requires strict adherence to rules.
       When to use: large UI libraries, theming.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Atomic CSS / Utility-First (як-от Tailwind CSS)',
    response: [
      `The bottom line: maximum styles — in classes like text-center, bg-red-500.
       Pros: fast development, little custom CSS, high controllability.
       Cons: cluttering the markup with classes, harder to maintain without a component approach.
       When to use: fast MVPs, SPAs, components in React/Vue/Svelte.`,
    ],
    fullResponse: '',
  },
  {
    question: 'ITCSS (Inverted Triangle CSS)',
    response: [
      `The gist: a hierarchy of styles from generic to specific (Generic → Elements → Objects → Components → Trumps).
       Pros: clear cascade order, minimize conflicts.
       Cons: difficult to learn without practice.
       When to use: large products with many teams.`,
    ],
    fullResponse: '',
  },
  {
    question: 'CSS-in-JS (Emotion, styled-components, Stitches etc.)',
    response: [
      `Bottom line: styles are written in JavaScript files.
       Pros: scoped styles, dynamics, automatic removal of unused styles.
       Cons: dependency on JS, harder to debug.
       When to use: React/Next.js projects when complete component isolation is required`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are CSS selectors?',
    response: [
      `This is the mechanism by which styles are applied to HTML elements. They determine which elements on a page will be styled.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How does inheritance work in CSS?',
    response: [
      `This is a mechanism by which some styles are automatically passed from a parent element to its children, without the need to explicitly set them for each.
       How inheritance works:
       Some CSS properties are "inherited" to child elements.
       This depends on the type of property.
       You can force inheritance using inherit, initial, or unset.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is the "box model" in CSS and how can it be changed?',
    response: [
      `This is a fundamental concept that describes how the browser calculates the dimensions and space of elements on a page.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is the difference between margin and padding?',
    response: [
      `padding Creates an internal padding between the content of an element and its border.
       margin Creates an outer margin between an element and its neighbors.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is Flexbox?',
    response: [
      `is a mechanism for arranging elements in a row or column, which provides a flexible way to align, distribute space, and adapt to different screen sizes.
       It is especially useful for building a responsive layout without complex calculations.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to implement layout using Flexbox or Grid and which approach is most appropriate in which case?',
    response: [
      `Flexbox (one-dimensional): By row or column, Relationships between elements, Aligns content well, Simple for in-line blocks, Good for flexible rows
       Grid (2D): By row and column at the same time, Full control over the grid, But requires more structure, More difficult to learn, Good for complex layouts`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are media queries and how do you use them?',
    response: [
      `This is a mechanism in CSS that allows you to apply styles based on the device, screen size, or other characteristics such as orientation, resolution, etc.
      @media (condition) { /* CSS-rules */ }`,
    ],
    fullResponse: '',
  },
  {
    question: 'How can I hide an element using CSS?',
    response: [
      `display: none, visibility: hidden, opacity: 0, position: absolute; left: -9999px; , visibility: collapse`,
    ],
    fullResponse: '',
  },
  {
    question: 'Will opacity: 0; display: none; visibility:hidden work the same?',
    response: [
      `No, opacity: 0, display: none, and visibility: hidden are not the same. They hide an element differently, and this has an impact on layout, user experience, and accessibility.
       display: none -> It disappears completely—as if it doesn't exist at all.
       visibility: hidden -> Takes up space in the DOM.
       opacity: 0 -> The element is still there, but invisible. It can still be interacted with.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How can I make the logo in the middle of the screen?',
    response: [
      `Flexbox -> justify-content: center; Grid ->  place-items: center; Absolute positioning + transformation -> top: 50%; left: 50%;
       transform: translate(-50%, -50%);`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to place a close cross at the top right of an element?',
    response: [
      `position: relative on .modal — creates a parent context.
       position: absolute on .close-btn — allows you to position the cross relative to .modal.
       top: 10px; right: 10px; — places the button in the top right corner.`,
    ],
    fullResponse: '',
  },
  {
    question: '',
    response: [
      ``,
    ],
    fullResponse: '',
  },
  {
    question: '',
    response: [
      ``,
    ],
    fullResponse: '',
  },
  {
    question: '',
    response: [
      ``,
    ],
    fullResponse: '',
  },
  {
    question: '',
    response: [
      ``,
    ],
    fullResponse: '',
  },
]; 