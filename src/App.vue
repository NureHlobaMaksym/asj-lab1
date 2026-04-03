<script setup lang="ts">
import TaskForm from './components/TaskForm/TaskForm.vue'
import ConfirmModal from './components/ConfirmModal/ConfirmModal.vue'
import { useTodoApp } from './composables/useTodoApp'
import type { FilterMode } from './enums/filter-mode.enum'

const {
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
} = useTodoApp()
</script>

<template>
  <main class="page">
    <section class="card">
      <header class="header">
        <h1>Список задач TO-DO List</h1>
      </header>

      <TaskForm
          :tasks="filteredTasks"
          :filter-mode="filterMode"
          :empty-message="emptyMessage"
          @add="addTask"
          @update:filter-mode="(val: FilterMode) => filterMode = val"
          @toggle="toggleTask"
          @remove="requestDelete"
      />
    </section>

    <ConfirmModal
        v-if="pendingDeleteTask"
        :title="modalTitle"
        description="Після видалення задачу неможливо відновити."
        confirm-text="Видалити"
        cancel-text="Скасувати"
        @confirm="confirmDelete"
        @cancel="cancelDelete"
    />
  </main>
</template>