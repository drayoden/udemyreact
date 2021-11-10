## Udemy React course
  - https://www.udemy.com
  - by Shaun Pelling (Net Ninja - YT)
  - environment:
    - update node
    - vscode extensions: live server, es7 react..., material icons

19 - how stat and render work
  - initial start...
    - index.js is the entry point. evaluates the App componnent (import) and returns the JSX template.
    - JSX is not readable by the browser so it needs to be compiled
      - JSX is compiled in to JS
    - react DOM (virtual DOM) is used to inject the virtual elements into the real DOM
    - when the state changes, the virtual DOM and real DOM are compared and only changes the elements in the real DOM that have changed. 