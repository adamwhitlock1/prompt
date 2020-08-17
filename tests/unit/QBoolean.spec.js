import { shallowMount, createLocalVue } from '@vue/test-utils';
import QBoolean from '@/components/QBoolean.vue';
import { single } from '../data/QBooleanTestData';
import { findByTestId } from '../findByTestId';

import uuid from '@/utils/uuid';
jest.mock('@/utils/uuid');
uuid.mockReturnValue('mock-uuid');

const localVue = createLocalVue();

describe('QBoolean.vue', () => {
  it('renders default labels when options empty', () => {
    const wrapper = shallowMount(QBoolean, {
      localVue,
      propsData: {
        title: single.title,
        options: {}
      }
    });
    const title = findByTestId(wrapper, 'b-title');
    expect(title.text()).toMatch(single.title);

    const labelTrue = findByTestId(wrapper, 'b-label-true');
    expect(labelTrue.text()).toMatch('True');

    const labelFalse = findByTestId(wrapper, 'b-label-false');
    expect(labelFalse.text()).toMatch('False');
  });

  it('renders props when passed', () => {
    const wrapper = shallowMount(QBoolean, {
      localVue,
      propsData: {
        title: single.title,
        options: single.options
      }
    });
    const title = findByTestId(wrapper, 'b-title');
    expect(title.text()).toMatch(single.title);

    const yes = findByTestId(wrapper, 'b-label-true');
    expect(yes.text()).toMatch(single.options.labelTrue);

    const no = findByTestId(wrapper, 'b-label-false');
    expect(no.text()).toMatch(single.options.labelFalse);
  });

  it('emits event on True selection', async () => {
    const wrapper = shallowMount(QBoolean, {
      localVue,
      propsData: {
        title: single.title,
        options: single.options
      }
    });

    const input = findByTestId(wrapper, 'b-input-true');
    input.trigger('click');
    await localVue.nextTick();
    expect(wrapper.emitted().changed).toBeTruthy();
    expect(wrapper.emitted().changed[0]).toStrictEqual([true]);
  });

  it('emits event on False selection', async () => {
    const wrapper = shallowMount(QBoolean, {
      localVue,
      propsData: {
        title: single.title,
        options: single.options
      }
    });

    const input = findByTestId(wrapper, 'b-input-false');
    input.trigger('click');
    await localVue.nextTick();
    expect(wrapper.emitted().changed).toBeTruthy();
    expect(wrapper.emitted().changed[0]).toStrictEqual([false]);
  });
});
