<script setup lang="ts">
import TaskItem from '../TaskItem/TaskItem.vue'
import './TaskList.css'
import { TaskAction } from '../../enums/task-action.enum'
import type {TaskListProperties} from "../../interfaces/task-list-properties.interface.ts";

defineProps<TaskListProperties>()

const emit = defineEmits<{
  (event: TaskAction.TOGGLE, id: number): void
  (event: TaskAction.REMOVE, id: number): void
}>()
</script>

<template>
  <section class="task-list">
    <p v-if="tasks.length === 0" class="empty">{{ emptyMessage }}</p>
    <ul v-else>
      <TaskItem
          v-for="task in tasks"
          :key="task.id"
          v-bind="task"
          @toggle="emit(TaskAction.TOGGLE, task.id)"
          @remove="emit(TaskAction.REMOVE, task.id)"
      />
    </ul>
  </section>
</template>