-> Component -> onClick => dispatch(actionName())


actionName() { ... } -> Reducer -> changes the state

'connect' connects the Component to the state
If the connected state changes, the Component rerenders
