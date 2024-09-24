<template>
    <div>
        <div class="mx-auto w-10/12">
            <input type="submit" class=" bg-blue-700 w-full font-bold py-2 text-lg text-white mb-3 cursor-pointer rounded-xl" 
            :value="label">
        </div>
        
    </div>
</template>
<script setup lang="ts">
    const props = defineProps({
        label :{ 
            type: String,
            default:'Login'

        }
    })
</script>

<style scoped>

</style>