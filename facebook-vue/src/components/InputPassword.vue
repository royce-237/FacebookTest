<template>
  <div>

    <div class=" w-10/12 mx-auto">
      <input
      data-testid="password" type="password" :value="props.modelValue" @input="updateValue" :placeholder="$t('enterPassword')"
      class="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-sky-600"
      :class="{ 'border-red-500': errors.length }"/>

      <p v-for="error in errors" :key="error">
        <span v-if="error.$message" class="text-red-500 text-sm mt-1 text-left">
          {{ $t("passwordError") }}
        </span>
      </p>
    </div>
    

  </div>
</template>

<script setup lang="ts">


const props = defineProps({
  modelValue: { type: String, required: true },
  errors: { type: Object, default: () => ({}) }
});

const emits = defineEmits(['update:modelValue']);


const updateValue = (event : Event) => emits('update:modelValue', (event.target as HTMLInputElement).value)


</script>

<style scoped>
</style>
