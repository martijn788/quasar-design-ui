import faq from '../components/faq.vue';
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)

export default {
  title: 'ORGANISMS/faq',
  component: faq,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    title: { description: 'Title for the component' },
    description: { description: 'Description for the component' },
    questions: { description: 'Questions and answers for the FAQ' },
    noPopup: { description: 'To disable the question pop-up mode' },
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { faq },
  template: '<faq v-bind="$props" v-on="$listeners" />',
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'FAQ',
  questions: [
          {
            question: 'When can i start using it?',
            answer: 'You can use it whenever you want. However, before release version 1.0 there might be some breaking changes.',
          },
          {
            question: 'Where can I download it?',
            answer: 'You can udownload it via github, npm or yarn. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
          },
          {
            question: 'When can i start using it?',
            answer: 'You can use it whenever you want. However, before release version 1.0 there might be some breaking changes.',
          },
          {
            question: 'Where can I download it?',
            answer: 'You can udownload it via github, npm or yarn. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
          },
        ]
};
