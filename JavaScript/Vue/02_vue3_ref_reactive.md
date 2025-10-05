## Key Points
- reactive() only takes objects, NOT JS primitives (String, Boolean, Number, BigInt, Symbol, null, undefined)
- ref() is calling reactive() behind the scenes
- Since reactive() works for objects and ref() calls reactive(), objects work for both
-BUT, ref() has a .value property for reassigning, reactive() does not have this and therefore CANNOT be reassigned

## Use
ref() when..

- it's a primitive (for example 'string', true, 23, etc)
- it's an object you need to later reassign (like an array - more info here)

reactive() when..

- it's an object you don't need to reassign, and you want to avoid the overhead of ref()

## In Summary
ref() seems like the way to go since it supports all object types and allows reassigning with .value. ref() is a good place to start, but as you get used to the API, know that reactive() has less overhead, and you may find it better meets your needs.

### ref() Use-Case
You'll always use ref() for primitives, but ref() is good for objects that need to be reassigned, like an array.

```
setup() {
    const blogPosts = ref([]);
    return { blogPosts };
}
getBlogPosts() {
    this.blogPosts.value = await fetchBlogPosts();
}
The above with reactive() would require reassigning a property instead of the whole object.

setup() {
    const blog = reactive({ posts: [] });
    return { blog };
}
getBlogPosts() {
    this.blog.posts = await fetchBlogPosts();
}
```

reactive() Use-Case
A good use-case for reactive() is a group of primitives that belong together:

```
const person = reactive({
  name: 'Albert',
  age: 30,
  isNinja: true,
});
```

the code above feels more logical than

```
const name = ref('Albert');
const age = ref(30);
const isNinja = ref(true);
```

### Useful Links
If you're still lost, this simple guide helped me: https://www.danvega.dev/blog/2020/02/12/vue3-ref-vs-reactive/

An argument for only ever using ref(): https://dev.to/ycmjason/thought-on-vue-3-composition-api-reactive-considered-harmful-j8c

The decision-making behind why reactive() and ref() exist as they do and other great information, the Vue Composition API RFC: https://vue-composition-api-rfc.netlify.app/#overhead-of-introducing-refs

https://stackoverflow.com/questions/61452458/ref-vs-reactive-in-vue-3