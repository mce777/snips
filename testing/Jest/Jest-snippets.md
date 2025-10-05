Jest
```js
// exists
expect(await screen.getByText('Informationen zum Vorversicherer')).toBeInTheDocument()
expect(await screen.queryByTestId('vwb-date-picker')).toBeInTheDocument()

// does not exist
expect(await screen.queryByText('Informationen zum anderen Versicherer')).toBeNull()
expect(await screen.queryByTestId('vwb-date-picker')).toBeNull()

// events
await fireEvent.click(await screen.findByTestId('reason-payload-input'))

// various tricks
await wait(100) // sometimes with a select or event trigger, jest needs a moment
```