## Single-Use Watchers
A single-use watcher is a common pattern in reactive frameworks (like Vue.js, where this code snippet originates) designed to run an effect once and then immediately clean up after itself.

```typescript
const unwatch = watch([email, password], async ([e, p]) => {
    // e and p are the new values
    if (e) {
        console.log(`Email has changed to ${e}`)
    }

    if (p) {
        console.log(`Password has changed to ${p}`)
    }
    
    // Doesn't have to be called 'unwatch'
    // but it needs to match the const name
    unwatch()
})
```
If for some reason you wanted to also take the old values into account, the first line would look like this:
```
const unwatch = watch([email, password], async ([newEmail, newPassword], [oldEmail, oldPassword]) => { ... }
```
Use cases:<br>
**Conditional Cleanup:** You might use the old value to decide if the watcher should stop. For example, only stop watching if the change went from a null value to a populated value, but not if it went from one populated value to another.

**Specific Transition Logic:** Your single-fire logic might depend on a specific state transition, like: "Only fire this cleanup function the moment the password changes from empty string to something populated."

### Immediately live/on...
When you run the code above, the watch function is called and runs immediately.

The variable name, `unwatch` in this case, _only serves to store the cleanup function that the watch call returns_. Storing the cleanup function in a variable does not delay the activation of the watcher itself. The activation happens when watch is called.
