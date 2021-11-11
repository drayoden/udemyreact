## Udemy React course
  - https://www.udemy.com
  - by Shaun Pelling (Net Ninja - YT)
  - environment:
    - update node
    - vscode extensions: live server, es7 react..., material icons

20 - output lists
  - Initial run error: Warning each child in a list should have a unique "key" prop.
    - each div for each event must have unique key
    - added key but it is internal only, does not display in dev tools
    - use map method to automatically iterate the events list
    - when use the map method you get the 'index' value returned as well