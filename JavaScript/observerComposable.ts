// @ts-ignore
import { onMounted, onUnmounted, nextTick } from 'vue'

export function useBestComposableInTheWorld(target, callback, options = {}) {
    const defaultOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
    }

    const intersectionObserver = new IntersectionObserver(callback, {
        ...defaultOptions,
        ...options,
    })

    onUnmounted(() => {
        intersectionObserver.disconnect()
    })

    onMounted(() => {
        // nextTick(() => {
        console.log('target:::', target)
        if (target?.value) {
            if (Array.isArray(target.value)) {
                target.value.forEach((item) => {
                    intersectionObserver.observe(item)
                })
            } else {
                intersectionObserver.observe(target.value)
            }
        }
        // })
    })
}
