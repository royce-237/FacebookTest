import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import router from '@/router'
import NewAccount from '@/views/NewAccount.vue'
import { i18n } from '@/main'

describe('NewAccount.vue', () => {
  it('should display validation errors if form is invalid', async () => {
    const wrapper = mount(NewAccount, {
      global: {
        plugins: [router, i18n],
      }
    })

 
    await wrapper.find('button[type="submit"]').trigger('submit.prevent')

    
    expect(wrapper.findAll('.text-red-500').length).toBeGreaterThan(0)
  })

  it('should store valid form data in localStorage', async () => {
    const wrapper = mount(NewAccount, {
      global: {
        plugins: [router, i18n],
      }
    })

    await wrapper.find('input[type="text"]').setValue('royce')
    await wrapper.find('input[id="lastName"]').setValue('noubis')
    await wrapper.find('input[type="email"]').setValue('roycenoubis@gmail.com')
    await wrapper.find('input[id="birthYear"]').setValue('2001-01-01')
    await wrapper.find('input[id="password"]').setValue('Pass123!')
    await wrapper.find('input[id="confirmPassword"]').setValue('Pass123!')


    await wrapper.find('button[type="submit"]').trigger('submit.prevent')


    const savedData = JSON.parse(localStorage.getItem('registrationData') || '{}')
    expect(savedData.firstName).toBe('royce')
    expect(savedData.lastName).toBe('noubis')
    expect(savedData.email).toBe('roycenoubis@gmail.com')
  })
})
