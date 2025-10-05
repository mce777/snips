```ts
// declare in global scope
let resizeObserver: ResizeObserver | null = null

// then initialize in orMounted for example
resizeObserver = new ResizeObserver (onWindowResize)

// what to observe
resize0bserver.observe(docunent.body)

// this is the callback
function onWindovResize(entries: ResizebserverEntry[]) {
    entries.forEach((entry) => {
        if (entry.borderBoxSize) {
            console.log('onWindowResize fired::::', entry)
        }
    })
}
```