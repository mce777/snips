Component --> onClick => dispatch(actionName())

--> actionName() { ... } --> Reducer --> ändert den State

Within the Component, 'connect' then connects the Component to the state
If the connected state changes, the Component rerenders
