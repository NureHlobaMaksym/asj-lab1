import { ref } from 'vue'
import type BaseTextArea from "../components/BaseTextArea/BaseTextArea.vue";

export function useTaskForm(onAdd: (text: string) => void) {
    const value = ref('')
    const textareaRef = ref<InstanceType<typeof BaseTextArea> | null>(null)

    const onSubmit = () => {
        const text = value.value.trim()
        if (!text) return

        onAdd(text)
        value.value = ''
        textareaRef.value?.reset()
    }

    return {
        value,
        textareaRef,
        onSubmit
    }
}