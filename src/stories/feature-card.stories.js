import FeatureCard from '../components/feature-card.vue';
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)

export default {
  title: 'Example/FeatureCard',
  component: FeatureCard,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    title: { description: 'title of the feature' },
    description: { description: 'description of the feature' },
    icon: { description: 'Material Icon' },
    color: { description: 'Color name for component from the Quasar Color Palette' },
    buttonLabel: { description: 'Label of the button' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FeatureCard },
  template: '<feature-card v-bind="$props" v-on="$listeners" />',
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'We bring technology to the people',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  color: 'blue',
  buttonLabel: 'More info...',
};

export const noButton = Template.bind({});
noButton.args = {
  title: 'We bring technology to the people',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  color: 'blue',
  noButton,
};
