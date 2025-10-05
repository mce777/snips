`Compiler macros` are globally available, they don't need to be imported. They are the "foundation of a TypeScript friendly VueJS experience".

Can only be used within Vue3's ```<script setup>``` block

Examples
- defineProps
- withDefaults
- defineEmits

```js
const props = defineProps<{
    limit: number;
    alertMessageOnLimit: string;
}>()
```

```js
// the interface is just for show
inferface Props {
    limit: number
    alterMessageOnLimit?: string
}

const props = withDefaults(defineProps<Props>(), {
    alertMessageOnLimit: 'cannot go any higher'
})
```

```js
const emit = defineEmits<{
    (event: 'add-count', num: number): void;
    (event: 'reset-count'): void;
}>()