import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import InputEmail from "../InputEmail.vue";
import { i18n } from "@/main";
import router from "@/router";


describe('InputEmail.vue', () =>{

    it('Check if the email is render correctly', async() => {
        const wrapper = mount(InputEmail, {
            global:{
                plugins:[router, i18n]
            },

            props:{
                modelValue:''
            }
        });

        await wrapper.find('input[type="email"]').setValue('royce@gmail.com');

        const errorMessage = wrapper.find('span.text-red-500');
    
        expect(errorMessage.exists()).toBe(false);
    });

    it('Check if errors show when email is empty', async () => {
        const wrapper = mount(InputEmail, {
          global: {
            plugins: [router, i18n],
          },
          props: {
            modelValue: '',
            errors: [ { $message: 'Email is required' } ],
          },
        });
      
        await wrapper.find('input[type="email"]').setValue('');
      
        const errorMessage = wrapper.find('span.text-red-500');
        
        expect(errorMessage.exists()).toBe(true);
      });
})