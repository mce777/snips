-> Component -> onClick => dispatch(actionName())


actionName() { ... } -> Reducer -> ändert den State

'connect' connects the Component to the state
If the connected state changes, the Component rerenders
