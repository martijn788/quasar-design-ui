import LoginScreen from '../components/login-screen.vue'
import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)

export default {
  title: 'ORGANISMS/LoginScreen',
  component: LoginScreen,
  parameters: { actions: { argTypesRegex: '^on.*' } },
  argTypes: {
    title: { control: 'text', description: 'Title of the section' },
    subtitle: { control: 'text', description: 'Subtitle' },
    loginTitle: { control: 'text', description: 'title of the login-form' },
    usernameLabel: { control: 'text', description: 'Label of the username input' },
    passwordLabel: { control: 'text', description: 'Label of the password input' },
    loginLabel: { control: 'text', description: 'Label of the login button' },
    loginColor: { control: 'text', description: 'Color of the login button' },
    registerLabel: { control: 'text', description: 'Label of the register button' },
    registerColor: { control: 'text', description: 'Color of the register button' },
    rememberLabel: { control: 'text', description: 'Label of the remember checkbox' },
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
