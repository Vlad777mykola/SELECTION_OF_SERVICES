export const WEB_PERFORMANCE = [
  {
    question: 'What do you know about Core Web Vitals?',
    response: [
      `Core Web Vitals are a set of metrics that Google uses to measure the performance of a website. They are a set of three metrics: Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS).`
    ],
    fullResponse: '',
  },
  {
    question: 'What is the difference between laboratory and field performance measurements?',
    response: [
      `Laboratory performance measurements are measurements made in a controlled environment, while field performance measurements are measurements made in the real world.`
    ],
    fullResponse: '',
  },
  {
    question: 'What image formats do you know, and how do they differ?',
    response: [
      `I know the following image formats: JPEG, PNG, GIF, SVG, and WebP. The main difference between them is the quality and the file size.`
    ],
    fullResponse: '',
  },
  {
    question: 'JPEG',
    response: [
      `is a lossy format, which means that it can reduce the file size by sacrificing some quality. It is a good format for photos and images with a lot of colors.`
    ],
    fullResponse: '',
  },
  {
    question: 'PNG',
    response: [
      `is a lossless format, which means that it preserves the quality of the image. It is a good format for images with a lot of details and for logos.`
    ],
    fullResponse: '',
  },
  {
    question: 'GIF',
    response: [
      `is a format that supports animations. It is a good format for small animations and for logos.`
    ],
    fullResponse: '',
  },
  {
    question: 'SVG',
    response: [
      `is a vector format, which means that it can be scaled without losing quality. It is a good format for logos and for icons.`
    ],
    fullResponse: '',
  },
  {
    question: 'WebP',
    response: [
      `is a modern format that combines the best of JPEG and PNG. It is a good format for photos and images with a lot of colors.`
    ],
    fullResponse: '',
  },
  {
    question: 'Your site is taking a long time to load on a mobile device. Tell me step by step how you would look for the cause.',
    response: [
      `Reproduce and Measure, Check Network Performance, Analyze Rendering and JavaScript, Audit Assets, Check Third-Party Scripts, Test Server & Hosting, Optimize & Retest.`
    ],
    fullResponse: '',
  },
  {
    question: 'Measurement and analysis tools',
    response: [
      `Google PageSpeed Insights, Lighthouse (Chrome DevTools), WebPageTest.org, Chrome DevTools`
    ],
    fullResponse: '',
  },
  {
    question: 'Optimization HTML',
    response: [
      `html-minifier, online services`
    ],
    fullResponse: '',
  },
  {
    question: 'Optimization CSS',
    response: [
      `Minimization CSS: cssnano, PostCSS.
      Purify/Unused CSS: PurgeCSS, UnCSS.
      `
    ],
    fullResponse: '',
  },
  {
    question: 'How do you optimize images on a web page to improve performance?',
    response: [
      `Choosing the right format, Image compression, Appropriate sizes, Lazy loading, Caching and CDN, Sprites and icons, Automation`
    ],
    fullResponse: '',
  },
  {
    question: 'What website optimization methods do you know?',
    response: [
      `Resource Optimization, Backend Optimization, Performance Optimization, UX and Visual Stability, Analysis and Monitoring Tools`
    ],
    fullResponse: '',
  },
  {
    question: 'What are the main metrics that measure website performance?',
    response: [
      `Largest Contentful Paint (LCP), First Input Delay (FID), Cumulative Layout Shift (CLS), Time to First Byte (TTFB), Total Blocking Time (TBT), First Contentful Paint (FCP), Speed Index, Visual Complete 85%, Largest Contentful Paint (LCP), First Input Delay (FID), Cumulative Layout Shift (CLS)`
    ],
    fullResponse: '',
  },
  {
    question: 'What is Cumulative Layout Shift and how to improve its value?',
    response: [
      `is a performance metric that measures unexpected changes in the layout of a page as it loads. In other words, when elements “jump” across the screen, the user may accidentally click in the wrong place or lose context.`
    ],
    fullResponse: '',
  },
  {
    question: 'how to improve Cumulative Layout Shift value?',
    response: [
      `Set element sizes, Use font-display: swap, Avoid dynamic content insertion, Optimize ad and widget blocks.`
    ],
    fullResponse: '',
  },
  {
    question: 'What is Critical CSS?',
    response: [
      `Critical CSS is the CSS that is necessary for the initial render of a page. It is the CSS that is necessary for the page to be displayed correctly.`
    ],
    fullResponse: '',
  },
  {
    question: 'How do you design animations from a performance perspective, particularly when using CSS?',
    response: [
      `Animate transform and opacity → do not trigger layout reflow, Do not animate width, height, margin, padding, top/left → this triggers reflow and causes lag, Use will-change to inform the browser, Use hardware acceleration via transform: translateZ(0) or translate3d(...)`
    ],
    fullResponse: '',
  },
  {
    question: 'How do you design animations from a performance perspective, particularly when using JavaScript?',
    response: [
      `Use requestAnimationFrame instead of setInterval/setTimeout, Minimize work with layout properties (offsetWidth, scrollTop) inside animation loops, Pre-store values for calculations to avoid forcing the browser to reflow during animation.`
    ],
    fullResponse: '',
  },
  {
    question: 'What image formats are best to use on the web?',
    response: [
      `WebP, SVG, PNG, JPEG, JPG`
    ],
    fullResponse: '',
  },
  {
    question: 'What are the methods for optimizing images for the web?',
    response: [
      `Lazy loading, Caching, CDN, Sprites and icons, WebP, JPEG2000, SVG`
    ],
    fullResponse: '',
  },
  {
    question: 'How do you manage the integration of third-party libraries or plugins to reduce performance impact?',
    response: [
      `Necessity assessment, Asynchronous or lazy loading, Code splitting and tree shaking, Minification and compression, Performance monitoring, Replacement strategy`
    ],
    fullResponse: '',
  },
  {
    question: 'How do you implement lazy loading for images and other resources to optimize loading time in HTML?',
    response: [
      `Built-in attribute loading="lazy". Pros: native support, simple implementation, no JS required. Cons: less flexible control over behavior.`
    ],
    fullResponse: '',
  },
  {
    question: 'How do you implement lazy loading for images and other resources to optimize loading time in JavaScript?',
    response: [
      `use Intersection Observer`
    ],
    fullResponse: '',
  },
  {
    question: 'How do you implement lazy loading for images and other resources to optimize loading time in React?',
    response: [
      `Using native lazy, Using Intersection Observer for components.`
    ],
    fullResponse: '',
  },
  {
    question: 'How do you use prefetching resources to increase page speed?',
    response: [
      `Used for resources that are needed on the current page to speed up rendering. The browser loads them as early as possible, even before the CSS/JS is needed in the normal flow.`
    ],
    fullResponse: '',
  },
  {
    question: 'How do you use preloading resources to increase page speed?',
    response: [
      `Used for resources that are needed on a future page so that the browser can load them at its leisure.
        Plus: resources are loaded with low priority, do not block the current render.`
    ],
    fullResponse: '',
  },
  {
    question: 'You have a gallery page that needs to display a large number of YouTube videos. How would you implement this so that the page loads quickly?',
    response: [
      `Do not load all iframes at once, but use lazy loading and placeholders.`
    ],
    fullResponse: '',
  },
  {
    question: 'You need to display a table with several thousand rows. How would you implement this so that the page loads quickly and responds quickly to user actions?',
    response: [
      `Virtualization / Windowing, Pagination, Infinite Scroll / Lazy Load, DOM and rendering optimization`
    ],
    fullResponse: '',
  },
  {
    question: 'How would you organize the loading of a large number of CSS styles on a page so that the user can interact with it as quickly as possible, while avoiding layout shift?',
    response: [
      `Separate critical CSS and load it synchronously.
        Load main CSS asynchronously / lazily.
        For components with a lot of styles, use dynamic loading or CSS-in-JS.
        Set block and font sizes to avoid layout shifts.`
    ],
    fullResponse: '',
  },
  {
    question: 'The hypothetical site has a custom decorative font that is negatively impacting performance. List all possible options for optimizing it.',
    response: [
      `Use WOFF2 and font-display: swap.
      Load only the characters and styles you need.
      Load fonts asynchronously, only where they are needed.
      Use caching and CDN.
      Leave system fonts as a fallback when possible.`
    ],
    fullResponse: '',
  },
  {
    question: 'Imagine that you have an old project in maintenance (not a JS stack, a PHP framework backend) that was transferred to you from another team. The task is to optimize the frontend project as much as possible, within the budget and 16 hours. Describe your optimization strategy and steps within the specified constraints.',
    response: [
      `Frontend Optimization Strategy
        Principles:
        Focus on critical resources and visible content (above-the-fold).
        Minimize render blocks (CSS, JS, fonts).
        Local resource optimization and caching.
        Simple practices that give a big effect (lazy loading, compression, CDN).
        Steps: Analysis and prioritization (1–2 hours), CSS optimization (2–3 hours), Font optimization (1 hour), Image optimization (2–3 hours), JS optimization (2–3 hours), HTTP request optimization (1–2 hours), UX and CLS (1 hour), Result verification (1 hour).`
    ],
    fullResponse: '',
  },
  {
    question: 'What is the difference between preparing and connecting front-end assets depending on whether you use HTTP1 on the server?',
    response: [
      `One request → one resource (request per connection), although modern browsers open 6–8 parallel connections.
        High overhead with a large number of small files → each file adds latency.
        Browsers often block rendering if CSS or JS has not yet loaded.`
    ],
    fullResponse: '',
  },
  {
    question: 'What is the difference between preparing and connecting front-end assets depending on whether you use HTTP2 on the server?',
    response: [
      `Multiplexing: Multiple resources can be downloaded simultaneously over a single TCP connection.
        Smaller file aggregation value – small files do not create such a delay.
        The server can send resources in advance (Server Push).`
    ],
    fullResponse: '',
  },
  {
    question: 'What is DOM Reflow?',
    response: [
      `What it is: recalculation of the positions and sizes of elements on the page.
  When it happens:
  When the size of an element changes (width, height, padding, margin)
  When an element is added/removed from the DOM
  When text, font, or CSS classes that affect layout change
  Important: Reflow is an expensive process, especially on a large DOM, because the browser may reflow part or all of the DOM.`
    ],
    fullResponse: '',
  },
  {
    question: 'What is DOM Repaint?',
    response: [
      `What it is: The browser repaints the pixels on the screen for elements after changes that do not affect the layout.
    When it happens:
    Change of text color, background, visibility
    Change of shadow, stroke (box-shadow, border-color)
    Important: Repaint is cheaper than Reflow, because the browser does not have to recalculate the positions/sizes of elements.`
    ],
    fullResponse: '',
  },
  {
    question: 'What is DOM Compositing?',
    response: [
      `What it is: The browser combines layers and displays them on the screen.
      When it happens:
      Animations with transform, opacity
      Elements with will-change or position: fixed/sticky
      Important: Composite is the fastest process, because the browser simply redraws the already prepared layers without Reflow/Repaint.`
    ],
    fullResponse: '',
  },
];