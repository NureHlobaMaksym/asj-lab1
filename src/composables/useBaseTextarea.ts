import { ref, onMounted, nextTick } from 'vue'

export function useBaseTextarea() {
    const textareaRef = ref<HTMLTextAreaElement | null>(null)

    const resize = () => {
        if (!textareaRef.value) return
        textareaRef.value.style.height = 'auto'
        textareaRef.value.style.height = `${textareaRef.value.scrollHeight}px`
    }

    const reset = async () => {
        await nextTick()
        if (textareaRef.value) {
            textareaRef.value.style.height = 'auto'
        }
    }

    onMounted(() => {
        resize()
    })

    return {
        textareaRef,
        resize,
        reset
    }
}