import FeatureSection from '../components/feature-section.vue';
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)

export default {
  title: 'Example/FeatureSection',
  component: FeatureSection,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    features: { description: 'Content for features' },
    numberPerRow: { control: 'number', description: 'Number of features per row' },
    noHoverJump: { description: 'To disable the jump on Hover' }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FeatureSection },
  template: '<feature-section v-bind="$props" v-on="$listeners" />',
});

export const Primary = Template.bind({});
Primary.args = {
  numberPerRow: 4,
  noHoverJump: null,
  features: [
    {
      index: 1,
      title: 'Feature 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'alarm',
      color: 'red',
      buttonLabel: 'More info...'
    },
    {
      index: 2,
      title: 'Feature 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'bookmark',
      color: 'blue',
      buttonLabel: 'More info...'
    },
    {
      index: 3,
      title: 'Feature 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'code',
      color: 'green',
      buttonLabel: 'More info...'
    },
    {
      index: 4,
      title: 'Feature 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'favorite',
      color: 'black',
      buttonLabel: 'More info...'
    }
  ]
};
