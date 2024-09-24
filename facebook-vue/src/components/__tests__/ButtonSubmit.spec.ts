import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import ButtonSubmit from '@/components/ButtonSubmit.vue';

describe('ButtonSubmit.vue', () => {
  it('should emit click event when button is clicked', async () => {
    const wrapper = mount(ButtonSubmit);
    const button = wrapper.find('button');
    
    await button.trigger('click');

    expect(wrapper.emitted()).toHaveProperty('click');
  });
});
