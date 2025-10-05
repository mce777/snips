### Mocking in Jest

#### example of mocking away composables
```ts
jest.mock('~/composables/useI18n', () => {
    return {
        useI18n: () => {
            return { $t: jest.fn(), $d: jest.fn(), $n: jest.fn() }
        }
    }
})
```
```ts
// same same but different
jest.mock('~/composables/useI18n', () => ({
    useI18n: () => ({
        $t: (key: string) => key,
        $d: (d: string) => d,
        $n: (n: string) => n,
    })
}))
```

```ts
// same same but different
jest.mock('~/composables/useI18n', () => ({
    useI18n: () => ({
        $t: (key: string) => key,
        $d: (date: Date) => 
            new Date(date).toLocaleDateString('de-DE', {
                weekday: 'long',
                year: 'numeric',
                month: '2-digit',
                day: 'numeric',
            })
    })
}))
```

```ts
jest.mock('~/composables/useApiServices', () => {
    return {
        useApiServices: () => {
            return {
                authService: {
                    login: jest.fn(),
                    logout: jest.fn(),
                    doSomethingFunny: jest.fn(),
                },
                fancyService: jest.fn(),
            }
        }
    }
})
```