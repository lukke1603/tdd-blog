import type { VueWrapper } from '@vue/test-utils';
import { mount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { global } from './setup';

import UserForm from '../UserForm.vue';

describe('UserForm', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(UserForm, {
      global
    });
  });

  afterEach(() => {

  })

  const getFirstname = (wrapper: VueWrapper) => wrapper.find('[data-test=firstname]');
  const getLastname = (wrapper: VueWrapper) => wrapper.find('[data-test=lastname]');
  const getNickname = (wrapper: VueWrapper) => wrapper.find('[data-test=nickname]');
  const getDob = (wrapper: VueWrapper) => wrapper.find('[data-test=dob]');
  const getEmail = (wrapper: VueWrapper) => wrapper.find('[data-test=email]');
    
  it('should emit save event if form was submitted', () => {
    getFirstname(wrapper).find('input').setValue('Robert');
    getLastname(wrapper).find('input').setValue('Martin');
    getNickname(wrapper).find('input').setValue('Uncle Bob');
    getDob(wrapper).find('input').setValue('1952-12-05');
    getEmail(wrapper).find('input').setValue('robert@unclebob.com');

    wrapper.find('[data-test=user-save-btn]').trigger('click');

    expect(wrapper.emitted('save')?.[0]?.[0]).toEqual({
      firstname: 'Robert',
      lastname: 'Martin',
      nickname: 'Uncle Bob',
      dob: '1952-12-05',
      email: 'robert@unclebob.com'
    });
  });
});