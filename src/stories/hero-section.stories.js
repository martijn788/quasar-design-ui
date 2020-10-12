import heroSection from '../components/hero-section.vue';
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import heroSectionImage from './assets/hero-section-bg.jpg';

Vue.use(VueCompositionApi)

export default {
  title: 'Example/HeroSection',
  component: heroSection,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    buttonColor: { control: 'text', description: 'Color name for component from the Quasar Color Palette' },
    buttonLabel: { control: 'text', description: 'Label of the button' },
    title: { control: 'text', description: 'Title of the section' },
    description: { control: 'text', description: 'Description' },
    backgroundImage: { control: 'text', description: 'Image background (linear-gradient or img)' },
    backgroundColor: { control: 'color', description: 'Background-color, note that image will be disabled' },
    textColor: { control: 'color', description: 'font-color' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { heroSection },
  template: '<hero-section v-bind="$props" v-on="$listeners" />',
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'We bring technology to the people',
  description: 'The design system comes with four pre-built pages to help you get started faster. You can change the text and images and you\'re good to go.',
  buttonLabel: 'More info...',
  buttonColor: 'primary'
};
export const imgBackground = Template.bind({});
imgBackground.args = {
  title: 'We bring technology to the people',
  description: 'The design system comes with four pre-built pages to help you get started faster. You can change the text and images and you\'re good to go.',
  buttonLabel: 'More info...',
  buttonColor: 'primary',
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  backgroundImage: `url(${heroSectionImage})`,
};
export const colorBackground = Template.bind({});
colorBackground.args = {
  title: 'We bring technology to the people',
  description: 'The design system comes with four pre-built pages to help you get started faster. You can change the text and images and you\'re good to go.',
  buttonLabel: 'More info...',
  buttonColor: 'primary',
  backgroundColor: 'blue'
};
export const gradientBackground = Template.bind({});
gradientBackground.args = {
  title: 'We bring technology to the people',
  description: 'The design system comes with four pre-built pages to help you get started faster. You can change the text and images and you\'re good to go.',
  buttonLabel: 'More info...',
  buttonColor: 'primary',
  backgroundImage: 'linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)'
};
