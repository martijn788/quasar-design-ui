import FormScreen from '../components/form-screen.vue'
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)

export default {
  title: 'MOLECULES/FormScreen',
  component: FormScreen,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    title: { control: 'text', description: 'Title of the section' },
    subtitle: { control: 'text', description: 'Subtitle' },
    logo: {
      control: 'text',
      description: 'Location of the image'
    },
    background: {
      control: 'color',
      description: 'Background-color'
    },
  }
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { FormScreen },
  template: '<form-screen v-bind="$props" v-on="$listeners" />'
})

export const Primary = Template.bind({})
Primary.args = {
  title: 'We bring technology to the people',
  subtitle:
    "The design system comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go.",
  logoPath: 'https://cdn.quasar.dev/logo/svg/quasar-logo.svg'
}
