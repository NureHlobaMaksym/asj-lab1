<script setup lang="ts">
import './BaseTextArea.css'
import { useBaseTextarea } from '../../composables/useBaseTextarea'
import type {BaseTextAreaProperties} from "../../interfaces/base-text-area-properties.interface.ts";

const model = defineModel<string>()

defineProps<BaseTextAreaProperties>()

const { textareaRef, resize, reset } = useBaseTextarea()

defineExpose({ reset })
</script>

<template>
  <textarea
      ref="textareaRef"
      v-model="model"
      :maxlength="maxlength"
      :placeholder="placeholder"
      rows="1"
      class="base-textarea"
      autocomplete="off"
      @input="resize"
  ></textarea>
</template>