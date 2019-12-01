# stencil-slider

This project creates a slider web component with [StencilJS](https://stenciljs.com/). It is a demo for a tutorial article in [c't Magazin](https://ct.de/), to be released in early 2020.

## Installation

See https://stenciljs.com/docs/distribution. This repository contains a `dist` folder with the production-built code ready to embed - or you can build `src` yourself.

## API

- `<simple-slider>` - custom element container for the slider element; uses Shadow DOM.
  - `show-status` - optional attribute; the slider shows a caption with the slide number indicator if set.
  - element content - `<li>` items with the content of each slider.

## About StencilJS

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool.  Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all. In many cases, Stencil can be used as a drop in replacement for traditional frontend frameworks given the capabilities now available in the browser, though using it as such is certainly not required.

Stencil also enables a number of key capabilities on top of Web Components, in particular Server Side Rendering (SSR) without the need to run a headless browser, pre-rendering, and objects-as-properties (instead of just strings).

### Getting Started

To start a new project using Stencil, clone this repo to a new directory:

```bash
npm init stencil app
```

and run:

```bash
npm start
```

To build the app for production, run:

```bash
npm run build
```

To run the unit tests once, run:

```
npm test
```

To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```
