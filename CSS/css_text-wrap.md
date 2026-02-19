One of the newest properties (as of 2023) is text-wrap, which has two values that solve the type-setting problem of unbalanced lines. This includes preventing “orphans,” which describes a lonely word sitting by itself in the last text line.

```css
:is(h1, h2, h3, h4, .text-balance) {
  text-wrap: balance;

  /* For demonstration */
  max-inline-size: 25ch;
}
```

The other value of pretty specifically addresses preventing orphans and can be more broadly applied. The algorithm behind pretty will evaluate the last four lines in a text block to work out adjustments as needed to ensure the last line has two or more words.
```css
p {
  text-wrap: pretty;

  /* For demonstration */
  max-inline-size: 35ch;
}
```
