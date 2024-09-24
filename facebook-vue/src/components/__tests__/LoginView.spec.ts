import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import { i18n } from '../../main';
import router from '@/router';
import LoginView from "@/views/LoginView.vue";

describe('LoginView form validation', () => {

  it('renders the title Facebook', () => {
    const wrapper = mount(LoginView, {
      global: {
        plugins: [i18n],
        
      }
    })
    expect(wrapper.find('h2').text()).toBe('Facebook')
  })


  it('shows error when the form is not correctly filled', async() =>{
    const wrapper = mount(LoginView,{
      global:{
        plugins:[i18n]
      }
    });

    await wrapper.find('input[type="email"]').setValue('invalid-email');
    await wrapper.find('input[type="password"]').setValue('short12');

    await wrapper.find('form').trigger('submit.prevent');

    const errorMessage = wrapper.find('.text-red-500');

    expect(errorMessage.exists()).toBe(true);
  })


  it('submits successfully with valid informations and redirect to loginSuccess', async () => {
    const wrapper = mount(LoginView, {
      global: {
        plugins: [i18n, router],
      },
    });

    await wrapper.find('input[type="email"]').setValue('valid@example.com');

    await wrapper.find('input[type="password"]').setValue('ValidPassword123!');

    await wrapper.find('form').trigger('submit.prevent');

    const errorMessage = wrapper.find('span.text-red-500');
    
    expect(errorMessage.exists()).toBe(false);

  });
});
