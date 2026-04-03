<script setup lang="ts">
import './ConfirmModal.css'
import BaseButton from "../BaseButton/BaseButton.vue"
import { ConfirmModalAction } from '../../enums/confirm-modal-action.enum'
import type {ConfirmModalProperties} from "../../interfaces/confirm-modal-properties.interface.ts";

defineProps<ConfirmModalProperties>()

const emit = defineEmits<{
  (event: ConfirmModalAction.CONFIRM): void
  (event: ConfirmModalAction.CANCEL): void
}>()
</script>

<template>
  <div class="modal-backdrop" @click.self="emit(ConfirmModalAction.CANCEL)">
    <div class="modal">
      <h2 class="modal-title">{{ title }}</h2>
      <p class="modal-text">{{ description }}</p>
      <div class="modal-actions">
        <BaseButton
            variant="secondary"
            :disabled="false"
            :is-done="false"
            type="button"
            @click="emit(ConfirmModalAction.CANCEL)"
        >
          {{ cancelText }}
        </BaseButton>

        <BaseButton
            variant="primary"
            :disabled="false"
            :is-done="false"
            type="button"
            @click="emit(ConfirmModalAction.CONFIRM)"
        >
          {{ confirmText }}
        </BaseButton>
      </div>
    </div>
  </div>
</template>