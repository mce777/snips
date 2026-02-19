```css
button:has(.icon) {
  gap: 1ch;
}

.card:has(img) {
  grid-auto-flow: row;
}

form:has(:user-invalid) .error {
    display: block;
}
```
