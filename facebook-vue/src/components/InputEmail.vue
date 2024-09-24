<template>
  <div>
    <div>
      <div class=" w-10/12 mx-auto">
        <input type="email" :value="props.modelValue" @input="updateValue" :placeholder="$t('enterMail')" ref="input" 
        class="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-sky-600"
        :class="{ 'border-red-500': errors.length }"/>
          
        <span v-for="error in errors" :key="error">
          <span
            v-if="error.$message" class="text-red-500 text-sm mt-1 text-left">
            {{ $t('email') }}
          </span>
        </span>
      </div>
    </div>

      
      
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';


const props = defineProps({
  modelValue: { type: String, required: true },

  errors: { type: Object, default: () => ({}) }
});
  const input = ref<HTMLInputElement | null>(null);

  onMounted(() => {
    input.value?.focus();
  });

  const emits = defineEmits(['update:modelValue']);

  const updateValue = (event : Event) => emits('update:modelValue',(event.target as HTMLInputElement).value)
  
</script>

<style scoped>
/* Ajoutez un style spécifique si nécessaire */
</style>