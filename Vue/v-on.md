# V-ON

attaches an event listener to an event

v-on is great for binding to events like click and mouseenter. You're able to pass in a parameter for the event like (e)

```
<button v-on:click="addToCart">
```

*shorthand*
```
<button @click="addToCart">
```

**Other**<br />
- click<br />
- keyup<br />
- keydown<br />
- submit


@mousemove.stop is comparable to e.stopPropagation()
@mousemove.prevent this is like e.preventDefault()
@submit.prevent this will no longer reload the page on submission
@click.once not to be confused with v-once, this click event will be triggered once.
@click.native so that you can listen to native events in the DOM
