## Udemy React course
  - https://www.udemy.com
  - by Shaun Pelling (Net Ninja - YT)
  - environment:
    - update node
    - vscode extensions: live server, es7 react..., material icons

13 - project structure
  - /node_moduels -- we know what this is
  - /public -- any files made public to the browser 
    - /public/index.html -- this where id="root" resides
  - /src -- most (99%) of the dev; components, content, etc. will go here
    - /src/App.js -- contains the App component, more later
    - /src/App.css -- uses to style the App component 
    - /src/indes.css -- kind of a global style sheet
    - /src/setupTest.js and /src/App.test.js and - /src/reportWebVitals.js -- not used; deleted 
    - /src/index.js -- kickstarts the app 
      - conatains the `document.getElementById('root')`; see /public/index.html above. 
      - Imports the App.js file. 
      - Removed (commented) import and function for 'reportWebVitals'
      - contains `ReactDOM.render` method; args: what component to inject, where to render it
        - `<React.StrictMode>` built-in component -- performs aditional error checking.
  - remaining files: we know about

