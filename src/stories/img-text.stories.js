import ImgText from '../components/img-text.vue';
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import Image from './assets/img1.jpg';

Vue.use(VueCompositionApi)

export default {
  title: 'ORGANISMS/ImgText',
  component: ImgText,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    img: { description: 'Image'},
    color: { description: 'Color for component from the Quasar Color Palette'},
    title: { description: 'Title for the component'},
    description: { description: 'Description for the component'},
    featureTitle: { description: 'Title for the features, hidden if none'},
    features: { description: 'Features, hidden if none'},
    buttonLabel: { description: 'Label for the button, hidden if none'},
    reverse: { description: 'Switch image and text'},
    textRight: { description: 'Align text to right'},
    click: { description: 'When the button is clicked' }
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ImgText },
  template: '<img-text v-bind="$props" v-on="$listeners" />',
});

export const primary = Template.bind({});
primary.args = {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  img: Image,
  featureTitle: 'Why you should try it:',
  features: ['Easy to use', 'Free to use', 'Easy to change'],
  buttonLabel: 'Try it out!'
};
