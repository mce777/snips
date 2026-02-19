One of my favorite CSS hidden gems is the use of fit-content to “shrink wrap” an element to its contents.

Whereas you may have used an inline display value such as `display: inline-block` to reduce an element’s width to the content size, an upgrade to width: fit-content will achieve the same effect. The advantage of `width: fit-content` is that it leaves the display value available, thereby not changing the position of the element in the layout unless you adjust that as well. The computed box size will adjust to the dimensions created by fit-content.

```css
.fit-content {
  width: fit-content;
}
```
