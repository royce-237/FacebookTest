<template>
    <div>
        <router-link to="/">
            <ButtonBack/>
        </router-link>

        <form class=" flex flex-col items-center mt-8 bg-white rounded-md shadow-xl p-4">
            <h2 class="text-2xl my-3">{{ $t('passwordForgot') }}</h2>

            <label class=" text-lg m-3">Enter your mail to receive a message</label>

            <InputEmail class="text-center text-sm w-full p-2 mb-3"/>

            <ButtonSubmit class="w-full text-center p-1 text-sm"/>
        </form>
        
        

    </div>
</template>

<script>
import ButtonBack from '@/components/ButtonBack.vue';
import ButtonSubmit from '@/components/ButtonSubmit.vue';
import InputEmail from '@/components/InputEmail.vue';

    export default {
        name:'password',

        components:{
            ButtonSubmit,
            InputEmail,
            ButtonBack
        }
        
    }
</script>

<style scoped>

</style>