```css
.you {
  .can-totally-ship-this {
    &.if-you-wanted {
      /* it's VERY MUCH like SCSS */
      
      &:is(:hover, :focus-visible) {
        /* put a bird on it */
      }
    }
  }
}

.for-theming {
  @media (prefers-color-scheme: dark) {
    /* you can nest media queries */
  }
}

/* or for theming with [data-theme="dark"] */
.button {
  background: black;
  color: white;

  /* nest and do more than just append, flip it and reverse it */
  [data-theme="dark"] & {
    background: white;
    color: black;
  }
}
```
Built-in CSS nesting became available in all major browsers in 2023. I even updated my website to remove the build process that compiled nesting away, and now I ship a smaller stylesheet! Yep, stylesheets with nesting are smaller and all the browser devtoolsProdVue3 are ready to represent it.
