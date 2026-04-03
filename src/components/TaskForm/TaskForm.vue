<script setup lang="ts">
import './TaskForm.css'
import BaseTextArea from '../BaseTextArea/BaseTextArea.vue'
import BaseButton from '../BaseButton/BaseButton.vue'
import TaskList from '../TaskList/TaskList.vue'
import BaseFilters from "../BaseFilters/BaseFilters.vue"
import { useTaskForm } from '../../composables/useTaskForm'
import { LENGTH_LIMITS } from '../../constants/length-limits.constants'
import { FILTER_OPTIONS } from '../../constants/filter-options.constants'
import { TaskAction } from "../../enums/task-action.enum"
import type { FilterMode } from '../../enums/filter-mode.enum'
import type { TaskFormProperties } from "../../interfaces/task-form-properties.interface"

defineProps<TaskFormProperties>()

const emit = defineEmits<{
  (event: TaskAction.ADD, value: string): void
  (event: TaskAction.UPDATE_FILTER, value: FilterMode): void
  (event: TaskAction.TOGGLE, id: number): void
  (event: TaskAction.REMOVE, id: number): void
}>()

const { value, textareaRef, onSubmit } = useTaskForm((textValue: string) => {
  emit(TaskAction.ADD, textValue)
})
</script>

<template>
  <form class="task-form" @submit.prevent="onSubmit">
    <div class="form-inputs">
      <BaseTextArea
          ref="textareaRef"
          v-model="value"
          :maxlength="LENGTH_LIMITS.MAX_TASK_LENGTH"
          placeholder="Введіть задачу"
      />
      <BaseButton
          variant="primary"
          :disabled="!value.trim()"
          :is-done="false"
          type="submit"
      >
        Додати
      </BaseButton>
    </div>

    <BaseFilters
        :model-value="filterMode"
        :options="FILTER_OPTIONS"
        @update:model-value="(val: FilterMode) => emit(TaskAction.UPDATE_FILTER, val)"
    />

    <TaskList
        :tasks="tasks"
        :empty-message="emptyMessage"
        @toggle="(id: number) => emit(TaskAction.TOGGLE, id)"
        @remove="(id: number) => emit(TaskAction.REMOVE, id)"
    />
  </form>
</template>