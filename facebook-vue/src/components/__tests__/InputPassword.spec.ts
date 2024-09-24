import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { i18n } from '../../main'
import InputPassword from "../InputPassword.vue";
import router from "@/router";
// import { nextTick } from "vue";

describe('InputPassword.vue', () => {
    it('renders the password input correctly and updates value', async () => {
      const wrapper = mount(InputPassword, {
        global:{
            plugins:[router, i18n]
        },

        props: {
          modelValue: ''
        }
      });
  
      const input = wrapper.find('input[type="password"]');
      expect(input.exists()).toBe(true);
  
      expect(input.attributes('placeholder')).toBe('Enter your password');
  
      await input.setValue('NewPassword123!');
  
    
      expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['NewPassword123!']);
    });

    
    
    
      it('shows error if the password is shorter than 6 characters', async () => {
        const wrapper = mount(InputPassword, {
          props: {
            modelValue: '',
            errors: [ { $message: 'Password is required' } ],
          },
          global: {
            plugins: [i18n],
          },
        });
    
        const input = wrapper.find('input');

        await input.setValue('123');

        const errorMessage = wrapper.find('span.text-red-500');
        
        expect(errorMessage.exists()).toBe(true);
    
        
      });
    
}); 