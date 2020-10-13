import LoginScreen from '../components/login-screen.vue'
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
// import logoImage from '../assets/quasar-logo-full.svg'

Vue.use(VueCompositionApi)

export default {
  title: 'LOGIN/LoginScreen',
  component: LoginScreen,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    title: { control: 'text', description: 'Title of the section' },
    subtitle: { control: 'text', description: 'Subtitle' },
    logoPath: {
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
  components: { LoginScreen },
  template: '<login-screen v-bind="$props" v-on="$listeners" />'
})

export const Primary = Template.bind({})
Primary.args = {
  title: 'We bring technology to the people',
  subtitle:
    "The design system comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go.",
  logoPath: 'https://cdn.quasar.dev/logo/svg/quasar-logo.svg'
}
