import heroSection from '../components/hero-section.vue';

export default {
  title: 'Example/HeroSection',
  component: heroSection,
  argTypes: {
    buttonColor: { control: 'text', description: 'Color of the action-button' },
    buttonLabel: { control: 'text', description: 'Label of the button' },
    title: { control: 'text', description: 'Title of the section' },
    description: { control: 'text', description: 'Description' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { heroSection },
  template: '<hero-section v-bind="$props" />',
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'We bring technology to the people',
  description: 'The design system comes with four pre-built pages to help you get started faster. You can change the text and images and you\'re good to go.',
  buttonLabel: 'More info...',
  buttonColor: 'primary'
};
