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
    question: 'How to make the last item in a list red, regardless of the length of the list without JS?',
    response: [
      `To make the last item in a list red without using JavaScript, you can use the :last-child CSS pseudo-cl`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to make the last item in a list red, regardless of the length of the list without JS?',
    response: [
      `To make the last item in a list red without using JavaScript, you can use the :last-child CSS pseudo-class.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the options for setting the color?',
    response: [
      `Named colors, Hex, RGB (Red, Green, Blue), HSL (Hue, Saturation, Lightness), system colors, Custom Properties, CurrentColor, Color-mix() (CSS Color Module Level 4)`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is z-index?',
    response: [
      `is a CSS property that determines the order in which elements are stacked (layered) along the Z axis (i.e., "depth"). It specifies which element will be on top of which when multiple elements overlap.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Does every element have a z-index?',
    response: [
      `All elements have z-index: auto by default, but it doesn't work until positioning is specified. If an element does not have position: relative | absolute | fixed | sticky, z-index is ignored completely.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the advantages and disadvantages of using CSS preprocessors?',
    response: [
      `✅ Advantages of CSS preprocessors: Variables, Nesting, Conditions and Loops, Code Organization through Imports, Functions, Better Scaling.
       ❌ Disadvantages of CSS preprocessors: Compilation required, More complex infrastructure, Higher learning curve, Possibility of abuse, The emergence of CSS substitutes`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the methods for centering an element in CSS?',
    response: [
      `For block elements (e.g. div): margin: 0 auto;
       Text inside the container: text-align: center;
       flexbox: .parent { display: flex; align-items: center; },
       line-height (for a single line of text),
       Grid: .parent { display: grid; place-items: center; height: 100vh},
       Absolute + transform: .element { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); },
       position: fixed: .element { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); }
       Inline elements with a table (old method)`,
    ],
    fullResponse: '',
  },
  {
    question: 'Why are there different levels of headings if the size can be set with styles?',
    response: [
      `Heading levels (<h1>…<h6>) exist not for styling, but for structuring the content of the page.
       Semantics (meaning), SEO (search engine optimization), Document structure support, Browsers and default styles, Accessibility
      `,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the options for positioning an element on a page?',
    response: [
      `static, relative, absolute, fixed, sticky`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the types of displays?',
    response: [
      `block, inline, inline-block, none, flex, grid, table`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is the difference between position: relative and position: absolute ?',
    response: [
      `Position: relative:
       The element remains in the document flow, i.e. it occupies its normal place.
       Positioning is relative to the original position of the element itself.
       Displacing with top, left, bottom, right will shift the element, but the space under it in the flow will remain (as if it had not been moved).
       Often used to create a positioning context for nested absolute elements.
       Position: absolute
       The element flies out of the document flow — it takes up no space, other elements behave as if it does not exist.
       Positioned relative to the nearest ancestor with positioning, except static (relative, absolute, fixed, sticky). If there is none — relative to the window (<html>).
       top, left, bottom, right set the position relative to this container.
       `,
    ],
    fullResponse: '',
  },
  {
    question: 'What size units are there in CSS?',
    response: [
      `Absolute: px, pt, cm, mm, in, pc. Relative: %, em, rem, vw (viewport width), vh (viewport height), vmin, vmax, ch (character width), ex (x-height of the font), fr (fractional unit in CSS Grid). Special: lh, vi, vb`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the risks of using negative values for indents?',
    response: [
      `Overlapping other elements, Responsiveness issues, Accessibility degradation, Unwanted side effects, Position collision issues.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are pseudo-classes and pseudo-elements?',
    response: [
      `Pseudoclasses (:hover, :focus, :nth-child, etc.):
       A pseudoclass is a state or condition of an element under which styles are applied.
       Written with a single colon: :hover, :active, :focus, :first-child, etc.
       Applies to existing elements in the document.
       Pseudo-elements (::before, ::after, ::first-letter, etc.):
       A pseudo-element is a virtual (artificial) element that CSS adds to the DOM to style part of an element or add content.
       It is written with two colons: ::before, ::after, ::first-line, etc.
       Pseudo-elements do not exist in the source HTML, but the browser creates them and can style them.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Difference between pseudo-classes and pseudo-elements?',
    response: [
      `A pseudo-class describes the state of an element that already exists in HTML.
       A pseudo-element creates a virtual part of an element that can be styled.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is responsive design?',
    response: [
      `This is an approach to creating websites in which the interface automatically adjusts to the screen size of the device on which it is viewed: smartphone, tablet, laptop, TV, etc.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is the difference between images added via the HTML <img> tag and the CSS background-image property?',
    response: [
      `<img src="..." />: 
      ✅ This is part of the content. For example, a product photo, logo or meme is content that the user should see.
      ✅ Accessibility. You can add alt="Image description" - screen readers will read it.
      ✅ Automatically loaded by the browser.
      ✅ Indexed by search engines (Google can "see" this image).
      ✅ Supports srcset for responsive images.
      ➖ Disadvantages: Not suitable for decorative images. Less control from CSS (harder to set as background, adjust position or repeat).
      background-image — CSS property: 
      ➕ Benefits: ✅ Decorative image. Used for aesthetics, design, background — e.g. background texture, icon, gradient.
      ✅ More control via CSS: background-size, background-repeat, background-position, background-blend-mode, etc.
      ✅ Can be replaced dynamically based on media queries.
      ✅ Does not load if the element is hidden.
      ➖ Disadvantages: ❌ Not part of the content. The browser does not "know" that this image is important - it does not index it.
      ❌ Does not support alt. Screen readers cannot read what is in the image.
      ❌ Cannot be inserted directly into HTML - only through CSS.
      `,
    ],
    fullResponse: '',
  },
  {
    question: 'How do you address cross-browser compatibility issues in website development, particularly in the context of different browser versions?',
    response: [
      `Using modern standards (best practices),
       Checking support via Can I use,
       Testing in real browsers,
       Using prefixes (for CSS),
       Using Reset or Normalize.css,
       Polyfiles and Babel,
       Using frameworks or libraries,
       Progressive enhancement and graceful degradation.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How to implement responsive design using CSS?',
    response: [
      `Relative units instead of fixed ones,
       Flexible grids: Flexbox and Grid,
       Responsive images,
       Mobile-first approach,
       Resetting styles (normalize.css or reset.css).`,
    ],
    fullResponse: '',
  },
  {
    question: 'Explain the concept of CSS variables.',
    response: [
      `These are variables that allow you to store style values in CSS and reuse them. This is very useful for maintenance, scaling, and responsive design.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What CSS properties affect performance?',
    response: [
      `❌ Don't animate width, height, margin
       ✅ Use transform, opacity for effects
       📉 Optimize DOM and styles that cause layout recalculation`,
    ],
    fullResponse: '',
  },
  {
    question: "How to make two columns in CSS so that one stretches and the other doesn't?",
    response: [
      `1. Grid Layout: .container { display: grid; grid-template-columns: 200px 1fr; }
       2. Flexbox: .fixed { width: 200px; } .flexible { flex: 1; }
       3. Inline-block + calc(): .fixed { display: inline-block; width: 200px; vertical-align: top; }
      .flexible { display: inline-block; width: calc(100% - 200px); vertical-align: top; }`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the pros and cons of CSS animations?',
    response: [
      `Pros:
      Performance: Browsers can optimize animations at the GPU level, especially for transform and opacity.
      Simplicity: Easily described via CSS, no need for complex code.
      Short code: Define animations in CSS, no extra JS.
      Support for media queries and prefers-reduced-motion: You can easily adapt animations to conditions.
      Autoplay: Once loaded, the animation starts automatically.
      Cons:
      Less flexibility: Difficult to control animations in real time, change speed, direction, stop or replay.
      Limited logic: Cannot add complex conditions or interactions like in JS.
      Complex sequences: Complex scenarios require multiple keyframes or use of JS.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What are the pros and cons of JS animations?',
    response: [
      `Pros:
       Great flexibility: You can dynamically change parameters, react to events, control time, sequence.
       Complex logic: It is easy to create complex scenarios, synchronize animations.
       Work with any properties: You can animate any CSS properties or even SVG attributes.
       Integration with frameworks: Many libraries (GSAP, anime.js) provide advanced capabilities.
       Cons:
       Performance: If JS animations are not optimized, they can heavily load the CPU and slow down the page.
       Complexity: You need to write more code, take into account timings and logic.
       Lack of native optimizations: You need to monitor optimization yourself to avoid problems.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How can you override important or achieve a similar effect without important?',
    response: [
      `Increase selector specificity, Reuse !important with a more specific selector, Inline styles (in HTML), Use style via JS, Use style via JS,
       Use CSS Custom Properties (variables)`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is mobile-first design?',
    response: [
      `This is an approach in web development where the design and layout of a website is first created for mobile devices and then scaled (adapted) for larger screens — tablets and desktops.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Pluses of mobile-first design',
    response: [
      `Mobile-friendly:
      Since mobile traffic dominates today, starting with mobile allows you to create a lightweight, fast interface.
      Natural Responsiveness: It’s easy to scale your design up — adding new styles for larger screens.
      Better Performance: Mobile users get basic, minimal styles that load faster.
      Structured and understandable CSS cascading: Basic styles — small screen, additional — for larger ones.
      Support for modern standards: Most modern frameworks (Bootstrap 4+, Foundation) work mobile-first.`,
    ],
    fullResponse: '',
  },
  {
    question: 'Minuses of mobile-first design',
    response: [
      `Initial design can be more difficult:
      You need to think from the very beginning about how the content will look on small screens.
      Sometimes larger screens require a radically different design:
      Then you have to add a lot of media queries and styles, which complicates CSS.
      Difficulties with supporting old browsers: Some very old browsers may not work correctly with media queries (now rare).`,
    ],
    fullResponse: '',
  },
  {
    question: 'Explain how specificity is calculated in CSS selectors.',
    response: [
      `CSS selectors are treated as 4-digit numbers (a, b, c, d), where: 
       Specificity is compared in parts from left to right:
       First, look at a (inline styles) — if one selector has a=1, it overrides all others.
       If a is the same — look at b (ID)
       If b is the same — look at c (classes, attributes, pseudo-classes)
       If c is the same — look at d (tags, pseudo-elements)
       If all else is equal — the last rule in CSS takes precedence.
      `,
    ],
    fullResponse: '',
  },
  {
    question: 'What are pre-/postprocessors used for?',
    response: [
      `Pre- and post-processors in CSS are used to enhance, automate, and scale styles. They help make code more usable, cleaner, and more flexible.`,
    ],
    fullResponse: '',
  },
  {
    question: 'How can you optimize CSS for better performance?',
    response: [
      `CSS Minification,
      Avoiding unused CSS,
      Concatenation,
      Using Critical CSS,
      Minimizing selector complexity,
      Avoiding @import,
      Reducing heavy properties,
      Lazy-loading CSS,
      Minimizing frameworks unless you’re using everything,
      Profile and test.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What do you think “modern CSS” is?',
    response: [
      `Modern CSS is not just about new features, but about the writing style, the approach to development, and the use of the latest language features that:
      improve performance, make the code more flexible and scalable, allow you to abandon JavaScript in many cases.`,
    ],
    fullResponse: '',
  },
  {
    question: 'What is the difference between variables in SCSS and CSS Custom Properties?',
    response: [
      `1. When they work: compile-time vs run-time: 
       SCSS variables:
       Evaluated when SCSS is compiled to CSS
       Value is "frozen" in CSS
       ❌ Cannot be changed without recompiling
       CSS variables (Custom Properties):
       Runs at runtime in the browser,
       Can be changed dynamically in the browser or via JS
       ✅ Can change themes, update styles in real time.
       🌐 2. Scope:
       SCSS: Block area (as in regular languages),
       DoM independent.
       CSS Custom Properties:
       Inheritance: values can be overridden in the DOM,
       Related to the element hierarchy in HTML.
       3. Ability to use SCSS in JavaScript
       SCSS:
       ❌ Not available in JavaScript,
       Only work until render.
       CSS Custom Properties:
       ✅ Available via getComputedStyle(),
       Can be read, modified on the fly.
       4. Possibility of use in calculations:
       SCSS: ✅ Full math support.
       CSS Custom Properties:
       ⚠ Partial support (calc(), clamp())
      `
    ],
    fullResponse: '',
  },
  {
    question: 'How do you resolve or prevent style conflicts when working with multiple front-end developers on a project?',
    response: [
      `Clear structure and naming (CSS architecture),
       Naming with prefixes/namespaces,
       CSS Modules / Styled Components / TailwindCSS,
       Prohibition of global styles (or their clear delimitation),
       Linting and automatic checks,
       Review + mandatory documentation of styles,
       Component-based Design,
       Layered CSS / Cascade Layers (new in CSS).`
    ],
    fullResponse: '',
  },
  {
    question: 'I need to add custom styles to the scrollbar. How would you do it?',
    response: [
      `WebKit approach (Chrome, Safari, Edge), Firefox approach, Compatible solution.`
    ],
    fullResponse: '',
  },
  {
    question: 'What methods of style isolation do you know?',
    response: [
      `CSS Modules, BEM (Block Element Modifier), Scoped styles in frameworks, CSS-in-JS (Styled Components, Emotion), TailwindCSS / Atomic CSS, Shadow DOM (Web Components).`
    ],
    fullResponse: '',
  },
  {
    question: 'Why do we need CSS Logical Properties?',
    response: [
      `This is a more flexible, localization-friendly approach to layout that allows you to create language-neutral CSS and reduce the number of conditional styles.`
    ],
    fullResponse: '',
  },
  {
    question: 'How does the CSS clamp() function work?',
    response: [
      `The CSS clamp() function allows you to set a property value that automatically adjusts between a minimum and a maximum, depending on an intermediate parameter.`
    ],
    fullResponse: '',
  },
  {
    question: 'How to optimize styles for printing on a printer?',
    response: [
      `Use @media print media query, Remove unnecessary elements, Optimize colors and backgrounds,
       Use contrasting fonts,
       Adjust sizes and margins,
       Control page breaks,
       Use simple typography,
       Disable links or change their appearance,
      Minimize graphics,
      Test printing in different browsers`
    ],
    fullResponse: '',
  },
  {
    question: '',
    response: [
      
    ],
    fullResponse: '',
  },
  {
    question: '',
    response: [
      
    ],
    fullResponse: '',
  },
  {
    question: '',
    response: [
      
    ],
    fullResponse: '',
  },
  {
    question: '',
    response: [
      
    ],
    fullResponse: '',
  },
  {
    question: '',
    response: [
      
    ],
    fullResponse: '',
  },
  {
    question: '',
    response: [
      
    ],
    fullResponse: '',
  },
  {
    question: '',
    response: [
      
    ],
    fullResponse: '',
  },
  {
    question: '',
    response: [
      
    ],
    fullResponse: '',
  },
]; 