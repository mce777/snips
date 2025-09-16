The @vueuse/integrations library is an add-on to the main VueUse library. Its purpose is to provide **reactive wrappers (composables)** for popular third-party utility libraries. This allows developers to easily integrate these libraries into their Vue.js applications and leverage Vue's reactivity system without writing boilerplate code.

#### Installation
`npm i @vueuse/integrations`

The individual utilities you want need to be installed additionally:<br>
- `npm i axios@^1`
- `npm i qrcode@^1`

#### Example 1
```
// a typical API call with Axios might look like this:

import { ref } from 'vue';
import axios from 'axios';

const data = ref(null);
const loading = ref(true);
const error = ref(null);

async function fetchData() {
  try {
    const response = await axios.get('https://api.example.com/data');
    data.value = response.data;
  } catch (err) {
    error.value = err;
  } finally {
    loading.value = false;
  }
}
fetchData();
```

```
// With @vueuse/integrations, the same logic is simplified to just one line:

import { useAxios } from '@vueuse/integrations/useAxios';

const { data, isPending, error } = useAxios('https://api.example.com/data');
```

#### Example 2
```
import { useQRCode } from '@vueuse/integrations/useQRCode'

// `qrcode` will be a ref of data URL
const qrcode = useQRCode('text-to-encode')
```

#### sources
- https://vueuse.org/integrations/README
- https://vueuse.org/integrations/useQRCode/
- https://vueuse.org/integrations/useAxios/
