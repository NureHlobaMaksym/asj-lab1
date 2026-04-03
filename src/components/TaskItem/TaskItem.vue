<script setup lang="ts">
import './TaskItem.css'
import type { TaskItemProperties } from '../../interfaces/task-item-properties.interface.ts'
import { TaskAction } from '../../enums/task-action.enum'
import BaseButton from "../BaseButton/BaseButton.vue"

defineProps<TaskItemProperties>()

const emit = defineEmits<{
  (event: TaskAction.TOGGLE, id: number): void
  (event: TaskAction.REMOVE, id: number): void
}>()
</script>

<template>
  <li class="task-item" :class="{ done: done }">
    <label class="check">
      <span class="box-wrap">
        <input
            type="checkbox"
            :checked="done"
            @change="emit(TaskAction.TOGGLE, id)"
        />
        <span class="box"></span>
      </span>
      <span class="text">{{ text }}</span>
    </label>
    <BaseButton
        variant="secondary"
        :disabled="done"
        :is-done="done"
        type="button"
        @click="emit(TaskAction.REMOVE, id)"
    >
      Видалити
    </BaseButton>
  </li>
</template>