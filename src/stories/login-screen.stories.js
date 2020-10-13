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
    // route: { control: 'text', description: 'Route of the logo' }
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
// export const imgBackground = Template.bind({})
// imgBackground.args = {
//   title: 'We bring technology to the people',
//   description:
//     "The design system comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go.",
//   buttonLabel: 'More info...',
//   buttonColor: 'primary',
//   // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
//   backgroundImage: `url(${heroSectionImage})`
// }
// export const colorBackground = Template.bind({})
// colorBackground.args = {
//   title: 'We bring technology to the people',
//   description:
//     "The design system comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go.",
//   buttonLabel: 'More info...',
//   buttonColor: 'primary',
//   backgroundColor: 'blue'
// }
// export const gradientBackground = Template.bind({})
// gradientBackground.args = {
//   title: 'We bring technology to the people',
//   description:
//     "The design system comes with four pre-built pages to help you get started faster. You can change the text and images and you're good to go.",
//   buttonLabel: 'More info...',
//   buttonColor: 'primary',
//   backgroundImage:
//     'linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)'
// }
