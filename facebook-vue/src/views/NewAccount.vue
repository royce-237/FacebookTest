<template>
  <div class="w-full max-w-md mx-auto mt-8 flex flex-col items-center justify-center">
    
      <ButtonBack/>

    <h2 class="text-center text-xl font-bold mb-6">{{ $t('EnterInformations') }}</h2>
  
    <form @submit.prevent="addUser" class="flex flex-col space-y-4 w-11/12 shadow-xl rounded-lg p-4 items-center">

      <div>
        <input id="" v-model="firstName" type="text" class="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:border-sky-600"/>
        <span v-if="v$.firstName.$error" class="text-red-500">
          <span v-if="v$.firstName.required.$invalid">{{ $t('FirstName') }}</span>
        </span>
      </div>
  
      <div>
        <input id="lastName" v-model="lastName" type="text" class="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-sky-600"/>
        <span v-if="v$.lastName.$error" class="text-red-500">
          <span v-if="v$.lastName.required.$invalid">{{ $t('LastName') }}</span>
        </span>
      </div>
  
      <div>
        <input id="email" v-model="email" type="email" class="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-sky-600"/>
        <span v-if="v$.email.$error" class="text-red-500">
          <span v-if="v$.email.required.$invalid">{{ $t('email') }}</span>
          <span v-if="v$.email.email.$invalid">{{ $t('format') }}</span>
        </span>
      </div>
  
      <div>
        <input id="birthYear" v-model="birthYear" type="date" class="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-sky-600"/>
        <span v-if="v$.birthYear.$error" class="text-red-500">
          <span v-if="v$.birthYear.required.$invalid">Year of birth is required.</span>
        </span>
      </div>
  
      <div>
        <input id="password" v-model="password" type="password" class="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:border-sky-600"/>
        <span v-if="v$.password.$error" class="text-red-500">
          <span v-if="v$.password.required.$invalid">{{ $t("passwordError") }}</span>
          <span v-if="v$.password.minLength.$invalid">{{ $t('passwordLength') }}</span>
        </span>
      </div>
  
      <div>
        <input id="confirmPassword" v-model="confirmPassword" type="password" class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-sky-600"/>
        <span v-if="v$.confirmPassword.$error" class="text-red-500">
          <span v-if="v$.confirmPassword.sameAsPassword.$invalid">Passwords do not match.</span>
        </span>
      </div>
  
      <button type="submit" class="w-8/12 bg-green-500 py-4 rounded-xl hover:bg-green-600 text-white p-2 mx-auto">
        Register
      </button>
    </form>
  </div>
</template>
  
<script setup lang="ts">
  import { ref } from 'vue';
  import { useVuelidate } from '@vuelidate/core';
  import { required, email as emailValidator, minLength, sameAs, minValue } from '@vuelidate/validators';
  import ButtonBack from '@/components/ButtonBack.vue';

  
    
      const firstName = ref<string>('');
      const lastName = ref<string>('');
      const email = ref<string>('');
      const birthYear = ref<number | null>(null);
      const password = ref<string>('');
      const confirmPassword = ref<string>('');
    
        
      const rules = {
        firstName: { required },
        lastName: { required },
        email: { required, email: emailValidator },
        birthYear: { required },
        password: {
          required,
          minLength: minLength(6),
          hasSymbol: (value:string) => /[!@#$%^&*(),.?":{}|<>]/.test(value)
        },
        confirmPassword: { sameAsPassword: sameAs(password) },
      };
    
      const v$ = useVuelidate(rules, { firstName, lastName, email, birthYear, password, confirmPassword });
    
        
      const addUser = () => {
        v$.value.$touch();

        if (!v$.value.$invalid) {
          const isExistEmail = localStorage.getItem('registrationData');

          const formData = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            birthYear: birthYear.value,
            password: password.value,
          };

          if (isExistEmail) {
            const parsedData = JSON.parse(isExistEmail);

            if (parsedData.email === formData.email) {
              alert('Ce compte existe déjà. Veuillez utiliser un autre email.');
              return;
            }
          }

          localStorage.setItem('registrationData', JSON.stringify(formData));
          alert('Inscription réussie !');
        } else {
          alert('Veuillez corriger les erreurs dans le formulaire.');
        }
      };
</script>
  
<style scoped>
</style>
  