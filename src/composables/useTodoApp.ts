import { ref, computed } from 'vue'
import type { TaskItemProperties } from '../interfaces/task-item-properties.interface'
import { FilterMode } from '../enums/filter-mode.enum'

export function useTodoApp() {
    const tasks = ref<TaskItemProperties[]>([])
    const filterMode = ref<FilterMode>(FilterMode.ALL)
    const pendingDeleteTask = ref<TaskItemProperties | null>(null)

    const filteredTasks = computed(() => {
        switch (filterMode.value) {
            case FilterMode.ACTIVE:
                return tasks.value.filter(t => !t.done)
            case FilterMode.DONE:
                return tasks.value.filter(t => t.done)
            default:
                return tasks.value
        }
    })

    const emptyMessage = computed(() => {
        if (filterMode.value === FilterMode.DONE) return 'Немає виконаних задач.'
        if (filterMode.value === FilterMode.ACTIVE) return 'Немає активних задач.'
        return 'Список порожній. Додайте першу задачу.'
    })

    const modalTitle = computed(() =>
        pendingDeleteTask.value ? `Видалити "${pendingDeleteTask.value.text}"?` : ''
    )

    const addTask = (text: string) => {
        tasks.value.unshift({
            id: Date.now(),
            text,
            done: false
        })
    }

    const toggleTask = (id: number) => {
        const task = tasks.value.find(t => t.id === id)
        if (task) task.done = !task.done
    }

    const removeTask = (id: number) => {
        tasks.value = tasks.value.filter(t => t.id !== id)
    }

    const requestDelete = (id: number) => {
        const task = tasks.value.find(t => t.id === id) ?? null
        if (!task || task.done) return
        pendingDeleteTask.value = task
    }

    const confirmDelete = () => {
        if (pendingDeleteTask.value) {
            removeTask(pendingDeleteTask.value.id)
            pendingDeleteTask.value = null
        }
    }

    const cancelDelete = () => {
        pendingDeleteTask.value = null
    }

    return {
        filterMode,
        filteredTasks,
        emptyMessage,
        pendingDeleteTask,
        modalTitle,
        addTask,
        toggleTask,
        requestDelete,
        confirmDelete,
        cancelDelete
    }
}