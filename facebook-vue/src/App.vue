<script lang="ts">
import { defineComponent } from 'vue'
import ChangeTheme from './components/ChangeTheme.vue';
import ChangeLanguage from './components/ChangeLanguage.vue';

export default defineComponent({
  name: 'App',
  components: {
    ChangeTheme,
    ChangeLanguage
  },
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-between">

    <header class=" w-screen p-3 text-center flex flex-row-reverse">
      <ChangeLanguage class=" m-2 p-1"/>
      <ChangeTheme class=""/>
    </header>


      
      <RouterView />

    
    <footer class="w-full text-gray-400 text-center p-8 bg-white border-t">
      <small>{{ $t('footer') }}</small>
    </footer>
  </div>
</template>

<style scoped>
</style>