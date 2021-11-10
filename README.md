## Udemy React course
  - https://www.udemy.com
  - by Shaun Pelling (Net Ninja - YT)
  - environment:
    - update node
    - vscode extensions: live server, es7 react..., material icons

17 - why state?
  - state = component data that may change over time
    - ex: todo list, a todos object that holds the array(list) of todos. i.e. data that can change.
    - ex: display element toggle, the state is a boolean this time; display or hide the element
  - Apps.js -- proves that a regular variable cannot save state:
    - because the App component is evaluated initially and displays the variable data but when onClick fires and changes the value of the variable (dev tools) but the component (template) does not know it needs to be revaluated.
