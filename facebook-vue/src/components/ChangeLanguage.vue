<template>
  <div class="relative">
    <Listbox v-model="selectedLanguage">

      <ListboxButton class="w-full py-3 px-4 border border-gray-300 rounded-md font-semibold flex items-center">
        <LanguageIcon class=" w-6"/>
        <ChevronDownIcon class="w-3"/>
      </ListboxButton>


      <ListboxOptions class=" absolute mt-1 w-full border border-gray-300 rounded-md z-10">

        <ListboxOption v-for="language in languages" :key="language.id" :value="language" class="cursor-pointer hover:bg-gray-200 py-1">

          {{ language.name }}

        </ListboxOption>

      </ListboxOptions>

    </Listbox>
  </div>
</template>

<script setup lang="ts">

import { ref, watch } from 'vue'
import {Listbox, ListboxButton, ListboxOptions, ListboxOption} from '@headlessui/vue'
import { useI18n } from 'vue-i18n'
import { ChevronDownIcon, LanguageIcon } from '@heroicons/vue/24/outline';



const { locale } = useI18n()

const languages = [
  { id: 1, name: 'English', code: 'en' },
  { id: 2, name: 'Français', code: 'fr' }
]

const selectedLanguage = ref(languages[0])

watch(selectedLanguage, (newLanguage) => {
  locale.value = newLanguage.code
})
</script>

<style scoped>
/* Styles pour personnaliser si nécessaire */
</style>
