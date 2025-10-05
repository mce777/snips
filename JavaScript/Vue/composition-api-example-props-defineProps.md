```ts
// this works fine (only accessing props in the template)
defineProps<{
  data: ContentBlockAppTeaser
}>()
```

```ts
// this works fine (only accessing props in the template)
withDefaults(defineProps<ToggleButtonProps>(), {
  disabled: false,
  checked: false,
  colorWhite: false,
})
```

```ts
// props in script tag and template
const props = withDefaults(defineProps<Props>(), {
  width: '30',
  withDismiss: false,
  logoWithSlogan: true,
  heading: '',
})
```

```ts
interface Props {
  data: Card | undefined
}

// some nice destructuring
const {data} = defineProps<Props>()

// or like this
const props = defineProps<{
  data: Props
}>()
```

```ts
interface BreadcrumbProps {
  entries: BreadcrumbEntry[]
}

const props = defineProps<BreadcrumbProps>()
```

```ts
const props = defineProps<{ bundle: Bundle | undefined }>()
```

```ts
// this is flexible, but you're using Vue's "runtime declaration"
// with "compile time declaration" you're using more 'pure' TypeScript, if that's important to you
// see: https://vuejs.org/guide/typescript/composition-api.html
// A 'gotcha' is PropType (which needs to be imported from 'Vue') for more complex types
// Interestingly, AIs suggest this syntax first sometimes (?)
import { PropType } from 'vue'

const props = defineProps({
  data: {
    required: true,
    type: Object as PropType<ContentBlockBecomePartner>
  },
  showModal: {
    type: Boolean,
    default: false
  },
  showFailModal: {
    type: Boolean,
    default: false
  }
})
```