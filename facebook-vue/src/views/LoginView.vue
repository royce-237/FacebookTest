<template>
    
    <div class="flex flex-col items-center w-full justify-center my-2 md:w-1/2">


      <div>
        <h2 class="text-blue-600 text-center my-2 text-4xl font-bold">Facebook</h2>
      </div>

      <form @submit.prevent="loginSubmit" class="mx- w-11/12 shadow-xl shadow-gray-500 lg:w-1/2">

        <h3 class="text-center my-4 text-2xl">{{ $t('facebook') }}</h3>

        <InputEmail v-model="email" :errors="v$.email.$errors" class="my-4"/>
        <!-- <span v-if="v$.email.$error" class="text-red-500">
          <span v-if="v$.email.required.$invalid">{{ $t('email') }}</span>
          <span v-if="v$.email.$invalid">{{ $t('format') }}</span>
        </span> -->
        

        <InputPassword v-model="password" 
          :errors = "v$.password.$errors"
          class="my-4"
        />
        <span v-if="v$.password.$error" class="flex flex-col text-red-500 justify-center" >
          <!-- <span v-if="v$.password.required.$invalid">{{ $t("passwordError") }}</span>
          <span v-if="v$.password.minLength.$invalid">{{ $t('passwordLength') }}</span> -->
          <span v-if="v$.password.hasSymbol?.$invalid">{{ $t('passwordSymbol') }}</span>
        </span>
        

        <ButtonSubmit/>

        <p v-if="error" class="text-red-500 text-center">{{ error }}</p>

        <router-link to="/password" @click.prevent="handlePasswordForget">
          <p class="text-center text-balance text-blue-700 cursor-pointer hover:underline">{{ $t('passwordForgot') }}</p>
        </router-link>

        <div class="flex justify-around items-center text-gray-400 m-4">
          <hr class="w-full">
          <p class="mx-2">{{ $t('or') }}</p>
          <hr class="w-full">
        </div>

        <router-link to="/newAccount">
          <div class="bg-green-500 py-4 rounded-xl hover:bg-green-600 w-11/12 mx-auto my-5">
            <p class=" text-white font-bold text-lg text-center">{{ $t('newAccount') }}</p>
          </div>
        </router-link>
      </form>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core';
import { required, email as emailValidator, minLength } from '@vuelidate/validators';
import InputEmail from '@/components/InputEmail.vue';
import InputPassword from '@/components/InputPassword.vue';
import ButtonSubmit from '@/components/ButtonSubmit.vue';
import ChangeLanguage from '@/components/ChangeLanguage.vue';



  const components = {
    InputEmail,
    InputPassword,
    ButtonSubmit,
    ChangeLanguage
  };
    
  const email = ref<string>('');
  const password = ref<string>('');
  const error = ref<string>('');
  const router = useRouter();

  const rules = {
    email: { required, email: emailValidator },
    password: {
      required,
      minLength: minLength(6),
      hasSymbol: (value: string) => /[!@#$%^&*(),.?":{}|<>]/.test(value),
    },
  };

  const v$ = useVuelidate(rules, { email, password });

  const passwordErrors = computed(() => {
    const errors = {
      required: v$.value.password.required.$invalid && v$.value.password.$dirty,
      minLength: v$.value.password.minLength.$invalid && v$.value.password.$dirty,
      hasSymbol: v$.value.password.hasSymbol.$invalid && v$.value.password.$dirty
    };
    console.log('passwordErrors:', errors);
    return errors;
  });

  const loginSubmit = async (): Promise<void> => {

    const isFormValid = await v$.value.$validate();
    console.log('Validation status:', v$.value)

    if (!isFormValid) {
      error.value = 'Veuillez corriger les erreurs avant de soumettre.';
      console.log('Validation échouée :', v$.value);
    } 
    else {
      error.value = '';
      
      console.log('Soumission en cours...');

      await router.push('/loginSuccess');

      console.log('Redirection vers /loginSuccess');

      console.log('Email:', email.value, 'Password:', password.value);
    }
  };

  const handlePasswordForget = () => {
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
  };

  onMounted(() => {
    email.value = localStorage.getItem('email') || '';
    password.value = localStorage.getItem('password') || '';
  });

</script>

<style scoped>

</style>
