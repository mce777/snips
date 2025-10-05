For typescript to have to correct types for component properties, the generic javascript constructors are not enough, so extra information is added in the form of PropType<>. Vue uses this to infer the exact type of the property and have the correct typing for component instances. This only happens in design/build time and is discarded when the code is compiled to javascript.

The PropType<> is still useful for String, for example, if you need to narrow the type to certain typescript values:

```ts
type Color = "red" | "blue";

props: {
    color: {
        type: String as PropType<Color>
    }
}
```

So in runtime, Vue can validate that only strings are assigned to color property but in design time, typescript can ensure that you don't try to assign anything but "blue" or "red" strings to it.


See also:<br>
https://vuejs.org/api/utility-types

https://stackoverflow.com/questions/67188613/in-vue-3-primitive-types-like-string-whats-the-difference-if-we-use-proptype
