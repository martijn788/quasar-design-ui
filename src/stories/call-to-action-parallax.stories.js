import CallToAction from '../components/call-to-action.vue';
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import parallaxImage from './assets/parallax.jpg';

Vue.use(VueCompositionApi)

export default {
  title: 'ORGANISMS/CallToActionParallax',
  component: CallToAction,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    color: { description: 'Background-color of the call to action'},
    img: { description: 'Background-image of the call to action'},
    gradient: { description: 'Background-gradient of the call to action'},
    title: { description: 'Title of the call to action' },
    buttonLabel: { description: 'Label of the button' },
    buttonColor: { description: 'Color of the button' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CallToAction },
  template: '<call-to-action v-bind="$props" v-on="$listeners" />',
});

export const imgParallax = Template.bind({});
imgParallax.args = {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  img: parallaxImage,
};

export const Color = Template.bind({});
Color.args = {
  color: 'blue'
};

export const Gradient = Template.bind({});
Gradient.args = {
  gradient: 'linear-gradient(to right, #30cfd0 0%, #330867 100%)',
  buttonColor: 'black'
};
